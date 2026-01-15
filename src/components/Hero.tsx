import { ArrowRight } from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 hero-radial pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-wide relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in">
            <span className="text-xs font-medium uppercase tracking-widest text-white/60">
              Institutional Trading Intelligence
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="headline-display text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            Trade with{' '}
            <span className="text-accent-highlight">structure</span>, not assumptions.
          </h1>

          {/* Subheadline */}
          <p 
            className="body-large text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            IntellHub helps traders and institutions understand market regimes, 
            validate strategies, and control risk before capital is deployed.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <WaitlistDialog>
              <button className="btn-hero-primary group">
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </WaitlistDialog>
            <a 
              href="#solution" 
              onClick={(e) => scrollToSection(e, '#solution')}
              className="btn-hero-secondary"
            >
              Learn how it works
            </a>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div 
          className="mt-16 md:mt-24 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Glow effect behind dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-b from-primary/20 via-accent-highlight/10 to-transparent rounded-2xl blur-2xl" />
            
            {/* Dashboard mockup */}
            <div className="relative bg-section-dark border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-white/40">intellhub.io/dashboard</span>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-12 gap-4">
                  {/* Left sidebar - Regime indicators */}
                  <div className="col-span-12 md:col-span-3 space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-white/40 mb-3">Current Regime</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-highlight" />
                        <span className="text-sm text-white font-medium">Mean Reversion</span>
                      </div>
                      <div className="mt-2 text-xs text-white/50">Confidence: 87%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-white/40 mb-3">Risk Status</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-sm text-white font-medium">Within Limits</span>
                      </div>
                      <div className="mt-2 text-xs text-white/50">VaR: 1.2%</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-white/40 mb-3">Eligible Strategies</div>
                      <div className="text-2xl text-white font-semibold">4 / 12</div>
                      <div className="mt-2 text-xs text-white/50">Active today</div>
                    </div>
                  </div>

                  {/* Main chart area */}
                  <div className="col-span-12 md:col-span-6 bg-white/5 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-white font-medium">SPY Price Action</span>
                      <span className="text-xs text-white/40">1H</span>
                    </div>
                    {/* Simplified chart visualization */}
                    <div className="h-48 flex items-end gap-1">
                      {[40, 45, 42, 48, 52, 49, 55, 58, 54, 60, 57, 62, 65, 61, 68, 72, 69, 75, 78, 74].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-white/40">
                      <span>09:30</span>
                      <span>12:00</span>
                      <span>16:00</span>
                    </div>
                  </div>

                  {/* Right sidebar - Trade signals */}
                  <div className="col-span-12 md:col-span-3 space-y-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-white/40 mb-3">Signal Queue</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/80">AAPL</span>
                          <span className="text-accent-highlight">Long</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/80">MSFT</span>
                          <span className="text-white/40">Flat</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/80">GOOGL</span>
                          <span className="text-white/40">Blocked</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-white/40 mb-3">Today's Activity</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xl text-white font-semibold">7</div>
                          <div className="text-xs text-white/50">Trades</div>
                        </div>
                        <div>
                          <div className="text-xl text-accent-highlight font-semibold">+2.1%</div>
                          <div className="text-xs text-white/50">P&L</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
