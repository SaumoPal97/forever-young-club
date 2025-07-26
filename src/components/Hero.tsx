import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8 animate-gentle-bounce">
            <img 
              src="/lovable-uploads/55999717-b412-4e62-8ff3-d1cd8290d264.png" 
              alt="FY Club - Forever Young" 
              className="h-32 w-32 mx-auto rounded-full shadow-card"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Forever Young
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground/90 mb-8">
            Wellness & Vitality for Life
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Discover gentle yoga, therapeutic massage, and expert physiotherapy designed specifically for adults 50+. 
            Embrace wellness, maintain mobility, and stay forever young at heart.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="warm" size="senior-xl" className="min-w-[200px]">
              Start Your Journey
            </Button>
            <Button variant="outline" size="senior-xl" className="min-w-[200px] bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/90">
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/20 rounded-full p-4 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Gentle & Safe</h3>
              <p className="text-center">Specially designed for seniors with focus on safety and comfort</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/20 rounded-full p-4 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Care</h3>
              <p className="text-center">Certified instructors and therapists with senior wellness expertise</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-primary-foreground/20 rounded-full p-4 mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Holistic Wellness</h3>
              <p className="text-center">Mind, body, and spirit wellness in a supportive community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;