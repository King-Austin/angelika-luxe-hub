const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // JSON-LD for LocalBusiness / BeautySalon to improve SEO.
  // Uses window.location.origin at runtime so the URL is accurate in dev and production.
  const siteOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'De Angelika Beauty Lounge',
    description: 'De Angelika Beauty Lounge — redefining beauty and grooming excellence in Nigeria.',
    url: siteOrigin || '/',
    sameAs: [
      'https://www.instagram.com/de_angelikabeautylounge',
      'https://www.tiktok.com/@de_angelikabeautylounge',
      'https://wa.link/d6h7io'
    ],
    openingHours: ['Mo-Sa 09:00-19:00', 'Su 10:00-17:00'],
    areaServed: 'Nigeria'
    // Add telephone, address, and logo when available to strengthen local SEO
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
            <nav className="space-y-2" aria-label="Footer navigation">
              <a
                href="/"
                title="Home — De Angelika Beauty Lounge"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Home
              </a>
              <a
                href="#about"
                title="About — De Angelika Beauty Lounge"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                About
              </a>
              <a
                href="#services"
                title="Services — De Angelika Beauty Lounge"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Services
              </a>
              <a
                href="#subscription"
                title="Subscription — De Angelika Beauty Lounge"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Subscription
              </a>
              <a
                href="#contact"
                title="Contact — De Angelika Beauty Lounge"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact & Hours</h4>
            <address className="not-italic space-y-2 text-white/80 mb-4">
              <p>Monday - Saturday: 9AM - 7PM</p>
              <p>Sunday: 10AM - 5PM</p>
              <p>
                Preferred contact: <a href="https://wa.link/d6h7io" target="_blank" rel="noopener noreferrer" className="underline text-white/90" title="Chat on WhatsApp">WhatsApp</a>
              </p>
            </address>

            <div className="mb-4">
              <a
                href="https://wa.link/d6h7io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition"
                aria-label="Chat with De Angelika Beauty Lounge on WhatsApp"
                title="Chat or book via WhatsApp"
              >
                {/* WhatsApp SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M20.52 3.48A11.97 11.97 0 0 0 12 0C5.372 0 .02 5.356 0 12c0 2.104.545 4.157 1.575 5.98L0 24l6.232-1.605A11.95 11.95 0 0 0 12 24c6.628 0 12-5.372 12-12 0-3.207-1.25-6.212-3.48-8.52z" fill="currentColor" opacity="0.08" />
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.885-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.15-.173.199-.298.298-.497.099-.198.05-.372-.025-.52-.074-.149-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487  .709.306 1.26.489 1.69.627.71.227 1.357.195 1.87.118.57-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.568-.347z" fill="currentColor" />
                </svg>
                <span>Book / Chat on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center justify-start gap-4">
              <span className="text-sm font-medium text-white/80">Follow us</span>

              <a href="https://www.instagram.com/de_angelikabeautylounge" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white" aria-label="De Angelika Instagram" title="De Angelika on Instagram">
                {/* Instagram SVG */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a href="https://www.tiktok.com/@de_angelikabeautylounge" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white" aria-label="De Angelika TikTok" title="De Angelika on TikTok">
                {/* TikTok SVG (simplified) */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M9 8v8a4 4 0 1 0 4-4V7h3a4 4 0 1 0 0-2h-3v3a4 4 0 1 1-4 4z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* JSON-LD structured data for search engines */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} De Angelika Beauty Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
