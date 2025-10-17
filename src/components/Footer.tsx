const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tan text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              De Angelika Beauty Lounge
            </h3>
            <p className="text-white/80">
              Redefining beauty and grooming excellence in Nigeria
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-white/80 hover:text-white transition-smooth"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('subscription')}
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Subscription
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Hours</h4>
            <div className="space-y-2 text-white/80">
              <p>Monday - Saturday: 9AM - 7PM</p>
              <p>Sunday: 10AM - 5PM</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; 2025 De Angelika Beauty Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
