import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const statements = [
  "Not trading is often the correct decision.",
  "Most losses come from forcing invalid strategies.",
  "IntellHub is designed to stop, not to chase.",
];

const StandsDownSection = () => {
  return (
    <section className="section-transition relative overflow-hidden">
      {/* Dark gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220 25% 10%) 0%, hsl(220 25% 8%) 100%)'
        }}
      />

      {/* Subtle radial highlight at top */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 0%, hsl(200 30% 30%), transparent)'
        }}
      />

      <div className="container-narrow text-center relative z-10">
        <ScrollReveal>
          <span className="label-badge text-white/40">Philosophy</span>
          <h2 className="headline-section mt-4 text-white/90 max-w-xl mx-auto">
            Why IntellHub <span className="text-accent-highlight">stands down</span>
          </h2>
        </ScrollReveal>

        <div className="mt-16 md:mt-24 space-y-12 md:space-y-16">
          {statements.map((statement, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/80 leading-relaxed max-w-2xl mx-auto">
                "{statement}"
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Animated divider line */}
        <ScrollReveal delay={0.6}>
          <motion.div 
            className="mt-20 md:mt-28 h-px max-w-xs mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--accent-highlight)), transparent)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <p className="mt-10 text-sm md:text-base text-white/40 max-w-md mx-auto">
            Discipline isn't about missing opportunities. It's about preserving capital for the right ones.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default StandsDownSection;
