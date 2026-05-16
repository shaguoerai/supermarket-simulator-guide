import type { Metadata } from "next";

const siteUrl = "https://smsimhub.com";

export const metadata: Metadata = {
  title: "Profit Calculator | Supermarket Simulator Guide",
  description: "Calculate profit, margin, and optimal pricing for any product in Supermarket Simulator. 26 products with wholesale costs built in. Free interactive tool.",
  alternates: {
    canonical: `${siteUrl}/tools/profit-calculator/`,
  },
  openGraph: {
    title: "Profit Calculator | Supermarket Simulator Guide",
    description: "Calculate profit, margin, and optimal pricing for any product in Supermarket Simulator. 26 products with wholesale costs built in. Free interactive tool.",
    url: `${siteUrl}/tools/profit-calculator/`,
    siteName: "Supermarket Simulator Guide",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Profit Calculator | Supermarket Simulator Guide",
    description: "Calculate profit, margin, and optimal pricing for any product in Supermarket Simulator. 26 products with wholesale costs built in. Free interactive tool.",
    images: [`${siteUrl}/og-image.png`],
  },
};

export default function ProfitCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
