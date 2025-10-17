import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-serif text-tan-dark">De Angelika</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-tan-dark transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-tan-dark transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-tan-dark transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('subscription')}
              className="text-gray-700 hover:text-tan-dark transition-colors"
            >
              Subscription
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-tan-dark transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-tan-dark transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-700 hover:text-tan-dark transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-700 hover:text-tan-dark transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-tan-dark transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('subscription')}
              className="block w-full text-left text-gray-700 hover:text-tan-dark transition-colors"
            >
              Subscription
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-gray-700 hover:text-tan-dark transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-tan-dark transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
