const footerLinks = {
  Product: ['Overview', 'Features', 'Pricing', 'Changelog'],
  Solutions: ['For Traders', 'For Funds', 'For Researchers', 'Enterprise'],
  Resources: ['Documentation', 'API Reference', 'Blog', 'Support'],
  Company: ['About', 'Careers', 'Contact', 'Press'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container-wide py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-semibold text-lg text-headline mb-3">
              IntellHub
            </div>
            <p className="text-sm text-text-muted">
              Trading intelligence for serious market participants.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-headline mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-body hover:text-headline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} IntellHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#status" className="text-sm text-body hover:text-headline transition-colors">
              System Status
            </a>
            <a href="#security" className="text-sm text-body hover:text-headline transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
