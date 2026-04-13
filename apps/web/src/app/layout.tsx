import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { QueryProvider } from "../components/query-provider";
import "../styles/theme.css";

const body = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap"
});

const heading = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "SCIA - Smart Contact Intelligence Assistant",
  description: "Remember not only who people are, but how they can help."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
