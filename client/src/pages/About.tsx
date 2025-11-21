import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 data-testid="text-about-title" className="text-4xl md:text-5xl font-bold mb-4">
              About EGS Group
            </h1>
            <p data-testid="text-about-subtitle" className="text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner in visa and immigration services since 2010
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  EGS Group is a leading visa and immigration consultancy with over a decade of experience in helping travelers achieve their international dreams. We specialize in providing comprehensive visa services for multiple countries including India, Nepal, and Bangladesh.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our team of experienced professionals is dedicated to making your visa application process as smooth and stress-free as possible. We understand the complexities of international travel documentation and are here to guide you every step of the way.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  To provide exceptional visa and immigration services that exceed our clients' expectations. We strive to make international travel accessible to everyone by offering reliable, efficient, and personalized assistance.
                </p>
                <Card className="p-6 mt-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none">
                  <div className="space-y-3">
                    {["Expert Consultation", "Fast Processing", "100% Transparency", "24/7 Support"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Happy Clients", value: "10,000+" },
                { label: "Success Rate", value: "98%" },
                { label: "Countries", value: "50+" },
                { label: "Years Experience", value: "13+" },
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
