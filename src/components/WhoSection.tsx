import { TrendingUp, Building2, LineChart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const audiences = [
  {
    icon: TrendingUp,
    title: 'Professional Traders',
    description: 'For traders who want clarity, not signal noise.',
    detail: 'Price action, regimes, and strategy validation in one place.',
    figure: 'Operating across multiple regimes',
    href: '#traders',
  },
  {
    icon: Building2,
    title: 'Funds & Desks',
    description: 'For institutions that require discipline, auditability, and risk governance.',
    detail: 'Enterprise-grade controls with full audit trails.',
    figure: 'Designed for managing real capital',
    href: '#funds',
  },
  {
    icon: LineChart,
    title: 'Strategy Builders',
    description: 'For researchers and strategists who want structure without fragility.',
    detail: 'Build, test, and validate with regime awareness.',
    figure: 'Tested across years of market data',
    href: '#builders',
  },
];

const WhoSection = () => {
  return (
    <section className="section-transition relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      
      {/* Subtle radial highlight */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(200 30% 90% / 0.5), transparent 60%)'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="label-badge">Who is IntellHub for?</span>
            <h2 className="headline-section mt-4 text-headline">
              Built for serious market participants
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, index) => (
            <ScrollReveal key={audience.title} delay={index * 0.1}>
              <div className="group relative h-full">
                {/* Card glow effect */}
                <div 
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: 'radial-gradient(circle at center, hsl(200 30% 50% / 0.15), transparent 70%)'
                  }}
                />
                
                <div className="card-institutional relative h-full transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                  {/* Icon */}
                  <div className="feature-icon mb-6">
                    <audience.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-headline mb-3">
                    {audience.title}
                  </h3>
                  <p className="body-default mb-2">
                    {audience.description}
                  </p>
                  <p className="text-sm text-text-muted mb-4">
                    {audience.detail}
                  </p>

                  {/* Figure anchor */}
                  <div className="mb-6 py-3 px-4 rounded-md bg-muted/50 border border-border/50">
                    <span className="text-xs font-medium text-accent-highlight uppercase tracking-wide">
                      {audience.figure}
                    </span>
                  </div>

                  {/* Link */}
                  <a
                    href={audience.href}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
