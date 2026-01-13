const problems = [
  "Indicators work — until regimes change.",
  "Backtests don't warn you when assumptions fail.",
  "Most platforms show signals, not understanding.",
];

const ProblemSection = () => {
  return (
    <section className="section-transition section-muted">
      <div className="container-narrow text-center">
        <span className="label-badge">The problem</span>
        <div className="mt-8 space-y-6">
          {problems.map((problem, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl lg:text-3xl font-medium text-headline leading-relaxed"
              style={{ 
                opacity: 0,
                animation: 'fade-in 0.5s ease-out forwards',
                animationDelay: `${index * 0.15}s` 
              }}
            >
              {problem}
            </p>
          ))}
        </div>
        <p className="body-large mt-12 max-w-xl mx-auto">
          Trading tools evolved, but the fundamental challenge remains: 
          understanding <em>when</em> your approach works, not just <em>if</em> it worked before.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
