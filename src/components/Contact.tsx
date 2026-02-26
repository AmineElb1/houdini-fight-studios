import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl sm:text-6xl text-foreground">GET IN TOUCH</h2>
          <p className="mt-4 text-muted-foreground font-body">Let's create something legendary</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a
            href="https://www.instagram.com/houdini.fightmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            <Instagram className="w-5 h-5 text-primary" />
            @houdini.fightmedia
          </a>
          <a
            href="mailto:info@houdinifightmedia.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            <Mail className="w-5 h-5 text-primary" />
            info@houdinifightmedia.com
          </a>
          <a
            href="https://wa.me/31600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Houdini Fightmedia" className="h-8 w-auto" />
          <span className="font-display text-sm tracking-wider text-muted-foreground">
            HOUDINI FIGHTMEDIA
          </span>
        </div>
        <p className="text-muted-foreground font-body text-xs">
          © {new Date().getFullYear()} Houdini Fightmedia. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
