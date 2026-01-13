"use client";

import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/2349138616079?text=Hi, I have a question', '_blank');
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0736744793497!2d7.041827275398765!3d6.255147926483678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3d0a0a0a0a0%3A0x0!2zNsKwMTUnMTguNSJOIDfCsDAyJzM3LjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="De Angelika Beauty Lounge - Ifite Awka, Anambra State"
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
                  <h3 className="font-semibold text-lg mb-1">Addresses</h3>
                  <p className="text-muted-foreground mb-3">
                    <strong>Branch 1:</strong><br />
                    After Ifite School Gate, Opposite Old Fayrouz,<br />
                    Ifite Awka, Anambra State.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Branch 2:</strong><br />
                    No 152 Divine Plaza, 2nd Market/School road,<br />
                    Ifite Awka, Anambra State.<br />
                    Opposite NedKing Pharmacy & Stores.
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
                    +234 913 861 6079
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
                    href="mailto:deangelikabl@gmail.com"
                    className="text-muted-foreground hover:text-tan transition-smooth"
                  >
                    deangelikabl@gmail.com
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
