import type { ReactNode } from "react";

type ChatBubbleProps = {
  tone?: "user" | "assistant";
  children: ReactNode;
};

export function ChatBubble({ tone = "assistant", children }: ChatBubbleProps) {
  return <div className={`chat-bubble chat-bubble--${tone}`}>{children}</div>;
}
