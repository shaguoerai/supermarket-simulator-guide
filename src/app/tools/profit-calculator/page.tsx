"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingUp, AlertCircle, CheckCircle2, DollarSign, Package, ArrowLeft, Gamepad2 } from "lucide-react";
import Link from "next/link";

const softwareSchemaProfitCalc = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Supermarket Simulator Profit Calculator",
  "applicationCategory": "GameGuide",
  "operatingSystem": "Web",
  "description": "Interactive profit calculator for Supermarket Simulator. Select any product, input retail price, and see real-time profit per unit, margin percentage, markup rate, and pricing suggestions.",
  "url": "https://smsimhub.com/tools/profit-calculator/",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

interface Product {
  name: string;
  category: string;
  tier: string;
  wholesale: number;
  suggestedMin: number;
  suggestedMax: number;
}

const products: Product[] = [
  // S-tier
  { name: "Beer", category: "Alcohol", tier: "S", wholesale: 8, suggestedMin: 9.6, suggestedMax: 12 },
  { name: "Wine", category: "Alcohol", tier: "S", wholesale: 12, suggestedMin: 14.4, suggestedMax: 18 },
  { name: "Cigarettes", category: "Tobacco", tier: "S", wholesale: 6, suggestedMin: 7.2, suggestedMax: 9 },
  { name: "Headphones", category: "Electronics", tier: "S", wholesale: 25, suggestedMin: 30, suggestedMax: 37.5 },
  { name: "Phone Charger", category: "Electronics", tier: "S", wholesale: 8, suggestedMin: 9.6, suggestedMax: 12 },
  { name: "Frozen Pizza", category: "Frozen", tier: "S", wholesale: 5, suggestedMin: 6, suggestedMax: 7.5 },
  { name: "Energy Drinks", category: "Drinks", tier: "S", wholesale: 2, suggestedMin: 2.4, suggestedMax: 3 },
  // A-tier
  { name: "Soda", category: "Drinks", tier: "A", wholesale: 1.5, suggestedMin: 1.8, suggestedMax: 2.25 },
  { name: "Chips", category: "Snacks", tier: "A", wholesale: 1, suggestedMin: 1.2, suggestedMax: 1.5 },
  { name: "Cookies", category: "Snacks", tier: "A", wholesale: 1.2, suggestedMin: 1.44, suggestedMax: 1.8 },
  { name: "Ice Cream", category: "Frozen", tier: "A", wholesale: 3, suggestedMin: 3.6, suggestedMax: 4.5 },
  { name: "Coffee", category: "Drinks", tier: "A", wholesale: 2, suggestedMin: 2.4, suggestedMax: 3 },
  { name: "Chocolate", category: "Snacks", tier: "A", wholesale: 1.5, suggestedMin: 1.8, suggestedMax: 2.25 },
  { name: "Cereal", category: "Food", tier: "A", wholesale: 2.5, suggestedMin: 3, suggestedMax: 3.75 },
  // B-tier
  { name: "Bread", category: "Food", tier: "B", wholesale: 0.8, suggestedMin: 0.96, suggestedMax: 1.2 },
  { name: "Milk", category: "Dairy", tier: "B", wholesale: 1, suggestedMin: 1.2, suggestedMax: 1.5 },
  { name: "Eggs", category: "Dairy", tier: "B", wholesale: 1.2, suggestedMin: 1.44, suggestedMax: 1.8 },
  { name: "Canned Soup", category: "Canned", tier: "B", wholesale: 1, suggestedMin: 1.2, suggestedMax: 1.5 },
  { name: "Pasta", category: "Food", tier: "B", wholesale: 0.8, suggestedMin: 0.96, suggestedMax: 1.2 },
  { name: "Rice", category: "Food", tier: "B", wholesale: 1, suggestedMin: 1.2, suggestedMax: 1.5 },
  { name: "Toilet Paper", category: "Household", tier: "B", wholesale: 2, suggestedMin: 2.4, suggestedMax: 3 },
  { name: "Detergent", category: "Household", tier: "B", wholesale: 3, suggestedMin: 3.6, suggestedMax: 4.5 },
  // C-tier
  { name: "Apples", category: "Produce", tier: "C", wholesale: 0.5, suggestedMin: 0.6, suggestedMax: 0.75 },
  { name: "Bananas", category: "Produce", tier: "C", wholesale: 0.4, suggestedMin: 0.48, suggestedMax: 0.6 },
  { name: "Baked Bread", category: "Bakery", tier: "C", wholesale: 1, suggestedMin: 1.2, suggestedMax: 1.5 },
  { name: "Dog Food", category: "Pet", tier: "C", wholesale: 2.5, suggestedMin: 3, suggestedMax: 3.75 },
];

