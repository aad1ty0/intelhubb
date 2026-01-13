import { 
  BarChart3, 
  GitBranch, 
  Search, 
  History, 
  ShieldCheck, 
  Settings2 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: BarChart3,
    title: 'Understand market regimes',
    description: 'Real-time classification of market conditions to know when your strategies apply.',
    outcome: 'Classifies regimes before strategies activate',
    accent: 'regimes',
  },
  {
    icon: GitBranch,
    title: 'Validate mean reversion',
    description: 'Statistical confirmation that conditions favor your approach.',
    outcome: 'Blocks mean reversion when half-life breaks',
    accent: 'mean reversion',
  },
  {
    icon: Search,
    title: 'Find regime-matched trades',
    description: 'Filter opportunities based on current regime, not generic criteria.',
    outcome: 'Surfaces only eligible opportunities',
    accent: 'regime-matched',
  },
  {
    icon: History,
    title: 'Backtest with attribution',
    description: 'Understand why strategies worked or failed.',
    outcome: 'Full breakdown by regime and condition',
    accent: 'attribution',
  },
  {
    icon: ShieldCheck,
    title: 'Control risk deterministically',
    description: 'Position limits, correlation checks, and drawdown guards.',
    outcome: 'Prevents trades when assumptions fail',
    accent: 'deterministically',
  },
  {
    icon: Settings2,
    title: 'Automate with constraints',
    description: 'Execution automation that respects regime gates.',
    outcome: 'Activates only when conditions allow',
    accent: 'constraints',
  },
];

const FeatureGrid = () => {
  return (
    <section className="section-transition relative overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 20% 98%) 50%, hsl(40 15% 96%) 100%)'
        }}
      />

      {/* Subtle radial accent */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, hsl(200 30% 85%), transparent)'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="label-badge">Capabilities</span>
            <h2 className="headline-section mt-4 text-headline">
              Everything you need, nothing you don't
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.08}>
              <div className="group relative h-full">
                {/* Card with translucent panel */}
                <div className="h-full p-6 md:p-8 rounded-xl bg-white/60 backdrop-blur-sm border border-border/50 hover:border-primary/20 hover:bg-white/80 transition-all duration-300">
                  <div className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="feature-icon">
                        <feature.icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-headline mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-body leading-relaxed mb-4">
                        {feature.description}
                      </p>

                      {/* Outcome indicator */}
                      <div className="py-2 px-3 rounded-md bg-muted/50 border border-border/30 inline-block">
                        <span className="text-xs font-medium text-text-muted">
                          <span className="text-accent-highlight">{feature.accent}</span>
                          {' → '}
                          {feature.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
