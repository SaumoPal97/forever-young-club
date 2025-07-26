import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive wellness services tailored for adults 50+, focusing on gentle movement, 
            therapeutic healing, and maintaining an active, healthy lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Yoga Classes */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-gentle transition-all duration-300 border-border">
            <div className="text-center">
              <div className="bg-teal-circle/20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-teal-circle" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11c0 1.1.9 2 2 2h3v-8h4v8h3c1.1 0 2-.9 2-2V7l-7-5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Gentle Yoga</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Chair yoga, restorative poses, and gentle stretching designed to improve flexibility, 
                balance, and strength while being easy on joints.
              </p>
              <ul className="text-left space-y-2 mb-8 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sage-green rounded-full mr-3"></span>
                  Chair & Mat Options
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sage-green rounded-full mr-3"></span>
                  Balance & Flexibility Focus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sage-green rounded-full mr-3"></span>
                  Small Group Classes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-sage-green rounded-full mr-3"></span>
                  Beginner Friendly
                </li>
              </ul>
              <Button variant="gentle" size="senior" className="w-full">
                Learn More
              </Button>
            </div>
          </Card>

          {/* Oil Massage */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-gentle transition-all duration-300 border-border">
            <div className="text-center">
              <div className="bg-warm-orange/20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-warm-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Therapeutic Massage</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional oil massage therapy focusing on pain relief, circulation improvement, 
                and relaxation using techniques safe for seniors.
              </p>
              <ul className="text-left space-y-2 mb-8 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-orange rounded-full mr-3"></span>
                  Pain Relief Focus
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-orange rounded-full mr-3"></span>
                  Circulation Improvement
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-orange rounded-full mr-3"></span>
                  Stress Reduction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-warm-orange rounded-full mr-3"></span>
                  Licensed Therapists
                </li>
              </ul>
              <Button variant="warm" size="senior" className="w-full">
                Book Session
              </Button>
            </div>
          </Card>

          {/* Physiotherapy */}
          <Card className="p-8 bg-gradient-card shadow-card hover:shadow-gentle transition-all duration-300 border-border">
            <div className="text-center">
              <div className="bg-primary/20 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Physiotherapy</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Evidence-based physiotherapy treatments to restore mobility, reduce pain, 
                and prevent injuries with personalized care plans.
              </p>
              <ul className="text-left space-y-2 mb-8 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Mobility Restoration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Injury Prevention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Personalized Plans
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Certified Professionals
                </li>
              </ul>
              <Button variant="default" size="senior" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>

        {/* Special Programs */}
        <div className="bg-secondary/50 rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Special Programs for Women 50+</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We offer specialized wellness programs designed specifically for women's health needs after 50, 
            including menopause support, bone health, and hormonal balance.
          </p>
          <Button variant="hero" size="senior" className="mx-auto">
            Explore Women's Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;