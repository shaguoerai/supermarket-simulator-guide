import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Code, Terminal, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheats & Console Commands | Supermarket Simulator Guide",
  description: "All known console commands and cheats for Supermarket Simulator.",
  openGraph: {
    title: "Cheats & Console Commands | Supermarket Simulator Guide",
    description: "All known console commands and cheats for Supermarket Simulator.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Cheats & Console Commands</h1>
        <p className="text-zinc-400 mb-8 text-lg">Developer console commands and known workarounds.</p>

        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
            <div>
              <p className="text-amber-400 font-semibold mb-1">Important Notice</p>
              <p className="text-zinc-300 text-sm">Supermarket Simulator does not have traditional cheat codes or a public console command system as of the latest update. The developer, Nokta Games, has not released official cheat commands. Using third-party tools or save-file editing may corrupt your save or trigger anti-cheat measures in online co-op.</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">How to Access the Console</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The game is built on Unreal Engine, which means a developer console exists but is disabled in the retail build. Some players have reported enabling it through launch options, but this is not officially supported.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-sm text-zinc-300">
              <p className="text-zinc-500 mb-2"># Steam Launch Options (unverified)</p>
              <p>-dev -console</p>
            </div>
            <p className="text-zinc-400 text-sm mt-3">Even with the console enabled, most Unreal Engine commands (like god mode or give money) do not affect gameplay logic in this title because the game uses custom systems for money and inventory.</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Known "Money Glitches"</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              The community has reported a few money-related behaviors that may be unintended by the developers. These are not cheats in the traditional sense, but exploits of game mechanics:
            </p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Price Manipulation</h3>
                <p className="text-zinc-300 text-sm">Some players report that rapidly changing prices on high-demand items during peak hours can occasionally cause the game to miscalculate revenue, resulting in extra income. This is inconsistent and may have been patched.</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
                <h3 className="font-semibold text-emerald-400 mb-1">Duplication via Co-op</h3>
                <p className="text-zinc-300 text-sm">In online co-op, both players grabbing the same box simultaneously has reportedly caused item duplication. This is considered a bug, not a feature, and may result in save corruption.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold">Save File Editing (Advanced)</h2>
            </div>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Save files are stored locally and can be edited with a text editor. This is the only reliable way to "cheat" money or items, but it comes with risks.
            </p>
            <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-sm text-zinc-300">
              <p className="text-zinc-500 mb-2"># Typical save location</p>
              <p>%LOCALAPPDATA%\SupermarketSimulator\Saved\SaveGames\</p>
            </div>
            <p className="text-zinc-400 text-sm mt-3">Always back up your save file before editing. Incorrect edits will corrupt your progress.</p>
          </section>
        </div>
      </main>

      <footer className="border-t border-zinc-800 py-8 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center text-zinc-500 text-sm">
          Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
        </div>
      </footer>
    </div>
  );
}
