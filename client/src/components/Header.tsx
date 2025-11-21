import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "visa" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Embassy & Legalization Services", path: "/embassy-legalization" },
    { name: "Attestation & Apostille Service", path: "/attestation-apostille" },
    { name: "Insurance & Dummy Ticket", path: "/insurance-dummy-ticket" },
    { name: "Meet & Greet", path: "/meet-greet" },
    { name: "Accommodation & Assistant", path: "/accommodation-assistant" },
  ];

  const visaSubItems = [
    { name: "Normal Visa", path: "/visa/normal" },
    { name: "E-Visa", path: "/visa/e-visa" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <Link href="/">
            <div data-testid="link-logo" className="flex items-center gap-2 cursor-pointer">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md font-bold text-lg">
                EGS Group
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <span
                    data-testid={`link-${link.name.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors hover:text-primary relative cursor-pointer ${
                      location === link.path ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                    {location === link.path && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                    )}
                  </span>
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  data-testid="button-services-dropdown"
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {(openDropdown === "services" || openDropdown === "visa") && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-card-border rounded-md shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {serviceItems.map((item) => (
                      <Link key={item.path} href={item.path}>
                        <span
                          data-testid={`link-service-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm hover-elevate active-elevate-2 transition-colors cursor-pointer"
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}

                    {/* Visa Sub-dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown("visa")}
                      onMouseLeave={() => setOpenDropdown("services")}
                    >
                      <button
                        data-testid="button-visa-submenu"
                        className="w-full flex items-center justify-between px-4 py-2 text-sm hover-elevate active-elevate-2 transition-colors"
                      >
                        Visa
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                      </button>

                      {openDropdown === "visa" && (
                        <div className="absolute left-full top-0 ml-1 w-48 bg-card border border-card-border rounded-md shadow-lg py-2 animate-in fade-in slide-in-from-left-2 duration-200">
                          {visaSubItems.map((item) => (
                            <Link key={item.path} href={item.path}>
                              <span
                                data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="block px-4 py-2 text-sm hover-elevate active-elevate-2 transition-colors cursor-pointer"
                              >
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Login Button - Desktop Only */}
            <Button
              data-testid="button-login"
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                data-testid="button-mobile-menu"
                variant="ghost"
                size="icon"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-md font-bold">
                    EGS Group
                  </div>
                  <Button
                    data-testid="button-close-mobile-menu"
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Menu Content */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <Link key={link.path} href={link.path}>
                        <span
                          data-testid={`mobile-link-${link.name.toLowerCase()}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 cursor-pointer ${
                            location === link.path
                              ? "bg-primary text-primary-foreground"
                              : ""
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    ))}

                    {/* Mobile Services */}
                    <div className="pt-2">
                      <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">
                        Services
                      </div>
                      {serviceItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                          <span
                            data-testid={`mobile-service-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-md text-sm hover-elevate active-elevate-2 transition-colors cursor-pointer"
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}

                      <div className="px-4 py-2 text-xs font-semibold text-muted-foreground">
                        Visa Services
                      </div>
                      {visaSubItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                          <span
                            data-testid={`mobile-visa-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 rounded-md text-sm hover-elevate active-elevate-2 transition-colors cursor-pointer"
                          >
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Login Button */}
                    <div className="pt-4">
                      <Button
                        data-testid="button-mobile-login"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
