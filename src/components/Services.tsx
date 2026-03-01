import { useEffect, useRef, useState } from "react";
import { Camera, Film, Scissors, Video, Share2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const services = [
    { icon: Camera, title: t.services.eventCoverage, description: t.services.eventCoverageDesc },
    { icon: Video, title: t.services.gymPromo, description: t.services.gymPromoDesc },
    { icon: Scissors, title: t.services.highlights, description: t.services.highlightsDesc },
    { icon: Film, title: t.services.aftermovies, description: t.services.aftermoviesDesc },
    { icon: Share2, title: t.services.social, description: t.services.socialDesc },
    { icon: Video, title: t.services.drone, description: t.services.droneDesc },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">{t.services.title}</h2>
          <p className="mt-4 text-muted-foreground font-body">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-card border border-border p-8 card-glow hover:card-glow-hover transition-all duration-300 ${
                visible ? `animate-fade-up-delay-${Math.min(i, 3)}` : "opacity-0"
              }`}
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
