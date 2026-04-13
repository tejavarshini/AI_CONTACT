import type { ReactNode } from "react";

type ToastProps = {
  tone?: "success" | "error";
  title: string;
  message?: string;
  action?: ReactNode;
};

export function Toast({ tone = "success", title, message, action }: ToastProps) {
  return (
    <div className={`toast toast--${tone}`} role="status" aria-live="polite">
      <div>
        <div className="label">{tone}</div>
        <strong>{title}</strong>
        {message ? <p className="muted mt-6 no-margin">{message}</p> : null}
      </div>
      {action}
    </div>
  );
}
