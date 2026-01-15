import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import WaitlistDialog from './WaitlistDialog';

const CTASection = () => {
  return (
    <section className="section-transition relative overflow-hidden">
      {/* Dark gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220 25% 14%) 0%, hsl(220 25% 10%) 100%)'
        }}
      />

      {/* Multiple radial gradients for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, hsl(200 30% 25%), transparent)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse 40% 30% at 50% 0%, hsl(180 30% 30%), transparent)'
        }}
      />

      {/* Grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(200 30% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(200 30% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container-narrow text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
            Ready to trade with <span className="text-accent-highlight">structure</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Join the waitlist to get early access when we launch. Be among the first to experience regime-aware trading intelligence.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WaitlistDialog>
              <motion.button 
                className="btn-hero-primary group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </WaitlistDialog>
          </div>
        </ScrollReveal>

        {/* Bottom accent line */}
        <motion.div 
          className="mt-16 md:mt-20 h-px max-w-md mx-auto"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--accent-highlight) / 0.4), transparent)' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </section>
  );
};

export default CTASection;
