import type { HTMLAttributes, ReactNode } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "success" | "error";
  children: ReactNode;
};

export function Tag({ tone = "default", className = "", children, ...props }: TagProps) {
  return (
    <span className={`tag ${tone !== "default" ? `tag--${tone}` : ""} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
