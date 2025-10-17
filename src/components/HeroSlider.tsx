import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroHaircut from '@/assets/hero-haircut.jpg';
import heroBraiding from '@/assets/hero-braiding.jpg';
import heroNails from '@/assets/hero-nails.jpg';

const slides = [
  {
    image: heroHaircut,
    title: 'Redefine Your Look with Confidence ✨',
    alt: 'Professional barber service at De Angelika Beauty Lounge'
  },
  {
    image: heroBraiding,
    title: 'Luxury Beauty & Grooming for Men and Women 💇‍♀️💅',
    alt: 'Hair braiding and styling services'
  },
  {
    image: heroNails,
    title: "Book, Relax, and Let's Pamper You 💖",
    alt: 'Professional nail services at De Angelika Beauty Lounge'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleBooking = () => {
    window.open('https://wa.me/2348000000000?text=Hi, I would like to book an appointment', '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tan/40 via-tan/20 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <h1 className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight">
                  {slide.title}
                </h1>
                <div className="flex gap-4 items-center">
                  <Button
                    onClick={handleBooking}
                    size="lg"
                    className="bg-tan hover:bg-tan-dark text-white shadow-elegant transition-smooth text-lg px-8 py-6"
                  >
                    Book Appointment
                  </Button>
                  <Button
                    onClick={handleBooking}
                    size="lg"
                    variant="outline"
                    className="bg-green-500/30 backdrop-blur-sm border-green-400 text-white hover:bg-green-500/50 shadow-elegant transition-smooth"
                  >
                    <MessageCircle className="h-5 w-5 md:mr-2" />
                    <span className="hidden md:inline">WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
