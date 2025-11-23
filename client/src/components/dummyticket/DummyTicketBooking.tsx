"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";

type ActiveTab = "flight" | "hotel" | "insurance";
type TripType = "oneWay" | "roundTrip";

const DummyTicketBooking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("flight");
  const [tripType, setTripType] = useState<TripType>("oneWay");

  const [flightForm, setFlightForm] = useState({
    startLocation: "",
    endLocation: "",
    departureDate: "",
    returnDate: "",
  });

  const [hotelForm, setHotelForm] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
  });

  const [insuranceForm, setInsuranceForm] = useState({
    name: "",
    email: "",
    mobile: "",
    nominee: "",
    pan: "",
    aadhar: "",
    passportFile: null as File | null,
  });

  const handleFlightChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFlightForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleHotelChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setHotelForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsuranceChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;
    if (name === "passportFile" && files) {
      setInsuranceForm((prev) => ({ ...prev, passportFile: files[0] }));
    } else {
      setInsuranceForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let payload: any = { tab: activeTab };

    if (activeTab === "flight") {
      payload = {
        ...payload,
        tripType,
        ...flightForm,
      };
    } else if (activeTab === "hotel") {
      payload = {
        ...payload,
        ...hotelForm,
      };
    } else if (activeTab === "insurance") {
      payload = {
        ...payload,
        ...insuranceForm,
        passportFile: insuranceForm.passportFile
          ? insuranceForm.passportFile.name
          : null,
      };
    }

    console.log("Dummy ticket form submit payload:", payload);

    // yahan future mein API call kar sakte ho:
    // await fetch("/api/dummy-ticket", { method: "POST", body: JSON.stringify(payload) });

    alert("Your request has been submitted successfully.");
  };

  return (
    <section className="bg-white py-12 mt-[50px] sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT SIDE: info + image */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
                Book Your Dummy Ticket in Minutes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-md">
                Choose your option, share basic details and submit your request.
                Our team will process your dummy ticket / hotel / insurance and
                share it with you shortly.
              </p>
            </div>

            <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.18)]">
              <img
                src="/dummyticketimage.webp"
                alt="Dummy ticket booking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                           <ul className="space-y-2 text-sm text-white">
              <li>• 100% visa-friendly documentation</li>
              <li>• Instant request submission, processed by our team</li>
              <li>• Support for flight, hotel and travel insurance</li>
            </ul>
              </div>
            </div>


          </div>

          {/* RIGHT SIDE: form */}
          <div className="w-full">
            <div className="border border-slate-200 rounded-2xl shadow-sm overflow-hidden bg-white">
              {/* Tabs */}
              <div className="flex bg-slate-100">
                {(["flight", "hotel", "insurance"] as ActiveTab[]).map(
                  (tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2.5 text-sm sm:text-base font-medium border-b-2 transition-colors ${
                        activeTab === tab
                          ? "bg-sky-600 text-white border-sky-700"
                          : "bg-transparent text-slate-700 border-transparent"
                      }`}
                    >
                      {tab === "flight"
                        ? "Flight"
                        : tab === "hotel"
                        ? "Hotel"
                        : "Insurance"}
                    </button>
                  )
                )}
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-4 sm:p-6 space-y-4 sm:space-y-5"
              >
                {/* Flight tab */}
                {activeTab === "flight" && (
                  <>
                    {/* Trip type toggle */}
                    <div className="flex justify-center">
                      <div className="inline-flex items-center gap-4 rounded-full bg-slate-100 px-5 py-2">
                        <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="tripType"
                            value="oneWay"
                            checked={tripType === "oneWay"}
                            onChange={() => setTripType("oneWay")}
                            className="accent-sky-600"
                          />
                          <span>One Way</span>
                        </label>
                        <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="tripType"
                            value="roundTrip"
                            checked={tripType === "roundTrip"}
                            onChange={() => setTripType("roundTrip")}
                            className="accent-sky-600"
                          />
                          <span>Round Trip</span>
                        </label>
                      </div>
                    </div>

                    {/* Fields */}
                    <div className="space-y-3 sm:space-y-4">
                      <input
                        type="text"
                        name="startLocation"
                        placeholder="Start Location"
                        value={flightForm.startLocation}
                        onChange={handleFlightChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                      <input
                        type="text"
                        name="endLocation"
                        placeholder="End Location"
                        value={flightForm.endLocation}
                        onChange={handleFlightChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />

                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                          DEPARTURE DATE
                        </label>
                        <input
                          type="date"
                          name="departureDate"
                          value={flightForm.departureDate}
                          onChange={handleFlightChange}
                          className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>

                      {tripType === "roundTrip" && (
                        <div className="space-y-1">
                          <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                            RETURN DATE
                          </label>
                          <input
                            type="date"
                            name="returnDate"
                            value={flightForm.returnDate}
                            onChange={handleFlightChange}
                            className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Hotel tab */}
                {activeTab === "hotel" && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                        CITY
                      </label>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={hotelForm.city}
                        onChange={handleHotelChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                        CHECK IN
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={hotelForm.checkIn}
                        onChange={handleHotelChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                        CHECK OUT
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={hotelForm.checkOut}
                        onChange={handleHotelChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                  </div>
                )}

                {/* Insurance tab */}
                {activeTab === "insurance" && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                        NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={insuranceForm.name}
                        onChange={handleInsuranceChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={insuranceForm.email}
                        onChange={handleInsuranceChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                        MOBILE NO
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={insuranceForm.mobile}
                        onChange={handleInsuranceChange}
                        className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                          NOMINEE
                        </label>
                        <input
                          type="text"
                          name="nominee"
                          value={insuranceForm.nominee}
                          onChange={handleInsuranceChange}
                          className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                          PAN NO
                        </label>
                        <input
                          type="text"
                          name="pan"
                          value={insuranceForm.pan}
                          onChange={handleInsuranceChange}
                          className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                          AADHAR NO
                        </label>
                        <input
                          type="text"
                          name="aadhar"
                          value={insuranceForm.aadhar}
                          onChange={handleInsuranceChange}
                          className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] sm:text-xs font-semibold text-sky-700">
                          PASSPORT ATTACHMENT
                        </label>
                        <input
                          type="file"
                          name="passportFile"
                          onChange={handleInsuranceChange}
                          className="w-full text-xs sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-4 w-full rounded-md bg-sky-600 hover:bg-sky-700 text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 transition-colors"
                >
                  Buy Dummy Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DummyTicketBooking;
