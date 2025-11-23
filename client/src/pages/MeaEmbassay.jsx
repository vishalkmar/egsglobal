
 import Header from '../components/Header'
 import Footer from '../components/Footer'
 import MEAAttention from '../components/MEAEmbassy/MEAformandBanner'
import MeaAttestationHero from '../components/MEAEmbassy/MEAformandBanner'
import MeaServicesShowcase from '../components/MEAEmbassy/MEAServices'
export default function MEAEmbassy(){

    return(<>
      <Header/>
        <MeaAttestationHero/>
        <MeaServicesShowcase />
      <Footer/>
    </>)
}