const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/55999717-b412-4e62-8ff3-d1cd8290d264.png" 
                alt="FY Club Logo" 
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">FY Club</h3>
                <p className="text-sm opacity-80">Forever Young</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Empowering adults 50+ to live their healthiest, most vibrant lives through 
              gentle yoga, therapeutic massage, and expert physiotherapy.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Licensed & Certified • Senior Wellness Specialists • Est. 2025
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>+919476133034</p>
              <p>paleldercare@gmail.com</p>
              <p className="text-sm">
                54 Feet Road, Benachity<br />
                Durgapur 713213
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 FY Club - Forever Young. All rights reserved. | 
            <span className="mx-2">Privacy Policy</span> | 
            <span className="mx-2">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;