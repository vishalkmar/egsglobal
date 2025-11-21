import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import indiaFlag from "@assets/generated_images/india_national_flag.png";
import nepalFlag from "@assets/generated_images/nepal_national_flag.png";
import bangladeshFlag from "@assets/generated_images/bangladesh_national_flag.png";

const countries = [
  {
    name: "India",
    flag: indiaFlag,
    description:
      "Comprehensive visa services for India including tourist, business, and medical visas. Expert assistance with document preparation and embassy procedures.",
  },
  {
    name: "Nepal",
    flag: nepalFlag,
    description:
      "Fast and reliable visa processing for Nepal. We handle all types of visas including trekking permits, tourist visas, and business travel documentation.",
  },
  {
    name: "Bangladesh",
    flag: bangladeshFlag,
    description:
      "Complete visa solutions for Bangladesh travel. Professional guidance for tourist visas, business visas, and visa extensions with guaranteed support.",
  },
];

export default function CountriesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
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
              className="overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-16 rounded-md overflow-hidden shadow-md flex-shrink-0">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    data-testid={`text-country-name-${country.name.toLowerCase()}`}
                    className="text-2xl font-semibold"
                  >
                    {country.name}
                  </h3>
                </div>
                <p
                  data-testid={`text-country-description-${country.name.toLowerCase()}`}
                  className="text-muted-foreground text-sm leading-relaxed mb-6"
                >
                  {country.description}
                </p>
                <Button
                  data-testid={`button-learn-more-${country.name.toLowerCase()}`}
                  variant="outline"
                  className="w-full group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
