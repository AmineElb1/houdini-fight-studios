import { useState, useRef, useEffect } from "react";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Portfolio = () => {
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

  useEffect(() => {
    if (visible) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [visible]);

  return (
    <section id="portfolio" ref={ref} className="py-24 px-6 bg-section-fade">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">{t.portfolio.title}</h2>
          <p className="mt-4 text-muted-foreground font-body">{t.portfolio.subtitle}</p>
        </div>

        <div className={`flex flex-col items-center gap-8 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
          <div className="w-full max-w-2xl">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/houdini.fightmedia/"
              data-instgrm-version="14"
              style={{
                background: "hsl(0 0% 8%)",
                border: "1px solid hsl(0 0% 16%)",
                borderRadius: "4px",
                margin: "0 auto",
                maxWidth: "540px",
                width: "100%",
                minWidth: "326px",
                padding: 0,
              }}
            />
          </div>

          <a
            href="https://www.instagram.com/houdini.fightmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-xl px-8 py-4 hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
            {t.portfolio.follow}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
