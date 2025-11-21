import { Award, Clock, Target, Heart } from "lucide-react";

const TEAM_IMAGE_URL =
  "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200";

const ABOUT_IMAGE_URL =
  "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200";

function WhyChooseUs() {
  return (
    <>
      {/* TOP: curved image + copy + stats */}
       <section className="relative overflow-hidden bg-slate-50 py-14 md:py-18">
         <h1 className="text-4xl text-center md:text-5xl font-bold md:py-28 text-sky-600 tracking-wide">
             EGS Group – Effortless Global Travel
            </h1>

      {/* Background hex shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gray-200/50 rotate-45 rounded-xl blur-sm" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-200/40 rotate-45 rounded-xl blur-sm" />
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gray-100 rotate-45 rounded-xl blur-sm" />

      {/* Main content wrapper */}
      <div className="max-w-7xl mx-auto px-5 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-sky-600 tracking-wide">
             Why Choose Us ?
            </h1>

            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
              At EGS Group, we go beyond being just a service provider—we are your trusted partner in simplifying global travel and documentation requirements. With years of expertise, a dedicated team of professionals, and a client-first approach, we ensure every service is delivered with accuracy, transparency, and efficiency.
We understand that visa processes, document authentication, and travel preparations can often feel overwhelming. That’s why we have built end-to-end solutions under one roof—ranging from visa assistance and document legalization to travel insurance, airport facilitation, and accommodation support.

            </p>

            <button className="mt-7 px-6 py-3 bg-sky-500 text-white font-semibold rounded-full shadow-md hover:bg-sky-600 transition">
              More info
            </button>
          </div>

          {/* RIGHT SIDE — HEXAGON IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Hexagon mask wrapper */}
              <div className="w-[590px] h-[530px] relative overflow-hidden"
                   style={{
                     clipPath:
                       "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                   }}>
                <img
                  src={ ABOUT_IMAGE_URL}
                  alt="Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating small hexagon */}
              <div
                className="absolute -bottom-6 -left-10 w-20 h-20 bg-gray-200 shadow-md"
                style={{
                  clipPath:
                    "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>




      {/* <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8"> */}
        <div className="max-w-7xl mx-auto  py-[60px] ">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Left circular graphic */}
            <div className="relative w-96 h-96 flex-shrink-0">
              {/* big faded circle */}
              <div className="absolute inset-0 bg-gray-200 rounded-full opacity-30" />

              {/* top icon */}
              <div className="absolute -top-8 right-0 w-15 h-15 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl z-20">
                <Award className="w-14 h-14 text-white" />
              </div>

              {/* upper middle icon */}
              <div className="absolute top-1/4 -right-14 w-15 h-15 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl z-20">
                <Clock className="w-14 h-14 text-white" />
              </div>

              {/* lower middle icon */}
              <div className="absolute bottom-1/4 -right-14 w-15 h-15 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center shadow-xl z-20">
                <Target className="w-14 h-14 text-white" />
              </div>

              {/* bottom icon */}
              <div className="absolute -bottom-4 right-0 w-15 h-15 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center shadow-xl z-20">
                <Heart className="w-14 h-14 text-white" />
              </div>

              {/* center image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <img
                  src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="EGS Group"
                  className="w-56 h-56 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Right text list */}
            <div className="max-w-2xl space-y-4">
              <div className="flex items-start gap-6">
                <div className="w-16 h-1 bg-gray-400 mt-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Professional Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A team well-versed with embassy protocols, legal formalities
                    and international travel standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-1 bg-gray-400 mt-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Seamless Processes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Streamlined services designed to save you time, reduce
                    stress and increase approval success rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-1 bg-gray-400 mt-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Global Reach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tailored solutions for Indian, Nepalese and Bangladeshi
                    residents, covering multiple destinations worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-1 bg-gray-400 mt-4 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Trusted Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reliable, compliant and customer-focused services that you
                    can count on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
