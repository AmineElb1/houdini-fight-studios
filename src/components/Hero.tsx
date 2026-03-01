import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Fighter in action" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-none animate-fade-up">
          Houdini Fightmedia
          <br />
          <span className="text-gradient-red">{t.hero.tagline}</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto animate-fade-up-delay-1">
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <a href="#portfolio" className="border border-foreground/30 text-foreground px-8 py-4 font-display text-lg tracking-widest hover:bg-foreground/10 transition-colors">
            {t.hero.viewWork}
          </a>
          <a href="#booking" className="bg-primary text-primary-foreground px-8 py-4 font-display text-lg tracking-widest hover:bg-primary/90 transition-colors">
            {t.hero.bookAShoot}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
