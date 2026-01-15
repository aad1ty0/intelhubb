import WaitlistDialog from './WaitlistDialog';

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-wide py-12 md:py-16">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="max-w-sm">
            <div className="font-semibold text-lg text-headline mb-3">
              IntellHub
            </div>
            <p className="text-sm text-text-muted mb-4">
              Trading intelligence for serious market participants. Regime-aware, risk-first, deterministic.
            </p>
            <WaitlistDialog>
              <button className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                Join Waitlist
              </button>
            </WaitlistDialog>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div>
              <h4 className="text-sm font-semibold text-headline mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#solution"
                    onClick={(e) => scrollToSection(e, '#solution')}
                    className="text-sm text-body hover:text-headline transition-colors"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    onClick={(e) => scrollToSection(e, '#features')}
                    className="text-sm text-body hover:text-headline transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    onClick={(e) => scrollToSection(e, '#philosophy')}
                    className="text-sm text-body hover:text-headline transition-colors"
                  >
                    Philosophy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-headline mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <span className="text-sm text-text-muted">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-sm text-text-muted">
                    Terms of Service
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} IntellHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
