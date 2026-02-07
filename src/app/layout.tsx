import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Builder Club Northumbria | Build with AI Responsibly",
  description:
    "The official Claude Builder Club at Northumbria University. A community of builders, researchers, and creators exploring AI safety and capability with Anthropic's Claude.",
  keywords: [
    "Claude",
    "Anthropic",
    "AI",
    "Builder Club",
    "Northumbria University",
    "AI Safety",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
