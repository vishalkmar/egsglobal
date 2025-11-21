import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import embassyImg from "@assets/generated_images/embassy_legalization_service.png";
import attestationImg from "@assets/generated_images/attestation_certificate_service.png";
import insuranceImg from "@assets/generated_images/travel_insurance_documents.png";
import meetGreetImg from "@assets/generated_images/meet_and_greet_service.png";
import accommodationImg from "@assets/generated_images/accommodation_service.png";
import visaImg from "@assets/generated_images/visa_approval_service.png";

const services = [
  {
    image: embassyImg,
    title: "Embassy & Legalization",
    description: "Complete embassy legalization and document authentication services for international use.",
    path: "/embassy-legalization",
  },
  {
    image: attestationImg,
    title: "Attestation & Apostille",
    description: "Professional attestation and apostille services for educational and official documents.",
    path: "/attestation-apostille",
  },
  {
    image: insuranceImg,
    title: "Insurance & Dummy Ticket",
    description: "Travel insurance and flight reservation services for visa applications.",
    path: "/insurance-dummy-ticket",
  },
  {
    image: meetGreetImg,
    title: "Meet & Greet",
    description: "Airport assistance and personalized meet & greet services for smooth arrivals.",
    path: "/meet-greet",
  },
  {
    image: accommodationImg,
    title: "Accommodation & Assistant",
    description: "Help with booking accommodations and personal assistance throughout your journey.",
    path: "/accommodation-assistant",
  },
  {
    image: visaImg,
    title: "Visa Services",
    description: "Comprehensive visa processing including normal visas and e-visa services.",
    path: "/visa/normal",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Services We Provide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive visa and travel services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {service.title}
                </h3>
                <p
                  data-testid={`text-service-description-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground text-sm mb-5 leading-relaxed min-h-[3rem]"
                >
                  {service.description}
                </p>
                <Link href={service.path}>
                  <Button
                    data-testid={`button-service-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    variant="ghost"
                    className="group/button p-0 h-auto hover:bg-transparent"
                  >
                    <span className="text-primary font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
