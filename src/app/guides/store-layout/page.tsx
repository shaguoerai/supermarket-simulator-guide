import { Metadata } from "next";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store Layout Guide | Supermarket Simulator Guide",
  description: "Optimal store layouts for maximum efficiency.",
  openGraph: {
    title: "Store Layout Guide | Supermarket Simulator Guide",
    description: "Optimal store layouts for maximum efficiency.",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2 ml-auto">
            <Gamepad2 className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold">Supermarket Simulator Guide</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Store Layout Guide</h1>
        <p className="text-zinc-400 mb-8 text-lg">Optimal store layouts for maximum efficiency.</p>
        
        <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
          <p className="text-zinc-500 mb-4">This guide is being written. Check back soon for the complete store layout guide.</p>
          <p className="text-sm text-zinc-600">Last updated: May 2026</p>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 text-sm">
          Supermarket Simulator Guide — Unofficial fan site
        </div>
      </footer>
    </div>
  );
}
