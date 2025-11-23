

import { Plane, FileText, CreditCard, ThumbsUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Select Your Destination",
    description: "Choose your origin, destination and desired travel date.",
    icon: Plane,
  },
  {
    id: "02",
    title: "Fill Your Details",
    description:
      "Enter traveller details like name (as per passport), email, mobile and DOB.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Pay Booking Amount",
    description:
      "Secure your reservation by completing the required booking payment.",
    icon: CreditCard,
  },
  {
    id: "04",
    title: "Get Your Ticket",
    description:
      "Receive your dummy ticket and be ready to submit it with your visa file.",
    icon: ThumbsUp,
  },
];

const DummyTicketProcess: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Booking Process
          </h2>
          <div className="h-[2px] w-20 bg-sky-500 mt-2" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Circle card + number badge */}
                <div className="relative">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      <Icon className="w-9 h-9 text-slate-800" />
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1">
                    <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center shadow-md">
                      <span className="text-xs font-semibold text-white">
                        {step.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-[0.9rem] text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DummyTicketProcess;
