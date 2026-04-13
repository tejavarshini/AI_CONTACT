import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  hover?: boolean;
  children: ReactNode;
};

export function Card({ hover = false, className = "", children, ...props }: CardProps) {
  return (
    <section className={`card ${hover ? "is-hoverable" : ""} ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
