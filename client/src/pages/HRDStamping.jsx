
import Header from "../components/Header"
import Footer from "../components/Footer"
import  HRDStampingServices from '../components/HRDstamping/HrdStampingServices'
import HRDHeroBanner from '../components/HRDstamping/HrdStampingBanner'

export default function HrdStamping(){
      
     return (<>

          <Header/>
          <HRDHeroBanner/>
          <HRDStampingServices/>
          <Footer/>

     </>)
}