const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-heading tracking-wider">PRESSIT</div>
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} PressIT Agency. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/raphaelsabouraud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href="https://www.malt.fr/profile/attachepresse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              Malt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
