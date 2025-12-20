import { Switch, Route,Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";


import InsuranceDummyTicket from "@/pages/InsuranceDummyTicket";
import MeetGreet from "@/pages/MeetGreet";
import AccommodationAssistant from "@/pages/AccommodationAssistant";

import EVisa from "@/pages/EVisa";
import StickerVisa from '../src/pages/StickerVisa'
import NotFound from "@/pages/not-found";

import PCCLegalization from "./pages/PCCLegalization";
import EmbassyAttention from "./pages/EmbassyAttention";
import TranslationLanguages from "./pages/TranslationLanguages";
import HrdStamping from "./pages/HRDStamping";
import  AssistanceinSumission from './pages/AssostanceInSummission'


import AdminLayout from './components/AdminDashboard/AdminLayout'

import Dashboard from "./components/AdminDashboard/Pages/Dashboard";
import MEAAttestationAdmin from "./components/AdminDashboard/Pages/MEAAttestation";
import PCCLegalizationAdmin from "./components/AdminDashboard/Pages/PCCLegalization";
import TranslationAdmin from "./components/AdminDashboard/Pages/Translation";
import StickerVisaAdmin from "./components/AdminDashboard/Pages/StickerVisa";
import EVisaAdmin from "./components/AdminDashboard/Pages/EVisa";
import AssistantAppointmentAdmin from "./components/AdminDashboard/Pages/AssistantAppointment";
import DummyTicketAdmin from "./components/AdminDashboard/Pages/DummyTicket";
import InsuranceAdmin from "./components/AdminDashboard/Pages/Insurance";
import MeetGreetAdmin from "./components/AdminDashboard/Pages/MeetGreet";
import HrdAttestationAdmin from './components/AdminDashboard/Pages/HrdAttestation';


function Router() { 
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
     
    <Route path="/admin">
    <Redirect to="/admin/dashboard" />
  </Route>

  <Route path="/admin/dashboard">
    <AdminLayout><Dashboard /></AdminLayout>
  </Route>

  <Route path="/admin/mea-attestation">
    <AdminLayout><MEAAttestationAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/pcc-legalization">
    <AdminLayout><PCCLegalizationAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/translation">
    <AdminLayout><TranslationAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/sticker-visa">
    <AdminLayout><StickerVisaAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/e-visa">
    <AdminLayout><EVisaAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/assistant-appointment">
    <AdminLayout><AssistantAppointmentAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/dummy-ticket">
    <AdminLayout><DummyTicketAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/insurance">
    <AdminLayout><InsuranceAdmin /></AdminLayout>
  </Route>

  <Route path="/admin/meet-greet">
    <AdminLayout><MeetGreetAdmin /></AdminLayout>
  </Route>
    <Route path="/admin/hrd-attestation">
    <AdminLayout><HrdAttestationAdmin /></AdminLayout>
  </Route>

      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

         <Route path="/PCC-Legalisation" component={PCCLegalization} />
       <Route path="/MEA-Attention" component={EmbassyAttention} />
              <Route path="/Translation-services" component={TranslationLanguages} />
                       <Route path="/HRD-Attestation" component={HrdStamping} />
       <Route path="/Assistance-in-Sumission" component={AssistanceinSumission} />
         
      <Route path="/insurance-dummy-ticket" component={InsuranceDummyTicket} />
      <Route path="/meet-greet" component={MeetGreet} />
      <Route path="/accommodation-assistant" component={AccommodationAssistant} />
      <Route path="/visa/sticker-visa" component={StickerVisa} />
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
