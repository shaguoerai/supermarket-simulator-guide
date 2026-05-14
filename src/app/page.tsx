import { Gamepad2, ShoppingCart, TrendingUp, Users, Star, ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-zinc-950" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <Gamepad2 className="w-4 h-4" />
              #1 Store Management Simulator
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Supermarket{" "}
              <span className="text-emerald-400">Simulator</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Build your retail empire from a small corner store to a mega supermarket chain. 
              Stock shelves, manage staff, set prices, and satisfy every customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#play"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-semibold rounded-xl transition-colors"
              >
                <Play className="w-5 h-5" />
                Play Now
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold rounded-xl transition-colors border border-zinc-700"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="border-b border-zinc-800 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">2M+</div>
              <div className="text-sm text-zinc-500 mt-1">Players Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">4.8</div>
              <div className="text-sm text-zinc-500 mt-1">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-sm text-zinc-500 mt-1">Products to Sell</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400">Free</div>
              <div className="text-sm text-zinc-500 mt-1">to Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Features</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Everything you need to run the ultimate supermarket empire
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<ShoppingCart className="w-6 h-6" />}
              title="Stock Management"
              description="Order products, manage inventory, and keep shelves full. Balance supply and demand to maximize profits."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Dynamic Pricing"
              description="Set competitive prices, run promotions, and watch your revenue grow. React to market trends in real-time."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Staff Management"
              description="Hire cashiers, stockers, and security. Train your team and keep morale high for better performance."
            />
            <FeatureCard
              icon={<Star className="w-6 h-6" />}
              title="Customer Satisfaction"
              description="Happy customers spend more. Keep lines short, shelves stocked, and the store clean to earn loyalty."
            />
            <FeatureCard
              icon={<Gamepad2 className="w-6 h-6" />}
              title="Store Expansion"
              description="Start small and grow big. Unlock new departments, bigger spaces, and premium locations."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Realistic Economy"
              description="Experience a living economy with seasonal demand, supplier negotiations, and competitor pressure."
            />
          </div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-20 border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Play</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Get started in minutes and build your supermarket dynasty
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              step="01"
              title="Open Your Store"
              description="Choose your starting location and layout. Every decision shapes your supermarket's future."
            />
            <StepCard
              step="02"
              title="Stock & Sell"
              description="Order products from suppliers, place them on shelves, and watch customers fill their carts."
            />
            <StepCard
              step="03"
              title="Expand & Dominate"
              description="Reinvest profits to unlock new departments, hire more staff, and become the top supermarket chain."
            />
          </div>
        </div>
      </section>

      {/* Play CTA */}
      <section id="play" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-emerald-900/30 to-zinc-900 border border-emerald-500/20 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Run Your Supermarket?</h2>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              Join millions of players and experience the most realistic supermarket management simulation game available.
            </p>
            <a
              href="https://www.crazygames.com/game/supermarket-simulator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold text-lg rounded-xl transition-colors"
            >
              <Play className="w-5 h-5" />
              Play Supermarket Simulator Now
            </a>
            <p className="text-zinc-500 text-sm mt-4">Free to play • No download required • Browser-based</p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 border-t border-zinc-800 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pro Tips</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Master the game with these expert strategies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <TipCard
              title="Prioritize High-Margin Items"
              description="Focus on products with the best profit margins. Electronics and specialty foods often yield higher returns than basic groceries."
            />
            <TipCard
              title="Keep Checkout Lines Moving"
              description="Long lines drive customers away. Hire enough cashiers and consider self-checkout stations to reduce wait times."
            />
            <TipCard
              title="Monitor Peak Hours"
              description="Staff up during rush hours (mornings and evenings). Understaffing during busy periods costs you sales and reputation."
            />
            <TipCard
              title="Run Strategic Promotions"
              description="Use loss leaders to draw customers in, then upsell high-margin items. Time promotions around holidays for maximum impact."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-zinc-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <FaqItem
              question="Is Supermarket Simulator free to play?"
              answer="Yes! Supermarket Simulator is completely free to play in your browser. No downloads or installations required."
            />
            <FaqItem
              question="Can I play on mobile devices?"
              answer="Absolutely. The game is optimized for both desktop and mobile browsers, so you can manage your store on the go."
            />
            <FaqItem
              question="How do I save my progress?"
              answer="The game automatically saves your progress to your browser. For cross-device play, create a free account."
            />
            <FaqItem
              question="Are there multiplayer features?"
              answer="Currently the game is single-player focused, with leaderboards where you can compete with friends for the highest store rating."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-emerald-400" />
              <span className="font-bold text-lg">Supermarket Simulator</span>
            </div>
            <p className="text-zinc-500 text-sm">
              The ultimate store management simulation game. Play free in your browser.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-8">
      <div className="text-5xl font-bold text-emerald-500/20 mb-4">{step}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}

function TipCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
      <h3 className="text-lg font-semibold mb-2 text-emerald-400">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}
