import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FileText, Clock, Shield } from "lucide-react";

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
}

export default function ServicePage({ title, description, features }: ServicePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h1 data-testid="text-service-title" className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            <p data-testid="text-service-description" className="text-xl text-white/90 max-w-3xl">
              {description}
            </p>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Easy Process</h3>
                <p className="text-sm text-muted-foreground">
                  Simple and straightforward application process
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Quick turnaround time for all services
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  Your documents are safe with us
                </p>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Service Features</h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-none">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today for personalized assistance with your {title.toLowerCase()} needs. Our expert team is ready to help you.
                </p>
                <div className="space-y-3">
                  <Button
                    data-testid="button-apply-now"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    Apply Now
                  </Button>
                  <Button
                    data-testid="button-contact"
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
