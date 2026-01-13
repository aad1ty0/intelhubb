const TrustSection = () => {
  return (
    <section className="section-transition bg-background">
      <div className="container-narrow text-center">
        {/* Trust statement */}
        <p className="text-xl md:text-2xl font-medium text-headline leading-relaxed mb-8">
          Built with institutional validation standards.
        </p>
        
        {/* Key principles */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-body">Deterministic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-body">Auditable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm font-medium text-body">Risk-first</span>
          </div>
        </div>

        {/* Subtle divider */}
        <div className="mt-16 mb-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-text-muted uppercase tracking-widest">
            Trusted by institutions
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Placeholder logos - grayscale treatment */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
          {['Fund A', 'Trading Desk', 'Capital Partners', 'Research Lab'].map((name, i) => (
            <div
              key={name}
              className="text-sm font-medium text-body tracking-wide"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
