import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/2348000000000?text=Hi, I have a question', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Visit or Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative rounded-lg overflow-hidden shadow-elegant h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7274936097386!2d3.3792057!3d6.424553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnMjguNCJOIDPCsDIyJzQ1LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="De Angelika Beauty Lounge location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-tan/10 rounded-full">
                  <MapPin className="h-6 w-6 text-tan" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Lagos, Nigeria
                    <br />
                    (Find exact location on map)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-tan/10 rounded-full">
                  <Phone className="h-6 w-6 text-tan" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone / WhatsApp</h3>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-tan hover:text-tan-dark"
                    onClick={handleWhatsApp}
                  >
                    +234 800 000 0000
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-tan/10 rounded-full">
                  <Mail className="h-6 w-6 text-tan" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:info@deangelikabeauty.com"
                    className="text-muted-foreground hover:text-tan transition-smooth"
                  >
                    info@deangelikabeauty.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/de_angelikabeautylounge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-tan/10 rounded-full hover:bg-tan hover:text-white transition-smooth"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/deangelikabeautylounge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-tan/10 rounded-full hover:bg-tan hover:text-white transition-smooth"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
