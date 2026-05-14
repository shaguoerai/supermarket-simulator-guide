import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Lightbulb, MousePointer, ShoppingCart, DollarSign, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Tips | Supermarket Simulator Guide",
  description: "Essential beginner tips for Supermarket Simulator: first-day checklist, UI overview, and core mechanics explained.",
  openGraph: {
    title: "Beginner Tips | Supermarket Simulator Guide",
    description: "Essential beginner tips for Supermarket Simulator: first-day checklist, UI overview, and core mechanics explained.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Beginner Tips</h1>
        <p className="text-zinc-400 mb-8 text-lg">Everything you need to survive your first week running a supermarket.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <MousePointer className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Understanding the Basics</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Supermarket Simulator by Nokta Games puts you in charge of a small grocery store. Your goal is simple: buy low, sell high, keep shelves stocked, and grow from a tiny corner shop into a retail empire. The game features both single-player and online co-op modes, with Steam Cloud saves so you never lose progress.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              You interact with almost everything directly — grab boxes from delivery pallets, physically place items on shelves, operate the checkout register, and even chase down shoplifters. There is no traditional pause button; time keeps moving while you manage your store.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Your First Day Checklist</h2>
            </div>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">1.</span>Accept the initial delivery and unpack boxes onto shelves. Empty shelves mean zero sales.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">2.</span>Set prices using the pricing gun. Start with 15-25% markup over wholesale cost.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">3.</span>Open the store by flipping the "Open" sign near the entrance.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">4.</span>Stay near the checkout register — customers will not wait forever.</li>
              <li className="flex gap-3"><span className="text-emerald-400 font-bold">5.</span>Watch for the end-of-day summary to see profit, expenses, and customer count.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Pricing for Beginners</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              One of the most common mistakes new players make is pricing too aggressively. If customers think your prices are too high, they will leave without buying. A safe starting rule is to set prices at 1.2x to 1.3x the cost you paid.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Pay attention to the customer feedback bubbles above their heads. Green smiley faces mean good prices; red angry faces mean you are overcharging. Adjust gradually and find the sweet spot for each product category.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">When to Hire Your First Employee</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              Do not rush to hire staff. In the early game, your own labor is free. Once you have at least 6-8 shelves and find yourself constantly running between restocking and checkout, consider hiring a cashier. Cashiers handle the register so you can focus on keeping shelves full. Wait until you have steady daily profits of at least $500 before adding staff.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Quick Tips from the Community</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <p className="text-zinc-300 text-sm">Keep a small stockpile of fast-moving items (snacks, drinks) behind the counter so you can restock quickly during rush hours.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <p className="text-zinc-300 text-sm">Cleanliness matters. Spills and trash lower customer satisfaction. Grab the mop early and clean regularly.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <p className="text-zinc-300 text-sm">Watch for shoplifters — they appear as suspicious customers who grab items and head for the exit without paying. Confront them before they leave.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <p className="text-zinc-300 text-sm">Expand shelf space before buying expensive products. More shelf slots = more revenue potential.</p>
              </div>
            </div>
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
