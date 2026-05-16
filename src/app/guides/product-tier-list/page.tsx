import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Trophy, AlertTriangle, HelpCircle, DollarSign, Package, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Tier List | Supermarket Simulator Guide",
  description: "Supermarket Simulator product rankings: S/A/B/C tiers with profit margins, demand data, licensing requirements, and step-by-step stocking strategy.",
  alternates: {
    canonical: "https://smsimhub.com/guides/product-tier-list/",
  },
  openGraph: {
    title: "Product Tier List | Supermarket Simulator Guide",
    description: "Supermarket Simulator product rankings: S/A/B/C tiers with profit margins, demand data, licensing requirements, and step-by-step stocking strategy.",
    url: "https://smsimhub.com/guides/product-tier-list/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Tier List | Supermarket Simulator Guide",
    description: "Supermarket Simulator product rankings: S/A/B/C tiers with profit margins, demand data, licensing requirements, and step-by-step stocking strategy.",
  },
};

const faqSchemaProductTierList = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why are produce and baked goods in C-Tier in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They have decent margins (20-30%) but extremely high spoilage rates. Produce expires in 2-3 in-game days and baked goods in 1-2 days. Unless you have a restocker employee and strict ordering discipline, spoilage losses wipe out profits."
      }
    },
    {
      "@type": "Question",
      "name": "Should I ever stock C-Tier items in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but only in late-game stores (15+ shelves) with staff to manage them. Produce and baked goods improve variety scores, which boosts customer satisfaction."
      }
    },
    {
      "@type": "Question",
      "name": "What is the single most profitable product in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Electronics (headphones, chargers) have the highest per-unit profit ($15-$25), but alcohol generates the highest daily profit per shelf due to higher turnover."
      }
    },
    {
      "@type": "Question",
      "name": "How does the tier list change in co-op mode in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Co-op mode (up to 4 players) increases customer traffic by 30-50%. High-turnover A-Tier items become even more valuable because you can restock faster with multiple players."
      }
    }
  ]
};

