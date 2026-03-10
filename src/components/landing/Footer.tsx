import logo from "@/assets/logo_transparente.png";

const Footer = () => (
  <footer className="section-dark py-12 border-t border-on-dark/10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Loopin TV" className="w-8 h-8" />
          <span className="font-display text-lg font-bold text-on-dark">
            loopin<span className="text-primary">.tv</span>
          </span>
        </div>

        <div className="text-on-dark/40 text-sm font-body text-center space-y-1">
          <p>São José do Piauí, Piauí, Brasil</p>
          <p>© 2025 Loopin TV. Todos os direitos reservados.</p>
        </div>

        <div className="flex items-center gap-6 text-on-dark/50 text-sm font-body">
          <a href="https://instagram.com/loopin.tv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            📸 @loopin.tv
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
