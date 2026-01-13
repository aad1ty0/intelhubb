import { Database, Eye, CheckCircle, Shield, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Database,
    label: 'Market inputs',
    description: 'Aggregate price action, volatility, and structural data from multiple sources.',
  },
  {
    number: '02',
    icon: Eye,
    label: 'Regime detection',
    description: 'Identify current market conditions: trending, mean-reverting, or transitional.',
  },
  {
    number: '03',
    icon: CheckCircle,
    label: 'Strategy eligibility',
    description: 'Match active strategies to regimes where they historically perform.',
  },
  {
    number: '04',
    icon: Shield,
    label: 'Risk & survival checks',
    description: 'Validate position sizing, correlation, and drawdown constraints.',
  },
  {
    number: '05',
    icon: Zap,
    label: 'Final decision',
    description: 'Execute, wait, or explicitly reject — with full attribution.',
  },
];

const SolutionSection = () => {
  return (
    <section className="section-transition bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="label-badge">How it works</span>
          <h2 className="headline-section mt-4 text-headline max-w-2xl mx-auto">
            From market data to decision, with structure at every step
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-6 md:gap-8 items-start"
                  style={{
                    opacity: 0,
                    animation: 'fade-in 0.5s ease-out forwards',
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Step number */}
                  <div className="flex-shrink-0 z-10">
                    <div className="step-number">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 md:pb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-headline">
                        {step.label}
                      </h3>
                    </div>
                    <p className="body-default">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
