import { Metadata } from "next";
import { ArrowLeft, Gamepad2, UserPlus, GraduationCap, Wallet } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staff Management Guide | Supermarket Simulator Guide",
  description: "Hiring, training, and managing staff in Supermarket Simulator: when to hire, skill priorities, and wage settings.",
  openGraph: {
    title: "Staff Management Guide | Supermarket Simulator Guide",
    description: "Hiring, training, and managing staff in Supermarket Simulator: when to hire, skill priorities, and wage settings.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Staff Management Guide</h1>
        <p className="text-zinc-400 mb-8 text-lg">Build a reliable team without bleeding your profits dry.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserPlus className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">When to Hire</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Staff are a major recurring expense. Hire too early and your daily profits vanish into wages. Hire too late and customers leave because shelves are empty or checkout lines are too long.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The community-tested rule: hire your first employee when you have at least 8 shelves, daily revenue exceeds $800, and you find yourself spending more than 50% of your time at the checkout register.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
              <p className="text-emerald-400 font-semibold mb-2">Hiring Order</p>
              <ol className="text-zinc-300 text-sm space-y-1 list-decimal list-inside">
                <li>Cashier — Frees you from the register.</li>
                <li>Restocker — Keeps shelves full while you manage.</li>
                <li>Security — Reduces shoplifting losses in larger stores.</li>
                <li>Cleaner — Essential once you exceed 12 shelves.</li>
              </ol>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Training Priority</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Employees gain experience over time and can be trained to improve specific skills. Training costs money upfront but pays off through faster work and fewer mistakes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Cashier Speed</h3>
                <p className="text-zinc-300 text-sm">Top priority. Faster checkout = shorter lines = happier customers = more sales per hour.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Restocking Speed</h3>
                <p className="text-zinc-300 text-sm">Second priority. Empty shelves are lost revenue. A fast restocker keeps product flowing.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Customer Service</h3>
                <p className="text-zinc-300 text-sm">Reduces complaints and increases customer patience. Train after speed skills are maxed.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Security Awareness</h3>
                <p className="text-zinc-300 text-sm">Helps spot shoplifters faster. Train security staff first, others later.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Wage Settings</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Wages are a fixed daily cost regardless of how busy you are. Start employees at the default wage and raise it only when they reach higher skill levels or when morale drops.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Low morale leads to slower work and higher quit rates. If an employee starts complaining, a small wage bump (10-15%) usually fixes it. High-turnover staff cost more in training than a modest raise.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 text-sm space-y-3">
          <p>
            Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
          </p>
          <p>
            All game content, names, and trademarks are property of their respective owners.
            This site is for informational purposes only. Information may not be 100% accurate or up-to-date.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link href="/privacy-policy/" className="text-emerald-400 hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/" className="text-emerald-400 hover:underline">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
