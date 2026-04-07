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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Houdini Fightmedia" className="h-16 w-16 rounded-full object-cover" />
          <span className="font-display text-sm tracking-wider text-muted-foreground">HOUDINI FIGHTMEDIA</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <p className="text-muted-foreground font-body text-xs">
            © {new Date().getFullYear()} Houdini Fightmedia. All rights reserved.
          </p>
          <span className="hidden sm:block text-muted-foreground">•</span>
          <a 
            href="/Privacyverklaring_Houdini_Fightmedia.pdf" 
            download
            className="text-muted-foreground hover:text-foreground font-body text-xs transition-colors underline"
          >
            {t.contact.privacy}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
