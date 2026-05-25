import { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FR');

  const menuItems = [
    'Philosophy',
    'Modules',
    'ClinStore',
    'SDK',
    'Documentation',
    'Pricing',
    'FAQ'
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">ClinVCF-OS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('FR')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'FR'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'EN'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                EN
              </button>
            </div>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
              <Download size={16} />
              Télécharger
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-fit">
                  <button
                    onClick={() => setLanguage('FR')}
                    className={`px-3 py-1 text-sm font-medium transition-colors ${
                      language === 'FR'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLanguage('EN')}
                    className={`px-3 py-1 text-sm font-medium transition-colors ${
                      language === 'EN'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                </div>
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium w-fit">
                  <Download size={16} />
                  Télécharger
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
