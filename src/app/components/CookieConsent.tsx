"use client";

import { useState, useEffect } from "react";
import { Cookie, X, ShieldCheck } from "lucide-react";

const CONSENT_KEY = "cookie-consent-supermarket-simulator";

type ConsentChoice = "accepted" | "declined" | null;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [consent, setConsent] = useState<ConsentChoice>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored as ConsentChoice);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl shadow-black/50 p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-zinc-100 mb-1">Cookie Consent</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    We use cookies to improve your experience and serve personalized ads through Google AdSense.
                    You can choose to accept or decline non-essential cookies. The site remains fully functional either way.
                  </p>
                </div>
                <button
                  onClick={handleDecline}
                  className="shrink-0 p-1.5 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {expanded && (
                <div className="mt-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-zinc-200">Essential Cookies</span>
                    </div>
                    <span className="text-xs text-zinc-500">Always on</span>
                  </div>
                  <p className="text-zinc-400 text-xs">
                    Required for the website to function properly. Cannot be disabled.
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-700/50">
                    <div className="flex items-center gap-2">
                      <Cookie className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-medium text-zinc-200">Analytics & Advertising</span>
                    </div>
                    <span className="text-xs text-zinc-500">Optional</span>
                  </div>
                  <p className="text-zinc-400 text-xs">
                    Used by Google Analytics and Google AdSense to track usage and show personalized ads.
                  </p>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors border border-zinc-700"
                >
                  Decline Non-Essential
                </button>
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="px-3 py-2.5 text-zinc-400 hover:text-zinc-200 text-sm transition-colors"
                >
                  {expanded ? "Hide Details" : "Learn More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
