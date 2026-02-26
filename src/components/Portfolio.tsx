import { useState, useEffect, useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { src: portfolio1, title: "MMA Cage Fight", category: "Events" },
  { src: portfolio2, title: "Kickboxing Highlight", category: "Highlights" },
  { src: portfolio3, title: "Fighter Portrait", category: "Promo" },
  { src: portfolio4, title: "Corner Moment", category: "Events" },
  { src: portfolio5, title: "Victory Celebration", category: "Highlights" },
  { src: portfolio6, title: "Arena Atmosphere", category: "Events" },
];

const categories = ["All", "Events", "Promo", "Highlights"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const filtered = filter === "All" ? portfolioItems : portfolioItems.filter(i => i.category === filter);

  return (
    <section id="portfolio" ref={ref} className="py-24 px-6 bg-section-fade">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">OUR WORK</h2>
          <p className="mt-4 text-muted-foreground font-body">Fight media that hits different</p>
        </div>

        {/* Filters */}
        <div className={`flex justify-center gap-4 mb-12 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-body tracking-wide transition-all ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <button
              key={item.title + i}
              onClick={() => setSelectedImage(item.src)}
              className={`group relative aspect-square overflow-hidden ${visible ? `animate-fade-up-delay-${Math.min(i, 3)}` : "opacity-0"}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-display text-xl text-foreground">{item.title}</p>
                  <p className="text-sm text-primary font-body">{item.category}</p>
                </div>
              </div>
            </button>
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Portfolio preview"
            className="max-w-full max-h-[85vh] object-contain animate-fade-up"
          />
          <button
            className="absolute top-6 right-6 text-foreground text-3xl hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
