const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Choose FY Club?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Forever Young Club, we understand that wellness after 50 requires a different approach. 
              Our experienced team specializes in gentle, effective treatments that honor your body's 
              changing needs while helping you maintain strength, flexibility, and vitality.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-circle rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certified Senior Specialists</h3>
                  <p className="text-muted-foreground">All our instructors and therapists are certified in senior wellness and understand age-specific health considerations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-warm-orange rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Safe & Comfortable Environment</h3>
                  <p className="text-muted-foreground">Our studio is designed with seniors in mind - accessible, well-lit, and equipped with supportive props and equipment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-sage-green rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Supportive Community</h3>
                  <p className="text-muted-foreground">Join a warm, welcoming community of like-minded individuals on their wellness journey.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats/Testimonial */}
          <div className="bg-card rounded-lg p-8 shadow-card">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Impact</h3>
              <p className="text-muted-foreground">Real results for real people</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-circle mb-2">500+</div>
                <div className="text-muted-foreground">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-warm-orange mb-2">95%</div>
                <div className="text-muted-foreground">Report Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-sage-green mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
            
            <div className="bg-secondary/50 rounded-lg p-6">
              <p className="text-foreground italic mb-4">
                "FY Club has transformed my life. At 68, I feel stronger and more flexible than I have in years. 
                The instructors are so patient and understanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-circle rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold text-foreground">Margaret S.</div>
                  <div className="text-muted-foreground text-sm">Member since 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;