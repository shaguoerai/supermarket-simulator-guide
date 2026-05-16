import { Metadata } from "next";
import { ArrowLeft, Gamepad2, Shield, Cookie, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Supermarket Simulator Guide",
  description: "Privacy policy for Supermarket Simulator Guide. Learn what data we collect, how we use it, and your rights.",
  alternates: {
    canonical: "https://smsimhub.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Supermarket Simulator Guide",
    description: "Privacy policy for Supermarket Simulator Guide. Learn what data we collect, how we use it, and your rights.",
    url: "https://smsimhub.com/privacy-policy/",
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Supermarket Simulator Guide",
    description: "Privacy policy for Supermarket Simulator Guide. Learn what data we collect, how we use it, and your rights.",
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
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-[#d97706]" />
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-[#8a9299] mb-10 text-lg">
          Last updated: May 16, 2026. This policy explains how we collect, use, and protect your information.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">1. Information We Collect</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              When you visit our website, we may collect the following types of information:
            </p>
            <ul className="space-y-2 text-[#5a6370] list-disc list-inside">
              <li><strong>IP Address:</strong> Used for analytics and security purposes.</li>
              <li><strong>Device Information:</strong> Browser type, operating system, screen resolution.</li>
              <li><strong>Cookies:</strong> Small text files stored on your device to improve your experience.</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, referral sources.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">2. How We Use Your Information</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              We use the collected data for the following purposes:
            </p>
            <ul className="space-y-2 text-[#5a6370] list-disc list-inside">
              <li><strong>Analytics:</strong> To understand how visitors use our site and improve content.</li>
              <li><strong>Advertising Personalization:</strong> To display relevant ads through Google AdSense.</li>
              <li><strong>Site Performance:</strong> To monitor and optimize website speed and reliability.</li>
              <li><strong>Security:</strong> To detect and prevent abuse or unauthorized access.</li>
              <li><strong>Affiliate Marketing:</strong> To earn commission income through affiliate marketing programs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">3. Third-Party Services</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              We use the following third-party services that may collect data:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <div className="flex items-center gap-2 mb-1">
                  <ExternalLink className="w-4 h-4 text-[#d97706]" />
                  <h3 className="font-semibold">Google Analytics</h3>
                </div>
                <p className="text-[#8a9299] text-sm">Tracks website traffic and user behavior. Data is anonymized where possible.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <div className="flex items-center gap-2 mb-1">
                  <ExternalLink className="w-4 h-4 text-[#d97706]" />
                  <h3 className="font-semibold">Google AdSense</h3>
                </div>
                <p className="text-[#8a9299] text-sm">Displays personalized advertisements. Uses cookies to serve ads based on your interests.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <div className="flex items-center gap-2 mb-1">
                  <ExternalLink className="w-4 h-4 text-[#d97706]" />
                  <h3 className="font-semibold">Steam Affiliate Program</h3>
                </div>
                <p className="text-[#8a9299] text-sm">Game links on this site may be Steam affiliate links. We earn a commission if you purchase through these links. Steam uses cookies to track referrals.</p>
              </div>
              <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
                <div className="flex items-center gap-2 mb-1">
                  <ExternalLink className="w-4 h-4 text-[#d97706]" />
                  <h3 className="font-semibold">Amazon Associate Program</h3>
                </div>
                <p className="text-[#8a9299] text-sm">We participate in the Amazon Services LLC Associates Program. Product links may earn advertising fees. Amazon uses cookies to track referrals.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">4. Cookies</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              We use cookies to enhance your browsing experience. You can manage your cookie preferences through the cookie consent banner that appears on your first visit.
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <div className="flex items-start gap-3">
                <Cookie className="w-5 h-5 text-[#d97706] mt-0.5" />
                <div>
                  <p className="text-[#5a6370] text-sm font-semibold mb-1">Cookie Preferences</p>
                  <p className="text-[#8a9299] text-sm">You can change your cookie preferences at any time by clearing your browser cookies and revisiting the site. Essential cookies (required for site functionality) cannot be disabled.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">5. Your Rights (GDPR & CCPA)</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              Depending on your location, you have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2 text-[#5a6370] list-disc list-inside">
              <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate information.</li>
              <li><strong>Opt-out:</strong> Opt out of personalized advertising and data selling.</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">6. California Privacy Rights (CCPA)</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              If you are a California resident, the California Consumer Privacy Act (CCPA) grants you additional rights:
            </p>
            <ul className="space-y-2 text-[#5a6370] list-disc list-inside mb-4">
              <li>The right to know what personal information is collected about you.</li>
              <li>The right to know whether your personal information is sold or disclosed.</li>
              <li>The right to say no to the sale of personal information.</li>
              <li>The right to equal service and price, even if you exercise your privacy rights.</li>
            </ul>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb]">
              <p className="text-[#5a6370] text-sm font-semibold mb-2">Do Not Sell My Personal Information</p>
              <p className="text-[#8a9299] text-sm mb-3">
                We do not sell your personal information to third parties. However, some third-party services (such as Google AdSense) may use cookies for advertising purposes, which could be considered a "sale" under CCPA definitions.
              </p>
              <p className="text-[#8a9299] text-sm">
                To opt out of personalized advertising, you can:
              </p>
              <ul className="mt-2 space-y-1 text-[#8a9299] text-sm list-disc list-inside">
                <li>Use the cookie consent banner to decline non-essential cookies</li>
                <li>Visit <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-[#d97706] hover:underline">Google Ad Settings</a> to manage your ad preferences</li>
                <li>Visit <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#d97706] hover:underline">Your Online Choices</a> to opt out of interest-based advertising</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">7. Data Retention</h2>
            <p className="text-[#5a6370] leading-relaxed">
              We retain analytics data for up to 26 months. After this period, data is automatically deleted or anonymized. We do not store any personally identifiable information beyond what is necessary for site operation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-[#d97706]">8. Contact Us</h2>
            <p className="text-[#5a6370] leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="p-4 rounded-sm bg-[#f6f8f7] border border-[#e5e7eb] inline-flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#d97706]" />
              <a href="mailto:privacy@supermarketsimulator.guide" className="text-[#d97706] hover:underline">
                privacy@supermarketsimulator.guide
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
