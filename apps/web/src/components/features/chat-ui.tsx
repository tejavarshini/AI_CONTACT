"use client";

import { FormEvent, useMemo, useState } from "react";
import { semanticSearch, type SearchResult } from "../../lib/api";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ChatBubble } from "../ui/chat-bubble";
import { Input } from "../ui/input";
import { Tag } from "../ui/tag";

type ChatUIProps = {
  userId?: string;
};

type Message = { tone: "user" | "assistant"; text: string };

function formatAssistantReply(results: SearchResult[]): string {
  if (results.length === 0) {
    return "I could not find a good match yet. Try another question or add more people.";
  }

  const top = results.slice(0, 3);
  const lines = top.map((result) => {
    const why = result.reasons[0] ?? "They match your request.";
    const workplace = result.organization ? result.organization : "Not shared";
    const help = result.howCanHelp ? result.howCanHelp : "Not shared yet";
    return `- Name: ${result.name}\n  Where they work: ${workplace}\n  How they can help: ${help}\n  Why suggested: ${why}`;
  });

  return `Here are some people who can help:\n${lines.join("\n")}`;
}

export function ChatUI({ userId = "demo-user-1" }: ChatUIProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { tone: "assistant", text: "Ask who can help with internships, hiring, referrals, or anything you need." }
  ]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const suggestions = useMemo(
    () => ["Who can help with internships?", "Show people from Amazon", "Who should I reconnect with?"],
    []
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = query.trim();
    if (!trimmed || isLoading) return;

    setErrorText(null);
    setMessages((prev) => [...prev, { tone: "user", text: trimmed }]);
    setQuery("");
    setIsLoading(true);

    try {
      const results = await semanticSearch(userId, trimmed);
      const reply = formatAssistantReply(results);
      setMessages((prev) => [...prev, { tone: "assistant", text: reply }]);
    } catch {
      setErrorText("We could not reach the server. Please check that the app is running and try again.");
      setMessages((prev) => [
        ...prev,
        {
          tone: "assistant",
          text: "I had trouble connecting just now. Please try again in a moment."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function applySuggestion(prompt: string) {
    setQuery(prompt);
  }

  function clearChat() {
    setMessages([{ tone: "assistant", text: "Reset done. Ask a new question whenever you are ready." }]);
    setErrorText(null);
  }

  return (
    <Card className="chat-ui">
      <div className="stack-8">
        <div className="label">Ask for suggestions</div>
        <h3 className="chat-ui__title">Ask who can help you</h3>
      </div>
      <div className="chat-ui__messages" role="log" aria-live="polite" aria-label="Assistant conversation">
        {messages.map((message, index) => (
          <ChatBubble key={`${message.tone}-${index}`} tone={message.tone}>
            {message.text}
          </ChatBubble>
        ))}
        {isLoading ? (
          <ChatBubble tone="assistant">
            <span className="typing-dots" aria-label="Assistant is typing">
              <span />
              <span />
              <span />
            </span>
          </ChatBubble>
        ) : null}
      </div>
      <div className="stack-8">
        <div className="flex-wrap gap-8">
          {suggestions.map((item) => (
            <button key={item} type="button" className="tag tag--interactive" onClick={() => applySuggestion(item)}>
              {item}
            </button>
          ))}
          <Tag tone="success">Smart suggestions</Tag>
        </div>
        <form className="chat-ui__composer" onSubmit={handleSubmit}>
          <Input
            placeholder="Example: Who can help me with internships?"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Assistant query"
          />
          <div className="chat-ui__actions">
            <Button variant="ghost" onClick={clearChat} disabled={isLoading}>Reset</Button>
            <Button type="submit" disabled={isLoading || !query.trim()}>{isLoading ? "Thinking..." : "Ask"}</Button>
          </div>
        </form>
        {errorText ? <p className="error no-margin">{errorText}</p> : null}
      </div>
    </Card>
  );
}
