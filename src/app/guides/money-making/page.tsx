import { Metadata } from "next";
import { ArrowLeft, Gamepad2, TrendingUp, Tag, Package, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Money Making Guide | Supermarket Simulator Guide",
  description: "Best money-making strategies for Supermarket Simulator: pricing, high-profit items, and promotional timing.",
  openGraph: {
    title: "Money Making Guide | Supermarket Simulator Guide",
    description: "Best money-making strategies for Supermarket Simulator: pricing, high-profit items, and promotional timing.",
  },
};

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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Money Making Guide</h1>
        <p className="text-zinc-400 mb-8 text-lg">Legit strategies to maximize profit and grow your store fast.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Pricing Strategy That Works</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The core of making money in Supermarket Simulator is markup discipline. Every product has a wholesale cost and a retail price you set. The community consensus from Reddit and Steam forums is that a 1.25x to 1.5x markup works best for most items.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Luxury and electronics can handle higher markups (1.8x to 2.2x) because customers expect to pay more. Essentials like bread, milk, and eggs should stay closer to 1.2x — customers are price-sensitive on daily necessities.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <p className="text-emerald-400 font-semibold mb-2">Pro Tip</p>
              <p className="text-zinc-300 text-sm">Use the pricing gun to batch-update prices during slow hours (early morning). Changing prices while customers are shopping causes frustration and lost sales.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">High-Profit Product Categories</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Electronics & Appliances</h3>
                <p className="text-zinc-300 text-sm">Items like headphones, phone chargers, and small appliances have high wholesale costs but even higher retail margins. They sell slower, but each sale brings significant profit. Limit to 1-2 shelves early on.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Alcohol & Tobacco</h3>
                <p className="text-zinc-300 text-sm">These require a license purchase, but the profit per unit is among the highest in the game. The license pays for itself within a few in-game days if you dedicate shelf space.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Snacks & Soft Drinks</h3>
                <p className="text-zinc-300 text-sm">Low margin per item, but extremely high turnover. These are your volume drivers. Keep them fully stocked at all times — empty snack shelves are lost money.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Frozen Foods</h3>
                <p className="text-zinc-300 text-sm">Require freezer units (an upfront investment), but frozen pizzas and ice cream have solid margins and steady demand. Buy the freezer early if you have the capital.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Promotional Timing</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The game features dynamic customer traffic patterns. Weekends and in-game holidays bring more shoppers. Lower prices slightly (10-15% discount) before high-traffic periods to drive volume. The increased foot traffic more than compensates for the lower margin.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Conversely, raise prices slightly on rainy days when customers are less price-sensitive and more focused on convenience. Small adjustments add up over time.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Minimize Waste</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Over-ordering perishable goods (produce, dairy, baked goods) leads to spoilage and direct losses. Order conservatively and restock more frequently. The local market often has better deals than the online supplier for perishables — check both before placing large orders.
            </p>
          </section>
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
