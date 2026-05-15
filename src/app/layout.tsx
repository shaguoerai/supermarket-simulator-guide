import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
  description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
  keywords: "supermarket simulator guide, supermarket simulator tips, supermarket simulator cheats, supermarket simulator tier list",
  openGraph: {
    title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
    description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#181c25]">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
