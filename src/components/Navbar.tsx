import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import WaitlistDialog from './WaitlistDialog';

const navLinks = [
  { label: 'How It Works', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'Philosophy', href: '#philosophy' },
];

interface NavbarProps {
  variant?: 'light' | 'dark';
}

const Navbar = ({ variant = 'dark' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = variant === 'dark' && !isScrolled;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : isDark
          ? 'bg-transparent'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className={`font-semibold text-xl tracking-tight ${
              isDark ? 'text-white' : 'text-headline'
            }`}>
              IntellHub
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={isDark ? 'nav-link-hero' : 'nav-link'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <WaitlistDialog>
              <button
                className={`text-sm font-medium px-4 py-2 rounded-md border transition-all duration-200 ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-border text-headline hover:bg-muted'
                }`}
              >
                Join Waitlist
              </button>
            </WaitlistDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isDark ? 'text-white' : 'text-headline'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container-wide py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block nav-link py-2"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <WaitlistDialog>
                <button className="btn-secondary w-full text-center">
                  Join Waitlist
                </button>
              </WaitlistDialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
