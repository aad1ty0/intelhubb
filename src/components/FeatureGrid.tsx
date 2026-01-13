import { 
  BarChart3, 
  GitBranch, 
  Search, 
  History, 
  ShieldCheck, 
  Settings2 
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Understand market regimes',
    description: 'Real-time classification of market conditions to know when your strategies apply.',
  },
  {
    icon: GitBranch,
    title: 'Validate mean reversion before trading',
    description: 'Statistical confirmation that conditions favor your approach, not just historical pattern matching.',
  },
  {
    icon: Search,
    title: 'Find trades that match conditions',
    description: 'Filter opportunities based on current regime, not generic screener criteria.',
  },
  {
    icon: History,
    title: 'Backtest with attribution',
    description: 'Understand why strategies worked or failed, with regime-aware performance breakdown.',
  },
  {
    icon: ShieldCheck,
    title: 'Control risk deterministically',
    description: 'Position limits, correlation checks, and drawdown guards that never sleep.',
  },
  {
    icon: Settings2,
    title: 'Automate only when allowed',
    description: 'Execution automation that respects regime gates and risk constraints.',
  },
];

const FeatureGrid = () => {
  return (
    <section className="section-transition section-muted">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="label-badge">Capabilities</span>
          <h2 className="headline-section mt-4 text-headline">
            Everything you need, nothing you don't
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4"
              style={{
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="feature-icon">
                  <feature.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-headline mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
