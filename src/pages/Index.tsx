import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import About from '@/components/About';
import Services from '@/components/Services';
import Subscription from '@/components/Subscription';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSlider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="subscription">
        <Subscription />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
