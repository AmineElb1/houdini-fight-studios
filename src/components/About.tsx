import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-portrait.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
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
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative">
            <img src={aboutImg} alt="Houdini Fightmedia videographer" className="w-full aspect-[3/4] object-cover" loading="lazy" />
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10" />
          </div>

          <div>
            <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-8">
              {t.about.title1}
              <br />
              <span className="text-gradient-red">{t.about.title2}</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">{t.about.p1}</p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">{t.about.p2}</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "100+", label: t.about.events },
                { number: "500+", label: t.about.fighters },
                { number: "1M+", label: t.about.views },
              ].map((stat) => (
                <div key={stat.number}>
                  <p className="font-display text-3xl text-primary">{stat.number}</p>
                  <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
