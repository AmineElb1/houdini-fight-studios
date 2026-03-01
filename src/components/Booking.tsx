import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const Booking = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
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
      title: t.booking.toastTitle,
      description: t.booking.toastDesc,
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-section-fade">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">{t.booking.title}</h2>
          <p className="mt-4 text-muted-foreground font-body">{t.booking.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-5 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input type="text" placeholder={t.booking.name} required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
            <input type="email" placeholder={t.booking.email} required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} />
          </div>
          <input type="tel" placeholder={t.booking.phone} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
          <textarea placeholder={t.booking.message} rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass + " resize-none"} />
          <button type="submit" className="w-full bg-primary text-primary-foreground py-4 font-display text-xl tracking-widest hover:bg-primary/90 transition-colors">
            {t.booking.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
