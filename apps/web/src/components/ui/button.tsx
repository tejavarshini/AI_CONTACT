import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost" | "danger";
export type ButtonSize = "default" | "small";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "default", className = "", children, ...props }: ButtonProps) {
  return (
    <button type={props.type ?? "button"} className={`button button--${variant} ${size === "small" ? "button--small" : ""} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
