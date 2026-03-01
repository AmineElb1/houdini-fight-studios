export type Language = "en" | "nl";

export const translations = {
  en: {
    // Navbar
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      contact: "Contact",
      bookAShoot: "BOOK A SHOOT",
    },
    // Hero
    hero: {
      tagline: "CREATING LEGACY.",
      subtitle: "Professional fight media & cinematic storytelling",
      viewWork: "VIEW WORK",
      bookAShoot: "BOOK A SHOOT",
    },
    // Portfolio
    portfolio: {
      title: "OUR WORK",
      subtitle: "Fight media that hits different",
      follow: "FOLLOW @HOUDINI.FIGHTMEDIA",
    },
    // Services
    services: {
      title: "SERVICES",
      subtitle: "What we bring to the fight",
      eventCoverage: "EVENT COVERAGE",
      eventCoverageDesc: "Full cinematic coverage of Muay Thai, Kickboxing, and MMA events. Multi-camera setups with professional editing.",
      gymPromo: "GYM PROMO VIDEOS",
      gymPromoDesc: "Showcase your gym's energy, fighters, and training culture with high-impact promotional content.",
      highlights: "FIGHTER HIGHLIGHT REELS",
      highlightsDesc: "Powerful highlight compilations that capture a fighter's best moments, knockouts, and victories.",
      aftermovies: "AFTERMOVIES",
      aftermoviesDesc: "Cinematic aftermovies that relive the atmosphere, intensity, and emotion of fight events.",
      social: "SOCIAL MEDIA PACKAGES",
      socialDesc: "Short-form content optimized for Instagram, TikTok, and YouTube to grow your fight brand.",
      drone: "DRONE / AERIAL FOOTAGE",
      droneDesc: "Cinematic aerial and drone videography for events, venues, and promotional content that stands out.",
    },
    // About
    about: {
      title1: "THE STORY BEHIND",
      title2: "THE LENS",
      p1: "Houdini Fightmedia captures the intensity and emotion of combat sports. From amateur fighters stepping into the ring for the first time to professional events with thousands of spectators — we tell the stories that matter.",
      p2: "Our mission is simple: make every fighter look like a champion. Through cinematic storytelling, we preserve the raw energy, sacrifice, and triumph that defines the fight game.",
      events: "Events",
      fighters: "Fighters",
      views: "Views",
    },
    // Booking form
    booking: {
      title: "CONTACT US",
      subtitle: "Have a question? Send us a message.",
      name: "Full Name *",
      email: "Email Address *",
      phone: "Phone / WhatsApp (optional)",
      message: "Your message...",
      send: "SEND MESSAGE",
      toastTitle: "Message Sent! 🥊",
      toastDesc: "We'll get back to you within 24 hours.",
    },
    // Calendly
    calendly: {
      title: "BOOK A SHOOT",
      subtitle: "Schedule your session directly",
    },
    // Contact footer
    contact: {
      title: "GET IN TOUCH",
      subtitle: "Let's create something legendary",
      form: {
        name: "Full Name *",
        email: "Email Address *",
        message: "Your message...",
        send: "SEND MESSAGE",
        success: "Message Sent! 🥊",
        successDesc: "We'll get back to you within 24 hours.",
      },
    },
    // Sticky button
    sticky: {
      bookNow: "BOOK NOW",
    },
  },
  nl: {
    nav: {
      work: "Portfolio",
      services: "Diensten",
      about: "Over ons",
      contact: "Contact",
      bookAShoot: "BOEK EEN SHOOT",
    },
    hero: {
      tagline: "CREATING LEGACY.",
      subtitle: "Professionele vechtmedia & cinematische storytelling",
      viewWork: "BEKIJK WERK",
      bookAShoot: "BOEK EEN SHOOT",
    },
    portfolio: {
      title: "ONS WERK",
      subtitle: "Vechtmedia die anders aanvoelt",
      follow: "VOLG @HOUDINI.FIGHTMEDIA",
    },
    services: {
      title: "DIENSTEN",
      subtitle: "Wat wij voor je doen",
      eventCoverage: "EVENEMENT COVERAGE",
      eventCoverageDesc: "Volledige cinematische coverage van Muay Thai, Kickboks en MMA evenementen. Multi-camera opstellingen met professionele montage.",
      gymPromo: "GYM PROMO VIDEO'S",
      gymPromoDesc: "Laat de energie, vechters en trainingscultuur van jouw gym zien met impactvolle promotiecontent.",
      highlights: "FIGHTER HIGHLIGHT REELS",
      highlightsDesc: "Krachtige highlight compilaties die de beste momenten, knockouts en overwinningen van een vechter vastleggen.",
      aftermovies: "AFTERMOVIES",
      aftermoviesDesc: "Cinematische aftermovies die de sfeer, intensiteit en emotie van vechtevenmenten herbeleven.",
      social: "SOCIAL MEDIA PAKKETTEN",
      socialDesc: "Korte content geoptimaliseerd voor Instagram, TikTok en YouTube om jouw vechtmerk te laten groeien.",
      drone: "DRONE / LUCHTOPNAMES",
      droneDesc: "Cinematische lucht- en droneopnames voor evenementen, locaties en promotiecontent die opvalt.",
    },
    about: {
      title1: "HET VERHAAL ACHTER",
      title2: "DE LENS",
      p1: "Houdini Fightmedia vangt de intensiteit en emotie van vechtsporten. Van amateurs die voor het eerst de ring instappen tot professionele evenementen met duizenden toeschouwers — wij vertellen de verhalen die ertoe doen.",
      p2: "Onze missie is simpel: elke vechter eruit laten zien als een kampioen. Door cinematische storytelling bewaren we de rauwe energie, opoffering en triomf die de vechtsport definieert.",
      events: "Evenementen",
      fighters: "Vechters",
      views: "Weergaven",
    },
    booking: {
      title: "CONTACTEER ONS",
      subtitle: "Heb je een vraag? Stuur ons een bericht.",
      name: "Volledige naam *",
      email: "E-mailadres *",
      phone: "Telefoon / WhatsApp (optioneel)",
      message: "Jouw bericht...",
      send: "VERSTUUR BERICHT",
      toastTitle: "Bericht verstuurd! 🥊",
      toastDesc: "We nemen binnen 24 uur contact met je op.",
    },
    calendly: {
      title: "BOEK EEN SHOOT",
      subtitle: "Plan je sessie rechtstreeks in",
    },
    contact: {
      title: "NEEM CONTACT OP",
      subtitle: "Laten we iets legendarisch maken",
      form: {
        name: "Volledige naam *",
        email: "E-mailadres *",
        message: "Jouw bericht...",
        send: "VERSTUUR BERICHT",
        success: "Bericht verstuurd! 🥊",
        successDesc: "We nemen binnen 24 uur contact met je op.",
      },
    },
    sticky: {
      bookNow: "BOEK NU",
    },
  },
} as const;
