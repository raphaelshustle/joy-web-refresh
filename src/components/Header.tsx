import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Méthode', href: '#methode' },
    { label: 'Clients', href: '#clients' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-heading text-foreground tracking-wider">
          PRESSIT
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://taap.it/StaAQHd"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm !px-6 !py-2.5 rounded-lg"
          >
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/30 px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://taap.it/StaAQHd"
            target="_blank"
            rel="noopener noreferrer"
            className="block btn-accent text-center text-sm !px-6 !py-2.5 rounded-lg"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
