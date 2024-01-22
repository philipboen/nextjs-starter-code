import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Phoenix",
  description:
    "Next.js starter template with Tailwind CSS, TypeScript, ESLint and Shadcn UI.",
  icons: {
    icon: "/assets/icons/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} max-container p-4 font-sans`}>
        {children}
      </body>
    </html>
  );
}
