import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Smile, Trash2, ShoppingBag, ShieldAlert, Clock, Sparkles, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Satisfaction Guide | Supermarket Simulator Guide",
  description: "How to keep customers happy in Supermarket Simulator: queue management, cleanliness, product variety, pricing, and shoplifter handling.",
  alternates: {
    canonical: "https://smsimhub.com/guides/customer-satisfaction/",
  },
  openGraph: {
    title: "Customer Satisfaction Guide | Supermarket Simulator Guide",
    description: "How to keep customers happy in Supermarket Simulator: queue management, cleanliness, product variety, pricing, and shoplifter handling.",
    url: "https://smsimhub.com/guides/customer-satisfaction/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Satisfaction Guide | Supermarket Simulator Guide",
    description: "How to keep customers happy in Supermarket Simulator: cleanliness, pricing, wait times, product variety, and store atmosphere explained.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Customer Satisfaction</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Happy customers spend more and come back. Here is how to keep them satisfied.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Smile className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Queue Management</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Nothing kills customer satisfaction faster than long checkout lines. Customers have a patience meter that drops while they wait. If it hits zero, they abandon their cart and leave — sometimes knocking items off shelves on their way out.
            </p>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Hire a cashier before lines exceed 3 customers.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Place the register close to the exit to minimize post-purchase walking time.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Train cashier speed as the top priority.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Consider a second register once daily customers exceed 50.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Cleanliness Matters</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Spills, trash, and general mess lower the store's cleanliness rating, which directly impacts customer mood. A dirty store makes customers leave faster and buy less.
            </p>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Buy a mop early and clean spills immediately. Place trash bins near the entrance and checkout. If your store exceeds 10 shelves, hire a cleaner to handle maintenance so you can focus on sales.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Community Tip</p>
              <p className="text-[#5a6370] text-sm">Some players report that placing decorative plants and good lighting subtly improves customer patience. The effect is small, but every bit helps in a busy store.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Product Variety</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Customers expect variety. A store that only sells snacks and drinks will see lower satisfaction scores than one with a balanced mix of categories.
            </p>
            <p className="text-[#5a6370] leading-relaxed">
              Aim for at least 6 distinct product categories on your shelves: drinks, snacks, dairy, canned goods, household items, and one specialty (alcohol, electronics, or frozen foods). The broader your selection, the longer customers browse — and the more they buy.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Pricing and Patience</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Customers notice overpricing. If your markup exceeds 1.5x on essentials (bread, milk, eggs), satisfaction drops. For luxury items (electronics, alcohol), customers tolerate higher markups up to 2x.
            </p>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Essentials:</strong> 1.2x–1.3x markup. Bread, milk, eggs, canned goods.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Standard:</strong> 1.3x–1.5x markup. Snacks, drinks, household items.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Luxury:</strong> 1.5x–2.0x markup. Alcohol, electronics, frozen foods.</li>
            </ul>
            <p className="text-[#5a6370] leading-relaxed mt-4">
              On rainy days, raise prices 5–10% across the board. Customers are less price-sensitive in bad weather, and the satisfaction penalty is smaller.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Store Atmosphere</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Lighting, decorations, and music all contribute to atmosphere. A well-lit store with plants and posters makes customers browse longer.
            </p>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Upgrade lighting before buying decorations — it has the biggest impact.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Place plants near checkout and entrance for maximum visibility.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span>Posters are cheap atmosphere boosters. Buy them early.</li>
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <ShieldAlert className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Handling Shoplifters</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Shoplifters hurt your bottom line and scare off honest customers. They appear as NPCs who grab items and sprint for the exit. Confront them by getting close and pressing the interaction key. If they escape, you lose the item permanently.
            </p>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Security staff help spot and catch them faster, but early-game players must handle this themselves. Place security antennas near exits (see the Store Layout Guide for antenna placement tips).
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Patch 1.3.1 Fix</p>
              <p className="text-[#5a6370] text-sm">Security antennas now reliably detect shoplifters regardless of placement angle. If you previously had issues with antennas not triggering, re-install them after this patch.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Common Satisfaction Killers</h2>
            </div>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Out-of-stock shelves:</strong> Empty shelves frustrate customers who came for specific items. Keep your top 5 sellers always stocked.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Long checkout lines:</strong> The #1 complaint. Add registers and cashiers before lines hit 4 people.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Overpricing:</strong> Watch customer reactions when they pick up items. If they frown and put it back, your price is too high.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Dirty floors:</strong> Spills and trash accumulate fast. Clean at least twice per day or hire a cleaner.</li>
            </ul>
          </section>
        </div>

        {/* Related Guides */}
        <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
          <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
            <div className="flex items-center gap-3 mb-2">
              <Smile className="w-5 h-5 text-[#d97706]" />
              <h2 className="text-xl font-bold">Related Guides</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/guides/store-layout/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Store Layout Guide</h3>
                <p className="text-[#5a6370] text-sm">Design efficient floor plans that improve customer flow and checkout speed.</p>
              </Link>
              <Link href="/guides/staff-management/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Staff Management</h3>
                <p className="text-[#5a6370] text-sm">Hire and train the right staff to keep your store running smoothly.</p>
              </Link>
              <Link href="/guides/product-tier-list/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Product Tier List</h3>
                <p className="text-[#5a6370] text-sm">Stock the products customers want most: ranked by margin and demand.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
