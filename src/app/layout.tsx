import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alareti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">{children}</body>
    </html>
  );
}