const tiers = [
  {
    label: "S",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    items: [
      { name: "Alcohol (Beer/Wine)", note: "Requires alcohol license ($500-$800). Highest profit per unit: $6-$8 profit per bottle. Sells 5-8 units/day per shelf.", margin: "50-60%", demand: "High" },
      { name: "Cigarettes", note: "Requires tobacco license ($300-$500). Consistent demand, $4-$6 profit per pack. Sells 6-10 units/day per shelf.", margin: "50-55%", demand: "High" },
      { name: "Electronics (Headphones, Chargers)", note: "High margin ($15-$25 profit per unit), slower turnover. Sells 1-2 units/day per shelf.", margin: "45-55%", demand: "Low" },
      { name: "Frozen Pizza", note: "Requires freezer. Great margin ($2-$4 profit) + steady demand. Sells 8-12 units/day per shelf.", margin: "40-50%", demand: "High" },
      { name: "Energy Drinks", note: "High turnover + solid margin ($1.50-$2.50 profit). Sells 10-15 units/day per shelf.", margin: "35-45%", demand: "Very High" },
    ],
  },
  {
    label: "A",
    color: "text-[#d97706]",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    items: [
      { name: "Soft Drinks (Soda)", note: "Volume driver. $0.50-$1.00 profit per can, sells 15-25 units/day. Restock constantly.", margin: "25-35%", demand: "Very High" },
      { name: "Chips & Snacks", note: "Fast turnover, reliable $0.30-$0.80 profit. Sells 15-25 units/day per shelf.", margin: "25-35%", demand: "Very High" },
      { name: "Ice Cream", note: "Requires freezer. Good margin ($2-$3 profit), seasonal spikes. Sells 6-10 units/day.", margin: "35-45%", demand: "Medium-High" },
      { name: "Coffee", note: "Steady demand, decent $1.00-$1.50 markup. Sells 8-12 units/day.", margin: "25-35%", demand: "High" },
      { name: "Chocolate & Candy", note: "Impulse buys near checkout = extra sales. $0.50-$1.20 profit, 10-15 units/day.", margin: "30-40%", demand: "High" },
      { name: "Cereal", note: "Family staple, consistent mid-margin. $1.50-$2.50 profit, 5-8 units/day.", margin: "25-35%", demand: "Medium" },
    ],
  },
  {
    label: "B",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    items: [
      { name: "Bread", note: "Low margin ($0.20-$0.40 profit) but essential. Customers expect it. Sells 10-15 units/day.", margin: "15-20%", demand: "High" },
      { name: "Milk & Dairy", note: "Perishable, frequent restocks needed. $0.30-$0.60 profit, 8-12 units/day.", margin: "15-22%", demand: "High" },
      { name: "Eggs", note: "Price-sensitive. Keep markup low. $0.30-$0.50 profit, 8-12 units/day.", margin: "12-18%", demand: "High" },
      { name: "Canned Goods", note: "Long shelf life, slow but steady. $0.40-$0.80 profit, 4-6 units/day.", margin: "20-28%", demand: "Medium" },
      { name: "Pasta & Rice", note: "Bulk items, moderate margin. $0.50-$1.00 profit, 4-7 units/day.", margin: "20-28%", demand: "Medium" },
      { name: "Toilet Paper", note: "Low margin ($0.30-$0.60), high volume. Good filler. 6-10 units/day.", margin: "15-22%", demand: "Medium" },
      { name: "Cleaning Supplies", note: "Moderate demand, decent $0.80-$1.50 profit. 3-5 units/day.", margin: "22-30%", demand: "Low-Medium" },
    ],
  },
  {
    label: "C",
    color: "text-[#8a9299]",
    bg: "bg-zinc-400/10 border-zinc-400/20",
    items: [
      { name: "Fresh Produce (Fruits/Veg)", note: "High spoilage rate (expires in 2-3 days). Hard to profit early. $0.50-$1.00 profit, 5-8 units/day.", margin: "20-30%", demand: "Medium" },
      { name: "Baked Goods", note: "Very perishable (expires in 1-2 days). Requires careful ordering. $0.60-$1.20 profit.", margin: "22-30%", demand: "Medium" },
      { name: "Pet Food", note: "Niche demand. Only stock if you have space. $1.00-$2.00 profit, 2-3 units/day.", margin: "25-35%", demand: "Low" },
      { name: "Magazines", note: "Low margin ($0.20-$0.50), very slow turnover. 1-2 units/day.", margin: "15-20%", demand: "Very Low" },
    ],
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#181c25]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaProductTierList) }}
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Tier List</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Ranked by profitability, demand, and ease of management — with data tables and stocking strategy.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">How This Tier List Works</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              This tier list ranks products based on three factors: <strong>profit margin</strong> (how much you keep per sale), <strong>demand</strong> (how fast items sell), and <strong>management difficulty</strong> (spoilage risk, license requirements, shelf space needs). A product can have high margins but low demand (electronics) or low margins but massive volume (snacks) — both can be profitable if used correctly.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Ranking Methodology</p>
              <ul className="text-[#5a6370] text-sm space-y-1">
                <li>• <strong>S-Tier:</strong> Highest profit potential with manageable requirements. Priority stock.</li>
                <li>• <strong>A-Tier:</strong> Reliable profit drivers. Essential for any well-stocked store.</li>
                <li>• <strong>B-Tier:</strong> Necessary for customer satisfaction but lower margins. Stock for variety.</li>
                <li>• <strong>C-Tier:</strong> High risk or low return. Only stock if you have spare shelf space.</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Complete Tier Rankings</h2>
            </div>
            <div className="space-y-8">
              {tiers.map((tier) => (
                <section key={tier.label} className={`p-6 rounded-sm border ${tier.bg}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className={`w-6 h-6 ${tier.color}`} />
                    <h2 className={`text-2xl font-bold ${tier.color}`}>Tier {tier.label}</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#e5e7eb]">
                          <th className="text-left p-2 font-semibold">Product</th>
                          <th className="text-left p-2 font-semibold">Margin</th>
                          <th className="text-left p-2 font-semibold">Demand</th>
                          <th className="text-left p-2 font-semibold">Notes</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#5a6370]">
                        {tier.items.map((item) => (
                          <tr key={item.name} className="border-b border-[#e5e7eb]/50">
                            <td className="p-2 font-medium text-[#181c25]">{item.name}</td>
                            <td className="p-2">{item.margin}</td>
                            <td className="p-2">{item.demand}</td>
                            <td className="p-2 text-xs">{item.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Step-by-Step Stocking Strategy</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Knowing the tier list is only half the battle. Here is how to translate these rankings into an actual stocking plan that maximizes profit at each stage of your store's growth:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Stage 1: Starting Store (2-4 Shelves)</h3>
                <p className="text-[#5a6370] text-sm">
                  Focus on A-Tier volume drivers: <strong>soft drinks, chips, snacks, candy</strong>. These require no special equipment, have high turnover, and generate steady early profit. Avoid C-Tier perishables entirely. Aim for 2 shelves of drinks/snacks and 1-2 shelves of candy/coffee.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Stage 2: Growing Store (5-8 Shelves)</h3>
                <p className="text-[#5a6370] text-sm">
                  Add a <strong>freezer</strong> ($800-$1,200) and stock frozen pizza and ice cream (S-Tier and A-Tier). Add bread, milk, and eggs (B-Tier) for variety — customers expect these essentials. Keep 3-4 shelves on A-Tier volume items, 1-2 on frozen, and 1-2 on B-Tier essentials.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Stage 3: Established Store (9-14 Shelves)</h3>
                <p className="text-[#5a6370] text-sm">
                  Buy <strong>alcohol and tobacco licenses</strong> ($800-$1,300 total). Dedicate 1-2 shelves to alcohol and 1 shelf to cigarettes — these are your highest-margin products. Add 1 shelf of electronics for late-game profit. Maintain 4-5 shelves of A-Tier volume drivers and 2-3 shelves of B-Tier essentials.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Stage 4: Retail Empire (15+ Shelves)</h3>
                <p className="text-[#5a6370] text-sm">
                  At this scale, you have room for everything. Keep your core A-Tier and S-Tier shelves full. Add C-Tier items (produce, baked goods, pet food) only if you have dedicated staff to manage perishables. A cleaner and restocker are essential at this size.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Common Tier List Mistakes</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #1: Filling Shelves with Only S-Tier Items</h3>
                <p className="text-[#5a6370] text-sm">
                  A store with only alcohol and electronics looks great on paper, but customers expect variety. Low variety scores reduce foot traffic and satisfaction. Always maintain at least 4-5 product categories.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #2: Ignoring Shelf Space Efficiency</h3>
                <p className="text-[#5a6370] text-sm">
                  Electronics have 55% margins but sell 1-2 units/day. Snacks have 30% margins but sell 20+ units/day. Per shelf slot, snacks often generate more total profit. Do not over-invest in slow movers early on.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #3: Buying Licenses Before You Can Stock Them</h3>
                <p className="text-[#5a6370] text-sm">
                  An alcohol license costs $500-$800, but alcohol itself requires significant wholesale investment. Do not buy the license until you have $1,500+ in reserve — enough for the license plus initial stock.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #4: Treating the Tier List as Fixed</h3>
                <p className="text-[#5a6370] text-sm">
                  Your store's demographics shift as you grow. Early customers are price-sensitive; late-game customers care more about variety. Reassess your product mix every 5-7 in-game days based on sales reports.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Why are produce and baked goods in C-Tier?</h3>
                <p className="text-[#5a6370] text-sm">
                  A: They have decent margins (20-30%) but extremely high spoilage rates. Produce expires in 2-3 in-game days and baked goods in 1-2 days. Unless you have a restocker employee and strict ordering discipline, spoilage losses wipe out profits.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Should I ever stock C-Tier items?</h3>
                <p className="text-[#5a6370] text-sm">
                  A: Yes, but only in late-game stores (15+ shelves) with staff to manage them. Produce and baked goods improve variety scores, which boosts customer satisfaction. Just keep orders small and monitor expiration dates closely.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: What is the single most profitable product?</h3>
                <p className="text-[#5a6370] text-sm">
                  A: Electronics (headphones, chargers) have the highest per-unit profit ($15-$25), but alcohol generates the highest daily profit per shelf due to higher turnover. For pure profit per shelf slot, alcohol wins. For profit per unit sold, electronics wins.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: How does the tier list change in co-op mode?</h3>
                <p className="text-[#5a6370] text-sm">
                  A: Co-op mode (up to 4 players) increases customer traffic by 30-50%. High-turnover A-Tier items become even more valuable because you can restock faster with multiple players. S-Tier electronics become more viable since players can manage slow turnover together.
                </p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Do product tiers change with game updates?</h3>
                <p className="text-[#5a6370] text-sm">
                  A: Yes. Nokta Games has adjusted pricing, demand, and spoilage rates in patches. This tier list reflects the current community consensus as of the latest major update. Check Steam patch notes if you notice discrepancies.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
          <p className="text-[#8a9299] text-sm">
            <strong className="text-[#181c25]">Note:</strong> Tier rankings reflect general community consensus from Steam forums and Reddit (r/SupermarketSimulator). Your store's optimal mix depends on shelf space, licenses owned, and local customer demographics. Adjust based on your end-of-day sales reports.
          </p>
        </div>

        {/* Related Tools */}
        <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
          <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-[#d97706]" />
              <h2 className="text-xl font-bold">Related Tools</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/tools/profit-calculator/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Profit Calculator</h3>
                <p className="text-[#5a6370] text-sm">Calculate exact profit margins for any product with real-time pricing analysis.</p>
              </Link>
              <Link href="/guides/money-making/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Money Making Guide</h3>
                <p className="text-[#5a6370] text-sm">Apply tier list data to build a real profit-making store strategy.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
