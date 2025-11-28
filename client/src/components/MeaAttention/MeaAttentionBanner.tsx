

import React, { useState, ChangeEvent, FormEvent } from "react";

type ServiceType = "attestation" | "apostille" | "translation" | "visa";

interface MeaFormData {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  city: string;
  service: ServiceType;
  details: string;
}

const MeaAttestationHero: React.FC = () => {
  const [formData, setFormData] = useState<MeaFormData>({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    city: "",
    service: "attestation",
    details: "",
  });

  const [submittedData, setSubmittedData] = useState<MeaFormData | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("MEA Attestation form data:", formData);
    setSubmittedData(formData);
    alert("Your MEA / Apostille enquiry has been submitted.");
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-14 md:pt-40 md:pb-20">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/meattestationheader.jpg')", // change as per your file
    }}
  />

  {/* Dark Overlay Gradient (same style as sticker visa) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" />

  {/* CONTENT BLOCK */}
  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-stretch">

      {/* LEFT SIDE TEXT */}
      <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-white">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-bold leading-tight md:leading-[1.15] space-y-1">
            <span className="block">Ministry of External</span>
            <span className="block">Affairs – MEA Attestation</span>
          </h1>
        </div>

        <p className="text-sm sm:text-base text-slate-100/90 max-w-xl leading-relaxed">
          EGS Group provides end-to-end support for MEA attestation of personal,
          educational and commercial documents. From state / chamber
          authentication to MEA stamping and safe delivery, we manage the entire
          process so your documents are ready for use abroad without hassles.
        </p>

        <ul className="space-y-1 text-xs sm:text-sm text-slate-100/90">
          <li>• MEA attestation for educational, personal & commercial documents</li>
          <li>• Coordination with HRD, Home Department & Chamber of Commerce</li>
          <li>• Expert guidance on country-wise documentation and timelines</li>
        </ul>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex items-stretch">
        <div className="w-full bg-white text-slate-900 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-9 backdrop-blur-[4px] bg-white/95">

          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="h-11 w-11 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
              EGS
            </div>
            <p className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 text-center">
              Online MEA Attestation Enquiry Form
            </p>
          </div>

          {/* YOUR ORIGINAL FORM (unchanged) */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />

            <div className="grid grid-cols-[0.9fr_1.5fr] gap-3">
              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm pr-8 appearance-none outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="+91">India +91</option>
                  <option value="+977">Nepal +977</option>
                  <option value="+880">Bangladesh +880</option>
                  <option value="+971">UAE +971</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs">
                  ▼
                </span>
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Enter Contact Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />

            <input
              type="text"
              name="city"
              placeholder="Which city are you in?"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />

            {/* Service Radio */}
            <div className="rounded-md border border-slate-200 px-3 py-3">
              <p className="text-xs font-semibold text-slate-600 mb-2">Select Service</p>
              <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
                {["attestation","apostille","translation","visa"].map((svc) => (
                  <label key={svc} className="inline-flex items-center gap-2 cursor-pointer text-slate-700">
                    <input
                      type="radio"
                      name="service"
                      value={svc}
                      checked={formData.service === svc}
                      onChange={handleChange}
                      className="accent-sky-600"
                    />
                    <span className="capitalize">{svc}</span>
                  </label>
                ))}
              </div>
            </div>

            <textarea
              name="details"
              rows={4}
              placeholder={`• Document type(s) you need MEA attestation / Apostille for
• Country where you will use the document
• Any specific instructions or urgent timelines`}
              value={formData.details}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-y"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-sky-600 hover:bg-sky-700 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 transition-colors shadow-md"
            >
              Submit Enquiry
            </button>
          </form>

          {/* Preview */}
          {submittedData && (
            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-xs font-semibold text-slate-600 mb-2">
                Submitted Data (preview)
              </p>
              <pre className="text-[11px] sm:text-xs bg-slate-50 border border-slate-200 rounded-md p-3 overflow-x-auto">
                {JSON.stringify(submittedData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default MeaAttestationHero;
