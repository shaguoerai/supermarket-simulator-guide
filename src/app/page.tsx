import { Metadata } from "next";
import { Gamepad2, BookOpen, Trophy, Code, GitCompare, ArrowRight, Sparkles, Clock, Star, Zap, TrendingUp, Calculator } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
  description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
  openGraph: {
    title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
    description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
  },
};

const featuredGuides = [
  { href: "/guides/beginner-tips/", title: "Beginner Tips", desc: "Essential tips to get started with your first store, pricing basics, and early-game priorities.", date: "Updated 2 days ago", icon: BookOpen, tag: "Popular", image: "/images/guides/beginner-tips.jpg" },
  { href: "/guides/money-making/", title: "Money Making Strategies", desc: "Best strategies to earn fast: high-margin products, pricing psychology, and bulk restocking.", date: "Updated 5 days ago", icon: TrendingUp, tag: null, image: "/images/guides/money-making.jpg" },
  { href: "/guides/product-tier-list/", title: "Product Tier List", desc: "Rank every product by profitability, sell-through rate, and shelf space efficiency.", date: "Updated 1 week ago", icon: Trophy, tag: "Essential", image: "/images/guides/product-tier-list.jpg" },
];

const guides = [
  { href: "/guides/staff-management/", title: "Staff Management", desc: "When to hire, how to assign roles, and keeping employee satisfaction high.", date: "Updated 3 days ago", icon: Gamepad2, image: "/images/guides/staff-management.jpg" },
  { href: "/guides/store-layout/", title: "Store Layout", desc: "Optimal floor plans for customer flow, shelf placement, and checkout efficiency.", date: "Updated 2 weeks ago", icon: BookOpen, image: "/images/guides/store-layout.jpg" },
  { href: "/guides/restock-strategy/", title: "Restock Strategy", desc: "When and what to restock. Avoid overstocking and stockout losses.", date: "Updated 4 days ago", icon: Zap, image: "/images/guides/restock-strategy.jpg" },
  { href: "/guides/customer-satisfaction/", title: "Customer Satisfaction", desc: "Keep customers happy: cleanliness, pricing, wait times, and product variety.", date: "Updated 1 week ago", icon: Star, image: "/images/guides/customer-satisfaction.jpg" },
  { href: "/guides/achievements/", title: "Achievements", desc: "Complete achievement list with unlock conditions and tips.", date: "Updated 3 weeks ago", icon: Trophy, image: "/images/guides/achievements.jpg" },
];

const tools = [
  { href: "/tools/profit-calculator/", title: "Profit Calculator", desc: "Calculate profit, margin, and pricing advice for any product.", icon: Calculator },
  { href: "/tier-list/", title: "Product Tier List", desc: "Interactive ranking of all products with sortable columns.", icon: Trophy },
  { href: "/cheats/", title: "Cheats & Commands", desc: "All console commands and cheat codes for PC.", icon: Code },
  { href: "/compare/", title: "Version Compare", desc: "Compare versions and similar store sim games.", icon: GitCompare },
];

