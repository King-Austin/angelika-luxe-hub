import aboutStylist from '@/assets/about-stylist.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At De Angelika Beauty Lounge, we bring out the best version of you. 
              From fresh haircuts and luxury braids to flawless nails and professional 
              makeup, our team ensures every visit leaves you looking and feeling stunning.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-tan/20 rounded-lg transform translate-x-4 translate-y-4" />
            <img
              src={aboutStylist}
              alt="De Angelika Beauty Lounge team with clients in the salon"
              className="relative rounded-lg shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
