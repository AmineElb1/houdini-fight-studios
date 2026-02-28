import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      title: "Message Sent! 🥊",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-section-fade">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">CONTACT US</h2>
          <p className="mt-4 text-muted-foreground font-body">Have a question? Send us a message.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-5 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name *"
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

          <input
            type="tel"
            placeholder="Phone / WhatsApp (optional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
          />

          <textarea
            placeholder="Your message..."
            rows={5}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass + " resize-none"}
          />

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 font-display text-xl tracking-widest hover:bg-primary/90 transition-colors"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
