import { useEffect, useRef, useState } from "react";
import aboutImg from "@/assets/about-portrait.jpg";

const About = () => {
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
          {/* Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="Houdini Fightmedia videographer"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 border border-primary/20 translate-x-4 translate-y-4 -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-5xl sm:text-6xl text-foreground mb-8">
              THE STORY BEHIND
              <br />
              <span className="text-gradient-red">THE LENS</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Houdini Fightmedia captures the intensity and emotion of combat sports. 
              From amateur fighters stepping into the ring for the first time to professional 
              events with thousands of spectators — we tell the stories that matter.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Our mission is simple: make every fighter look like a champion. Through cinematic 
              storytelling, we preserve the raw energy, sacrifice, and triumph that defines 
              the fight game.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "100+", label: "Events" },
                { number: "500+", label: "Fighters" },
                { number: "1M+", label: "Views" },
              ].map((stat) => (
                <div key={stat.label}>
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
