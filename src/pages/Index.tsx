import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import Booking from "@/components/Booking";
import CalendlySection from "@/components/CalendlySection";
import Contact from "@/components/Contact";
import StickyBookButton from "@/components/StickyBookButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Booking />
      <CalendlySection />
      <Contact />
      <StickyBookButton />
    </div>
  );
};

export default Index;
