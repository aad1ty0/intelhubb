import ScrollReveal from './ScrollReveal';

const problems = [
  { text: "Indicators work — until regimes change.", direction: 'left' as const },
  { text: "Backtests don't warn you when assumptions fail.", direction: 'right' as const },
  { text: "Most platforms show signals, not understanding.", direction: 'left' as const },
];

const backgroundWords = ['REGIME', 'RISK', 'ASSUMPTIONS'];

const ProblemSection = () => {
  return (
    <section className="section-transition relative overflow-hidden">
      {/* Dark gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(220 25% 14%) 0%, hsl(220 20% 11%) 100%)'
        }}
      />
      
      {/* Subtle radial highlight */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 50%, hsl(200 30% 25%), transparent)'
        }}
      />

      {/* Grid texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(200 30% 50%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(200 30% 50%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Large background words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundWords.map((word, index) => (
          <div
            key={word}
            className="absolute text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold tracking-tight opacity-[0.02] text-white select-none whitespace-nowrap"
            style={{
              top: `${20 + index * 30}%`,
              left: index % 2 === 0 ? '-5%' : 'auto',
              right: index % 2 === 1 ? '-5%' : 'auto',
              transform: 'translateY(-50%)'
            }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Vertical divider lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/5 hidden lg:block" />

      <div className="container-narrow text-center relative z-10">
        <ScrollReveal>
          <span className="label-badge text-white/50">The problem</span>
        </ScrollReveal>

        <div className="mt-10 md:mt-14 space-y-8 md:space-y-12">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction={problem.direction}>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed">
                {problem.text}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-14 md:mt-20 relative">
            {/* Horizontal divider with accent */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/10" />
              <div className="w-2 h-2 rounded-full bg-accent-highlight/50" />
              <div className="flex-1 h-px bg-white/10" />
            </div>
            
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed">
              Trading tools evolved, but the fundamental challenge remains: 
              understanding <em className="text-accent-highlight not-italic">when</em> your approach works, 
              not just <em className="text-accent-highlight not-italic">if</em> it worked before.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
