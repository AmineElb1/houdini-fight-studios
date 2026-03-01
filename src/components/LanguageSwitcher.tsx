import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "nl" : "en")}
      className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Switch language"
    >
      <span className={language === "en" ? "text-foreground font-semibold" : ""}>EN</span>
      <span className="text-border">/</span>
      <span className={language === "nl" ? "text-foreground font-semibold" : ""}>NL</span>
    </button>
  );
};

export default LanguageSwitcher;
