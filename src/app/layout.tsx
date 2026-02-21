import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Claude Builder Club Northumbria",
  description: "Claude Builder Club Northumbria - Build the future with AI",
  openGraph: {
    type: "website",
    siteName: "Claude Builder Club Northumbria",
    url: "https://claudebuilderclub-northumbria.com/",
    title: "Claude Builder Club Northumbria",
    description: "Claude Builder Club Northumbria - Build the future with AI",
  },
  twitter: {
    card: "summary_large_image",
    site: "@claudebuilderclub",
    title: "Claude Builder Club Northumbria",
    description: "Claude Builder Club Northumbria - Build the future with AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Inter - Font for Claude Builder Club Northumbria */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500&display=swap"
          rel="stylesheet"
        />
        {/* JetBrains Mono - Monospace font for terminal */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Google Symbols for icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD,ROND@40..48,300,0..1,0,50&display=block"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
