import { Globe2, FileCheck2, Users } from "lucide-react";
import AboutHeroEGS from "@/components/Aboutcomp1";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ABOUT_IMAGE_URL =
  "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200";
// Preferably replace ABOVE with your own local asset import, e.g.
// import aboutImg from "@assets/egs_team_about.jpg";

export default function AboutUsBanner() {
  return (
    <>
        <Header/>
       
     <div className="mt-[80px]">
        <AboutHeroEGS/>
     </div>
   <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
    {/* yaha class change ki: flex-col-reverse lg:flex-row -> flex-col lg:flex-row-reverse */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
      {/* Left (now on right side in desktop): Content */}
      <div className="w-full lg:w-1/2">
        <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
          Your Partner in
          <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Global Travel & Documentation
          </span>
        </h1>

        <p className="mt-5 text-sm md:text-base text-slate-600 leading-relaxed">
          EGS Group is a specialized visa, attestation and travel support company
          helping individuals, families and corporates navigate complex international
          documentation with ease. From embassy legalization to airport assistance,
          our team ensures every step of your journey is simple, transparent and secure.
        </p>

        <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
          With a strong presence across South Asia and a network of trusted partners
          worldwide, we bring together professional expertise, reliable processes and
          personalized support under one roof.
        </p>
      </div>

      {/* Right (now on left side in desktop): Image block */}
      <div className="w-full lg:w-1/2">
        <div className="relative mx-auto max-w-md lg:max-w-none">
          {/* Soft gradient circle behind */}
          <div className="pointer-events-none absolute -inset-6 rounded-[2.75rem] bg-gradient-to-tr from-indigo-100 via-white to-purple-100 blur-xl" />

          <div className="relative overflow-hidden rounded-[2.25rem] bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
            <img
              src={ABOUT_IMAGE_URL}
              alt="EGS Group team"
              className="h-[280px] w-full object-cover md:h-[340px]"
            />

            {/* Overlay bottom info strip */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 pb-5 pt-10">
              <p className="text-xs uppercase tracking-[0.22em] text-indigo-200">
                EGS Group
              </p>
              <p className="mt-1 text-sm md:text-base font-semibold text-white">
                Trusted documentation & travel partner for thousands of
                travellers and professionals across the globe.
              </p>
            </div>
          </div>

          {/* Small floating badge card */}
          <div className="absolute -bottom-6 right-4 w-52 rounded-2xl bg-white shadow-xl px-4 py-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold">
              EGS
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">
                Certified & Compliant
              </p>
              <p className="text-[11px] text-slate-600">
                Processes aligned with embassy and consular norms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative curved line at bottom */}
  <div className="pointer-events-none absolute bottom-0 left-0 w-full">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-16 md:h-20"
    >
      <path
        fill="url(#about-curve)"
        d="M0,80 C240,120 480,40 720,60 C960,80 1200,120 1440,80 L1440,120 L0,120 Z"
      />
      <defs>
        <linearGradient id="about-curve" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="50%" stopColor="#E0ECFF" />
          <stop offset="100%" stopColor="#EEF2FF" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>





    <Footer/>
    </>
  );
}
