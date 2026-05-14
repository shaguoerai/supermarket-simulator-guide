import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Trophy } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Tier List | Supermarket Simulator Guide",
  description: "Supermarket Simulator product rankings: S/A/B/C tiers with profit margins, demand, and licensing requirements.",
  openGraph: {
    title: "Product Tier List | Supermarket Simulator Guide",
    description: "Supermarket Simulator product rankings: S/A/B/C tiers with profit margins, demand, and licensing requirements.",
  },
};

const tiers = [
  {
    label: "S",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    items: [
      { name: "Alcohol (Beer/Wine)", note: "Requires alcohol license. Highest profit per unit." },
      { name: "Cigarettes", note: "Requires tobacco license. Consistent demand, high margin." },
      { name: "Electronics (Headphones, Chargers)", note: "High margin, slower turnover." },
      { name: "Frozen Pizza", note: "Requires freezer. Great margin + steady demand." },
      { name: "Energy Drinks", note: "High turnover + solid margin. Always stock." },
    ],
  },
  {
    label: "A",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    items: [
      { name: "Soft Drinks (Soda)", note: "Volume driver. Restock constantly." },
      { name: "Chips & Snacks", note: "Fast turnover, reliable profit." },
      { name: "Ice Cream", note: "Requires freezer. Good margin, seasonal spikes." },
      { name: "Coffee", note: "Steady demand, decent markup." },
      { name: "Chocolate & Candy", note: "Impulse buys near checkout = extra sales." },
      { name: "Cereal", note: "Family staple, consistent mid-margin sales." },
    ],
  },
  {
    label: "B",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    items: [
      { name: "Bread", note: "Low margin but essential. Customers expect it." },
      { name: "Milk & Dairy", note: "Perishable, frequent restocks needed." },
      { name: "Eggs", note: "Price-sensitive. Keep markup low." },
      { name: "Canned Goods", note: "Long shelf life, slow but steady." },
      { name: "Pasta & Rice", note: "Bulk items, moderate margin." },
      { name: "Toilet Paper", note: "Low margin, high volume. Good filler." },
      { name: "Cleaning Supplies", note: "Moderate demand, decent markup." },
    ],
  },
  {
    label: "C",
    color: "text-zinc-400",
    bg: "bg-zinc-400/10 border-zinc-400/20",
    items: [
      { name: "Fresh Produce (Fruits/Veg)", note: "High spoilage rate. Hard to profit early." },
      { name: "Baked Goods", note: "Very perishable. Requires careful ordering." },
      { name: "Pet Food", note: "Niche demand. Only stock if you have space." },
      { name: "Magazines", note: "Low margin, very slow turnover." },
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            <Gamepad2 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">Supermarket Simulator Guide</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Tier List</h1>
        <p className="text-zinc-400 mb-8 text-lg">Ranked by profitability, demand, and ease of management.</p>

        <div className="space-y-8">
          {tiers.map((tier) => (
            <section key={tier.label} className={`p-6 rounded-xl border ${tier.bg}`}>
              <div className="flex items-center gap-3 mb-4">
                <Trophy className={`w-6 h-6 ${tier.color}`} />
                <h2 className={`text-2xl font-bold ${tier.color}`}>Tier {tier.label}</h2>
              </div>
              <ul className="space-y-3">
                {tier.items.map((item) => (
                  <li key={item.name} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                    <span className="font-semibold text-zinc-100 min-w-[200px]">{item.name}</span>
                    <span className="text-zinc-400 text-sm">{item.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 p-4 rounded-lg bg-zinc-900 border border-zinc-800">
          <p className="text-zinc-400 text-sm">
            <strong className="text-zinc-200">Note:</strong> Tier rankings reflect general community consensus from Steam forums and Reddit. Your store's optimal mix depends on shelf space, licenses owned, and local customer demographics. Adjust based on your end-of-day sales reports.
          </p>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 text-sm space-y-3">
          <p>
            Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
          </p>
          <p>
            All game content, names, and trademarks are property of their respective owners.
            This site is for informational purposes only. Information may not be 100% accurate or up-to-date.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link href="/privacy-policy/" className="text-emerald-400 hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/" className="text-emerald-400 hover:underline">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
