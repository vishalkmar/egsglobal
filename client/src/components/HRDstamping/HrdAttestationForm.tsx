"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";

const SERVICE_OPTIONS = [
  "HRD Attestation",
  "Apostille",
  "MEA Attestation",
  "Embassy Attestation",
  "PCC / Police Clearance",
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  state: string;
  service: string;
  message: string;
  captchaInput: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  state: "",
  service: "",
  message: "",
  captchaInput: "",
};

function generateCaptcha() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default function HRDAttestationSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [captcha, setCaptcha] = useState<string>(generateCaptcha);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSuccessMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("HRD Attestation Enquiry:", {
      ...form,
      captchaShownToUser: captcha,
    });

    setSuccessMessage(
      "Thank you for reaching out. Our EGS Group team will contact you shortly regarding your attestation requirements."
    );
    setForm(initialFormState);
    setCaptcha(generateCaptcha());
  };

  return (
    <section className=" md:py-20 bg-white py-[100px] bg-gray">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
          {/* LEFT: Content */}
          <div>
            <h2 className="text-3xl md:text-5xl text-[#10b9e8] font-semibold text-slate-900 mb-3">
              HRD Attestation Services
            </h2>
            <div className="h-px w-24 bg-slate-300 mb-6" />

            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
              Attestation of educational documents is essential for individuals
              who wish to pursue higher education or seek employment abroad.
              HRD Attestation is a crucial process that validates the
              authenticity of educational certificates issued in India.
              <span className="font-medium"> EGS Group</span> understands the
              significance of this procedure and is here to guide you through it
              seamlessly.
            </p>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
              HRD Attestation service offered by <span className="font-medium">EGS Group</span>{" "}
              ensures that your educational documents meet the necessary
              requirements set by government authorities and are recognised
              internationally. Our team has an in-depth understanding of the
              attestation process, and we offer reliable and efficient services
              to simplify the entire procedure.
            </p>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8">
              We offer HRD Attestation services for a variety of educational
              documents, including degree certificates, diploma certificates,
              mark sheets and other academic records. Our streamlined process
              ensures that your documents are processed correctly and on time.
            </p>

          
            {/* You can add a step list / accordion below later if needed */}
          </div>

          {/* RIGHT: Form card */}
          <div className="rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 p-[1px] shadow-lg">
            <div className="rounded-2xl bg-gradient-to-b from-sky-500/80 via-blue-600/90 to-indigo-700/95 p-6 md:p-7 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Looking for Services Related to your Attestation Needs?
              </h3>
              <p className="text-xs md:text-sm text-sky-100 mb-6">
                Share your details and our EGS Group attestation experts will
                connect with you to discuss the best solution for your case.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First + Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleChange}
                      className="bg-white/90 border-none text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleChange}
                      className="bg-white/90 border-none text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email + Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      className="bg-white/90 border-none text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Mobile No</label>
                    <Input
                      name="mobile"
                      placeholder="Mobile Number"
                      value={form.mobile}
                      onChange={handleChange}
                      className="bg-white/90 border-none text-slate-900 placeholder:text-slate-400"
                      required
                    />
                  </div>
                </div>

                {/* State + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium">State</label>
                    <Input
                      name="state"
                      placeholder="State"
                      value={form.state}
                      onChange={handleChange}
                      className="bg-white/90 border-none text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Interested in</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-full px-3 py-2 text-sm bg-white/90 text-slate-900 border-none outline-none"
                      required
                    >
                      <option value="">Select the Service you are Interested in</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Share your attestation requirement or queries..."
                    value={form.message}
                    onChange={handleChange}
                    className="bg-white/90 border-none text-slate-900 placeholder:text-slate-400 min-h-[90px]"
                  />
                </div>

              
                {/* Submit + Success message */}
                <div className="pt-2 space-y-3">
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-white text-blue-700 hover:bg-sky-50 font-semibold"
                  >
                    Submit
                  </Button>

                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
