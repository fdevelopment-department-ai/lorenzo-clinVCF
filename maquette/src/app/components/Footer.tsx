import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const productLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Modules', href: '#modules' },
    { label: 'ClinStore', href: '#clinstore' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download', href: '#download' },
  ];

  const developerLinks = [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'SDK', href: '#sdk' },
    { label: 'GitHub', href: '#github' },
    { label: 'Changelog', href: '#changelog' },
  ];

  const companyLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Carrières', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '#legal' },
    { label: 'Confidentialité', href: '#privacy' },
    { label: 'CGU', href: '#terms' },
    { label: 'Cookies', href: '#cookies' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="text-xl font-bold text-white">ClinVCF-OS</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Plateforme open-source d'analyse de variants génétiques pour la
              recherche et la clinique.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Produit
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Développeurs
            </h3>
            <ul className="space-y-2">
              {developerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Entreprise
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Légal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 ClinVCF-OS by FDevelopment. Tous droits réservés.
            </p>
            <p className="text-sm text-gray-400">
              Made with ❤️ for the genomics community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
