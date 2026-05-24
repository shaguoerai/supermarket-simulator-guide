import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Trophy, Lock, Star, Zap, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Achievements Guide | Supermarket Simulator Guide",
  description: "Complete Supermarket Simulator achievements list with unlock conditions, step-by-step strategies, and tips for Patch 1.3.1.",
  alternates: {
    canonical: "https://smsimhub.com/guides/achievements/",
  },
  openGraph: {
    title: "Achievements Guide | Supermarket Simulator Guide",
    description: "Complete Supermarket Simulator achievements list with unlock conditions, step-by-step strategies, and tips for Patch 1.3.1.",
    url: "https://smsimhub.com/guides/achievements/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements Guide | Supermarket Simulator Guide",
    description: "Complete achievement list for Supermarket Simulator: unlock conditions, step-by-step guides for every achievement, and reward details.",
    images: ["https://smsimhub.com/og-image.png"],
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
        <p className="text-[#8a9299] mb-8 text-lg">All 15 Steam achievements and how to unlock them efficiently.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Fastest Unlock Order</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              You do not need to chase achievements randomly. Follow this order to unlock them with minimal wasted effort:
            </p>
            <ol className="space-y-2 text-[#5a6370] list-decimal list-inside">
              <li><strong>Economy 101</strong> — Happens naturally on day 1.</li>
              <li><strong>Finally</strong> — Hire a cashier as soon as daily profit exceeds $200.</li>
              <li><strong>License to Sell</strong> — Buy the alcohol license once you have $500-$800 saved.</li>
              <li><strong>Expansion</strong> — Expand after hiring your first employee and stabilizing revenue.</li>
              <li><strong>Fully Stocked</strong> — Order bulk stock right after expansion when shelf count is still low.</li>
              <li><strong>Clean Store</strong> — Hire a cleaner and let them handle it.</li>
              <li><strong>Big Boss</strong> — Hire up to 5 staff as you grow.</li>
              <li><strong>No Thieves Allowed</strong> — Camp near electronics/alcohol shelves early on.</li>
              <li><strong>Online Orders</strong> — Accept every online order once the computer is available.</li>
              <li><strong>Local Supplier</strong> — Buy produce directly 10 times instead of online.</li>
              <li><strong>Decorator</strong> — Spam cheap decorations once you have spare cash.</li>
              <li><strong>Rich</strong> — Stop expanding and saving until $50,000.</li>
              <li><strong>The greatest!</strong> — Push for $10,000/day with alcohol + electronics focus.</li>
              <li><strong>And the best store in town is...</strong> — Late-game 5-star grind.</li>
              <li><strong>Perfectionist</strong> — Save for last; requires everything working together.</li>
            </ol>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Complete Achievement List</h2>
            </div>
            <div className="space-y-4">
              {achievements.map((ach) => (
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
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Patch 1.3.1 Achievement Impact</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Patch 1.3.1 fixed several bugs that indirectly affect achievement progression:
            </p>
            <ul className="space-y-3 text-[#5a6370]">
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Security antenna fix:</strong> Antennas now reliably detect shoplifters. The "No Thieves Allowed" achievement is easier to unlock with proper antenna placement.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Loan early payoff fix:</strong> Remaining installments are now included in the total. If you were avoiding loans to save for "Rich," you can now use loans safely and pay them off early without hidden costs.</li>
              <li className="flex gap-3"><span className="text-[#d97706] font-bold">•</span><strong>Gamepad UI fixes:</strong> Console players should have fewer menu navigation issues when managing staff or placing decorations.</li>
            </ul>
          </section>

          <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
            <p className="text-[#8a9299] text-sm">
              <Lock className="w-4 h-4 inline mr-1" />
              <strong className="text-[#181c25]">Note:</strong> Achievement names and conditions are based on community reports and Steam profile data. Some unlock conditions may have changed with updates. If you find a discrepancy, check the Steam Community Hub for the latest patch notes.
            </p>
          </div>
        </div>

        {/* Related Guides */}
        <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
          <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-5 h-5 text-[#d97706]" />
              <h2 className="text-xl font-bold">Related Guides</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/guides/beginner-tips/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Beginner Tips</h3>
                <p className="text-[#5a6370] text-sm">Essential tips to unlock achievements faster with efficient early-game play.</p>
              </Link>
              <Link href="/guides/money-making/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Money Making Guide</h3>
                <p className="text-[#5a6370] text-sm">Earn $10,000 in a day and unlock the hardest achievements.</p>
              </Link>
              <Link href="/guides/staff-management/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Staff Management</h3>
                <p className="text-[#5a6370] text-sm">Master hiring to unlock staff-related achievements quickly.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
