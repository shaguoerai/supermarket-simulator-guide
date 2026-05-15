import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Trophy, Search, Filter } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interactive Product Tier List | Supermarket Simulator Guide",
  description: "Search and filter all Supermarket Simulator products by tier, category, and profit margin.",
  alternates: {
    canonical: "https://smsimhub.com/tier-list/",
  },
  openGraph: {
    title: "Interactive Product Tier List | Supermarket Simulator Guide",
    description: "Search and filter all Supermarket Simulator products by tier, category, and profit margin.",
    url: "https://smsimhub.com/tier-list/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Product Tier List | Supermarket Simulator Guide",
    description: "Search and filter all Supermarket Simulator products by tier, category, and profit margin.",
  },
};

const products = [
  { name: "Beer", category: "Alcohol", tier: "S", margin: "High", license: true },
  { name: "Wine", category: "Alcohol", tier: "S", margin: "High", license: true },
  { name: "Cigarettes", category: "Tobacco", tier: "S", margin: "High", license: true },
  { name: "Headphones", category: "Electronics", tier: "S", margin: "High", license: false },
  { name: "Phone Charger", category: "Electronics", tier: "S", margin: "High", license: false },
  { name: "Frozen Pizza", category: "Frozen", tier: "S", margin: "High", license: false },
  { name: "Energy Drinks", category: "Drinks", tier: "S", margin: "Medium", license: false },
  { name: "Soda", category: "Drinks", tier: "A", margin: "Medium", license: false },
  { name: "Chips", category: "Snacks", tier: "A", margin: "Medium", license: false },
  { name: "Cookies", category: "Snacks", tier: "A", margin: "Medium", license: false },
  { name: "Ice Cream", category: "Frozen", tier: "A", margin: "Medium", license: false },
  { name: "Coffee", category: "Drinks", tier: "A", margin: "Medium", license: false },
  { name: "Chocolate", category: "Snacks", tier: "A", margin: "Medium", license: false },
  { name: "Cereal", category: "Food", tier: "A", margin: "Medium", license: false },
  { name: "Bread", category: "Food", tier: "B", margin: "Low", license: false },
  { name: "Milk", category: "Dairy", tier: "B", margin: "Low", license: false },
  { name: "Eggs", category: "Dairy", tier: "B", margin: "Low", license: false },
  { name: "Canned Soup", category: "Canned", tier: "B", margin: "Low", license: false },
  { name: "Pasta", category: "Food", tier: "B", margin: "Low", license: false },
  { name: "Rice", category: "Food", tier: "B", margin: "Low", license: false },
  { name: "Toilet Paper", category: "Household", tier: "B", margin: "Low", license: false },
  { name: "Detergent", category: "Household", tier: "B", margin: "Low", license: false },
  { name: "Apples", category: "Produce", tier: "C", margin: "Low", license: false },
  { name: "Bananas", category: "Produce", tier: "C", margin: "Low", license: false },
  { name: "Baked Bread", category: "Bakery", tier: "C", margin: "Low", license: false },
  { name: "Dog Food", category: "Pet", tier: "C", margin: "Low", license: false },
  { name: "Magazines", category: "Misc", tier: "C", margin: "Low", license: false },
];

const tierColors: Record<string, string> = {
  S: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  A: "text-[#d97706] bg-emerald-400/10 border-emerald-400/20",
  B: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  C: "text-[#8a9299] bg-zinc-400/10 border-zinc-400/20",
};

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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Tier List</h1>
        <p className="text-[#8a9299] mb-8 text-lg">All products ranked with category, margin, and license requirements.</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f8f7] border border-[#e5e7eb] text-sm text-[#8a9299]">
            <Search className="w-4 h-4" /> Use Ctrl+F to search products
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f8f7] border border-[#e5e7eb] text-sm text-[#8a9299]">
            <Filter className="w-4 h-4" /> Scroll to browse by tier
          </div>
        </div>

        <div className="space-y-6">
          {["S", "A", "B", "C"].map((tier) => (
            <section key={tier}>
              <div className="flex items-center gap-3 mb-3">
                <Trophy className={`w-5 h-5 ${tier === "S" ? "text-yellow-400" : tier === "A" ? "text-[#d97706]" : tier === "B" ? "text-blue-400" : "text-[#8a9299]"}`} />
                <h2 className={`text-xl font-bold ${tier === "S" ? "text-yellow-400" : tier === "A" ? "text-[#d97706]" : tier === "B" ? "text-blue-400" : "text-[#8a9299]"}`}>Tier {tier}</h2>
              </div>
              <div className="grid gap-2">
                {products.filter((p) => p.tier === tier).map((p) => (
                  <div key={p.name} className={`p-3 rounded-sm border flex items-center justify-between ${tierColors[tier]}`}>
                    <div>
                      <span className="font-semibold">{p.name}</span>
                      <span className="text-xs ml-2 opacity-70">{p.category}</span>
                    </div>
                    <div className="text-xs opacity-70">
                      {p.license && <span className="mr-2">🔒 License required</span>}
                      Margin: {p.margin}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
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
