import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import CookieConsent from "./components/CookieConsent";

const siteUrl = "https://smsimhub.com";

export const metadata: Metadata = {
  title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
  description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
  keywords: "supermarket simulator guide, supermarket simulator tips, supermarket simulator cheats, supermarket simulator tier list",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
    description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
    url: siteUrl,
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
    description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
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
        <footer className="border-t border-[#e5e7eb] py-8 bg-[#f6f8f7] mt-auto">
          <div className="max-w-5xl mx-auto px-4 text-sm text-[#8a9299] space-y-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <p className="font-semibold text-[#181c25]">Supermarket Simulator Guide</p>
              <p>Unofficial fan site. Not affiliated with Nokta Games.</p>
            </div>
            <div className="pt-4 border-t border-[#e5e7eb] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="space-y-2">
                <p>
                  All game content, names, and trademarks are property of their respective owners.
                  This site is for informational purposes only.
                </p>
                <p className="text-xs leading-relaxed">
                  Supermarket Simulator Guide is a participant in the Steam Affiliate Program and Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to store.steampowered.com and amazon.com. As an Amazon Associate and Steam Affiliate, we earn from qualifying purchases.
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <Link href="/privacy-policy/" className="text-[#d97706] hover:underline">Privacy Policy</Link>
                <span>·</span>
                <Link href="/" className="text-[#d97706] hover:underline">Home</Link>
              </div>
            </div>
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
