import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const StickyBookButton = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#booking"
      className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground px-6 py-3 font-display text-lg tracking-widest shadow-lg hover:bg-primary/90 transition-all animate-fade-up"
    >
      {t.sticky.bookNow}
    </a>
  );
};

export default StickyBookButton;
