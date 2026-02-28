import { useState, useRef, useEffect } from "react";

const portfolioItems = [
  {
    videoId: "rOb1Sxt-GN0",
    title: "Fight Highlights",
  },
  {
    videoId: "0WdndO3WxOs",
    title: "Fighter Entrance",
  },
  {
    videoId: "HVQI0eQITOU",
    title: "Corner Moment",
  },
  {
    videoId: "kqeeEdjAH6g",
    title: "Victory Celebration",
  },
  {
    videoId: "XNs4DRjebY4",
    title: "Training Highlights",
  },
];

const VideoCard = ({ videoId, title }: { videoId: string; title: string }) => {
  const [hovered, setHovered] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1`;

  return (
    <div
      className="group relative aspect-[9/16] overflow-hidden bg-card border border-border cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title}
          style={{ border: 0 }}
        />
      ) : (
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}

      {/* Title overlay — visible by default, hidden on hover */}
      <div
        className={`absolute inset-0 bg-background/60 flex items-end p-6 transition-opacity duration-300 ${
          hovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <p className="font-display text-2xl text-foreground">{title}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
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
    <section id="portfolio" ref={ref} className="py-24 px-6 bg-section-fade">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">OUR WORK</h2>
          <p className="mt-4 text-muted-foreground font-body">Fight media that hits different</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, i) => (
            <div
              key={item.videoId}
              className={visible ? `animate-fade-up-delay-${Math.min(i, 3)}` : "opacity-0"}
            >
              <VideoCard videoId={item.videoId} title={item.title} />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/houdini.fightmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
          >
            Follow us on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
