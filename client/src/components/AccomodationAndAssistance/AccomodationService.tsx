import {
  Building2,
  Home,
  Wallet,
  Briefcase,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const services = [
  {
    title: "Short-Term Accommodation",
    description:
      "Support in booking hotels or serviced apartments for short visits.",
    icon: Building2,
  },
  {
    title: "Long-Term Housing Solutions",
    description:
      "Assistance in securing apartments or hostels for students, employees, and families.",
    icon: Home,
  },
  {
    title: "Budget-Friendly Options",
    description:
      "Tailored recommendations that fit individual financial preferences.",
    icon: Wallet,
  },
  {
    title: "Premium & Executive Stays",
    description:
      "Access to high-quality, well-connected properties for business and corporate travelers.",
    icon: Briefcase,
  },
  {
    title: "Verified & Secure Properties",
    description:
      "Ensuring all accommodations are safe, reliable, and compliant with local standards.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Support",
    description:
      "Guidance from booking to check-in for a hassle-free living experience abroad.",
    icon: Handshake,
  },
];

const AccommodationServices: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Accommodation Services
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
                {/* Icon Circle */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Icon className="w-9 h-9 text-slate-800" />
                  </div>
                </div>

                {/* Title + Description */}
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

export default AccommodationServices;
