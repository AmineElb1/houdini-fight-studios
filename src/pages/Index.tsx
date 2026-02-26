import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import About from "@/components/About";
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
      <Contact />
      <StickyBookButton />
    </div>
  );
};

export default Index;
