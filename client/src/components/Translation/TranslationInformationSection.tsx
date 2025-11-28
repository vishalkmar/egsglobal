"use client";

import React, { useState } from "react";

type TabKey = "what" | "benefits" | "why";

const ImmigrationTabs = {
  what: {
    heading: "What Is Immigration Translation?",
    content: (
      <>
        <p className="mb-3">
          Immigration translation is the translation of documents needed for
          immigration purposes, such as birth certificates, marriage
          certificates, divorce decrees, educational transcripts and employment
          records. These documents must be accurately translated to support an
          immigration application.
        </p>
        <p className="mb-3">
          Professional translation services, employing translators fluent in
          both the source and target languages and experienced in translating
          official documents, typically perform immigration translation. To
          verify the accuracy of the translation, an affidavit or other form of
          certification may be required.
        </p>
        <p>
          The reliability and accuracy of translated documents are crucial in
          the immigration process, as even minor errors can delay or impact the
          outcome of an application.
        </p>
      </>
    ),
  },
  benefits: {
    heading: "The Benefits of Immigration Translation",
    content: (
      <>
        <p className="mb-3">
          Here are some advantages of using a professional translation service
          for immigration translation:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Accuracy:</span> Professional
            translation services ensure that your translated documents are
            accurate and faithfully represent the originals. Even small
            mistakes can have serious consequences for your application.
          </li>
          <li>
            <span className="font-semibold">Legality:</span> Many immigration
            authorities require legally recognised translations. EGS Group
            understands these requirements and provides translations that meet
            official standards.
          </li>
          <li>
            <span className="font-semibold">Speed:</span> With the right
            resources and workflows, professional teams can translate documents
            quickly and efficiently—especially helpful when you are working with
            strict timelines.
          </li>
          <li>
            <span className="font-semibold">Quality:</span> Experienced
            translators fluent in both languages ensure that translated content
            is clear, precise and easy to read.
          </li>
          <li>
            <span className="font-semibold">Convenience:</span> Using EGS Group
            saves you time and effort—you don’t have to find individual
            translators or check every detail yourself.
          </li>
        </ul>
      </>
    ),
  },
  why: {
    heading: "Why EGS Group for Immigration Translation?",
    content: (
      <>
        <p className="mb-3">
          EGS Group understands the unique challenges individuals and businesses
          face when navigating immigration processes and dealing with
          authorities in a foreign country. That’s why we offer translation
          solutions tailored to each client’s specific needs.
        </p>
        <p>
          Our team of native and expert translators has the skills to deliver
          high-quality, legally compliant translations that are effective and
          reliable. EGS Group takes pride in collaborating closely with clients,
          ensuring every document supports a strong and complete immigration
          file.
        </p>
      </>
    ),
  },
};

const CertificateTabs = {
  what: {
    heading: "What Is Certificate Translation?",
    content: (
      <>
        <p className="mb-3">
          Certificate translation involves converting an official document from
          one language to another. This service is often required when a
          foreign-language certificate must be presented for a job application,
          immigration process or any legal or official purpose.
        </p>
        <p className="mb-3">
          Professional translation companies like EGS Group perform certificate
          translation using translators who are proficient in both the source
          and target languages and have experience with official documents. The
          translated certificate must be accurate and preserve the exact meaning
          of the original.
        </p>
        <p>
          In many cases, an affidavit or other form of certification is needed
          to confirm the accuracy and authenticity of the translation.
        </p>
      </>
    ),
  },
  benefits: {
    heading: "The Benefits of Certificate Translation",
    content: (
      <>
        <p className="mb-3">
          There are several advantages to having your certificates translated by
          EGS Group:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Accuracy:</span> We ensure your
            translated certificate is precise and faithful to the original,
            which is critical when documents are used for legal or official
            verification.
          </li>
          <li>
            <span className="font-semibold">Legality:</span> Our team is
            familiar with legal recognition requirements and delivers
            translations that meet the standards of employers, universities and
            authorities.
          </li>
          <li>
            <span className="font-semibold">Speed:</span> With dedicated
            resources and proven workflows, we handle urgent certificate
            translations without compromising quality.
          </li>
          <li>
            <span className="font-semibold">Quality:</span> Skilled translators
            ensure your certificate reads naturally in the target language while
            retaining all important details.
          </li>
          <li>
            <span className="font-semibold">Convenience:</span> Working with EGS
            Group means you avoid the hassle of managing multiple translators or
            checking technical terminology yourself.
          </li>
        </ul>
      </>
    ),
  },
  why: {
    heading: "Why EGS Group for Certificate Translation?",
    content: (
      <>
        <p className="mb-3">
          EGS Group understands how crucial certificates are for careers,
          studies and legal procedures. We recognise the communication gaps that
          can arise when documents are in a different language.
        </p>
        <p>
          Our translators combine linguistic expertise with industry knowledge
          to deliver powerful, accurate translations. We work collaboratively
          with clients, focusing on clarity, compliance and presentation so that
          your certificates are accepted confidently wherever you submit them.
        </p>
      </>
    ),
  },
};

