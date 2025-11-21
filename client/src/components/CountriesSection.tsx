import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import indiaFlag from "@assets/generated_images/india_national_flag.png";
import nepalFlag from "@assets/generated_images/nepal_national_flag.png";
import bangladeshFlag from "@assets/generated_images/bangladesh_national_flag.png";

const countries = [
  {
    name: "India",
    flag: indiaFlag,
    description:
      "Comprehensive visa services for India including tourist, business, and medical visas. Expert assistance with document preparation and embassy procedures.",
    highlights: ["Tourist Visa", "Business Visa", "Medical Visa", "Embassy Support"],
  },
  {
    name: "Nepal",
    flag: nepalFlag,
    description:
      "Fast and reliable visa processing for Nepal. We handle all types of visas including trekking permits, tourist visas, and business travel documentation.",
    highlights: ["Tourist Visa", "Trekking Permits", "Business Visa", "Fast Processing"],
  },
  {
    name: "Bangladesh",
    flag: bangladeshFlag,
    description:
      "Complete visa solutions for Bangladesh travel. Professional guidance for tourist visas, business visas, and visa extensions with guaranteed support.",
    highlights: ["Tourist Visa", "Business Visa", "Visa Extensions", "Expert Guidance"],
  },
];

export default function CountriesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Countries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized visa services for multiple destinations with expert local knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <Card
              key={country.name}
              data-testid={`card-country-${country.name.toLowerCase()}`}
              className="group overflow-hidden hover:-translate-y-3 transition-all duration-300 shadow-xl hover:shadow-2xl border-2 hover:border-primary/40"
            >
              {/* Flag Image - Large Banner Style */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <h3
                  data-testid={`text-country-name-${country.name.toLowerCase()}`}
                  className="absolute bottom-4 left-6 text-3xl font-bold text-white drop-shadow-lg"
                >
                  {country.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p
                  data-testid={`text-country-description-${country.name.toLowerCase()}`}
                  className="text-muted-foreground text-sm leading-relaxed mb-6"
                >
                  {country.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {country.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button
                  data-testid={`button-learn-more-${country.name.toLowerCase()}`}
                  variant="outline"
                  className="w-full group/button border-2 hover:border-primary"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/button:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
