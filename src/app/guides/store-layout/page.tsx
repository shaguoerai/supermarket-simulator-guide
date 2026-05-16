import { Metadata } from "next";
import { ArrowLeft, Gamepad2, LayoutGrid, Footprints, Maximize } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store Layout Guide | Supermarket Simulator Guide",
  description: "Optimal store layouts for Supermarket Simulator: shelf placement, customer flow, and expansion order.",
  alternates: {
    canonical: "https://smsimhub.com/guides/store-layout/",
  },
  openGraph: {
    title: "Store Layout Guide | Supermarket Simulator Guide",
    description: "Optimal store layouts for Supermarket Simulator: shelf placement, customer flow, and expansion order.",
    url: "https://smsimhub.com/guides/store-layout/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Store Layout Guide | Supermarket Simulator Guide",
    description: "Optimal store layout guide for Supermarket Simulator: floor plans, shelf placement, checkout positioning, and customer flow optimization.",
    images: ["https://smsimhub.com/og-image.png"],
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Store Layout Guide</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Design a store that sells more and frustrates customers less.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <LayoutGrid className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Shelf Placement Principles</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Layout directly impacts how many customers you can serve and how fast your staff can restock. The most efficient layouts follow a few simple rules derived from community testing.
            </p>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Group by category:</strong> Keep snacks together, drinks together, and frozen items near freezers. Customers find what they want faster, and restocking is more efficient.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>High-demand items at the back:</strong> Place snacks and drinks toward the rear. Customers walk past other shelves, increasing impulse purchases.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Leave aisle space:</strong> Do not cram shelves together. Customers and staff need room to move. Two-tile aisles minimum.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Checkout near the exit:</strong> Always place the register close to the door. Long walks to checkout reduce customer patience.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Footprints className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Customer Flow Design</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Customers enter, grab a basket, browse shelves, and head to checkout. Your job is to make that path as smooth as possible.
            </p>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              The "loop" layout works best for small-to-medium stores: entrance on one side, checkout on the opposite side, and shelves arranged in a U-shape or grid between them. This forces customers to walk past the maximum number of products.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Impulse Zone</p>
              <p className="text-[#5a6370] text-sm">Place small, cheap items (candy, gum, magazines) on a shelf directly next to the checkout register. Customers waiting in line often grab these, adding extra profit with zero extra effort.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Maximize className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Expansion Order</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Store expansions are expensive. Expand in this order to maximize return on investment:
            </p>
            <ol className="space-y-3 text-[#5a6370] list-decimal list-inside">
              <li><strong>More shelves</strong> — Cheapest upgrade. More shelf slots = more products = more revenue.</li>
              <li><strong>Freezer unit</strong> — Unlocks frozen foods and ice cream, a high-margin category.</li>
              <li><strong>Floor expansion</strong> — Only when your current floor is packed wall-to-wall with shelves.</li>
              <li><strong>Decorations & lighting</strong> — Nice-to-have. Upgrade last, after revenue is stable.</li>
            </ol>
          </section>
        </div>
      </main>

      {/* Related Guides */}
      <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
        <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
          <div className="flex items-center gap-3 mb-2">
            <LayoutGrid className="w-5 h-5 text-[#d97706]" />
            <h2 className="text-xl font-bold">Related Guide</h2>
          </div>
          <Link href="/guides/customer-satisfaction/" className="text-[#d97706] hover:underline">
            <h3 className="font-semibold mb-1">Customer Satisfaction Guide</h3>
            <p className="text-[#5a6370] text-sm">Learn how queue management, cleanliness, product variety, and shoplifter handling affect your store's success.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
