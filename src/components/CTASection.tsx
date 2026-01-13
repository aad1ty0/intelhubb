import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-transition section-dark relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, hsl(200 30% 25%), transparent)'
        }}
      />

      <div className="container-narrow text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight">
          Ready to trade with structure?
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          Explore how IntellHub approaches market analysis, regime detection, 
          and risk-first decision making.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#explore" className="btn-hero-primary group">
            Explore the platform
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="btn-hero-secondary">
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
