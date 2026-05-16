import { Metadata } from "next";
import { ArrowLeft, Gamepad2, UserPlus, GraduationCap, Wallet } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Staff Management Guide | Supermarket Simulator Guide",
  description: "Hiring, training, and managing staff in Supermarket Simulator: when to hire, skill priorities, and wage settings.",
  alternates: {
    canonical: "https://smsimhub.com/guides/staff-management/",
  },
  openGraph: {
    title: "Staff Management Guide | Supermarket Simulator Guide",
    description: "Hiring, training, and managing staff in Supermarket Simulator: when to hire, skill priorities, and wage settings.",
    url: "https://smsimhub.com/guides/staff-management/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Staff Management Guide | Supermarket Simulator Guide",
    description: "Complete staff management guide for Supermarket Simulator: hiring thresholds, role assignments, salary management, and employee satisfaction tips.",
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Staff Management Guide</h1>
        <p className="text-[#8a9299] mb-8 text-lg">Build a reliable team without bleeding your profits dry.</p>

        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserPlus className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">When to Hire</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Staff are a major recurring expense. Hire too early and your daily profits vanish into wages. Hire too late and customers leave because shelves are empty or checkout lines are too long.
            </p>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              The community-tested rule: hire your first employee when you have at least 8 shelves, daily revenue exceeds $800, and you find yourself spending more than 50% of your time at the checkout register.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#d97706] font-semibold mb-2">Hiring Order</p>
              <ol className="text-[#5a6370] text-sm space-y-1 list-decimal list-inside">
                <li>Cashier — Frees you from the register.</li>
                <li>Restocker — Keeps shelves full while you manage.</li>
                <li>Security — Reduces shoplifting losses in larger stores.</li>
                <li>Cleaner — Essential once you exceed 12 shelves.</li>
              </ol>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Training Priority</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Employees gain experience over time and can be trained to improve specific skills. Training costs money upfront but pays off through faster work and fewer mistakes.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Cashier Speed</h3>
                <p className="text-[#5a6370] text-sm">Top priority. Faster checkout = shorter lines = happier customers = more sales per hour.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Restocking Speed</h3>
                <p className="text-[#5a6370] text-sm">Second priority. Empty shelves are lost revenue. A fast restocker keeps product flowing.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Customer Service</h3>
                <p className="text-[#5a6370] text-sm">Reduces complaints and increases customer patience. Train after speed skills are maxed.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <h3 className="font-semibold text-[#d97706] mb-1">Security Awareness</h3>
                <p className="text-[#5a6370] text-sm">Helps spot shoplifters faster. Train security staff first, others later.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-6 h-6 text-[#d97706]" />
              <h2 className="text-2xl font-bold">Wage Settings</h2>
            </div>
            <p className="text-[#5a6370] leading-relaxed mb-4">
              Wages are a fixed daily cost regardless of how busy you are. Start employees at the default wage and raise it only when they reach higher skill levels or when morale drops.
            </p>
            <p className="text-[#5a6370] leading-relaxed">
              Low morale leads to slower work and higher quit rates. If an employee starts complaining, a small wage bump (10-15%) usually fixes it. High-turnover staff cost more in training than a modest raise.
            </p>
          </section>
        </div>

        {/* Related Guides */}
        <section className="max-w-4xl mx-auto px-6 mt-2 mb-2 w-full">
          <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
            <div className="flex items-center gap-3 mb-2">
              <UserPlus className="w-5 h-5 text-[#d97706]" />
              <h2 className="text-xl font-bold">Related Guides</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/guides/store-layout/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Store Layout Guide</h3>
                <p className="text-[#5a6370] text-sm">Design efficient floor plans for staff to restock and customers to browse.</p>
              </Link>
              <Link href="/guides/customer-satisfaction/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Customer Satisfaction</h3>
                <p className="text-[#5a6370] text-sm">Keep customers happy with fast checkout, cleanliness, and product variety.</p>
              </Link>
              <Link href="/guides/money-making/" className="text-[#d97706] hover:underline block">
                <h3 className="font-semibold mb-1">Money Making Guide</h3>
                <p className="text-[#5a6370] text-sm">Maximize revenue using high-margin products and efficient staffing.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
