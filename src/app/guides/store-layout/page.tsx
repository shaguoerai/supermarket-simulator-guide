import { Metadata } from "next";
import { ArrowLeft, Gamepad2, LayoutGrid, Footprints, Maximize } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store Layout Guide | Supermarket Simulator Guide",
  description: "Optimal store layouts for Supermarket Simulator: shelf placement, customer flow, and expansion order.",
  openGraph: {
    title: "Store Layout Guide | Supermarket Simulator Guide",
    description: "Optimal store layouts for Supermarket Simulator: shelf placement, customer flow, and expansion order.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Store Layout Guide</h1>
        <p className="text-zinc-400 mb-8 text-lg">Design a store that sells more and frustrates customers less.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <LayoutGrid className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Shelf Placement Principles</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Layout directly impacts how many customers you can serve and how fast your staff can restock. The most efficient layouts follow a few simple rules derived from community testing.
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span><strong>Group by category:</strong> Keep snacks together, drinks together, and frozen items near freezers. Customers find what they want faster, and restocking is more efficient.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span><strong>High-demand items at the back:</strong> Place snacks and drinks toward the rear. Customers walk past other shelves, increasing impulse purchases.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span><strong>Leave aisle space:</strong> Do not cram shelves together. Customers and staff need room to move. Two-tile aisles minimum.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span><strong>Checkout near the exit:</strong> Always place the register close to the door. Long walks to checkout reduce customer patience.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Footprints className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Customer Flow Design</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Customers enter, grab a basket, browse shelves, and head to checkout. Your job is to make that path as smooth as possible.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The "loop" layout works best for small-to-medium stores: entrance on one side, checkout on the opposite side, and shelves arranged in a U-shape or grid between them. This forces customers to walk past the maximum number of products.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <p className="text-emerald-400 font-semibold mb-2">Impulse Zone</p>
              <p className="text-zinc-300 text-sm">Place small, cheap items (candy, gum, magazines) on a shelf directly next to the checkout register. Customers waiting in line often grab these, adding extra profit with zero extra effort.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Maximize className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Expansion Order</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Store expansions are expensive. Expand in this order to maximize return on investment:
            </p>
            <ol className="space-y-3 text-zinc-300 list-decimal list-inside">
              <li><strong>More shelves</strong> — Cheapest upgrade. More shelf slots = more products = more revenue.</li>
              <li><strong>Freezer unit</strong> — Unlocks frozen foods and ice cream, a high-margin category.</li>
              <li><strong>Floor expansion</strong> — Only when your current floor is packed wall-to-wall with shelves.</li>
              <li><strong>Decorations & lighting</strong> — Nice-to-have. Upgrade last, after revenue is stable.</li>
            </ol>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 text-sm">
          Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
        </div>
      </footer>
    </div>
  );
}
