import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Professional barbing and male grooming service' },
  { src: gallery2, alt: 'Beautiful braided hairstyle showcase' },
  { src: gallery3, alt: 'Professional makeup application' },
  { src: gallery4, alt: 'Elegant manicured nails with nail art' },
  { src: gallery5, alt: 'Happy satisfied client with new haircut' },
  { src: gallery6, alt: 'Relaxing pedicure service' },
  { src: gallery7, alt: 'Professional frontal installation' },
  { src: gallery8, alt: 'Beard grooming and trimming service' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformations we create every day
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-card group cursor-pointer aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-tan/0 group-hover:bg-tan/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
