import { Metadata } from "next";
import { ArrowLeft, Gamepad2, GitCompare, Monitor, Users, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Version Compare & Similar Games | Supermarket Simulator Guide",
  description: "Supermarket Simulator version history, platform differences, and similar games to try.",
  alternates: {
    canonical: "https://smsimhub.com/compare/",
  },
  openGraph: {
    title: "Version Compare & Similar Games | Supermarket Simulator Guide",
    description: "Supermarket Simulator version history, platform differences, and similar games to try.",
    url: "https://smsimhub.com/compare/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Version Compare & Similar Games | Supermarket Simulator Guide",
    description: "Supermarket Simulator version history, platform differences, and similar games to try.",
  },
};

const similarGames = [
  { name: "Gas Station Simulator", dev: "Drago Entertainment", platform: "Steam", note: "Similar management loop but with vehicle fuel mechanics and desert setting." },
  { name: "Potion Craft", dev: "niceplay games", platform: "Steam, Xbox, PS", note: "Alchemy shop management with crafting depth and charming art style." },
  { name: "Cozy Grove", dev: "Spry Fox", platform: "Steam, Switch, Mobile", note: "Relaxing island life sim with daily tasks and decorating. Less business-focused." },
  { name: "Diner Simulator", dev: "Drago Entertainment", platform: "Steam", note: "Restaurant management with cooking mechanics. Same publisher as Gas Station Simulator." },
  { name: "Internet Cafe Simulator 2", dev: "Cheetah Games", platform: "Steam", note: "Manage a PC gaming cafe. Similar first-person management but with tech upgrades." },
  { name: "Cafe Owner Simulator", dev: "Second Reality", platform: "Steam", note: "Run a coffee shop. Comparable shelf-stocking and customer service mechanics." },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#181c25]">
      <header className="border-b border-[#e5e7eb] bg-[#f6f8f7]">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-[#8a9299] hover:text-[#d97706] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            <Gamepad2 className="w-5 h-5 text-[#d97706]" />
            <span className="font-semibold">Supermarket Simulator Guide</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Version Compare & Similar Games</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Platform differences, version history, and games like Supermarket Simulator.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Platform Availability</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="py-3 pr-4 text-[#8a9299]">Platform</th>
                    <th className="py-3 pr-4 text-[#8a9299]">Status</th>
                    <th className="py-3 pr-4 text-[#8a9299]">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-[#5a6370]">
                  <tr className="border-b border-[#e5e7eb]/50">
                    <td className="py-3 pr-4 font-medium">Steam (PC)</td>
                    <td className="py-3 pr-4 text-[#d97706]">Available</td>
                    <td className="py-3 pr-4">Full release June 2025. Full controller support, Steam Cloud, achievements.</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]/50">
                    <td className="py-3 pr-4 font-medium">Xbox Cloud Gaming</td>
                    <td className="py-3 pr-4 text-[#d97706]">Available</td>
                    <td className="py-3 pr-4">Via Game Pass cloud streaming. Same build as PC.</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]/50">
                    <td className="py-3 pr-4 font-medium">Google Play / App Store</td>
                    <td className="py-3 pr-4 text-amber-400">Different Game</td>
                    <td className="py-3 pr-4">Mobile "Supermarket Simulator" games are unrelated clones by different developers.</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]/50">
                    <td className="py-3 pr-4 font-medium">Roblox</td>
                    <td className="py-3 pr-4 text-amber-400">Different Game</td>
                    <td className="py-3 pr-4">Roblox "Supermarket Simulator" experiences are fan-made and unrelated to Nokta Games.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Nintendo Switch / PS5</td>
                    <td className="py-3 pr-4 text-[#8a9299]">Not announced</td>
                    <td className="py-3 pr-4">No console ports confirmed as of May 2026.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Version History</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-[#181c25]">v1.0 — Full Release</h3>
                  <span className="text-xs text-[#8a9299]">June 19, 2025</span>
                </div>
                <p className="text-[#5a6370] text-sm">Official 1.0 release out of Early Access. Added full controller support, Steam Achievements, and polished co-op stability.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-[#181c25]">Early Access Launch</h3>
                  <span className="text-xs text-[#8a9299]">February 20, 2024</span>
                </div>
                <p className="text-[#5a6370] text-sm">Initial Steam Early Access release. Core loop: stocking, pricing, checkout, and basic expansion.</p>
              </div>
            </div>
            <p className="text-[#8a9299] text-sm mt-4">For the latest patch notes, visit the <a href="https://store.steampowered.com/app/2670630/Supermarket_Simulator/news/" target="_blank" rel="noopener noreferrer" className="text-[#d97706] hover:underline">Steam News Hub</a>.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <GitCompare className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Similar Games to Try</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {similarGames.map((game) => (
                <div key={game.name} className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                  <h3 className="font-semibold text-[#d97706] mb-1">{game.name}</h3>
                  <p className="text-[#8a9299] text-xs mb-2">{game.dev} • {game.platform}</p>
                  <p className="text-[#5a6370] text-sm">{game.note}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#e5e7eb] py-8 bg-[#f6f8f7]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#8a9299] text-sm space-y-3">
          <p>
            Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
          </p>
          <p>
            All game content, names, and trademarks are property of their respective owners.
            This site is for informational purposes only. Information may not be 100% accurate or up-to-date.
          </p>
          <p className="text-xs">
            As an Amazon Associate and Steam Affiliate, we earn from qualifying purchases made through product links on this site.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link href="/privacy-policy/" className="text-[#d97706] hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/" className="text-[#d97706] hover:underline">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
