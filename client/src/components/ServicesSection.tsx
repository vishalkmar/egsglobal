import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Award, Shield, Users, Home, Plane } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: FileText,
    title: "Embassy & Legalization",
    description: "Complete embassy legalization and document authentication services for international use.",
    path: "/embassy-legalization",
  },
  {
    icon: Award,
    title: "Attestation & Apostille",
    description: "Professional attestation and apostille services for educational and official documents.",
    path: "/attestation-apostille",
  },
  {
    icon: Shield,
    title: "Insurance & Dummy Ticket",
    description: "Travel insurance and flight reservation services for visa applications.",
    path: "/insurance-dummy-ticket",
  },
  {
    icon: Users,
    title: "Meet & Greet",
    description: "Airport assistance and personalized meet & greet services for smooth arrivals.",
    path: "/meet-greet",
  },
  {
    icon: Home,
    title: "Accommodation & Assistant",
    description: "Help with booking accommodations and personal assistance throughout your journey.",
    path: "/accommodation-assistant",
  },
  {
    icon: Plane,
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 overflow-visible"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3
                    data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-xl font-semibold mb-3"
                  >
                    {service.title}
                  </h3>
                  <p
                    data-testid={`text-service-description-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-muted-foreground text-sm mb-4 leading-relaxed"
                  >
                    {service.description}
                  </p>
                  <Link href={service.path}>
                    <Button
                      data-testid={`button-service-learn-more-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      variant="ghost"
                      className="group/button p-0 h-auto hover:bg-transparent"
                    >
                      <span className="text-primary font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
