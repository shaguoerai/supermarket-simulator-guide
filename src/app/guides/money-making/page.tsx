import { Metadata } from "next";
import { ArrowLeft, Gamepad2, TrendingUp, Tag, Package, Calendar, AlertTriangle, HelpCircle, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Money Making Guide | Supermarket Simulator Guide",
  description: "Best money-making strategies for Supermarket Simulator: pricing tables, high-profit items, promotional timing, and waste minimization with step-by-step guides.",
  alternates: {
    canonical: "https://smsimhub.com/guides/money-making/",
  },
  openGraph: {
    title: "Money Making Guide | Supermarket Simulator Guide",
    description: "Best money-making strategies for Supermarket Simulator: pricing tables, high-profit items, promotional timing, and waste minimization with step-by-step guides.",
    url: "https://smsimhub.com/guides/money-making/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Money Making Guide | Supermarket Simulator Guide",
    description: "Best money-making strategies for Supermarket Simulator: pricing tables, high-profit items, promotional timing, and waste minimization with step-by-step guides.",
  },
};

const faqSchemaMoneyMaking = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the fastest way to make money early game in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Focus on snacks and soft drinks with 1.3x-1.5x markup. They have high turnover and require no special equipment or licenses. A single snack shelf can generate $10-$20 daily profit with minimal investment."
      }
    },
    {
      "@type": "Question",
      "name": "Should I buy the freezer or alcohol license first in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buy the freezer first ($800-$1,200). Frozen foods provide steady daily profit with no ongoing license fees. The alcohol license is next priority once you have $1,500+ in reserve after the freezer purchase."
      }
    },
    {
      "@type": "Question",
      "name": "How much daily profit do I need before expanding in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wait until you have $3,000+ in cash reserves and consistent $800+ daily profit. Floor expansions cost $2,000-$5,000, and new shelves need stock. Expanding too early leaves you cash-strapped."
      }
    },
    {
      "@type": "Question",
      "name": "Do discounts actually increase total profit in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, during high-traffic periods. A 10% discount that brings 30% more customers typically increases total revenue by 15-20%. The key is timing — only discount when you know foot traffic will be high on weekends and holidays."
      }
    },
    {
      "@type": "Question",
      "name": "What is the most profitable store size in Supermarket Simulator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Community data suggests the sweet spot is 12-16 shelves with 3-4 employees. Beyond 20 shelves, management overhead becomes so time-consuming that profit per minute of playtime starts to decline."
      }
    }
  ]
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#181c25]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaMoneyMaking) }}
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Money Making Guide</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Legit strategies to maximize profit and grow your store fast — with pricing data, profit margins, and step-by-step execution.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Pricing Strategy That Works</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              The core of making money in Supermarket Simulator is markup discipline. Every product has a wholesale cost and a retail price you set. The community consensus from Reddit and Steam forums is that a <strong>1.25x to 1.5x markup</strong> works best for most items. Go higher and you risk driving customers away; go lower and you leave profit on the table.
            </p>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Luxury and electronics can handle higher markups (1.8x to 2.2x) because customers expect to pay more. Essentials like bread, milk, and eggs should stay closer to 1.2x — customers are price-sensitive on daily necessities. Here is a detailed breakdown based on community-tested data:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#e5e7eb]">
                <thead className="bg-[#f6f8f7]">
                  <tr>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Product Category</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Optimal Markup</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Profit Margin</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Customer Tolerance</th>
                  </tr>
                </thead>
                <tbody className="text-[#5a6370]">
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Bread, Milk, Eggs</td>
                    <td className="p-3">1.2x – 1.3x</td>
                    <td className="p-3">17% – 23%</td>
                    <td className="p-3">Low — price-sensitive</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Snacks & Soft Drinks</td>
                    <td className="p-3">1.3x – 1.5x</td>
                    <td className="p-3">23% – 33%</td>
                    <td className="p-3">Medium</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Frozen Foods</td>
                    <td className="p-3">1.4x – 1.6x</td>
                    <td className="p-3">29% – 38%</td>
                    <td className="p-3">Medium-High</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Coffee & Cereal</td>
                    <td className="p-3">1.3x – 1.5x</td>
                    <td className="p-3">23% – 33%</td>
                    <td className="p-3">Medium</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Alcohol (Beer/Wine)</td>
                    <td className="p-3">1.5x – 2.0x</td>
                    <td className="p-3">33% – 50%</td>
                    <td className="p-3">High — requires license</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Cigarettes</td>
                    <td className="p-3">1.5x – 2.0x</td>
                    <td className="p-3">33% – 50%</td>
                    <td className="p-3">High — requires license</td>
                  </tr>
                  <tr>
                    <td className="p-3">Electronics</td>
                    <td className="p-3">1.8x – 2.2x</td>
                    <td className="p-3">44% – 55%</td>
                    <td className="p-3">High — low turnover</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Pro Tip</p>
              <p className="text-[#5a6370] text-sm">Use the pricing gun to batch-update prices during slow hours (early morning, 6-8 AM in-game). Changing prices while customers are shopping causes frustration and lost sales. A single price change takes 2-3 seconds per shelf — plan accordingly.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">High-Profit Product Categories</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Not all products are created equal. Some categories deliver far more profit per unit or per shelf slot than others. Here is a detailed breakdown of the best moneymakers, ranked by community-tested profitability:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Electronics & Appliances</h3>
                <p className="text-[#5a6370] text-sm mb-2">Items like headphones, phone chargers, and small appliances have high wholesale costs but even higher retail margins. They sell slower (1-2 units per day per shelf), but each sale brings significant profit. A single headphone sale can yield $15-$25 profit.</p>
                <p className="text-[#5a6370] text-xs"><strong>Best for:</strong> Late-game stores with 12+ shelves. Limit to 1-2 shelves early on.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Alcohol & Tobacco</h3>
                <p className="text-[#5a6370] text-sm mb-2">These require a license purchase ($500-$800 for alcohol, $300-$500 for tobacco), but the profit per unit is among the highest in the game. A bottle of wine costing $8 wholesale sells for $14-$16 retail — nearly 100% profit. The license pays for itself within 3-5 in-game days if you dedicate 1-2 shelves.</p>
                <p className="text-[#5a6370] text-xs"><strong>Best for:</strong> Mid-game stores with steady $500+ daily profit. Priority unlock after freezer.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Snacks & Soft Drinks</h3>
                <p className="text-[#5a6370] text-sm mb-2">Low margin per item (typically $0.30-$0.80 profit), but extremely high turnover. A single snack shelf can sell 15-25 units per day. These are your volume drivers. Keep them fully stocked at all times — empty snack shelves are lost money.</p>
                <p className="text-[#5a6370] text-xs"><strong>Best for:</strong> Every store, every stage. Dedicate 2-3 shelves minimum.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Frozen Foods</h3>
                <p className="text-[#5a6370] text-sm mb-2">Require freezer units (upfront investment of $800-$1,200), but frozen pizzas and ice cream have solid margins ($2-$4 profit per unit) and steady demand. A freezer shelf typically sells 8-12 units per day. Buy the freezer early if you have the capital — it unlocks a high-margin category competitors often skip.</p>
                <p className="text-[#5a6370] text-xs"><strong>Best for:</strong> Early-to-mid game. Buy freezer after adding 4-6 regular shelves.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Energy Drinks</h3>
                <p className="text-[#5a6370] text-sm mb-2">A niche category with surprisingly high margins. Energy drinks cost $1.50-$2.00 wholesale and sell for $3.00-$4.00 retail. Turnover is moderate (5-10 units/day), making them a solid middle-ground between snacks and electronics.</p>
                <p className="text-[#5a6370] text-xs"><strong>Best for:</strong> Mid-game stores. Dedicate 1 shelf after unlocking 8+ total shelves.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Promotional Timing: When to Raise, When to Lower</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              The game features dynamic customer traffic patterns. Weekends and in-game holidays bring more shoppers. Lower prices slightly (10-15% discount) before high-traffic periods to drive volume. The increased foot traffic more than compensates for the lower margin.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-[#e5e7eb]">
                <thead className="bg-[#f6f8f7]">
                  <tr>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Condition</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Recommended Action</th>
                    <th className="text-left p-3 border-b border-[#e5e7eb] font-semibold">Expected Result</th>
                  </tr>
                </thead>
                <tbody className="text-[#5a6370]">
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Weekend / Holiday</td>
                    <td className="p-3">Lower prices 10-15%</td>
                    <td className="p-3">+30-50% customer count, higher total revenue</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Rainy Day</td>
                    <td className="p-3">Raise prices 5-10%</td>
                    <td className="p-3">Customers less price-sensitive, higher margin</td>
                  </tr>
                  <tr className="border-b border-[#e5e7eb]">
                    <td className="p-3">Slow Weekday</td>
                    <td className="p-3">Keep standard prices</td>
                    <td className="p-3">Stable baseline, no risk of driving away few customers</td>
                  </tr>
                  <tr>
                    <td className="p-3">End-of-Day Clearance</td>
                    <td className="p-3">Discount perishables 20-30%</td>
                    <td className="p-3">Sell before spoilage, recover wholesale cost</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[#5a6370] leading-relaxed">
              Conversely, raise prices slightly on rainy days when customers are less price-sensitive and more focused on convenience. Small adjustments add up over time. A 5% price increase on a $1,000 daily revenue store adds $50/day — enough to cover a cashier's wage.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Minimize Waste: The Silent Profit Killer</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Over-ordering perishable goods (produce, dairy, baked goods) leads to spoilage and direct losses. Spoiled inventory is a 100% loss — you paid wholesale and recover $0. Here is how to keep waste under control:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Step 1: Order Conservatively</h3>
                <p className="text-[#5a6370] text-sm">For perishables, order no more than 1.5x your daily sell-through rate. If you sell 10 units of milk per day, order 15 units maximum. This gives you a small buffer without risking spoilage.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Step 2: Check Both Suppliers</h3>
                <p className="text-[#5a6370] text-sm">The local market often has better deals than the online supplier for perishables — especially produce and baked goods. Check both before placing large orders. Local market prices can be 10-20% lower with no shipping fee.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Step 3: Discount Before Spoilage</h3>
                <p className="text-[#5a6370] text-sm">If you notice perishables approaching their expiration date, discount them 20-30% to move inventory fast. Recovering 70% of your cost is far better than losing 100% to spoilage.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Common Money-Making Mistakes</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #1: Chasing High Margin on Low Turnover</h3>
                <p className="text-[#5a6370] text-sm">Filling your store with electronics (2.0x markup) sounds great, but if each shelf sells 1 unit per day, your total profit is lower than a snack shelf selling 20 units at 1.3x markup. Balance high-margin and high-turnover categories.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #2: Ignoring Shipping Costs</h3>
                <p className="text-[#5a6370] text-sm">Online orders have shipping fees that eat into margins. A $50 order with a $8 shipping fee reduces your effective margin by 16%. For small orders, the local market is often cheaper even at slightly higher per-unit prices.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #3: Never Adjusting Prices</h3>
                <p className="text-[#5a6370] text-sm">Setting prices once and forgetting them is leaving money on the table. Review prices every 3-5 in-game days based on customer feedback and sell-through rates. A 10% price increase on your top 5 products can boost daily profit by $100+.</p>
              </div>
              <div className="p-4 rounded-sm bg-red-50 border border-red-200">
                <h3 className="font-semibold text-red-700 mb-1">Mistake #4: Buying Licenses Too Late</h3>
                <p className="text-[#5a6370] text-sm">Alcohol and tobacco licenses cost $800-$1,300 total but generate $200-$400 extra daily profit once active. Delaying the license purchase by 5 days means losing $1,000-$2,000 in potential revenue. Buy them as soon as you have $1,500 in reserve.</p>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Related Guides</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/tools/profit-calculator/" className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] hover:border-[#d97706] transition-colors block">
                <h3 className="font-semibold text-[#d97706] mb-1">Profit Calculator</h3>
                <p className="text-[#5a6370] text-sm">Calculate exact profit margins for any product with suggested pricing ranges.</p>
              </Link>
              <Link href="/guides/product-tier-list/" className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] hover:border-[#d97706] transition-colors block">
                <h3 className="font-semibold text-[#d97706] mb-1">Product Tier List</h3>
                <p className="text-[#5a6370] text-sm">See every product ranked by profit margin, demand, and management difficulty.</p>
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
                <h3 className="font-semibold text-[#181c25] mb-1">Q: What is the fastest way to make money early game?</h3>
                <p className="text-[#5a6370] text-sm">A: Focus on snacks and soft drinks with 1.3x-1.5x markup. They have high turnover and require no special equipment or licenses. A single snack shelf can generate $10-$20 daily profit with minimal investment.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Should I buy the freezer or alcohol license first?</h3>
                <p className="text-[#5a6370] text-sm">A: Buy the freezer first ($800-$1,200). Frozen foods provide steady daily profit with no ongoing license fees. The alcohol license is next priority once you have $1,500+ in reserve after the freezer purchase.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: How much daily profit do I need before expanding?</h3>
                <p className="text-[#5a6370] text-sm">A: Wait until you have $3,000+ in cash reserves and consistent $800+ daily profit. Floor expansions cost $2,000-$5,000, and new shelves need stock. Expanding too early leaves you cash-strapped and unable to fill new space.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: Do discounts actually increase total profit?</h3>
                <p className="text-[#5a6370] text-sm">A: Yes, during high-traffic periods. A 10% discount that brings 30% more customers typically increases total revenue by 15-20%. The key is timing — only discount when you know foot traffic will be high (weekends, holidays).</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#181c25] mb-1">Q: What is the most profitable store size?</h3>
                <p className="text-[#5a6370] text-sm">A: Community data suggests the sweet spot is 12-16 shelves with 3-4 employees. Beyond 20 shelves, management overhead (restocking, pricing, staff supervision) becomes so time-consuming that profit per minute of playtime starts to decline.</p>
              </div>
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
