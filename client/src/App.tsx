import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import EmbassyLegalization from "@/pages/EmbassyLegalization";
import AttestationApostille from "@/pages/AttestationApostille";
import InsuranceDummyTicket from "@/pages/InsuranceDummyTicket";
import MeetGreet from "@/pages/MeetGreet";
import AccommodationAssistant from "@/pages/AccommodationAssistant";
import NormalVisa from "@/pages/NormalVisa";
import EVisa from "@/pages/EVisa";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/embassy-legalization" component={EmbassyLegalization} />
      <Route path="/attestation-apostille" component={AttestationApostille} />
      <Route path="/insurance-dummy-ticket" component={InsuranceDummyTicket} />
      <Route path="/meet-greet" component={MeetGreet} />
      <Route path="/accommodation-assistant" component={AccommodationAssistant} />
      <Route path="/visa/normal" component={NormalVisa} />
      <Route path="/visa/e-visa" component={EVisa} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
