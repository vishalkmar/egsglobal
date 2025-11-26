

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountriesSection from "@/components/CountriesSection";
import VisaProcess from "@/components/E-visa/VisaProcess";
import VisaBannerCarousel from '../components/E-visa/EVisaBanner'
import EVisaServices from "@/components/E-visa/EVisaServices";
export default function EVisa() {
  return (
     <>
        <Header/>
       
        <VisaBannerCarousel/>
       
        <CountriesSection/>
        <VisaProcess/>
          <EVisaServices/>
       <Footer/>
     </>
  );
}
