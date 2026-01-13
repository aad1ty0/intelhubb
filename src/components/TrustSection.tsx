import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const principles = [
  { word: 'Deterministic', description: 'Same inputs, same outputs. Always.' },
  { word: 'Auditable', description: 'Full decision trail for every action.' },
  { word: 'Regime-aware', description: 'Strategies match market conditions.' },
  { word: 'Risk-first', description: 'Survival before opportunity.' },
];

const TrustSection = () => {
  return (
    <section className="section-transition relative overflow-hidden bg-background">
      {/* Subtle gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, hsl(200 30% 92%), transparent 60%)'
        }}
      />

      <div className="container-wide relative z-10">
        {/* Trust statement */}
        <ScrollReveal>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-headline leading-relaxed text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            Built with <span className="text-accent-highlight">institutional validation</span> standards.
          </p>
        </ScrollReveal>
        
        {/* Key principles with horizontal separators */}
        <div className="max-w-4xl mx-auto">
          {/* Top separator */}
          <motion.div 
            className="h-px bg-border mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.word} delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-lg font-semibold text-headline">
                      {principle.word}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom separator */}
          <motion.div 
            className="h-px bg-border mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Trusted by section */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 md:mt-20">
            <div className="flex items-center gap-4 mb-10 max-w-lg mx-auto">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-text-muted uppercase tracking-widest">
                Trusted by institutions
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Placeholder logos - grayscale treatment */}
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30">
              {['Fund Alpha', 'Meridian Desk', 'Quantum Capital', 'Systematic Research'].map((name) => (
                <div
                  key={name}
                  className="text-sm font-medium text-headline tracking-wide"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustSection;
