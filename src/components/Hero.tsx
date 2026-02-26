import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Fighter in action"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-none animate-fade-up">
          Houdini Fightmedia
          <br />
          <span className="text-gradient-red">CREATING LEGACY.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground font-body font-light max-w-2xl mx-auto animate-fade-up-delay-1">
          Professional fight media & cinematic storytelling
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <a
            href="#portfolio"
            className="border border-foreground/30 text-foreground px-8 py-4 font-display text-lg tracking-widest hover:bg-foreground/10 transition-colors"
          >
            VIEW WORK
          </a>
          <a
            href="#booking"
            className="bg-primary text-primary-foreground px-8 py-4 font-display text-lg tracking-widest hover:bg-primary/90 transition-colors"
          >
            BOOK A SHOOT
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
