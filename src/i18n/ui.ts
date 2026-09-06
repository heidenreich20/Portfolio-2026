// Translation dictionary, ported from the old /public/locales/*/translation.json
// files (react-i18next + i18next-http-backend).
//
// NOTE ON CONSOLIDATION: the original project shipped FOUR locale folders
// (en, en-US, es, it), but the language switcher only ever offered three
// (es, en-US, it) — "en" was an orphaned fallback that only ever loaded
// for browsers reporting a bare "en" language tag, and its copy had
// drifted from the "en-US" copy actually served by the switcher. This
// migration keeps the three that were actually reachable through the UI
// and uses the en-US copy as the canonical "en" text below. Double check
// this is the version you want — see MIGRATION.md for the diff.

export const languages = {
  en: "English",
  es: "Español",
  it: "Italiano",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    Meta: {
      title: "Pablo Heidenreich · Senior Frontend & Full-Stack Engineer",
      description:
        "Senior software engineer specializing in frontend and full-stack development. Experienced in building scalable applications with TypeScript, Node.js, Next.js, and React Native.",
    },
    "My Work": "My work",
    "About Me": "About me",
    "My Experience": "My experience",
    Contact: "Contact Me",
    Title: {
      part1: "Shaping the Unseen",
      part2: "Designing Beyond Boundaries",
      description:
        "I’m a 29-year-old full-stack developer focused on building robust, efficient, and high-character web applications. I love the challenge of turning complex ideas into seamless digital experiences, spanning everything from dynamic UI design to backend architecture. When I’m not writing code or structuring databases, you’ll find me analyzing video games, creating content, or enjoying a good cup of coffee. Let’s build something incredible together!",
    },
    "Latest Work": "My Latest Projects",
    "Estudio Komorebi": "Komorebi Studio's community manager service",
    FakeDental:
      "A website for a dental clinic, it has a contact form and a gallery of the clinic.",
    GameNews:
      "A website that shows the latest news about video games, it also has a search bar to find news about a specific game.",
    "Sapphire Bistro":
      "A website for a restaurant, it has a menu and a contact form.",
    NutriApp:
      "A website for a nutrition app, it shows nutritional information of various foods",
    FakeGym: "A gym website with its own store",
    "GameNews: A Gaming News Website": "GameNews: A Gaming News Website",
    "FakeDental: A Dental Clinic Website": "FakeDental: A Dental Clinic Website",
    "Sapphire Bistro: A Restaurant Website": "Sapphire Bistro: A Restaurant Website",
    "NutriApp: A Nutrition App": "NutriApp: A Nutrition App",
    Footer: {
      part1: "Designed and built by",
      "Built with": "Built with",
      And: "and",
    },
    Framework: "Framework",
    Languages: "Languages",
    Backend: "Backend",
    Testing: "Testing",
    Message: "Message",
    Name: "Name",
    Email: "Email",
    Send: "Send message",
    Sending: "Sending...",
    NameRequired: "Name is required",
    EmailRequired: "Email is required",
    EmailInvalid: "Email is invalid",
    MessageRequired: "Message is required",
    SuccessMsg: "Thank you for your message! I'll get back to you soon.",
    ErrorMsg: "Oops! Something went wrong. Please try again later.",
    ContactMe: "Contact Me",
    MyKnowledge: "My Knowledge",
    Language: "Language",
    "Close menu": "Close menu",
  },
  es: {
    Meta: {
      title: "Pablo Heidenreich · Desarrollo Frontend y Edición de Video",
      description:
        "Desarrollo frontend y edición de video desde Buenos Aires. Diseño y programo experiencias web, y en Estudio Komorebi armamos sitios, piezas de email marketing y contenido para marcas chicas.",
    },
    "My Work": "Mi Trabajo",
    "About Me": "Sobre Mí",
    "My Experience": "Mi Experiencia",
    Contact: "Contacto",
    Title: {
      part1: "Desarrollo frontend",
      part2: "y edición de video, desde Buenos Aires.",
      description:
        "Cuido tanto la interfaz de un sitio como el corte de un video. Diseño y programo experiencias web, y en Estudio Komorebi —el estudio que co-fundé— armamos sitios, piezas de email marketing y contenido para marcas chicas. Esta página reúne parte de ese trabajo.",
    },
    "Latest Work": "Mis Últimos Proyectos",
    "Estudio Komorebi": "Plataforma de gestión de comunidades para Estudio Komorebi.",
    FakeDental:
      "Presencia digital para una clínica dental, que incluye una galería completa de las instalaciones y un sistema de contacto optimizado.",
    GameNews:
      "Plataforma de noticias de videojuegos con las últimas novedades de la industria, incluyendo búsqueda dinámica de títulos específicos.",
    "Sapphire Bistro":
      "Una experiencia web premium para un restaurante de alta cocina, destacando un menú digital elegante y un formulario de contacto interactivo.",
    NutriApp:
      "Interfaz web para una aplicación de nutrición que ofrece desgloses nutricionales detallados para una gran variedad de alimentos.",
    FakeGym:
      "Sitio web integral para un centro de fitness, integrado con una tienda virtual personalizada.",
    "GameNews: A Gaming News Website": "GameNews: Plataforma de Noticias de Videojuegos",
    "FakeDental: A Dental Clinic Website": "FakeDental: Portal de Clínica Dental",
    "Sapphire Bistro: A Restaurant Website": "Sapphire Bistro: Experiencia Web de Alta Cocina",
    "NutriApp: A Nutrition App": "NutriApp: App de Seguimiento Nutricional",
    "FakeGym: A Gym Website": "FakeGym: Portal Web de Fitness",
    Footer: {
      part1: "Diseñado y desarrollado por",
      "Built with": "Desarrollado con",
      And: "y",
    },
    Framework: "Framework",
    Languages: "Lenguajes",
    Backend: "Backend",
    Testing: "Testing",
    Message: "Mensaje",
    Name: "Nombre",
    Email: "Correo Electrónico",
    Send: "Enviar Mensaje",
    Sending: "Enviando...",
    NameRequired: "El nombre es obligatorio",
    EmailRequired: "El correo electrónico es obligatorio",
    EmailInvalid: "Por favor, ingresa un correo electrónico válido",
    MessageRequired: "El mensaje es obligatorio",
    SuccessMsg: "¡Gracias por contactarme! Te responderé a la brevedad.",
    ErrorMsg: "¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
    ContactMe: "Contáctame",
    MyKnowledge: "Mis Especialidades",
    Language: "Idioma",
    "Close menu": "Cerrar Menú",
  },
  it: {
    Meta: {
      title: "Pablo Heidenreich · Senior Frontend & Full-Stack Engineer",
      description:
        "Ingegnere del software full-stack specializzato in sviluppo frontend e full-stack. Esperienza nella creazione di applicazioni scalabili con TypeScript, Node.js, Next.js e React Native.",
    },
    "My Work": "Il Mio Lavoro",
    "About Me": "Chi Sono",
    "My Experience": "La Mia Esperienza",
    Contact: "Contatti",
    Title: {
      part1: "Plasmare l'Invisibile",
      part2: "Progettare Oltre i Confini",
      description:
        "Sono un ingegnere del software full-stack focalizzato sulla creazione di applicazioni web robuste, efficienti e di grande impatto. Amo la sfida di trasformare idee complesse in esperienze digitali fluide, spaziando dal design di interfacce dinamiche all'architettura backend scalabile. Quando non scrivo codice o non strutturo database, mi troverai ad analizzare giochi di ruolo, creare contenuti o a godermi un buon caffè. Costruiamo qualcosa di incredibile insieme!",
    },
    "Latest Work": "I Miei Ultimi Progetti",
    "Estudio Komorebi": "Piattaforma di gestione della community per Estudio Komorebi.",
    FakeDental:
      "Presenza digitale per una clinica dentale, con una galleria completa della struttura e un sistema di contatto ottimizzato.",
    GameNews:
      "Piattaforma di notizie sui videogiochi con gli ultimi aggiornamenti del settore, inclusa una funzionalità di ricerca dinamica per titoli specifici.",
    "Sapphire Bistro":
      "Un'esperienza web premium per un ristorante di alta cucina, caratterizzata da un elegante menu digitale e un modulo di contatto interattivo.",
    NutriApp:
      "Interfaccia web per un'applicazione nutrizionale che offre un'analisi dettagliata per un'ampia varietà di alimenti.",
    FakeGym:
      "Sito web completo per un centro fitness, integrato con uno store e-commerce personalizzato.",
    "GameNews: A Gaming News Website": "GameNews: Piattaforma di Notizie sui Videogiochi",
    "FakeDental: A Dental Clinic Website": "FakeDental: Portale per Clinica Dentale",
    "Sapphire Bistro: A Restaurant Website": "Sapphire Bistro: Esperienza Web di Alta Cucina",
    "NutriApp: A Nutrition App": "NutriApp: App di Tracciamento Nutrizionale",
    "FakeGym: A Gym Website": "FakeGym: Portale Web Fitness",
    Footer: {
      part1: "Progettato e sviluppato da",
      "Built with": "Sviluppato con",
      And: "e",
    },
    Framework: "Framework",
    Languages: "Linguaggi",
    Backend: "Backend",
    Testing: "Testing",
    Message: "Messaggio",
    Name: "Nome",
    Email: "Email",
    Send: "Invia Messaggio",
    Sending: "Invio in corso...",
    NameRequired: "Il nome è obbligatorio",
    EmailRequired: "L'email è obbligatoria",
    EmailInvalid: "Inserisci un indirizzo email valido",
    MessageRequired: "Il messaggio è obbligatorio",
    SuccessMsg: "Grazie per avermi contattato! Ti risponderò al più presto.",
    ErrorMsg: "Ops! Qualcosa è andato storto. Riprova più tardi.",
    ContactMe: "Contattami",
    MyKnowledge: "Le Mie Competenze",
    Language: "Lingua",
    "Close menu": "Chiudi Menù",
  },
} as const;

export type Lang = keyof typeof ui;
