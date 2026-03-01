import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import CalendlySection from "@/components/CalendlySection";
import Contact from "@/components/Contact";
import StickyBookButton from "@/components/StickyBookButton";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <CalendlySection />
        <Contact />
        <StickyBookButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
