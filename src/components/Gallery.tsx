"use client";

import React, { useCallback, useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const galleryImages = [
  // Newly added image1..image5 (placed first to feature them)
  { src: '/assets/image2.jpg', alt: 'Featured salon transformation — image2' },
  { src: '/assets/image3.jpg', alt: 'Featured salon transformation — image3' },
  { src: '/assets/image4.jpg', alt: 'Featured salon transformation — image4' },
  { src: '/assets/image5.jpg', alt: 'Featured salon transformation — image5' },
  // Prioritize other high-quality IMG_* next
  { src: '/assets/IMG_1962.JPG', alt: 'Hair styling transformation — salon result (IMG_1962)' },
  { src: '/assets/IMG_3028@1647591925.JPG', alt: 'Braiding and styling result — salon work (IMG_3028)' },
  { src: '/assets/IMG_3788.JPG', alt: 'Makeup application — client result (IMG_3788)' },
  { src: '/assets/IMG_1823@962415802.JPG', alt: 'Manicure and nail art — salon result (IMG_1823)' },
  { src: '/assets/IMG_9631@271771341.JPG', alt: 'Frontal installation — styled salon result (IMG_9631)' },
  { src: '/assets/IMG_9828@2024614199.JPG', alt: 'Beard grooming and styling result — salon service (IMG_9828)' },
  // Existing gallery images (kept for variety)
  { src: '/assets/gallery-7.jpg', alt: 'Professional frontal installation' },
];

const AUTOPLAY_INTERVAL = 3500;

const Gallery = () => {
  // Featured carousel (embla)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);

  const play = useCallback(() => {
    if (!emblaApi) return;
    stop();
    autoplayRef.current = window.setInterval(() => {
      if (!isInteractingRef.current) emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
  }, [emblaApi]);

  const stop = () => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    if (!emblaApi) return;
    play();

    const container = emblaApi.containerNode();
    const onPointerDown = () => {
      isInteractingRef.current = true;
      stop();
    };
    const onPointerUp = () => {
      isInteractingRef.current = false;
      play();
    };

    container?.addEventListener('pointerdown', onPointerDown);
    container?.addEventListener('pointerup', onPointerUp);

    return () => {
      stop();
      container?.removeEventListener('pointerdown', onPointerDown);
      container?.removeEventListener('pointerup', onPointerUp);
    };
  }, [emblaApi, play]);

  // Lightbox modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const showPrev = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const showNext = () => setCurrentIndex((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See the transformations we create every day</p>
        </div>

        {/* Featured carousel */}
        <div className="mb-10">
          <div className="overflow-hidden rounded-lg" onMouseEnter={() => { isInteractingRef.current = true; stop(); }} onMouseLeave={() => { isInteractingRef.current = false; play(); }}>
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex">
                {galleryImages.map((item, idx) => (
                  <div className="embla__slide min-w-full" key={idx}>
                    <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden cursor-pointer" onClick={() => openAt(idx)}>
                      <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid with thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openAt(index)}
              className="relative overflow-hidden rounded-lg shadow-card group cursor-pointer aspect-square p-0 border-0 bg-transparent"
              aria-label={`Open image: ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="..."
                style={{ contentVisibility: 'auto' }}
              />
              <div className="absolute inset-0 bg-tan/0 group-hover:bg-tan/20 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Lightbox modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" role="dialog" aria-modal="true">
            <button className="absolute top-6 right-6 text-white text-2xl" onClick={close} aria-label="Close">×</button>

            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={showPrev} aria-label="Previous">‹</button>

            <div className="max-w-[90vw] max-h-[90vh] rounded-md overflow-hidden">
              <img src={galleryImages[currentIndex].src} alt={galleryImages[currentIndex].alt} className="w-full h-full object-contain bg-black" />
            </div>

            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl" onClick={showNext} aria-label="Next">›</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
