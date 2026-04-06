import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const CalendlySection = () => {
  const { t } = useLanguage();
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
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">{t.calendly.title}</h2>
          <p className="mt-4 text-muted-foreground font-body">{t.calendly.subtitle}</p>
        </div>

        <div className={`${visible ? "animate-fade-up-delay-1" : "opacity-0"} bg-secondary border border-border rounded p-12 text-center`}>
          <p className="text-muted-foreground font-body text-lg mb-4">{t.calendly.subtitle}</p>
          <p className="text-muted-foreground/60 font-body text-sm">Coming soon — Calendly integration</p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
