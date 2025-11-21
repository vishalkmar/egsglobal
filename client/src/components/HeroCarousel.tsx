import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import airportImage from "@assets/generated_images/airport_terminal_travelers_scene.png";
import passportImage from "@assets/generated_images/passport_with_visa_stamps.png";
import travelersImage from "@assets/generated_images/happy_travelers_at_airport.png";
import consultationImage from "@assets/generated_images/customer_service_consultation.png";

const slides = [
  {
    image: airportImage,
    title: "Your Journey Begins Here",
    subtitle: "Expert visa services for seamless international travel",
    cta1: "Get Started",
    cta2: "Learn More",
  },
  {
    image: passportImage,
    title: "Hassle-Free Visa Processing",
    subtitle: "Fast, reliable, and professional visa assistance",
    cta1: "Apply Now",
    cta2: "View Services",
  },
  {
    image: travelersImage,
    title: "Travel With Confidence",
    subtitle: "Trusted by thousands of satisfied travelers worldwide",
    cta1: "Contact Us",
    cta2: "Success Stories",
  },
  {
    image: consultationImage,
    title: "Expert Consultation",
    subtitle: "Personalized guidance for all your visa needs",
    cta1: "Book Consultation",
    cta2: "Our Services",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-blue-900/80"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1
                data-testid={`carousel-title-${index}`}
                className="text-4xl md:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700"
              >
                {slide.title}
              </h1>
              <p
                data-testid={`carousel-subtitle-${index}`}
                className="text-lg md:text-2xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
              >
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                <Button
                  data-testid={`button-cta1-${index}`}
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 min-w-[150px]"
                >
                  {slide.cta1}
                </Button>
                <Button
                  data-testid={`button-cta2-${index}`}
                  size="lg"
                  variant="outline"
                  className="bg-white/5 backdrop-blur-md border border-white/30 text-white hover:bg-white/10 min-w-[150px]"
                >
                  {slide.cta2}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        data-testid="button-prev-slide"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-2 rounded-full hover-elevate active-elevate-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        data-testid="button-next-slide"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white p-2 rounded-full hover-elevate active-elevate-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            data-testid={`button-dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
