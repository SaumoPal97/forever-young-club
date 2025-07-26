import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/55999717-b412-4e62-8ff3-d1cd8290d264.png`}
              alt="FY Club Logo" 
              className="h-12 w-12 rounded-full shadow-gentle"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">FY Club</h1>
              <p className="text-sm text-muted-foreground">Forever Young</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="warm" size="senior" className="hidden md:flex">
            <a href="https://api.whatsapp.com/send?phone=919476133034&text=Hi" target="_blank">
              Book Session
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;