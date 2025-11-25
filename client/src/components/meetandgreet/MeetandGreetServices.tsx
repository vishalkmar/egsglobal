import React from "react";
import {
  CarFront,
  MapPin,
  UserCheck,
  Clock3,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

const meetGreetSteps = [
  {
    title: "Airport Pick-Up & Drop-Off",
    description:
      "Comfortable and timely transfers to and from airports.",
    icon: CarFront,
  },
  {
    title: "Hotel-to-VFS Transfers",
    description:
      "Hassle-free transport between your accommodation and visa application centers.",
    icon: MapPin,
  },
  {
    title: "Personalized Assistance",
    description:
      "Dedicated staff to guide and support you throughout your journey.",
    icon: UserCheck,
  },
  {
    title: "Real-Time Coordination",
    description:
      "Ensuring seamless transfers and on-time arrivals for appointments.",
    icon: Clock3,
  },
  {
    title: "Safety & Comfort",
    description:
      "Professionally trained drivers and sanitized vehicles for a secure travel experience.",
    icon: ShieldCheck,
  },
  {
    title: "End-to-End Convenience",
    description:
      "From arrival to departure, we manage every detail for a smooth travel experience.",
    icon: HandHeart,
  },
];

const MeetGreetServices: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Meet &amp; Greet Services
          </h2>
          <div className="h-[2px] w-20 bg-sky-500 mt-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {meetGreetSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4"
              >
                {/* Circle icon card */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Icon className="w-9 h-9 text-slate-800" />
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

export default MeetGreetServices;
