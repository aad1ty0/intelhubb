import { TrendingUp, Building2, LineChart } from 'lucide-react';

const audiences = [
  {
    icon: TrendingUp,
    title: 'Professional Traders',
    description: 'For traders who want clarity, not signal noise.',
    detail: 'Price action, regimes, and strategy validation in one place.',
    href: '#traders',
  },
  {
    icon: Building2,
    title: 'Funds & Desks',
    description: 'For institutions that require discipline, auditability, and risk governance.',
    detail: 'Enterprise-grade controls with full audit trails.',
    href: '#funds',
  },
  {
    icon: LineChart,
    title: 'Strategy Builders',
    description: 'For researchers and strategists who want structure without fragility.',
    detail: 'Build, test, and validate with regime awareness.',
    href: '#builders',
  },
];

const WhoSection = () => {
  return (
    <section className="section-transition bg-background">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="label-badge">Who is IntellHub for?</span>
          <h2 className="headline-section mt-4 text-headline">
            Built for serious market participants
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="card-institutional group transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
              <p className="text-sm text-text-muted mb-6">
                {audience.detail}
              </p>

              {/* Link */}
              <a
                href={audience.href}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
