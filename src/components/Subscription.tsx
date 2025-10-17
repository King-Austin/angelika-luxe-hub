import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Subscription = () => {
  const handleSubscribe = () => {
    // Note: Paystack integration would require backend setup with Lovable Cloud
    // For now, redirecting to WhatsApp for subscription inquiries
    const message = encodeURIComponent('Hi, I would like to subscribe to the Monthly Grooming Plan');
    window.open(`https://wa.me/2348000000000?text=${message}`, '_blank');
  };

  return (
    <section id="subscription" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Monthly Grooming Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay Sharp, Stay Fresh
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="border-2 border-tan shadow-elegant bg-gradient-card">
            <CardHeader className="text-center pb-4">
              <div className="mb-4">
                <span className="text-5xl font-bold text-tan">₦5,000</span>
                <span className="text-muted-foreground text-xl"> / Month</span>
              </div>
              <CardTitle className="text-2xl mb-2">
                Premium Monthly Access
              </CardTitle>
              <CardDescription className="text-base">
                Unlimited grooming for one full month
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-tan mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    1 professional haircut or maintenance session every week
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-tan mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Priority booking for all appointments
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-tan mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    Complimentary beard trim with each visit
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-tan mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">
                    10% discount on additional services
                  </p>
                </div>
              </div>

              <Button
                onClick={handleSubscribe}
                className="w-full bg-tan hover:bg-tan-dark text-white shadow-elegant transition-smooth text-lg py-6"
                size="lg"
              >
                Subscribe Now 💳
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Contact us via WhatsApp to set up your subscription
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
