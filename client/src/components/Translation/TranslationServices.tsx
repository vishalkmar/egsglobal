"use client";

import React from "react";

type Category = {
  name: string;
  items: string[];
};

type TranslationServiceCard = {
  key: string;
  title: string;
  badge: string;
  shortLine: string;
  categories: Category[];
};

const CERTIFICATE_TRANSLATION_CATEGORIES: Category[] = [
  {
    name: "Personal Certificate Translation",
    items: [
      "Marriage Certificate",
      "Birth Certificate",
      "Death Certificate",
      "Leaving Certificate",
      "Police Clearance Certificate",
    ],
  },
  {
    name: "Commercial Documents",
    items: [
      "Certificate of Origin",
      "Certificate of Incorporation",
      "Invoices",
    ],
  },
  {
    name: "Educational Certificate Translation",
    items: [
      "School Leaving Certificates",
      "College Leaving Certificates",
      "Degree Certificates",
      "Mark Sheets",
      "Bonafide Certificate",
      "PG Degree Certificate",
    ],
  },
];

// You can change / extend these easily later
const IMMIGRATION_TRANSLATION_CATEGORIES: Category[] = [
  {
    name: "Visa & PR Applications",
    items: [
      "Visa Application Forms",
      "Permanent Residency Documents",
      "Invitation Letters",
      "Employment Contracts",
    ],
  },
  {
    name: "Identity & Status Documents",
    items: [
      "Passports & ID Cards",
      "Residence Permits",
      "Police Clearance / PCC",
      "Civil Status Certificates",
    ],
  },
  {
    name: "Supporting Immigration Papers",
    items: [
      "Bank Statements",
      "Salary Slips",
      "Sponsorship Letters",
      "Affidavits & Declarations",
    ],
  },
];

const TRANSLATION_SERVICES: TranslationServiceCard[] = [
  {
    key: "certificate",
    title: "Certificate Translation",
    badge: "For Personal, Commercial & Educational Documents",
    shortLine:
      "Accurate, formatted translations for certificates required by embassies, universities and global authorities.",
    categories: CERTIFICATE_TRANSLATION_CATEGORIES,
  },
  {
    key: "immigration",
    title: "Immigration Translation",
    badge: "For Visa, PR & Residency Files",
    shortLine:
      "Specialised translations tailored to immigration, consulate and visa centre requirements across destinations.",
    categories: IMMIGRATION_TRANSLATION_CATEGORIES,
  },
];

const TranslationServicesAtGlance: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="mb-10 text-center space-y-3">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs md:text-sm font-semibold text-sky-700 uppercase tracking-wide">
            At Glance To Translation Services
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Professional Translation Solutions by EGS Group
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Two focused translation services designed for
            certificate validation and smooth immigration processing.
          </p>
        </div>

        {/* Two cards layout */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {TRANSLATION_SERVICES.map((service) => (
            <div
              key={service.key}
              className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Soft gradient accent */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-sky-400/20 via-rose-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative p-5 md:p-6 space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-[0.7rem] md:text-xs font-semibold px-3 py-1">
                    {service.badge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600">
                    {service.shortLine}
                  </p>
                </div>

                {/* Categories */}
                <div className="mt-3 space-y-4">
                  {service.categories.map((category) => (
                    <div
                      key={category.name}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 md:px-4 md:py-3.5"
                    >
                      <p className="text-xs md:text-sm font-semibold text-slate-900 mb-1.5">
                        {category.name}
                      </p>
                      <ul className="space-y-1">
                        {category.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-1.5 text-[0.75rem] md:text-xs text-slate-600"
                          >
                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Small EGS footer line */}
                <div className="pt-2 border-t border-slate-100 mt-4">
                  <p className="text-[0.7rem] md:text-xs text-slate-500">
                    Managed and quality-checked by EGS Group&apos;s specialised
                    translation team.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TranslationServicesAtGlance;
