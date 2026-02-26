import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const shootTypes = [
  "Event Coverage",
  "Gym Promo Video",
  "Fighter Highlight Reel",
  "Aftermovie",
  "Social Media Package",
  "Other",
];

const budgetRanges = [
  "€500 - €1,000",
  "€1,000 - €2,500",
  "€2,500 - €5,000",
  "€5,000+",
  "Let's discuss",
];

const Booking = () => {
  const { toast } = useToast();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    date: "",
    location: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent! 🥊",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", shootType: "", date: "", location: "", budget: "", message: "" });
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="booking" ref={ref} className="py-24 px-6 bg-section-fade">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">BOOK A SHOOT</h2>
          <p className="mt-4 text-muted-foreground font-body">Ready to create something powerful?</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-5 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="tel"
              placeholder="Phone / WhatsApp"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <select
              value={formData.shootType}
              onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
              required
              className={inputClass}
            >
              <option value="">Type of Shoot *</option>
              {shootTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className={inputClass}
            >
              <option value="">Budget Range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className={inputClass}
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass + " resize-none"}
          />

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 font-display text-xl tracking-widest hover:bg-primary/90 transition-colors"
          >
            SUBMIT BOOKING REQUEST
          </button>
        </form>

        {/* Calendly Embed */}
        <div className={`mt-20 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
          <div className="text-center mb-8">
            <p className="text-muted-foreground font-body text-lg">Or schedule directly via Calendly</p>
          </div>
          <div
            className="calendly-inline-widget rounded overflow-hidden border border-border"
            data-url="https://calendly.com/houdini-fightmedia?hide_gdpr_banner=1&background_color=0d0d0d&text_color=ffffff&primary_color=e10600"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;
