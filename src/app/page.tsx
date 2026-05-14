import { Metadata } from "next";
import { Gamepad2, BookOpen, Trophy, Code, GitCompare, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
  description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
  openGraph: {
    title: "Supermarket Simulator Guide | Tips, Tier Lists & Cheats",
    description: "Complete guide for Supermarket Simulator: beginner tips, money making strategies, product tier lists, staff management, cheats, and more.",
  },
};

const guides = [
  { href: "/guides/beginner-tips/", title: "Beginner Tips", desc: "Essential tips to get started", icon: <BookOpen className="w-5 h-5" /> },
  { href: "/guides/money-making/", title: "Money Making", desc: "Best strategies to earn fast", icon: <Sparkles className="w-5 h-5" /> },
  { href: "/guides/product-tier-list/", title: "Product Tier List", desc: "Rank products by profitability", icon: <Trophy className="w-5 h-5" /> },
  { href: "/guides/staff-management/", title: "Staff Management", desc: "Hire and manage employees", icon: <Gamepad2 className="w-5 h-5" /> },
  { href: "/guides/store-layout/", title: "Store Layout", desc: "Optimal layouts for efficiency", icon: <BookOpen className="w-5 h-5" /> },
  { href: "/guides/restock-strategy/", title: "Restock Strategy", desc: "When and what to restock", icon: <Sparkles className="w-5 h-5" /> },
  { href: "/guides/customer-satisfaction/", title: "Customer Satisfaction", desc: "Keep customers happy", icon: <Gamepad2 className="w-5 h-5" /> },
  { href: "/guides/achievements/", title: "Achievements", desc: "Complete achievement list", icon: <Trophy className="w-5 h-5" /> },
];

const tools = [
  { href: "/tier-list/", title: "Product Tier List", desc: "Interactive ranking of all products", icon: <Trophy className="w-6 h-6" /> },
  { href: "/cheats/", title: "Cheats & Commands", desc: "All console commands and cheats", icon: <Code className="w-6 h-6" /> },
  { href: "/compare/", title: "Version Compare", desc: "Compare versions & similar games", icon: <GitCompare className="w-6 h-6" /> },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-zinc-950" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Gamepad2 className="w-4 h-4" />
              Unofficial Fan Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Supermarket{" "}
              <span className="text-emerald-400">Simulator</span>{" "}
              Guide
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              Complete guides, tier lists, cheats, and strategies to master Supermarket Simulator. 
              Build your retail empire with expert tips.
            </p>
          </div>
        </div>
      </header>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Guides</h2>
            <p className="text-zinc-400">Step-by-step guides for every aspect of the game</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  {g.icon}
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-emerald-400 transition-colors">{g.title}</h3>
                <p className="text-zinc-400 text-sm">{g.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read guide <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Tools & References</h2>
            <p className="text-zinc-400">Quick references and interactive tools</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  {t.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-400 transition-colors">{t.title}</h3>
                <p className="text-zinc-400 text-sm">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 bg-zinc-900/50 mt-auto">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Supermarket Simulator Guide</span>
            </div>
            <p className="text-zinc-500 text-sm">
              Unofficial fan site. Not affiliated with the game developer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
