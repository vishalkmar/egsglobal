import {
  FileCheck2,
  Clock,
  Layers,
  ShieldPlus,
  Users,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    title: "Embassy-Compliant Dummy Tickets",
    description:
      "Genuine and verifiable flight reservations accepted by embassies and VFS centers.",
    icon: FileCheck2,
  },
  {
    title: "Quick Issuance",
    description:
      "Prompt delivery of dummy tickets to meet urgent visa application requirements.",
    icon: Clock,
  },
  {
    title: "Customizable Options",
    description:
      "One-way, round-trip, or multi-city bookings based on travel needs.",
    icon: Layers,
  },
  {
    title: "Comprehensive Travel Insurance",
    description:
      "Coverage for medical emergencies, trip cancellations, and lost baggage.",
    icon: ShieldPlus,
  },
  {
    title: "Tailored Insurance Plans",
    description:
      "Options for individuals, families, students, and business travelers.",
    icon: Users,
  },
  {
    title: "Peace of Mind",
    description:
      "Strengthening visa applications while ensuring safety and protection throughout the journey.",
    icon: HeartHandshake,
  },
];

const DummyTicketInsuranceService: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Dummy Ticket & Insurance Services
          </h2>
          <div className="h-[2px] w-20 bg-sky-500 mt-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Circle Icon */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Icon className="w-9 h-9 text-slate-800" />
                  </div>
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-[0.9rem] text-slate-500 leading-relaxed max-w-xs mx-auto">
                    {service.description}
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

export default DummyTicketInsuranceService;
