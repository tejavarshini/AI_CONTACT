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
    return "I could not find a strong match yet. Add more contacts or try a different query.";
  }

  const top = results.slice(0, 3);
  const lines = top.map((result) => {
    const reason = result.reasons[0] ?? "matched by profile similarity";
    const org = result.organization ? ` at ${result.organization}` : "";
    return `- ${result.name}${org}: ${reason}`;
  });

  return `Top matches:\n${lines.join("\n")}`;
}

export function ChatUI({ userId = "demo-user-1" }: ChatUIProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { tone: "assistant", text: "Ask me who can help with referrals, internships, hiring, or specific domains." }
  ]);
  const [errorText, setErrorText] = useState<string | null>(null);

  const suggestions = useMemo(
    () => ["Who can help with internships?", "Show contacts from Amazon", "Who needs a follow-up?"],
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
      setErrorText("Assistant could not reach the backend. Make sure API is running on port 4000.");
      setMessages((prev) => [
        ...prev,
        {
          tone: "assistant",
          text: "I hit a connection issue. Please verify backend health at /health and try again."
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
    setMessages([{ tone: "assistant", text: "Chat cleared. Ask a fresh networking question." }]);
    setErrorText(null);
  }

  return (
    <Card className="chat-ui">
      <div className="stack-8">
        <div className="label">AI Assistant</div>
        <h3 className="chat-ui__title">Conversational memory layer</h3>
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
          <Tag tone="success">semantic match</Tag>
        </div>
        <form className="chat-ui__composer" onSubmit={handleSubmit}>
          <Input
            placeholder="Ask about your contacts..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Assistant query"
          />
          <div className="chat-ui__actions">
            <Button variant="ghost" onClick={clearChat} disabled={isLoading}>Clear</Button>
            <Button type="submit" disabled={isLoading || !query.trim()}>{isLoading ? "Thinking..." : "Send"}</Button>
          </div>
        </form>
        {errorText ? <p className="error no-margin">{errorText}</p> : null}
      </div>
    </Card>
  );
}