const tierColors: Record<string, string> = {
  S: "text-yellow-500",
  A: "text-[#d97706]",
  B: "text-blue-500",
  C: "text-[#8a9299]",
};

function getProfitRating(marginPercent: number): { label: string; color: string; icon: typeof CheckCircle2 } {
  if (marginPercent >= 50) return { label: "High", color: "text-emerald-600 bg-emerald-50 border-emerald-200", icon: CheckCircle2 };
  if (marginPercent >= 30) return { label: "Medium", color: "text-[#d97706] bg-[#fffbeb] border-[#fcd34d]", icon: TrendingUp };
  return { label: "Low", color: "text-red-600 bg-red-50 border-red-200", icon: AlertCircle };
}

function formatCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

export default function ProfitCalculatorPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);
  const [retailPrice, setRetailPrice] = useState<string>("");
  const [customWholesale, setCustomWholesale] = useState<string>("");

  const wholesale = customWholesale !== "" ? parseFloat(customWholesale) : selectedProduct.wholesale;
  const retail = parseFloat(retailPrice) || 0;
  const profit = retail - wholesale;
  const marginPercent = retail > 0 ? (profit / retail) * 100 : 0;
  const markupPercent = wholesale > 0 ? ((retail - wholesale) / wholesale) * 100 : 0;

  const rating = getProfitRating(marginPercent);
  const RatingIcon = rating.icon;

  const sameCategoryProducts = useMemo(
    () => products.filter((p) => p.category === selectedProduct.category && p.name !== selectedProduct.name),
    [selectedProduct]
  );

  const suggestions = useMemo(() => {
    const s: string[] = [];
    if (retail <= 0) return s;
    if (marginPercent < 20) s.push("Margin is very low. Consider raising price toward 1.5x markup.");
    else if (marginPercent < 30) s.push("Margin is acceptable but could be improved. Try 1.3x-1.5x markup.");
    else if (marginPercent > 70) s.push("Margin is very high. Customers may complain about pricing.");
    else s.push("Good profit margin. This pricing is within the community sweet spot.");

    if (retail < selectedProduct.suggestedMin) s.push(`Below community minimum (${formatCurrency(selectedProduct.suggestedMin)}). You're leaving money on the table.`);
    if (retail > selectedProduct.suggestedMax * 1.2) s.push(`Well above suggested max (${formatCurrency(selectedProduct.suggestedMax)}). Risk of customer dissatisfaction.`);

    return s;
  }, [retail, marginPercent, selectedProduct]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#181c25]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchemaProfitCalc) }}
      />
      {/* Header */}
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
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#fffbeb] border border-[#fcd34d] flex items-center justify-center text-[#d97706] rounded-sm">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Profit Calculator</h1>
            <p className="text-[#8a9299] text-lg">Input your retail price and see profit, margin, and pricing advice.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Left: Inputs */}
          <div className="space-y-6">
            {/* Product Select */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <Package className="w-4 h-4 text-[#d97706]" />
                Select Product
              </label>
              <select
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-sm text-[#181c25] focus:outline-none focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] transition-colors"
                value={selectedProduct.name}
                onChange={(e) => {
                  const p = products.find((x) => x.name === e.target.value)!;
                  setSelectedProduct(p);
                  setCustomWholesale("");
                }}
              >
                {["S", "A", "B", "C"].map((tier) => (
                  <optgroup key={tier} label={`Tier ${tier}`}>
                    {products
                      .filter((p) => p.tier === tier)
                      .map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name} — {p.category}
                        </option>
                      ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Wholesale Cost */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#d97706]" />
                Wholesale Cost
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  className="flex-1 px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-sm text-[#181c25] focus:outline-none focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] transition-colors"
                  value={customWholesale}
                  placeholder={selectedProduct.wholesale.toFixed(2)}
                  onChange={(e) => setCustomWholesale(e.target.value)}
                />
                <button
                  onClick={() => setCustomWholesale("")}
                  className="px-3 py-2.5 text-sm text-[#2563eb] hover:text-[#1d4ed8] font-medium border border-[#e5e7eb] rounded-sm hover:bg-[#f6f8f7] transition-colors"
                >
                  Reset
                </button>
              </div>
              <p className="text-xs text-[#8a9299] mt-1.5">
                Default: {formatCurrency(selectedProduct.wholesale)} · Suggested range: {formatCurrency(selectedProduct.suggestedMin)} – {formatCurrency(selectedProduct.suggestedMax)}
              </p>
            </div>

            {/* Retail Price */}
            <div>
              <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#d97706]" />
                Your Retail Price
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                className="w-full px-3 py-2.5 bg-white border border-[#e5e7eb] rounded-sm text-[#181c25] focus:outline-none focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] transition-colors"
                value={retailPrice}
                placeholder="Enter price..."
                onChange={(e) => setRetailPrice(e.target.value)}
              />
              <p className="text-xs text-[#8a9299] mt-1.5">
                Community consensus: 1.2x–1.5x markup over wholesale
              </p>
            </div>

            {/* Quick price buttons */}
            <div className="flex flex-wrap gap-2">
              {[1.2, 1.3, 1.5].map((mult) => {
                const price = (wholesale * mult).toFixed(2);
                return (
                  <button
                    key={mult}
                    onClick={() => setRetailPrice(price)}
                    className="px-3 py-1.5 text-sm border border-[#e5e7eb] rounded-sm hover:border-[#d97706] hover:text-[#d97706] transition-colors bg-[#f6f8f7]"
                  >
                    {mult}x = {formatCurrency(parseFloat(price))}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            {/* Profit Card */}
            <div className="bg-white border border-[#e5e7eb] rounded-sm p-6">
              <h2 className="text-sm font-semibold text-[#8a9299] uppercase tracking-wide mb-4">Profit Analysis</h2>

              {retail > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#5a6370]">Profit per unit</span>
                    <span className={`text-2xl font-bold ${profit >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                      {formatCurrency(profit)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5a6370]">Profit margin</span>
                    <span className="text-xl font-bold text-[#181c25]">{marginPercent.toFixed(1)}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5a6370]">Markup over cost</span>
                    <span className="text-xl font-bold text-[#181c25]">{markupPercent.toFixed(1)}%</span>
                  </div>

                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border text-sm font-semibold ${rating.color}`}>
                    <RatingIcon className="w-4 h-4" />
                    {rating.label} Margin
                  </div>

                  {/* Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#e5e7eb] space-y-2">
                      {suggestions.map((s, i) => (
                        <p key={i} className="text-sm text-[#5a6370] flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                          {s}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-[#8a9299]">
                  <Calculator className="w-10 h-10 mx-auto mb-3 text-[#e5e7eb]" />
                  <p>Enter a retail price to see profit analysis</p>
                </div>
              )}
            </div>

            {/* Category Comparison */}
            {retail > 0 && sameCategoryProducts.length > 0 && (
              <div className="bg-white border border-[#e5e7eb] rounded-sm p-6">
                <h2 className="text-sm font-semibold text-[#8a9299] uppercase tracking-wide mb-4">
                  Same Category Comparison
                </h2>
                <div className="space-y-3">
                  {/* Current product row */}
                  <div className="flex items-center justify-between py-2 px-3 bg-[#f6f8f7] rounded-sm border border-[#e5e7eb]">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-sm ${tierColors[selectedProduct.tier]}`}>{selectedProduct.name}</span>
                      <span className="text-xs text-[#8a9299]">(your price)</span>
                    </div>
                    <span className="text-sm font-semibold text-[#181c25]">{marginPercent.toFixed(1)}% margin</span>
                  </div>
                  {sameCategoryProducts.map((p) => {
                    const pMargin = ((retail - p.wholesale) / retail) * 100;
                    return (
                      <div key={p.name} className="flex items-center justify-between py-2 px-3">
                        <span className={`text-sm ${tierColors[p.tier]}`}>{p.name}</span>
                        <span className={`text-sm font-medium ${pMargin >= 30 ? "text-emerald-600" : pMargin >= 20 ? "text-[#d97706]" : "text-red-600"}`}>
                          {pMargin.toFixed(1)}% margin
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-[#8a9299] mt-3">
                  Shows what margin you would get if you priced all {selectedProduct.category} items at {formatCurrency(retail)}.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Related Tool Section */}
      <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
        <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-[#d97706]" />
            <h2 className="text-xl font-bold">Related Tool</h2>
          </div>
          <Link href="/tier-list/" className="text-[#d97706] hover:underline">
            <h3 className="font-semibold mb-1">Product Tier List</h3>
            <p className="text-[#5a6370] text-sm">Browse all products ranked by tier, category, margin, and license requirements.</p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] py-8 bg-[#f6f8f7]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#8a9299] text-sm space-y-3">
          <p>
            Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
          </p>
          <p>
            All game content, names, and trademarks are property of their respective owners.
            This site is for informational purposes only. Information may not be 100% accurate or up-to-date.
          </p>
          <p className="text-xs">
            As an Amazon Associate and Steam Affiliate, we earn from qualifying purchases made through product links on this site.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link href="/privacy-policy/" className="text-[#2563eb] hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/" className="text-[#2563eb] hover:underline">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
