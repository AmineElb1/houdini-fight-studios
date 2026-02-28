import { useState, useEffect, useRef } from "react";

const CalendlySection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="booking" ref={ref} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">BOOK A SHOOT</h2>
          <p className="mt-4 text-muted-foreground font-body">Schedule your session directly</p>
        </div>

        <div className={`${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
          <div
            className="calendly-inline-widget rounded overflow-hidden border border-border"
            data-url="https://calendly.com/houdini-fightmedia?hide_gdpr_banner=1&background_color=0d0d0d&text_color=ffffff&primary_color=e10600"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
