import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Smile, Trash2, ShoppingBag, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Satisfaction Guide | Supermarket Simulator Guide",
  description: "How to keep customers happy in Supermarket Simulator: queue management, cleanliness, and product variety.",
  openGraph: {
    title: "Customer Satisfaction Guide | Supermarket Simulator Guide",
    description: "How to keep customers happy in Supermarket Simulator: queue management, cleanliness, and product variety.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Satisfaction</h1>
        <p className="text-zinc-400 mb-8 text-lg">Happy customers spend more and come back. Here is how to keep them satisfied.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Smile className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Queue Management</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Nothing kills customer satisfaction faster than long checkout lines. Customers have a patience meter that drops while they wait. If it hits zero, they abandon their cart and leave — sometimes knocking items off shelves on their way out.
            </p>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span>Hire a cashier before lines exceed 3 customers.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span>Place the register close to the exit to minimize post-purchase walking time.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span>Train cashier speed as the top priority.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">•</span>Consider a second register once daily customers exceed 50.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Cleanliness Matters</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Spills, trash, and general mess lower the store's cleanliness rating, which directly impacts customer mood. A dirty store makes customers leave faster and buy less.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Buy a mop early and clean spills immediately. Place trash bins near the entrance and checkout. If your store exceeds 10 shelves, hire a cleaner to handle maintenance so you can focus on sales.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <p className="text-emerald-400 font-semibold mb-2">Community Tip</p>
              <p className="text-zinc-300 text-sm">Some players report that placing decorative plants and good lighting subtly improves customer patience. The effect is small, but every bit helps in a busy store.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Product Variety</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Customers expect variety. A store that only sells snacks and drinks will see lower satisfaction scores than one with a balanced mix of categories.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Aim for at least 6 distinct product categories on your shelves: drinks, snacks, dairy, canned goods, household items, and one specialty (alcohol, electronics, or frozen foods). The broader your selection, the longer customers browse — and the more they buy.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Handling Shoplifters</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Shoplifters hurt your bottom line and scare off honest customers. They appear as NPCs who grab items and sprint for the exit. Confront them by getting close and pressing the interaction key. If they escape, you lose the item permanently. Security staff help spot and catch them faster, but early-game players must handle this themselves.
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
