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

        <div className={`${visible ? "animate-fade-up-delay-1" : "opacity-0"} bg-secondary border border-border rounded p-8`}>
          <div className="grid grid-cols-7 gap-2 mb-6">
            {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
              <div key={d} className="text-center text-muted-foreground font-body text-xs py-2">{d}</div>
            ))}
            {Array.from({length: 30}, (_, i) => (
              <div key={i} className="text-center text-foreground/70 font-body text-sm py-2 rounded hover:bg-primary/20 cursor-pointer transition-colors">
                {i + 1}
              </div>
            ))}
          </div>
          <button className="w-full bg-primary text-primary-foreground font-display text-sm tracking-wider py-3 rounded hover:bg-primary/90 transition-colors">
            BOOK SESSION NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
