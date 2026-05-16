import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Lightbulb, MousePointer, ShoppingCart, DollarSign, Users, AlertTriangle, HelpCircle, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Tips | Supermarket Simulator Guide",
  description: "Essential beginner tips for Supermarket Simulator: first-day checklist, UI overview, pricing data, and core mechanics explained with step-by-step guides.",
  alternates: {
    canonical: "https://smsimhub.com/guides/beginner-tips/",
  },
  openGraph: {
    title: "Beginner Tips | Supermarket Simulator Guide",
    description: "Essential beginner tips for Supermarket Simulator: first-day checklist, UI overview, pricing data, and core mechanics explained with step-by-step guides.",
    url: "https://smsimhub.com/guides/beginner-tips/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginner Tips | Supermarket Simulator Guide",
    description: "Essential beginner tips for Supermarket Simulator: first-day checklist, UI overview, pricing data, and core mechanics explained with step-by-step guides.",
    images: ["https://smsimhub.com/og-image.png"],
  },
};

const faqSchemaBeginnerTips = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long is one in-game day in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One in-game day lasts approximately 15-20 minutes of real time, depending on how efficiently you manage tasks. The day ends when you flip the Closed sign or when the automatic closing time triggers around 10 PM in-game time."
      }
    },
    {
      "@type": "Question",
      "name": "Can I play Supermarket Simulator with friends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Supermarket Simulator supports online co-op for up to 4 players. One player hosts the store, and others can join to help with restocking, checkout, and cleaning. Co-op mode shares revenue and expenses equally among all players."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I run out of money in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your balance drops below $0, you cannot place new orders or hire staff. However, you can still sell existing stock. Focus on selling what you have, minimize expenses, and build back to positive cash flow. The game does not have a game over state."
      }
    },
    {
      "@type": "Question",
      "name": "How do I unlock alcohol and tobacco sales in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Purchase the appropriate license from the in-game computer. The alcohol license costs approximately $500-$800 and the tobacco license costs $300-$500. These are among the highest-margin products and pay for themselves within 3-5 days."
      }
    }
  ]
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#181c25]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaBeginnerTips) }}
      />
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Beginner Tips</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Everything you need to survive your first week running a supermarket — with data, step-by-step checklists, and community-tested strategies.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <MousePointer className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Understanding the Basics</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Supermarket Simulator by Nokta Games puts you in charge of a small grocery store. Your goal is simple: buy low, sell high, keep shelves stocked, and grow from a tiny corner shop into a retail empire. The game features both single-player and online co-op modes (up to 4 players), with Steam Cloud saves so you never lose progress.
            </p>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              You interact with almost everything directly — grab boxes from delivery pallets, physically place items on shelves, operate the checkout register, and even chase down shoplifters. There is no traditional pause button; time keeps moving while you manage your store. One in-game day typically lasts 15-20 minutes of real time, depending on how efficiently you work.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Key Mechanics at a Glance</p>
              <ul className="text-[#5a6370] text-sm space-y-1">
                <li>• <strong>Time:</strong> Real-time gameplay — no pause. Plan ahead.</li>
                <li>• <strong>Money:</strong> Start with ~$2,000. Every decision matters early.</li>
                <li>• <strong>Inventory:</strong> Physical items. You carry boxes, open them, and place products by hand.</li>
                <li>• <strong>Customers:</strong> Dynamic AI with patience meters, price sensitivity, and shopping lists.</li>
                <li>• <strong>Staff:</strong> Hire cashiers, restockers, security, and cleaners as you grow.</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Your First Day: Step-by-Step Checklist</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              The first day sets the tone for your entire playthrough. Follow this checklist to maximize your starting capital and avoid common early-game pitfalls.
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Step 1: Accept and Unpack Your Delivery</h3>
                <p className="text-[#5a6370] text-sm">Your first delivery arrives on a pallet outside the store. Grab the boxes one by one, carry them inside, and place them on the floor near shelves. Open each box (hold the interaction key) and place items on empty shelf slots. Empty shelves mean zero sales — this is your highest priority.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Step 2: Set Prices Using the Pricing Gun</h3>
                <p className="text-[#5a6370] text-sm">Pick up the pricing gun (usually on the counter) and aim at each shelf. The UI shows the wholesale cost. Set retail prices at <strong>1.2x to 1.3x cost</strong> for essentials (bread, milk, eggs) and <strong>1.4x to 1.5x cost</strong> for snacks and drinks. Do not overprice on day one — customer count is more important than margin early on.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Step 3: Open the Store</h3>
                <p className="text-[#5a6370] text-sm">Flip the "Open" sign near the entrance. Customers will start arriving within 30-60 seconds. Stay near the checkout register — they will not wait forever. If a customer stands at the register too long, they abandon their cart and leave.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Step 4: Handle Checkout and Watch for Feedback</h3>
                <p className="text-[#5a6370] text-sm">Ring up each customer by scanning their items. Watch the feedback bubbles above their heads: <strong>green smiley</strong> = good price, <strong>yellow neutral</strong> = acceptable, <strong>red angry</strong> = overpriced. Adjust prices during slow periods based on this feedback.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Step 5: Review End-of-Day Summary</h3>
                <p className="text-[#5a6370] text-sm">After closing, a summary screen shows profit, expenses, customer count, and average satisfaction. Day 1 profit typically ranges from <strong>$150-$400</strong> depending on pricing and stock levels. Use this data to plan tomorrow's orders.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Pricing for Beginners: Data-Driven Markup Guide</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              One of the most common mistakes new players make is pricing too aggressively. If customers think your prices are too high, they will leave without buying — and negative word-of-mouth reduces foot traffic over time. Here is a data-backed starting point based on community testing from Steam forums and Reddit (r/SupermarketSimulator).
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#e5e7eb]">
                <thead className="bg-[#f6f8f7]">
                  <tr>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Product Category</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Recommended Markup</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Example (Wholesale → Retail)</th>
                  </tr>
                </thead>
                <tbody className="text-[#5a6370]">
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Bread, Milk, Eggs</td>
                    <td className="p-3">1.2x – 1.3x</td>
                    <td className="p-3">$2.50 → $3.25</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Snacks, Soft Drinks</td>
                    <td className="p-3">1.3x – 1.5x</td>
                    <td className="p-3">$1.20 → $1.80</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Frozen Foods</td>
                    <td className="p-3">1.4x – 1.6x</td>
                    <td className="p-3">$4.00 → $6.00</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Alcohol & Tobacco</td>
                    <td className="p-3">1.5x – 2.0x</td>
                    <td className="p-3">$8.00 → $14.00</td>
                  </tr>
                  <tr>
                    <td className="p-3">Electronics</td>
                    <td className="p-3">1.8x – 2.2x</td>
                    <td className="p-3">$15.00 → $30.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#5a6370] leading-relaxed">
              Pay attention to the customer feedback bubbles above their heads. Green smiley faces mean good prices; red angry faces mean you are overcharging. Adjust gradually and find the sweet spot for each product category. A good rule of thumb: if more than 20% of customers show red faces, lower prices by 10%.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">When to Hire Your First Employee</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Do not rush to hire staff. In the early game, your own labor is free. Once you have at least 6-8 shelves and find yourself constantly running between restocking and checkout, consider hiring a cashier. Cashiers handle the register so you can focus on keeping shelves full.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] mb-4">
              <p className="text-[#d97706] font-semibold mb-2">Hiring Thresholds (Community-Tested)</p>
              <ul className="text-[#5a6370] text-sm space-y-1">
                <li>• <strong>First Cashier:</strong> Daily profit ≥ $500, 6+ shelves, checkout takes &gt;50% of your time.</li>
                <li>• <strong>First Restocker:</strong> Daily profit ≥ $800, 10+ shelves, restocking takes &gt;40% of your time.</li>
                <li>• <strong>Security:</strong> Daily profit ≥ $1,200, shoplifters steal &gt;$50/day on average.</li>
                <li>• <strong>Cleaner:</strong> Daily profit ≥ $1,500, store has 12+ shelves or frequent spill events.</li>
              </ul>
            </div>
            <p className="text-[#5a6370] leading-relaxed">
              Wait until you have steady daily profits of at least $500 before adding staff. A cashier's daily wage starts at around $80-$120 depending on skill level. If your profit margin is thin, that wage can turn a profitable day into a loss.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Common Beginner Mistakes to Avoid</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #1: Overpricing Everything</h3>
                <p className="text-[#5a6370] text-sm">New players often set 2x markup across the board. Customers leave, satisfaction drops, and foot traffic plummets. Start conservative (1.2x-1.3x) and raise slowly as you learn price sensitivity.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #2: Buying Too Many Perishables</h3>
                <p className="text-[#5a6370] text-sm">Bread, milk, produce, and baked goods spoil quickly. Ordering 50 units of bread on day 2 is a guaranteed loss. Order perishables in small batches (10-15 units) and restock every 1-2 days.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #3: Hiring Staff Too Early</h3>
                <p className="text-[#5a6370] text-sm">A cashier earning $100/day when your profit is $200/day eats 50% of your margin. Do everything yourself until daily profit consistently exceeds $500.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #4: Ignoring the Mop</h3>
                <p className="text-[#5a6370] text-sm">Spills lower cleanliness ratings, which reduces customer satisfaction and spending. Buy the mop ($15) on day one and clean spills immediately. It pays for itself within a single day.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #5: Expanding Before Profiting</h3>
                <p className="text-[#5a6370] text-sm">Floor expansions cost $2,000-$5,000. Players often expand too early, leaving them cash-strapped and unable to stock new shelves. Wait until you have $3,000+ in reserve after filling all current shelves.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Quick Tips from the Community</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <p className="text-[#5a6370] text-sm">Keep a small stockpile of fast-moving items (snacks, drinks) behind the counter so you can restock quickly during rush hours.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <p className="text-[#5a6370] text-sm">Cleanliness matters. Spills and trash lower customer satisfaction. Grab the mop early and clean regularly.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <p className="text-[#5a6370] text-sm">Watch for shoplifters — they appear as suspicious customers who grab items and head for the exit without paying. Confront them before they leave.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <p className="text-[#5a6370] text-sm">Expand shelf space before buying expensive products. More shelf slots = more revenue potential. Shelves cost $50-$150 each — far cheaper than floor expansion.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <p className="text-[#5a6370] text-sm">Use the in-game computer to check the online market. Bulk orders often have 5-10% discounts compared to buying the same items at the local market.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <p className="text-[#5a6370] text-sm">Place candy and gum on a small shelf next to the checkout. Customers waiting in line often grab these impulse items, adding extra profit with zero effort.</p>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Related Guides</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/guides/money-making/" className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] hover:border-[#d97706] transition-colors block">
                <h3 className="font-semibold text-[#d97706] mb-1">Money Making Guide</h3>
                <p className="text-[#5a6370] text-sm">Learn pricing strategies, high-profit products, and promotional timing to maximize your revenue.</p>
              </Link>
              <Link href="/guides/product-tier-list/" className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] hover:border-[#d97706] transition-colors block">
                <h3 className="font-semibold text-[#d97706] mb-1">Product Tier List</h3>
                <p className="text-[#5a6370] text-sm">See every product ranked by profit margin, demand, and management difficulty.</p>
              </Link>
              <Link href="/tools/profit-calculator/" className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] hover:border-[#d97706] transition-colors block">
                <h3 className="font-semibold text-[#d97706] mb-1">Profit Calculator</h3>
                <p className="text-[#5a6370] text-sm">Calculate profit margins for any product with suggested retail prices.</p>
              </Link>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: How long is one in-game day?</h3>
                <p className="text-[#5a6370] text-sm">A: One in-game day lasts approximately 15-20 minutes of real time, depending on how efficiently you manage tasks. The day ends when you flip the "Closed" sign or when the automatic closing time triggers (usually around 10 PM in-game time).</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Can I play with friends?</h3>
                <p className="text-[#5a6370] text-sm">A: Yes. Supermarket Simulator supports online co-op for up to 4 players. One player hosts the store, and others can join to help with restocking, checkout, and cleaning. Co-op mode shares revenue and expenses equally among all players.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: What happens if I run out of money?</h3>
                <p className="text-[#5a6370] text-sm">A: If your balance drops below $0, you cannot place new orders or hire staff. However, you can still sell existing stock. Focus on selling what you have, minimize expenses, and build back to positive cash flow. The game does not have a "game over" state — you can always recover.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: How do I unlock alcohol and tobacco sales?</h3>
                <p className="text-[#5a6370] text-sm">A: Purchase the appropriate license from the in-game computer. The alcohol license costs approximately $500-$800 and the tobacco license costs $300-$500 (prices vary by game version). These are among the highest-margin products in the game and pay for themselves within 3-5 days.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Do decorations actually do anything?</h3>
                <p className="text-[#5a6370] text-sm">A: Decorations (plants, posters, lighting) improve the store atmosphere rating, which has a small but measurable effect on customer patience and satisfaction. They are not essential early on, but become worthwhile once you have stable profits. The "Decorator" achievement requires placing 20 decorations.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
