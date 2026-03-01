import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mgolblkq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: t.contact.form.success,
          description: t.contact.form.successDesc,
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-secondary border border-border px-4 py-3 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">{t.contact.title}</h2>
          <p className="mt-4 text-muted-foreground font-body">{t.contact.subtitle}</p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} min-h-[150px] resize-y`}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display text-sm tracking-wider py-6"
            >
              {isSubmitting ? "SENDING..." : t.contact.form.send}
            </Button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a href="https://www.instagram.com/houdini.fightmedia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body">
            <Instagram className="w-5 h-5 text-primary" />
            @houdini.fightmedia
          </a>
          <a href="mailto:houdini.fightmedia@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body">
            <Mail className="w-5 h-5 text-primary" />
            houdini.fightmedia@gmail.com
          </a>
          <a href="https://wa.me/0032456024771" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body">
            <MessageCircle className="w-5 h-5 text-primary" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Houdini Fightmedia" className="h-16 w-16 rounded-full object-cover" />
          <span className="font-display text-sm tracking-wider text-muted-foreground">HOUDINI FIGHTMEDIA</span>
        </div>
        <p className="text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} Houdini Fightmedia. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
