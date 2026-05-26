import Hero from "./components/Hero";
import RightMenu from "./components/RightMenu";

/* import VideoSection from "./pages/VideoSection"; */
import GrowSection from "./pages/GrowSection";
import OrganizationSection from "./pages/OrganizationSection";
import PassionCore from "./pages/PassionCore";
import CapabilityCore from "./pages/CapabilityCore";
import OurInclusiveOfferings from "./pages/OurInclusiveOfferings";
import FarmSantaServices from "./pages/FarmSantaServices";
import TeamOnMission from "./pages/TeamOnMission";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>

{/*       <div id="video">
        <VideoSection />
      </div>
 */}
      <div id="grow-with-us">
        <GrowSection />
      </div>

      <div id="organization">
        <OrganizationSection />
      </div>

      <div id="passion-core">
        <PassionCore />
      </div>

      <div id="capability-core">
        <CapabilityCore />
      </div>

      <div id="inclusive-offerings">
        <OurInclusiveOfferings />
      </div>


      <div id="farmsanta">
        <FarmSantaServices />
      </div>

      <div id="team">
        <TeamOnMission />
      </div>

      <div id="say-hi">
        <ContactPage />
      </div>

     <div id="Footer">
     <Footer />
     </div>

      <RightMenu />
    </>
  );
}