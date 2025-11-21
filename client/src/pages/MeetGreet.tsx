import ServicePage from "./ServicePage";

export default function MeetGreet() {
  return (
    <ServicePage
      title="Meet & Greet Services"
      description="Premium airport assistance and personalized meet & greet services for comfortable and hassle-free travel experiences."
      features={[
        "Personal assistant at airport arrival/departure",
        "Fast-track immigration and customs clearance",
        "Luggage assistance and porter services",
        "VIP lounge access arrangements",
        "Transportation coordination",
        "Welcome assistance for international travelers",
        "Special assistance for elderly and disabled passengers",
        "Multi-language support staff",
      ]}
    />
  );
}
