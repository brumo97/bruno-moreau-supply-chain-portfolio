import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Competences from "./components/Competences";
import Posture from "./components/Posture";
import PlanIntegration from "./components/PlanIntegration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PDFViewer from "./components/PDFViewer";

// Image paths served dynamically by Vite
const officeImg = "/src/assets/images/office_container_1782593526103.jpg";
const boxingImg = "/src/assets/images/boxing_gloves_1782593537765.jpg";
const factoryImg = "/src/assets/images/factory_production_1782593548667.jpg";

export default function App() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const handleLearnMore = () => {
    const element = document.getElementById("experiences");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-beige text-brand-navy flex flex-col selection:bg-brand-rust/25 selection:text-brand-navy font-sans antialiased">
      {/* Sticky elegant glassmorphism navigation header */}
      <Header onOpenPDF={() => setIsPDFOpen(true)} />

      {/* Main layout container */}
      <main className="grow">
        {/* Slide 1 - Home Hero section */}
        <Hero onLearnMore={handleLearnMore} imageSrc={officeImg} />

        {/* Slide 2 - Experiences & Industrial Immersion */}
        <Experiences imageSrc={factoryImg} />

        {/* Slide 3 - Strategic Skills & S&OP Interactive Dashboard */}
        <Competences />

        {/* Slide 4 - Human posture & Muay Thai/Languages discipline */}
        <Posture imageSrc={boxingImg} />

        {/* Slide 5 - 90 Days Integration Plan & roadmap */}
        <PlanIntegration />

        {/* Contact form & Availability */}
        <Contact />
      </main>

      {/* Footer credits and information */}
      <Footer />

      {/* Full Dossier Interactive Slideshow Modal */}
      <PDFViewer
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        officeImg={officeImg}
        factoryImg={factoryImg}
        boxingImg={boxingImg}
      />
    </div>
  );
}
