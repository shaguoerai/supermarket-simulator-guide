/**
 * Steam Affiliate Link Builder
 *
 * Steam app ID for Supermarket Simulator: 2670630
 *
 * === PLACEHOLDER ===
 * Replace 'smsimhub-21' with the actual Steam affiliate tag
 * once 羽金 sets up the Steam Affiliate account.
 * ===================
 */

const STEAM_APP_ID = 2670630;
const AFFILIATE_TAG = "smsimhub-21"; // TODO: replace with real tag from 羽金

const STEAM_BASE_URL = "https://store.steampowered.com";

/**
 * Build a Steam affiliate link for Supermarket Simulator.
 * Uses the official Steam partner link format with `tag` parameter.
 */
export function steamStoreUrl(params?: { utm_source?: string }): string {
  const url = new URL(`/app/${STEAM_APP_ID}/Supermarket_Simulator/`, STEAM_BASE_URL);
  url.searchParams.set("tag", AFFILIATE_TAG);
  if (params?.utm_source) {
    url.searchParams.set("utm_source", params.utm_source);
  }
  return url.toString();
}

/**
 * Build a Steam news / patch notes link.
 */
export function steamNewsUrl(): string {
  const url = new URL(`/app/${STEAM_APP_ID}/Supermarket_Simulator/news/`, STEAM_BASE_URL);
  return url.toString();
}

/**
 * Build a Steam community hub link.
 */
export function steamCommunityUrl(): string {
  const url = new URL(`/app/${STEAM_APP_ID}/Supermarket_Simulator`, STEAM_BASE_URL);
  url.searchParams.set("tag", AFFILIATE_TAG);
  return url.toString();
}
