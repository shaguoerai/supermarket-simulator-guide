import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Trophy, Lock, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Achievements Guide | Supermarket Simulator Guide",
  description: "Complete Supermarket Simulator achievements list with unlock conditions and tips.",
  openGraph: {
    title: "Achievements Guide | Supermarket Simulator Guide",
    description: "Complete Supermarket Simulator achievements list with unlock conditions and tips.",
  },
};

const achievements = [
  { name: "And the best store in town is...", desc: "Reach a 5-star store rating.", hint: "Focus on cleanliness, variety, and fast checkout. Takes consistent effort over multiple in-game days." },
  { name: "The greatest!", desc: "Earn $10,000 in a single day.", hint: "Requires a large store with high-margin products and efficient staff. Alcohol and electronics help push revenue over the threshold." },
  { name: "Finally", desc: "Hire your first employee.", hint: "Unlocks early. Use the hiring terminal when you have enough daily profit to cover wages." },
  { name: "Economy 101", desc: "Make your first profit.", hint: "Story-related. Happens naturally on day 1 or 2 if you price items above cost." },
  { name: "Expansion", desc: "Expand your store for the first time.", hint: "Purchase a floor expansion from the upgrade menu. Save up $2,000-$5,000 depending on expansion size." },
  { name: "Big Boss", desc: "Hire 5 employees.", hint: "Hire cashiers, restockers, security, and cleaners until you reach 5 total staff members." },
  { name: "Online Orders", desc: "Complete 10 online delivery orders.", hint: "Use the in-game computer to accept online orders, then pack and deliver them personally." },
  { name: "License to Sell", desc: "Purchase your first product license.", hint: "Alcohol and tobacco licenses are available from the licensing menu. Costs vary by region." },
  { name: "Fully Stocked", desc: "Have every shelf in your store filled at once.", hint: "Order enough stock to fill all shelf slots simultaneously. Easier with fewer shelves." },
  { name: "Clean Store", desc: "Maintain 100% cleanliness for a full day.", hint: "Hire a cleaner or mop constantly. No spills or trash can be present from open to close." },
  { name: "No Thieves Allowed", desc: "Catch 10 shoplifters.", hint: "Stand near high-value items and watch for suspicious behavior. Security staff speed this up." },
  { name: "Decorator", desc: "Place 20 decorations in your store.", hint: "Buy plants, posters, and lighting from the decor catalog. Cheap way to boost store atmosphere." },
  { name: "Local Supplier", desc: "Buy goods from the local market 10 times.", hint: "Drive to the local market and purchase items directly instead of using the online supplier." },
  { name: "Rich", desc: "Have $50,000 in your account at once.", hint: "Save aggressively. Do not expand or hire until you hit the threshold." },
  { name: "Perfectionist", desc: "Achieve a perfect day with 5 stars, max cleanliness, and no shoplifters escaping.", hint: "Late-game challenge. Requires a well-trained team and attentive management." },
];

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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Achievements Guide</h1>
        <p className="text-[#8a9299] mb-8 text-lg">All 15 Steam achievements and how to unlock them.</p>

        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <div key={ach.name} className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] flex gap-4 items-start">
              <div className="mt-1">
                <Trophy className="w-5 h-5 text-[#d97706]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-[#181c25]">{ach.name}</h3>
                </div>
                <p className="text-[#8a9299] text-sm mb-2">{ach.desc}</p>
                <p className="text-[#8a9299] text-xs"><Star className="w-3 h-3 inline mr-1" />{ach.hint}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
          <p className="text-[#8a9299] text-sm">
            <Lock className="w-4 h-4 inline mr-1" />
            <strong className="text-[#181c25]">Note:</strong> Achievement names and conditions are based on community reports and Steam profile data. Some unlock conditions may have changed with updates. If you find a discrepancy, check the Steam Community Hub for the latest patch notes.
          </p>
        </div>
      </main>

      <footer className="border-t border-[#e5e7eb] py-8 bg-[#f6f8f7]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[#8a9299] text-sm space-y-3">
          <p>
            Supermarket Simulator Guide — Unofficial fan site. Not affiliated with Nokta Games.
          </p>
          <p>
            All game content, names, and trademarks are property of their respective owners.
            This site is for informational purposes only. Information may not be 100% accurate or up-to-date.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <Link href="/privacy-policy/" className="text-[#d97706] hover:underline">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/" className="text-[#d97706] hover:underline">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