const TabButton: React.FC<{
  label: string;
  active: boolean;
  onClick: () => void;
}> = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
      active
        ? "border-orange-500 text-slate-900 bg-slate-50"
        : "border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50"
    }`}
  >
    {label}
  </button>
);

const TranslationInfoSections: React.FC = () => {
  const [immigrationTab, setImmigrationTab] = useState<TabKey>("what");
  const [certificateTab, setCertificateTab] = useState<TabKey>("what");

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-16 md:space-y-20">
        {/* IMMIGRATION BLOCK (LEFT ALIGNED) */}
        <div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Immigration Translation Services
            </h2>
            <div className="mt-2 h-[3px] w-32 bg-orange-500 mx-auto md:mx-0" />
          </div>

          <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50">
              <TabButton
                label="What It Is"
                active={immigrationTab === "what"}
                onClick={() => setImmigrationTab("what")}
              />
              <TabButton
                label="Benefits"
                active={immigrationTab === "benefits"}
                onClick={() => setImmigrationTab("benefits")}
              />
              <TabButton
                label="Why Us?"
                active={immigrationTab === "why"}
                onClick={() => setImmigrationTab("why")}
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-7 text-sm md:text-base text-slate-700 leading-relaxed">
              {ImmigrationTabs[immigrationTab].heading && (
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                  {ImmigrationTabs[immigrationTab].heading}
                </h3>
              )}
              {ImmigrationTabs[immigrationTab].content}
              <button className="mt-6 inline-flex items-center justify-center rounded-md border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* CERTIFICATE BLOCK (RIGHT ALIGNED) */}
        <div className="md:text-right">
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
              Certificate Translation Services
            </h2>
            <div className="mt-2 h-[3px] w-32 bg-orange-500 mx-auto md:ml-auto md:mr-0" />
          </div>

          <div className="mt-8 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
            {/* Tabs */}
            <div className="flex justify-end border-b border-slate-200 bg-slate-50">
              <TabButton
                label="What It Is"
                active={certificateTab === "what"}
                onClick={() => setCertificateTab("what")}
              />
              <TabButton
                label="Benefits"
                active={certificateTab === "benefits"}
                onClick={() => setCertificateTab("benefits")}
              />
              <TabButton
                label="Why Us?"
                active={certificateTab === "why"}
                onClick={() => setCertificateTab("why")}
              />
            </div>

            {/* Content */}
            <div className="p-5 md:p-7 text-sm md:text-base text-slate-700 leading-relaxed md:text-right">
              {CertificateTabs[certificateTab].heading && (
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                  {CertificateTabs[certificateTab].heading}
                </h3>
              )}
              {CertificateTabs[certificateTab].content}
              <div className="mt-6 flex md:justify-end">
                <button className="inline-flex items-center justify-center rounded-md border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-50 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslationInfoSections;
