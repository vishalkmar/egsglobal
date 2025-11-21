import { Card } from "@/components/ui/card";
import expertiseImg from "@assets/generated_images/professional_expertise_team.png";
import processImg from "@assets/generated_images/seamless_process_workflow.png";
import globalImg from "@assets/generated_images/global_reach_world_map.png";
import supportImg from "@assets/generated_images/trusted_customer_support.png";

const features = [
  {
    title: "Professional Expertise",
    description: "A team well-versed with embassy protocols, legal formalities, and international travel standards.",
    image: expertiseImg,
  },
  {
    title: "Seamless Processes",
    description: "Streamlined services designed to save you time, reduce stress, and increase approval success rates.",
    image: processImg,
  },
  {
    title: "Global Reach",
    description: "Tailored solutions for Indian, Nepalese, and Bangladeshi residents, covering multiple destinations worldwide.",
    image: globalImg,
  },
  {
    title: "Trusted Support",
    description: "Reliable, compliant, and customer-focused services that you can count on.",
    image: supportImg,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-background -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            EGS Group - Turning Complex Procedures into Simple Journeys
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 mt-8">
              Why Choose EGS Group?
            </h3>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              At EGS Group, we go beyond being just a service provider—we are your trusted partner in simplifying global travel and documentation requirements. With years of expertise, a dedicated team of professionals, and a client-first approach, we ensure every service is delivered with accuracy, transparency, and efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
              We understand that visa processes, document authentication, and travel preparations can often feel overwhelming. That's why we have built end-to-end solutions under one roof—ranging from visa assistance and document legalization to travel insurance, airport facilitation, and accommodation support.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3
                  data-testid={`text-feature-title-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  {feature.title}
                </h3>
                <p
                  data-testid={`text-feature-description-${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground text-sm leading-relaxed"
                >
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            With EGS Group, you can embark on your journey with complete confidence, knowing that every detail is taken care of professionally and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
