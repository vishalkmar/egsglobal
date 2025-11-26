
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function StickerVisa() {
  return (
      <>

        <Header/>
         <section className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-black overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          // change this path to your actual sticker-visa image
          backgroundImage: "url('/visa/stickervisa.jpg')",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center py-16 md:py-24">
        <div className="max-w-xl md:max-w-2xl space-y-6 md:space-y-8">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full bg-rose-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg">
            Sticker Visa by EGS Group
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-bold leading-tight text-white space-y-1">
            <span className="block">Hassle-Free Sticker Visa</span>
            <span className="block">Solutions for Travel</span>
            <span className="block">Businesses & Corporates</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-100 max-w-xl leading-relaxed">
            EGS Group manages the complete sticker visa process for your
            travellers – from document screening and appointment support to
            submission guidance and status tracking. With our experience in
            embassy protocols and compliance, your clients enjoy a smooth,
            transparent and reliable visa experience.
          </p>

          {/* Bullet highlights (optional but nice) */}
         

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <button className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 sm:px-7 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-rose-600 transition">
              Enquire for Sticker Visa <span className="ml-2 text-sm">➜</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 sm:px-7 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition">
              Partner with EGS <span className="ml-2 text-sm">➜</span>
            </button>
          </div>
        </div>
      </div>
    </section>
        <Footer/>
       
      </>
  );
}