const siteUrl = "https://smsimhub.com";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#181c25]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Supermarket Simulator Guide",
            "url": siteUrl,
          }),
        }}
      />
      {/* Navbar */}
      <nav className="border-b border-[#e5e7eb] bg-white sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-[15px]">
            <Gamepad2 className="w-5 h-5 text-[#d97706]" />
            Supermarket Simulator Guide
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/guides/beginner-tips/" className="text-[#181c25] hover:text-[#d97706] transition-colors">Guides</Link>
            <Link href="/tier-list/" className="text-[#181c25] hover:text-[#d97706] transition-colors">Tier List</Link>
            <Link href="/tools/profit-calculator/" className="text-[#181c25] hover:text-[#d97706] transition-colors">Tools</Link>
            <Link href="/cheats/" className="text-[#181c25] hover:text-[#d97706] transition-colors">Cheats</Link>
            <Link href="/compare/" className="text-[#181c25] hover:text-[#d97706] transition-colors">Compare</Link>
          </div>
        </div>
      </nav>

      {/* Hero with background image */}
      <header className="relative border-b border-[#e5e7eb] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero/hero-home.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181c25]/90 via-[#181c25]/70 to-[#181c25]/50" />
        
        <div className="relative max-w-5xl mx-auto px-4 py-12 md:py-16">
          <div className="flex items-start gap-2 text-[#fcd34d] text-sm font-medium mb-3">
            <span className="bg-[#d97706]/20 border border-[#d97706]/40 px-2 py-0.5 rounded-sm backdrop-blur-sm">Unofficial Fan Guide</span>
            <span className="bg-[#15803d]/20 border border-[#15803d]/40 text-[#86efac] px-2 py-0.5 rounded-sm backdrop-blur-sm">Last updated May 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-white">
            Supermarket Simulator Guide
          </h1>
          <p className="text-[#c8cdd5] text-base md:text-lg max-w-2xl leading-relaxed">
            Complete guides, tier lists, cheats, and strategies to master{" "}
            <a href="https://store.steampowered.com/app/2670630/Supermarket_Simulator/" target="_blank" rel="noopener noreferrer" className="text-[#fcd34d] hover:underline">Supermarket Simulator on Steam</a>.
            Build your retail empire with expert tips from the community.
          </p>
        </div>
      </header>

      {/* Interactive Tools — Highlighted */}
      <section className="py-8 bg-[#fffbeb] border-y border-[#fcd34d]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#d97706]" />
            <h2 className="text-xl font-bold">Interactive Tools — Only Here</h2>
          </div>
          <p className="text-[#5a6370] text-sm mb-6">No other Supermarket Simulator site offers these. Try them now.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/tools/profit-calculator/"
              className="bg-white border-2 border-[#d97706] rounded-sm p-6 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fffbeb] border border-[#fcd34d] flex items-center justify-center text-[#d97706] rounded-sm shrink-0">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#181c25] group-hover:text-[#2563eb] transition-colors mb-1">
                    Profit Calculator
                  </h3>
                  <p className="text-[#5a6370] text-sm leading-relaxed mb-2">
                    Pick any product, set your price, and instantly see profit, margin, and pricing advice. 
                    26 products with wholesale costs built in.
                  </p>
                  <span className="text-[#d97706] text-sm font-semibold flex items-center gap-1">
                    Try it <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="/tier-list/"
              className="bg-white border-2 border-[#d97706] rounded-sm p-6 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#fffbeb] border border-[#fcd34d] flex items-center justify-center text-[#d97706] rounded-sm shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#181c25] group-hover:text-[#2563eb] transition-colors mb-1">
                    Product Tier List
                  </h3>
                  <p className="text-[#5a6370] text-sm leading-relaxed mb-2">
                    All 26 products ranked by profitability. Filter by tier, category, and margin. 
                    See which items deserve your shelf space.
                  </p>
                  <span className="text-[#d97706] text-sm font-semibold flex items-center gap-1">
                    Browse <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Guides — Top 3 with emphasis */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Featured Guides</h2>
            <Link href="/guides/beginner-tips/" className="text-sm text-[#2563eb] hover:text-[#1d4ed8] font-medium flex items-center gap-1">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredGuides.map((g) => {
              const Icon = g.icon;
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  className="bg-white border border-[#e5e7eb] rounded-sm overflow-hidden hover:border-[#d97706] transition-colors group"
                >
                  {g.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={g.image} 
                        alt={g.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {g.tag && (
                        <span className="absolute top-2 left-2 text-[11px] font-semibold uppercase tracking-wide text-white bg-[#d97706] px-1.5 py-0.5 rounded-sm">
                          {g.tag}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 bg-[#fffbeb] border border-[#fcd34d] flex items-center justify-center text-[#d97706] rounded-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      {!g.image && g.tag && (
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-[#d97706] bg-[#fffbeb] border border-[#fcd34d] px-1.5 py-0.5 rounded-sm">
                          {g.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-[15px] text-[#181c25] group-hover:text-[#2563eb] transition-colors mb-1.5">
                      {g.title}
                    </h3>
                    <p className="text-[#5a6370] text-sm leading-relaxed mb-3">
                      {g.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#8a9299] text-xs">
                      <Clock className="w-3 h-3" />
                      {g.date}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Guides — List Layout */}
      <section className="py-8 bg-[#f6f8f7] border-t border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">More Guides</h2>
          <div className="bg-white border border-[#e5e7eb] rounded-sm divide-y divide-[#e5e7eb]">
            {guides.map((g) => {
              const Icon = g.icon;
              return (
                <Link
                  key={g.href}
                  href={g.href}
                  className="flex items-start gap-4 py-4 px-4 group hover:bg-[#f6f8f7] transition-colors"
                >
                  {g.image ? (
                    <img 
                      src={g.image} 
                      alt={g.title}
                      className="w-20 h-14 shrink-0 object-cover rounded-sm"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-10 h-10 shrink-0 bg-[#f6f8f7] border border-[#e5e7eb] flex items-center justify-center text-[#d97706] rounded-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[15px] text-[#181c25] group-hover:text-[#2563eb] transition-colors mb-1">
                      {g.title}
                    </h3>
                    <p className="text-[#5a6370] text-sm leading-relaxed mb-1">
                      {g.desc}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#8a9299] text-xs">
                      <Clock className="w-3 h-3" />
                      {g.date}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8a9299] shrink-0 mt-1 group-hover:text-[#d97706] transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & References */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">Tools & References</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <Link
                  key={t.href}
                  href={t.href}
                  className="bg-white border border-[#e5e7eb] rounded-sm p-5 hover:border-[#d97706] transition-colors group"
                >
                  <div className="w-9 h-9 bg-[#fffbeb] border border-[#fcd34d] flex items-center justify-center text-[#d97706] rounded-sm mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[#181c25] group-hover:text-[#2563eb] transition-colors mb-1">
                    {t.title}
                  </h3>
                  <p className="text-[#5a6370] text-sm leading-relaxed">
                    {t.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
