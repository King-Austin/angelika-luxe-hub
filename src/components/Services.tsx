import { Scissors, Sparkles, Hand, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Scissors,
    title: 'Barbing & Male Grooming',
    description: 'Precision haircuts, beard trims, and male haircare.',
    emoji: '💈'
  },
  {
    icon: Sparkles,
    title: 'Braiding & Hair Styling',
    description: 'Stylish braids, twists, and creative hairstyles.',
    emoji: '💇‍♀️'
  },
  {
    icon: Hand,
    title: 'Nails (Manicure & Pedicure)',
    description: 'Nail fixing, gel polish, and creative designs.',
    emoji: '💅'
  },
  {
    icon: Palette,
    title: 'Makeup & Frontal Installation',
    description: 'Natural glam or bold looks for all occasions.',
    emoji: '💄'
  }
];

const Services = () => {
  const handleBookService = (serviceName: string) => {
    const message = encodeURIComponent(`Hi, I would like to book ${serviceName}`);
    window.open(`https://wa.me/2348000000000?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of professional beauty and grooming services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-tan/30 hover:border-tan transition-smooth shadow-card hover:shadow-elegant bg-card"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-tan/10 rounded-full w-fit">
                    <Icon className="h-8 w-8 text-tan" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.emoji} {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleBookService(service.title)}
                    variant="outline"
                    className="w-full border-tan text-tan hover:bg-tan hover:text-white transition-smooth"
                  >
                    Book This Service 💬
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
