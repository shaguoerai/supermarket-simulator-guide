import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supermarket Simulator - Play the Best Store Management Game Online",
  description: "Build and manage your own supermarket empire in Supermarket Simulator. Stock shelves, set prices, hire staff, and grow your business in this addictive store management game.",
  keywords: "supermarket simulator, store management game, retail simulator, business simulation game, tycoon game",
  openGraph: {
    title: "Supermarket Simulator - Play the Best Store Management Game Online",
    description: "Build and manage your own supermarket empire. Stock shelves, set prices, hire staff, and grow your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
