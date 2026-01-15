import { Database, Eye, CheckCircle, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

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
    <section id="solution" className="section-transition relative overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, hsl(200 30% 95%), transparent 60%)'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-20">
            <span className="label-badge">How it works</span>
            <h2 className="headline-section mt-4 text-headline max-w-2xl mx-auto">
              From market data to decision, with <span className="text-accent-highlight">structure</span> at every step
            </h2>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div 
              className="absolute left-4 top-0 bottom-0 w-px hidden md:block origin-top"
              style={{ background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--accent-highlight)), hsl(var(--primary) / 0.3))' }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <motion.div
                    className="relative flex gap-6 md:gap-8 items-start group"
                    whileInView={{ scale: 1 }}
                    initial={{ scale: 0.96 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Step number with glow */}
                    <div className="flex-shrink-0 z-10 relative">
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ background: 'hsl(var(--primary))' }}
                      />
                      <div className="step-number relative">
                        {step.number}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-8 md:pb-0">
                      <div className="p-5 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm group-hover:bg-card/80 group-hover:border-primary/20 transition-all duration-300">
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
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
