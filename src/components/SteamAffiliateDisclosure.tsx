import Link from "next/link";

/**
 * Inline affiliate disclosure — placed near the first affiliate link on a page.
 * The global disclosure already exists in the footer; this satisfies FTC/FCC
 * guidelines that disclosure should appear near the link itself.
 */
export function SteamAffiliateDisclosure() {
  return (
    <p className="text-[#8a9299] text-xs leading-relaxed mt-1 mb-3">
      This page contains affiliate links to Steam. We may earn a commission if you purchase through these links.
    </p>
  );
}
