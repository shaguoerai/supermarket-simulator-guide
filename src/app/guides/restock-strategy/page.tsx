import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Truck, PackageSearch, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Restock Strategy | Supermarket Simulator Guide",
  description: "Restocking strategies for Supermarket Simulator: supplier selection, inventory management, and ordering schedules.",
  alternates: {
    canonical: "https://smsimhub.com/guides/restock-strategy/",
  },
  openGraph: {
    title: "Restock Strategy | Supermarket Simulator Guide",
    description: "Restocking strategies for Supermarket Simulator: supplier selection, inventory management, and ordering schedules.",
    url: "https://smsimhub.com/guides/restock-strategy/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restock Strategy | Supermarket Simulator Guide",
    description: "Restocking strategies for Supermarket Simulator: supplier selection, inventory management, and ordering schedules.",
  },
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Restock Strategy</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Keep shelves full without drowning in spoilage or tying up cash.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Truck className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Supplier Types</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Supermarket Simulator offers two main supply channels: the online market (accessible via the in-game computer) and local markets around town. Each has pros and cons.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Online Market</h3>
                <ul className="text-[#5a6370] text-sm space-y-1">
                  <li>• Larger catalog of products</li>
                  <li>• Bulk discounts on big orders</li>
                  <li>• Delivery takes in-game time</li>
                  <li>• Shipping fees apply</li>
                </ul>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-2">Local Markets</h3>
                <ul className="text-[#5a6370] text-sm space-y-1">
                  <li>• No shipping fees</li>
                  <li>• Fresh produce often cheaper</li>
                  <li>• Limited selection</li>
                  <li>• Requires you to drive there</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <PackageSearch className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Inventory Management Rules</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Overstocking perishables is the fastest way to lose money. Follow these rules to keep inventory lean:
            </p>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">1.</span><strong>Perishables = small orders, frequent:</strong> Bread, milk, produce, and baked goods should be ordered in small batches every 1-2 days.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">2.</span><strong>Non-perishables = bulk:</strong> Canned goods, snacks, drinks, and toilet paper can be bought in bulk to save on shipping.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">3.</span><strong>Track sell-through rates:</strong> Check your end-of-day report. If a product rarely sells, reduce its shelf space or drop it entirely.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">4.</span><strong>Keep a safety stock:</strong> Always have 20-30% backup stock of your top 5 sellers in storage so you never run out during rush hour.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Restock Timing</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              The best time to restock is early morning before opening, or late evening after closing. Restocking during peak hours blocks customers from reaching products and creates bottlenecks.
            </p>
            <p className="text-[#5a6370] leading-relaxed">
              If you have a restocker employee, set their shift to overlap with delivery times. They will automatically unpack and shelve items, freeing you to handle pricing and customer issues.
            </p>
          </section>
        </div>
      </main>

      {/* Related Guides */}
      <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
        <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
          <div className="flex items-center gap-3 mb-2">
            <PackageSearch className="w-5 h-5 text-[#d97706]" />
            <h2 className="text-xl font-bold">Related Guide</h2>
          </div>
          <Link href="/guides/product-tier-list/" className="text-[#d97706] hover:underline">
            <h3 className="font-semibold mb-1">Product Tier List</h3>
            <p className="text-[#5a6370] text-sm">See every product ranked by profit margin, demand, and management difficulty with recommended stocking strategy.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
