import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to begin your wellness journey? Contact us to schedule your first session 
            or learn more about our programs designed specifically for adults 50+.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-teal-circle rounded-full p-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+919476133034</p>
                </div>
              </div>
              <p className="text-muted-foreground">Call us for immediate assistance or to book your session</p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-warm-orange rounded-full p-3">
                  <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">paleldercare@gmail.com</p>
                </div>
              </div>
              <p className="text-muted-foreground">Send us your questions or schedule a consultation</p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-sage-green rounded-full p-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">54 Feet Road, Benanchity, Durgapur - 713213</p>
                </div>
              </div>
              <p className="text-muted-foreground">Easily accessible with senior-friendly parking</p>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-card">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary rounded-full p-3">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Hours</h3>
                  <p className="text-muted-foreground">Mon-Sat: 8AM-9PM</p>
                </div>
              </div>
              <p className="text-muted-foreground">Convenient hours designed for your schedule</p>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-hero rounded-lg p-8 text-center text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Wellness Journey?</h3>
            <p className="text-xl mb-8 opacity-90">
              Take the first step towards a healthier, more active lifestyle. 
              Our team is here to support you every step of the way.
            </p>
            
            <div className="space-y-4 mb-8">
              <Button variant="warm" size="senior-xl" className="w-full max-w-sm">
                <a href="https://api.whatsapp.com/send?phone=919476133034&text=Hi" target="_blank">
                  Schedule Free Consultation
                </a>
              </Button>
            </div>

            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Special Offer for New Members</h4>
              <p className="text-lg mb-4">
                Get your first consultation absolutely FREE plus 20% off your first month!
              </p>
              <p className="text-sm opacity-80">
                *Offer valid for new members only. Limited time offer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;