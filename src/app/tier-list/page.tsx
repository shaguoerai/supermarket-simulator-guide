import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Trophy, Search, Filter, TrendingUp } from "lucide-react";
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
    images: ["https://smsimhub.com/og-image.png"],
  },
};

const softwareSchemaTierList = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Supermarket Simulator Product Tier List",
  "applicationCategory": "GameGuide",
  "operatingSystem": "Web",
  "description": "Interactive tier list for Supermarket Simulator products. Browse all products ranked by tier (S/A/B/C), filtered by category, with profit margin and license requirement data.",
  "url": "https://smsimhub.com/tier-list/",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchemaTierList) }}
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
        <p className="text-[#8a9299] mb-8 text-lg">All products ranked with category, margin, and license requirements.</p>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f8f7] border border-[#e5e7eb] text-sm text-[#8a9299]">
            <Search className="w-4 h-4" /> Use Ctrl+F to search products
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f6f8f7] border border-[#e5e7eb] text-sm text-[#8a9299]">
            <Filter className="w-4 h-4" /> Scroll to browse by tier
          </div>
        </div>

        {/* Related Guides */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-[#d97706]" />
            <h2 className="text-xl font-bold">Related Tool</h2>
          </div>
          <Link href="/tools/profit-calculator/" className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] hover:border-[#d97706] transition-colors block">
            <h3 className="font-semibold text-[#d97706] mb-1">Profit Calculator</h3>
            <p className="text-[#5a6370] text-sm">Calculate exact profit margins for any product with suggested pricing ranges.</p>
          </Link>
        </section>

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
                <p className="text-[#5a6370] text-sm">Calculate exact profit for every product with real-time margin analysis.</p>
              </Link>
              <Link href="/guides/money-making/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Money Making Guide</h3>
                <p className="text-[#5a6370] text-sm">Strategies to maximize revenue using high-margin products and smart pricing.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
