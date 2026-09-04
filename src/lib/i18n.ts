import type { ReformType } from "./site";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

export type PageKey =
  | "home"
  | "services"
  | "projects"
  | "about"
  | "testimonials"
  | "contact"
  | "legal"
  | "privacy"
  | "cookies";

/** Translated, crawlable URLs per language. */
export const routePaths: Record<Locale, Record<PageKey, string>> = {
  es: {
    home: "/",
    services: "/servicios",
    projects: "/proyectos",
    about: "/nosotros",
    testimonials: "/testimonios",
    contact: "/contacto",
    legal: "/aviso-legal",
    privacy: "/politica-de-privacidad",
    cookies: "/politica-de-cookies",
  },
  en: {
    home: "/en",
    services: "/en/services",
    projects: "/en/projects",
    about: "/en/about",
    testimonials: "/en/testimonials",
    contact: "/en/contact",
    legal: "/en/legal-notice",
    privacy: "/en/privacy-policy",
    cookies: "/en/cookie-policy",
  },
};

export const otherLocale = (locale: Locale): Locale => (locale === "es" ? "en" : "es");

export const path = (locale: Locale, page: PageKey) => routePaths[locale][page];

export const contactPathWithType = (locale: Locale, type: ReformType) =>
  `${routePaths[locale].contact}?tipo=${type}#presupuesto`;

type ServiceCopy = { title: string; description: string; bullets: string[] };

export type Dictionary = {
  htmlLang: string;
  nav: Record<Exclude<PageKey, "legal" | "privacy" | "cookies">, string>;
  common: {
    quoteCta: string;
    quoteCtaShort: string;
    callUs: string;
    whatsapp: string;
    whatsappAria: string;
    seeAll: string;
    seeMore: string;
    before: string;
    after: string;
    dragHint: string;
    duration: string;
    location: string;
    languageLabel: string;
    switchTo: string;
    menu: string;
    close: string;
    serviceArea: string;
  };
  home: {
    heroKicker: string;
    heroTitle: string;
    heroText: string;
    heroSecondary: string;
    stats: { value: string; label: string }[];
    aboutKicker: string;
    aboutTitle: string;
    aboutText: string[];
    servicesKicker: string;
    servicesTitle: string;
    servicesText: string;
    areaKicker: string;
    areaTitle: string;
    areaText: string;
    projectsKicker: string;
    projectsTitle: string;
    projectsText: string;
    testimonialsKicker: string;
    testimonialsTitle: string;
    ctaTitle: string;
    ctaText: string;
  };
  services: {
    heroTitle: string;
    heroText: string;
    ctaLabel: string;
    items: Record<ReformType, ServiceCopy>;
  };
  projects: {
    heroTitle: string;
    heroText: string;
    filterAll: string;
    filters: Partial<Record<ReformType, string>>;
  };
  about: {
    heroTitle: string;
    heroText: string;
    storyTitle: string;
    story: string[];
    valuesTitle: string;
    values: { title: string; text: string }[];
    methodTitle: string;
    method: { step: string; title: string; text: string }[];
    guaranteesTitle: string;
    guarantees: string[];
  };
  testimonials: {
    heroTitle: string;
    heroText: string;
    averageLabel: string;
    reviewsLabel: string;
  };
  contact: {
    heroTitle: string;
    heroText: string;
    infoTitle: string;
    hoursTitle: string;
    hours: string[];
    mapTitle: string;
    formTitle: string;
    formText: string;
  };
  form: {
    name: string;
    phone: string;
    email: string;
    city: string;
    cityPlaceholder: string;
    type: string;
    typePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    photos: string;
    photosHint: string;
    surface: string;
    budget: string;
    budgetOptions: string[];
    buildingType: string;
    buildingOptions: string[];
    rooms: string;
    urgency: string;
    urgencyOptions: string[];
    consent: string;
    consentLink: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    newRequest: string;
    errorTitle: string;
    errorText: string;
    required: string;
    invalidEmail: string;
    invalidPhone: string;
    tooShort: string;
    consentRequired: string;
    optional: string;
    uploading: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    legalLinks: string;
    contact: string;
    rights: string;
    builtIn: string;
  };
  cookies: {
    title: string;
    text: string;
    accept: string;
    reject: string;
    more: string;
  };
  legalPages: Record<"legal" | "privacy" | "cookies", { title: string; updated: string; blocks: { heading: string; body: string[] }[] }>;
  meta: Record<PageKey, { title: string; description: string }>;
};

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    htmlLang: "es",
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    common: {
      quoteCta: "Solicita tu presupuesto gratis",
      quoteCtaShort: "Pide presupuesto",
      callUs: "Llámanos",
      whatsapp: "WhatsApp",
      whatsappAria: "Escríbenos por WhatsApp",
      seeAll: "Ver todos los proyectos",
      seeMore: "Ver servicio",
      before: "Antes",
      after: "Después",
      dragHint: "Desliza para comparar",
      duration: "Duración",
      location: "Localidad",
      languageLabel: "Idioma",
      switchTo: "English",
      menu: "Menú",
      close: "Cerrar",
      serviceArea: "Zona de intervención",
    },
    home: {
      heroKicker: "Reformas en Torrevieja y Costa Blanca",
      heroTitle: "Reformas integrales con acabados de primera",
      heroText:
        "DM Reformas ejecuta reformas de viviendas, villas y locales en Torrevieja y alrededores. Presupuesto detallado, plazos por escrito y un único interlocutor de principio a fin.",
      heroSecondary: "Ver nuestros proyectos",
      stats: [
        { value: "+15", label: "años de experiencia en obra" },
        { value: "+400", label: "proyectos entregados" },
        { value: "100%", label: "presupuestos sin compromiso" },
        { value: "48 h", label: "respuesta media a tu solicitud" },
      ],
      aboutKicker: "Quiénes somos",
      aboutTitle: "Un equipo local que responde por su trabajo",
      aboutText: [
        "Somos una empresa de reformas y construcción con base en Torrevieja. Trabajamos con equipos propios de albañilería, electricidad, fontanería y carpintería, lo que nos permite controlar los plazos y la calidad en cada fase de la obra.",
        "Atendemos tanto a propietarios residentes como a clientes internacionales que reforman su vivienda a distancia: informes con fotos, comunicación en español e inglés y una obra siempre ordenada.",
      ],
      servicesKicker: "Servicios",
      servicesTitle: "Todo tipo de reformas, un solo responsable",
      servicesText:
        "Desde una reforma integral hasta un cambio de baño: gestionamos licencias, materiales, gremios y limpieza final.",
      areaKicker: "Dónde trabajamos",
      areaTitle: "Torrevieja y toda la Costa Blanca Sur",
      areaText:
        "Nos desplazamos sin coste para valorar tu proyecto en un radio de 40 km alrededor de Torrevieja.",
      projectsKicker: "Proyectos",
      projectsTitle: "Antes y después de obras reales",
      projectsText:
        "Una muestra de reformas ejecutadas por nuestro equipo en la provincia de Alicante.",
      testimonialsKicker: "Opiniones",
      testimonialsTitle: "Lo que dicen nuestros clientes",
      ctaTitle: "¿Tienes un proyecto en mente?",
      ctaText:
        "Cuéntanos qué quieres reformar y recibirás un presupuesto detallado y sin compromiso en un plazo de 48 horas laborables.",
    },
    services: {
      heroTitle: "Servicios de reformas y construcción",
      heroText:
        "Ejecutamos obra nueva y reformas de cualquier tamaño con materiales de primera calidad y garantía por escrito.",
      ctaLabel: "Pedir presupuesto de este servicio",
      items: {
        integral: {
          title: "Reformas integrales",
          description:
            "Renovación completa de tu vivienda: distribución, instalaciones, suelos, carpintería y acabados con un solo contrato.",
          bullets: ["Proyecto y licencias", "Instalaciones nuevas", "Plazo garantizado por escrito"],
        },
        cocina: {
          title: "Reformas de cocina",
          description:
            "Cocinas funcionales y duraderas: mobiliario a medida, encimeras de cuarzo o porcelánico y electrodomésticos integrados.",
          bullets: ["Diseño 3D previo", "Fontanería y electricidad", "Montaje en 3 semanas"],
        },
        bano: {
          title: "Reformas de baño",
          description:
            "Sustituimos bañeras por platos de ducha, renovamos alicatados, sanitarios e iluminación en menos de dos semanas.",
          bullets: ["Ducha de obra a medida", "Impermeabilización garantizada", "Obra limpia y rápida"],
        },
        fachada: {
          title: "Fachadas y rehabilitación",
          description:
            "Saneado de fisuras, monocapa, aislamiento SATE, impermeabilización y pintura resistente al salitre marino.",
          bullets: ["Andamios homologados", "Tratamiento anti-humedad", "Mejora energética"],
        },
        tejado: {
          title: "Cubiertas y tejados",
          description:
            "Reparación y renovación de cubiertas planas e inclinadas, teja cerámica, aislamiento y canalones.",
          bullets: ["Diagnóstico de filtraciones", "Impermeabilización", "Garantía 10 años"],
        },
        piscina: {
          title: "Piscinas y exteriores",
          description:
            "Construcción y renovación de piscinas, coronaciones antideslizantes, depuradoras e iluminación LED.",
          bullets: ["Revestimientos y gresite", "Solárium porcelánico", "Puesta en marcha incluida"],
        },
        extension: {
          title: "Ampliaciones, terrazas y pérgolas",
          description:
            "Ampliaciones de vivienda, cerramientos, tarimas exteriores y pérgolas bioclimáticas con proyecto visado.",
          bullets: ["Proyecto técnico", "Estructura de aluminio o obra", "Tramitación municipal"],
        },
        pintura: {
          title: "Pintura y revestimientos",
          description:
            "Pintura interior y exterior, alisado de paredes, microcemento, papel pintado y tratamientos anti-humedad.",
          bullets: ["Protección de mobiliario", "Pinturas lavables", "Acabado sin marcas"],
        },
        instalaciones: {
          title: "Electricidad y fontanería",
          description:
            "Instalaciones nuevas y renovación de cuadros eléctricos, tuberías, aire acondicionado y agua caliente sanitaria.",
          bullets: ["Boletín eléctrico", "Detección de fugas", "Aerotermia y aire acondicionado"],
        },
        local: {
          title: "Locales comerciales",
          description:
            "Adecuación completa de locales y oficinas: distribución, climatización, iluminación, escaparate y certificados.",
          bullets: ["Obra en plazos cortos", "Licencia de actividad", "Trabajo fuera de horario"],
        },
        otro: {
          title: "Otros trabajos",
          description:
            "Carpintería, alicatados, mamparas, cerramientos, pequeñas reparaciones y mantenimiento de comunidades.",
          bullets: ["Presupuesto por partidas", "Equipos propios", "Atención rápida"],
        },
      },
    },
    projects: {
      heroTitle: "Proyectos realizados",
      heroText:
        "Filtra por tipo de trabajo y desliza cada imagen para ver el antes y el después de nuestras obras.",
      filterAll: "Todos",
      filters: {
        integral: "Reformas integrales",
        cocina: "Cocinas",
        bano: "Baños",
        fachada: "Fachadas",
        piscina: "Piscinas",
        extension: "Terrazas y ampliaciones",
        local: "Locales",
      },
    },
    about: {
      heroTitle: "Sobre DM Reformas",
      heroText:
        "Innovamos en tu proyecto: soluciones constructivas actuales, ejecución cuidada y trato directo con el responsable de obra.",
      storyTitle: "Nuestra historia",
      story: [
        "DM Reformas nace en Torrevieja de la mano de profesionales con más de quince años en obra en la Costa Blanca. Empezamos con reformas de baño y cocina para vecinos del centro y hoy ejecutamos reformas integrales, rehabilitaciones de fachada y adecuación de locales en toda la comarca de la Vega Baja.",
        "Nuestra forma de trabajar no ha cambiado: visitamos la vivienda, medimos, explicamos las opciones con precios reales y solo empezamos cuando el cliente entiende exactamente qué se va a hacer, cuánto cuesta y cuándo termina.",
      ],
      valuesTitle: "Nuestros valores",
      values: [
        {
          title: "Transparencia",
          text: "Presupuestos desglosados por partidas, sin extras sorpresa. Cualquier cambio se aprueba por escrito antes de ejecutarse.",
        },
        {
          title: "Cumplimiento de plazos",
          text: "Planificamos la obra con fechas por fase y te informamos cada semana del avance real.",
        },
        {
          title: "Calidad de materiales",
          text: "Trabajamos con proveedores locales de confianza y marcas con garantía disponible en la zona.",
        },
        {
          title: "Cercanía",
          text: "Un único responsable de obra, disponible por teléfono y WhatsApp, en español e inglés.",
        },
      ],
      methodTitle: "Nuestro método de trabajo",
      method: [
        {
          step: "01",
          title: "Visita y toma de medidas",
          text: "Nos desplazamos gratis a tu vivienda o local, escuchamos tu idea y tomamos medidas y fotografías.",
        },
        {
          step: "02",
          title: "Presupuesto detallado",
          text: "Recibes en 48 horas laborables un presupuesto por partidas con materiales, plazos y forma de pago.",
        },
        {
          step: "03",
          title: "Planificación y licencias",
          text: "Coordinamos gremios, materiales y, si es necesario, la tramitación municipal y el proyecto técnico.",
        },
        {
          step: "04",
          title: "Ejecución con seguimiento",
          text: "Obra ordenada, protecciones diarias y un informe semanal con fotos del avance.",
        },
        {
          step: "05",
          title: "Entrega y garantía",
          text: "Repaso final contigo, limpieza de obra, certificados de instalación y garantía por escrito.",
        },
      ],
      guaranteesTitle: "Garantías y seguros",
      guarantees: [
        "Empresa dada de alta con todos sus trabajadores en la Seguridad Social.",
        "Seguro de responsabilidad civil vigente para obras de construcción y reforma.",
        "Garantía escrita de 2 años en acabados y hasta 10 años en impermeabilizaciones y estructura.",
        "Certificados de instalación eléctrica y de fontanería emitidos por instaladores autorizados.",
        "Plan de seguridad y salud aplicado en cada obra.",
      ],
    },
    testimonials: {
      heroTitle: "Testimonios de clientes",
      heroText:
        "Opiniones reales de propietarios de Torrevieja y alrededores que han confiado en DM Reformas.",
      averageLabel: "Valoración media",
      reviewsLabel: "opiniones verificadas",
    },
    contact: {
      heroTitle: "Contacto y presupuesto gratuito",
      heroText:
        "Cuéntanos tu proyecto y te responderemos con un presupuesto detallado en un plazo máximo de 48 horas laborables.",
      infoTitle: "Datos de contacto",
      hoursTitle: "Horario de atención",
      hours: ["Lunes a viernes: 08:00 – 18:00", "Sábados: 09:00 – 13:00", "Domingos: cerrado"],
      mapTitle: "Nuestra zona de intervención",
      formTitle: "Solicita tu presupuesto",
      formText:
        "Los campos marcados con * son obligatorios. Cuanta más información nos des, más preciso será el presupuesto.",
    },
    form: {
      name: "Nombre y apellidos *",
      phone: "Teléfono *",
      email: "Email *",
      city: "Ciudad / zona",
      cityPlaceholder: "Torrevieja, Orihuela Costa…",
      type: "Tipo de reforma *",
      typePlaceholder: "Selecciona el tipo de reforma",
      message: "Cuéntanos tu proyecto *",
      messagePlaceholder: "Describe la vivienda, lo que quieres reformar y tus plazos ideales…",
      photos: "Fotos del proyecto",
      photosHint: "Opcional. Hasta 5 imágenes (JPG o PNG, máx. 10 MB cada una).",
      surface: "Superficie aproximada (m²)",
      budget: "Presupuesto aproximado",
      budgetOptions: [
        "Menos de 5.000 €",
        "5.000 € – 15.000 €",
        "15.000 € – 30.000 €",
        "30.000 € – 60.000 €",
        "Más de 60.000 €",
        "Todavía no lo sé",
      ],
      buildingType: "Tipo de edificio",
      buildingOptions: ["Piso o apartamento", "Adosado / bungalow", "Villa independiente", "Edificio o comunidad", "Local comercial"],
      rooms: "Número de estancias a reformar",
      urgency: "¿Cuándo quieres empezar?",
      urgencyOptions: ["Lo antes posible", "En 1 – 3 meses", "En más de 3 meses", "Solo quiero orientarme"],
      consent: "He leído y acepto la",
      consentLink: "política de privacidad",
      submit: "Enviar solicitud",
      submitting: "Enviando…",
      successTitle: "¡Solicitud enviada!",
      successText:
        "Gracias por confiar en DM Reformas. Hemos recibido tu solicitud y te responderemos en un plazo máximo de 48 horas laborables.",
      newRequest: "Enviar otra solicitud",
      errorTitle: "No hemos podido enviar tu solicitud",
      errorText:
        "Inténtalo de nuevo en unos minutos o escríbenos directamente por WhatsApp o por teléfono.",
      required: "Este campo es obligatorio",
      invalidEmail: "Introduce un email válido",
      invalidPhone: "Introduce un teléfono válido (mín. 9 dígitos)",
      tooShort: "Escribe al menos 10 caracteres",
      consentRequired: "Debes aceptar la política de privacidad",
      optional: "opcional",
      uploading: "Subiendo fotos…",
    },
    footer: {
      about:
        "Empresa de reformas y construcción en Torrevieja. Reformas integrales, cocinas, baños, fachadas, cubiertas y locales en toda la Costa Blanca Sur.",
      quickLinks: "Enlaces rápidos",
      legalLinks: "Legal",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
      builtIn: "Torrevieja · Alicante · España",
    },
    cookies: {
      title: "Tu privacidad",
      text: "Usamos cookies propias necesarias para el funcionamiento del sitio y, con tu permiso, cookies de medición para mejorar nuestros contenidos.",
      accept: "Aceptar todas",
      reject: "Solo las necesarias",
      more: "Más información",
    },
    legalPages: {
      legal: {
        title: "Aviso legal",
        updated: "Última actualización: septiembre de 2026",
        blocks: [
          {
            heading: "1. Datos identificativos",
            body: [
              "En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de que este sitio web es titularidad de DM Reformas, con domicilio en Torrevieja (Alicante, España) y correo electrónico de contacto dm.reformasinnovamos@gmail.com.",
              "Los datos fiscales completos (denominación social, NIF y domicilio social) se incorporarán a este aviso legal una vez facilitados por el titular.",
            ],
          },
          {
            heading: "2. Objeto y condiciones de uso",
            body: [
              "Este sitio web tiene como finalidad presentar los servicios de reformas y construcción de DM Reformas y permitir a los usuarios solicitar presupuestos sin compromiso.",
              "El acceso al sitio implica la aceptación de las presentes condiciones. El usuario se compromete a usar el sitio y sus formularios de forma lícita, sin introducir datos falsos ni contenidos que puedan dañar los sistemas del titular o de terceros.",
            ],
          },
          {
            heading: "3. Propiedad intelectual e industrial",
            body: [
              "Los textos, fotografías, logotipos, marcas y elementos gráficos de este sitio son propiedad de DM Reformas o se utilizan con la autorización correspondiente. Queda prohibida su reproducción, distribución o transformación sin autorización expresa por escrito.",
            ],
          },
          {
            heading: "4. Responsabilidad",
            body: [
              "DM Reformas no garantiza la ausencia de interrupciones o errores en el acceso al sitio web, aunque adoptará las medidas razonables para evitarlos. Los presupuestos, plazos y precios publicados a título informativo no constituyen una oferta contractual vinculante hasta su formalización por escrito.",
            ],
          },
          {
            heading: "5. Legislación aplicable",
            body: [
              "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales del domicilio del titular, salvo que la normativa de consumidores establezca otro fuero.",
            ],
          },
        ],
      },
      privacy: {
        title: "Política de privacidad",
        updated: "Última actualización: septiembre de 2026",
        blocks: [
          {
            heading: "1. Responsable del tratamiento",
            body: [
              "Responsable: DM Reformas (Torrevieja, Alicante, España). Correo electrónico de contacto: dm.reformasinnovamos@gmail.com.",
            ],
          },
          {
            heading: "2. Finalidad y base jurídica",
            body: [
              "Tratamos los datos que nos facilitas en el formulario de contacto (nombre, teléfono, email, localidad, tipo de reforma, descripción del proyecto y, si las adjuntas, fotografías) con la finalidad de responder a tu solicitud, elaborar un presupuesto y mantener el contacto comercial derivado de esa petición.",
              "La base jurídica es tu consentimiento expreso al enviar el formulario (art. 6.1.a RGPD) y el interés legítimo en atender solicitudes de presupuesto y gestionar la relación precontractual (art. 6.1.b RGPD).",
            ],
          },
          {
            heading: "3. Conservación de los datos",
            body: [
              "Conservamos tus datos durante el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos legales de prescripción aplicables a las obligaciones fiscales y contractuales. Si no llegamos a contratar, tus datos se eliminarán en un plazo máximo de dos años desde el último contacto.",
            ],
          },
          {
            heading: "4. Destinatarios y encargados",
            body: [
              "Los datos se almacenan en servidores de nuestros proveedores tecnológicos de alojamiento, base de datos y envío de correo electrónico, que actúan como encargados del tratamiento con contrato conforme al artículo 28 del RGPD. No cedemos tus datos a terceros con fines comerciales ni realizamos transferencias internacionales sin garantías adecuadas.",
            ],
          },
          {
            heading: "5. Tus derechos",
            body: [
              "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a dm.reformasinnovamos@gmail.com, indicando el derecho que deseas ejercer y acompañando un documento que acredite tu identidad.",
              "También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que el tratamiento no se ajusta a la normativa vigente.",
            ],
          },
          {
            heading: "6. Seguridad",
            body: [
              "Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración, incluyendo cifrado en tránsito y control de accesos a la base de datos de solicitudes.",
            ],
          },
        ],
      },
      cookies: {
        title: "Política de cookies",
        updated: "Última actualización: septiembre de 2026",
        blocks: [
          {
            heading: "1. Qué son las cookies",
            body: [
              "Una cookie es un pequeño archivo de texto que se almacena en tu navegador cuando visitas una web. Permite recordar información sobre tu visita, como el idioma elegido o tus preferencias de privacidad.",
            ],
          },
          {
            heading: "2. Cookies que utilizamos",
            body: [
              "Cookies técnicas necesarias: imprescindibles para el funcionamiento del sitio y para recordar tu elección sobre el uso de cookies. No requieren consentimiento.",
              "Cookies de medición: solo se activan si aceptas todas las cookies. Nos ayudan a conocer de forma agregada qué páginas se visitan más para mejorar nuestros contenidos.",
              "Cookies de terceros: si visualizas el mapa incorporado en la página de contacto, Google puede instalar cookies propias. El mapa se carga únicamente después de aceptar las cookies o de interactuar con él.",
            ],
          },
          {
            heading: "3. Cómo gestionar las cookies",
            body: [
              "Puedes cambiar tu elección en cualquier momento borrando los datos de este sitio en tu navegador, lo que hará que vuelva a mostrarse el banner de consentimiento. También puedes bloquear o eliminar cookies desde la configuración de privacidad de Chrome, Safari, Firefox o Edge.",
            ],
          },
        ],
      },
    },
    meta: {
      home: {
        title: "Reformas en Torrevieja | DM Reformas Costa Blanca",
        description:
          "Empresa de reformas integrales en Torrevieja: cocinas, baños, fachadas, cubiertas, piscinas y locales en toda la Costa Blanca. Presupuesto gratis en 48 h.",
      },
      services: {
        title: "Servicios de reformas en Torrevieja | DM Reformas",
        description:
          "Reformas integrales, cocinas, baños, fachadas, tejados, piscinas, pintura, electricidad y locales comerciales en Torrevieja y Costa Blanca Sur.",
      },
      projects: {
        title: "Proyectos y reformas antes y después | DM Reformas",
        description:
          "Galería de reformas realizadas en Torrevieja, Orihuela Costa y Guardamar: pisos, cocinas, baños, fachadas y piscinas con fotos antes y después.",
      },
      about: {
        title: "Nosotros | Empresa de reformas en Torrevieja",
        description:
          "Conoce a DM Reformas: más de 15 años reformando viviendas y locales en la Costa Blanca, con equipos propios, garantías y plazos por escrito.",
      },
      testimonials: {
        title: "Opiniones de clientes | DM Reformas Torrevieja",
        description:
          "Testimonios verificados de clientes de DM Reformas en Torrevieja, La Mata, Orihuela Costa, Guardamar y Ciudad Quesada.",
      },
      contact: {
        title: "Contacto y presupuesto gratis | DM Reformas Torrevieja",
        description:
          "Solicita tu presupuesto de reforma sin compromiso en Torrevieja. Formulario, teléfono, WhatsApp y zona de intervención en la Costa Blanca.",
      },
      legal: {
        title: "Aviso legal | DM Reformas",
        description: "Información legal del sitio web de DM Reformas, empresa de reformas en Torrevieja, Alicante.",
      },
      privacy: {
        title: "Política de privacidad | DM Reformas",
        description: "Cómo tratamos tus datos personales conforme al RGPD cuando solicitas un presupuesto en DM Reformas.",
      },
      cookies: {
        title: "Política de cookies | DM Reformas",
        description: "Información sobre las cookies utilizadas en el sitio web de DM Reformas y cómo gestionarlas.",
      },
    },
  },

  en: {
    htmlLang: "en",
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About us",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    common: {
      quoteCta: "Get your free quote",
      quoteCtaShort: "Get a quote",
      callUs: "Call us",
      whatsapp: "WhatsApp",
      whatsappAria: "Message us on WhatsApp",
      seeAll: "See all projects",
      seeMore: "View service",
      before: "Before",
      after: "After",
      dragHint: "Drag to compare",
      duration: "Duration",
      location: "Location",
      languageLabel: "Language",
      switchTo: "Español",
      menu: "Menu",
      close: "Close",
      serviceArea: "Service area",
    },
    home: {
      heroKicker: "Renovations in Torrevieja and the Costa Blanca",
      heroTitle: "Full home renovations with first-class finishes",
      heroText:
        "DM Reformas renovates apartments, villas and commercial units in Torrevieja and the surrounding area. Detailed quotes, deadlines in writing and one contact person from start to finish.",
      heroSecondary: "See our projects",
      stats: [
        { value: "15+", label: "years on site" },
        { value: "400+", label: "projects delivered" },
        { value: "100%", label: "quotes with no obligation" },
        { value: "48 h", label: "average reply to your enquiry" },
      ],
      aboutKicker: "Who we are",
      aboutTitle: "A local team that stands behind its work",
      aboutText: [
        "We are a renovation and construction company based in Torrevieja. We work with our own bricklaying, electrical, plumbing and carpentry teams, which lets us control deadlines and quality at every stage of the job.",
        "We look after resident owners as well as international clients renovating from abroad: photo reports, communication in Spanish and English, and a site that is always kept tidy.",
      ],
      servicesKicker: "Services",
      servicesTitle: "Every type of renovation, one single contact",
      servicesText:
        "From a full renovation to a new bathroom: we handle licences, materials, trades and the final clean.",
      areaKicker: "Where we work",
      areaTitle: "Torrevieja and the southern Costa Blanca",
      areaText:
        "We travel free of charge to assess your project within a 40 km radius of Torrevieja.",
      projectsKicker: "Projects",
      projectsTitle: "Before and after of real jobs",
      projectsText: "A selection of renovations delivered by our team across the province of Alicante.",
      testimonialsKicker: "Reviews",
      testimonialsTitle: "What our clients say",
      ctaTitle: "Do you have a project in mind?",
      ctaText:
        "Tell us what you want to renovate and you will receive a detailed, no-obligation quote within 48 working hours.",
    },
    services: {
      heroTitle: "Renovation and construction services",
      heroText:
        "We deliver new builds and renovations of any size with top-quality materials and a written guarantee.",
      ctaLabel: "Request a quote for this service",
      items: {
        integral: {
          title: "Full renovations",
          description:
            "Complete renovation of your home: layout, installations, floors, carpentry and finishes under one contract.",
          bullets: ["Project and licences", "Brand-new installations", "Deadline guaranteed in writing"],
        },
        cocina: {
          title: "Kitchen renovations",
          description:
            "Practical, long-lasting kitchens: bespoke units, quartz or porcelain worktops and integrated appliances.",
          bullets: ["3D design upfront", "Plumbing and electrics", "Installed in 3 weeks"],
        },
        bano: {
          title: "Bathroom renovations",
          description:
            "We swap bathtubs for shower trays and renew tiling, sanitary ware and lighting in under two weeks.",
          bullets: ["Bespoke walk-in shower", "Guaranteed waterproofing", "Fast, tidy works"],
        },
        fachada: {
          title: "Facades and restoration",
          description:
            "Crack repair, single-coat render, external SATE insulation, waterproofing and salt-resistant paint.",
          bullets: ["Certified scaffolding", "Anti-damp treatment", "Better energy performance"],
        },
        tejado: {
          title: "Roofs and coverings",
          description:
            "Repair and renewal of flat and pitched roofs, ceramic tiles, insulation and guttering.",
          bullets: ["Leak diagnosis", "Waterproofing", "10-year guarantee"],
        },
        piscina: {
          title: "Pools and outdoor areas",
          description:
            "Building and renovating pools, anti-slip coping, filtration systems and LED lighting.",
          bullets: ["Linings and mosaic tiles", "Porcelain sun deck", "Commissioning included"],
        },
        extension: {
          title: "Extensions, terraces and pergolas",
          description:
            "Home extensions, glazed enclosures, outdoor decking and bioclimatic pergolas with an approved project.",
          bullets: ["Technical project", "Aluminium or masonry structure", "Council paperwork handled"],
        },
        pintura: {
          title: "Painting and wall finishes",
          description:
            "Interior and exterior painting, wall smoothing, microcement, wallpaper and anti-damp treatments.",
          bullets: ["Furniture fully protected", "Washable paints", "Flawless finish"],
        },
        instalaciones: {
          title: "Electrics and plumbing",
          description:
            "New installations and upgrades of fuse boards, pipework, air conditioning and hot water systems.",
          bullets: ["Electrical certificate", "Leak detection", "Aerothermal and A/C"],
        },
        local: {
          title: "Commercial units",
          description:
            "Complete fit-out of shops and offices: layout, climate control, lighting, shopfront and certificates.",
          bullets: ["Short delivery times", "Activity licence", "Out-of-hours works"],
        },
        otro: {
          title: "Other works",
          description:
            "Carpentry, tiling, shower screens, enclosures, small repairs and maintenance for communities.",
          bullets: ["Itemised quote", "In-house teams", "Fast response"],
        },
      },
    },
    projects: {
      heroTitle: "Completed projects",
      heroText:
        "Filter by type of work and drag each image to reveal the before and after of our renovations.",
      filterAll: "All",
      filters: {
        integral: "Full renovations",
        cocina: "Kitchens",
        bano: "Bathrooms",
        fachada: "Facades",
        piscina: "Pools",
        extension: "Terraces & extensions",
        local: "Commercial units",
      },
    },
    about: {
      heroTitle: "About DM Reformas",
      heroText:
        "We innovate in your project: current building solutions, careful execution and direct contact with the site manager.",
      storyTitle: "Our story",
      story: [
        "DM Reformas was founded in Torrevieja by professionals with over fifteen years of site experience on the Costa Blanca. We started with bathroom and kitchen renovations for neighbours in the town centre and today we deliver full renovations, facade restorations and commercial fit-outs throughout the Vega Baja region.",
        "The way we work has not changed: we visit the property, take measurements, explain the options with real prices and only start once the client knows exactly what will be done, what it costs and when it finishes.",
      ],
      valuesTitle: "Our values",
      values: [
        {
          title: "Transparency",
          text: "Itemised quotes with no surprise extras. Any change is approved in writing before it is carried out.",
        },
        {
          title: "Deadlines kept",
          text: "We plan the works with dates per stage and update you every week on real progress.",
        },
        {
          title: "Quality materials",
          text: "We work with trusted local suppliers and brands whose guarantees are honoured locally.",
        },
        {
          title: "Close contact",
          text: "One single site manager, reachable by phone and WhatsApp, in Spanish and English.",
        },
      ],
      methodTitle: "How we work",
      method: [
        {
          step: "01",
          title: "Visit and measurements",
          text: "We visit your home or unit free of charge, listen to your idea and take measurements and photos.",
        },
        {
          step: "02",
          title: "Detailed quote",
          text: "Within 48 working hours you receive an itemised quote with materials, deadlines and payment terms.",
        },
        {
          step: "03",
          title: "Planning and licences",
          text: "We coordinate trades and materials and, where required, council paperwork and the technical project.",
        },
        {
          step: "04",
          title: "Execution with follow-up",
          text: "A tidy site, daily protection of your home and a weekly report with progress photos.",
        },
        {
          step: "05",
          title: "Handover and guarantee",
          text: "Final walkthrough with you, site cleaning, installation certificates and a written guarantee.",
        },
      ],
      guaranteesTitle: "Guarantees and insurance",
      guarantees: [
        "Registered company with all workers declared to Spanish social security.",
        "Current public liability insurance for construction and renovation works.",
        "Written 2-year guarantee on finishes and up to 10 years on waterproofing and structure.",
        "Electrical and plumbing installation certificates issued by authorised installers.",
        "Health and safety plan applied on every site.",
      ],
    },
    testimonials: {
      heroTitle: "Client testimonials",
      heroText:
        "Real reviews from owners in Torrevieja and the surrounding area who trusted DM Reformas.",
      averageLabel: "Average rating",
      reviewsLabel: "verified reviews",
    },
    contact: {
      heroTitle: "Contact and free quote",
      heroText:
        "Tell us about your project and we will reply with a detailed quote within 48 working hours.",
      infoTitle: "Contact details",
      hoursTitle: "Opening hours",
      hours: ["Monday to Friday: 08:00 – 18:00", "Saturday: 09:00 – 13:00", "Sunday: closed"],
      mapTitle: "Our service area",
      formTitle: "Request your quote",
      formText:
        "Fields marked with * are required. The more information you give us, the more accurate your quote will be.",
    },
    form: {
      name: "Full name *",
      phone: "Phone *",
      email: "Email *",
      city: "Town / area",
      cityPlaceholder: "Torrevieja, Orihuela Costa…",
      type: "Type of renovation *",
      typePlaceholder: "Select the type of renovation",
      message: "Tell us about your project *",
      messagePlaceholder: "Describe the property, what you want to renovate and your ideal timing…",
      photos: "Project photos",
      photosHint: "Optional. Up to 5 images (JPG or PNG, max. 10 MB each).",
      surface: "Approximate surface (m²)",
      budget: "Approximate budget",
      budgetOptions: [
        "Under €5,000",
        "€5,000 – €15,000",
        "€15,000 – €30,000",
        "€30,000 – €60,000",
        "Over €60,000",
        "I don't know yet",
      ],
      buildingType: "Type of building",
      buildingOptions: ["Apartment", "Townhouse / bungalow", "Detached villa", "Building or community", "Commercial unit"],
      rooms: "Number of rooms to renovate",
      urgency: "When would you like to start?",
      urgencyOptions: ["As soon as possible", "In 1 – 3 months", "In more than 3 months", "Just exploring options"],
      consent: "I have read and accept the",
      consentLink: "privacy policy",
      submit: "Send request",
      submitting: "Sending…",
      successTitle: "Request sent!",
      successText:
        "Thank you for trusting DM Reformas. We have received your request and will reply within 48 working hours.",
      newRequest: "Send another request",
      errorTitle: "We couldn't send your request",
      errorText: "Please try again in a few minutes, or contact us directly by WhatsApp or phone.",
      required: "This field is required",
      invalidEmail: "Enter a valid email address",
      invalidPhone: "Enter a valid phone number (min. 9 digits)",
      tooShort: "Please write at least 10 characters",
      consentRequired: "You must accept the privacy policy",
      optional: "optional",
      uploading: "Uploading photos…",
    },
    footer: {
      about:
        "Renovation and construction company in Torrevieja. Full renovations, kitchens, bathrooms, facades, roofs and commercial units across the southern Costa Blanca.",
      quickLinks: "Quick links",
      legalLinks: "Legal",
      contact: "Contact",
      rights: "All rights reserved.",
      builtIn: "Torrevieja · Alicante · Spain",
    },
    cookies: {
      title: "Your privacy",
      text: "We use our own cookies that are necessary for the site to work and, with your permission, measurement cookies to improve our content.",
      accept: "Accept all",
      reject: "Necessary only",
      more: "Learn more",
    },
    legalPages: {
      legal: {
        title: "Legal notice",
        updated: "Last updated: September 2026",
        blocks: [
          {
            heading: "1. Identification details",
            body: [
              "In accordance with article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), this website is owned by DM Reformas, based in Torrevieja (Alicante, Spain), contact email dm.reformasinnovamos@gmail.com.",
              "Full company details (registered name, tax number and registered address) will be added to this legal notice once provided by the owner.",
            ],
          },
          {
            heading: "2. Purpose and terms of use",
            body: [
              "The purpose of this website is to present the renovation and construction services of DM Reformas and to let users request quotes with no obligation.",
              "Accessing the site implies acceptance of these terms. Users agree to use the site and its forms lawfully, without submitting false data or content that could damage the owner's or third parties' systems.",
            ],
          },
          {
            heading: "3. Intellectual and industrial property",
            body: [
              "Texts, photographs, logos, trade marks and graphic elements on this site are owned by DM Reformas or used with the relevant authorisation. Reproduction, distribution or transformation without express written authorisation is prohibited.",
            ],
          },
          {
            heading: "4. Liability",
            body: [
              "DM Reformas does not guarantee the absence of interruptions or errors when accessing the website, although it will take reasonable measures to avoid them. Quotes, deadlines and prices published for information purposes are not a binding contractual offer until formalised in writing.",
            ],
          },
          {
            heading: "5. Applicable law",
            body: [
              "These terms are governed by Spanish law. Any dispute will be heard by the courts of the owner's domicile, unless consumer legislation establishes another jurisdiction.",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy policy",
        updated: "Last updated: September 2026",
        blocks: [
          {
            heading: "1. Data controller",
            body: [
              "Controller: DM Reformas (Torrevieja, Alicante, Spain). Contact email: dm.reformasinnovamos@gmail.com.",
            ],
          },
          {
            heading: "2. Purpose and legal basis",
            body: [
              "We process the data you provide in the contact form (name, phone, email, town, type of renovation, project description and, if attached, photographs) in order to answer your enquiry, prepare a quote and maintain the commercial contact arising from that request.",
              "The legal basis is your explicit consent when submitting the form (art. 6.1.a GDPR) and the legitimate interest in handling quote requests and managing the pre-contractual relationship (art. 6.1.b GDPR).",
            ],
          },
          {
            heading: "3. Data retention",
            body: [
              "We keep your data for as long as needed to handle your request and afterwards for the statutory limitation periods applicable to tax and contractual obligations. If no contract is signed, your data is deleted within a maximum of two years from the last contact.",
            ],
          },
          {
            heading: "4. Recipients and processors",
            body: [
              "Data is stored on the servers of our hosting, database and email delivery providers, acting as data processors under an agreement compliant with article 28 GDPR. We do not sell your data to third parties and we do not carry out international transfers without appropriate safeguards.",
            ],
          },
          {
            heading: "5. Your rights",
            body: [
              "You may exercise your rights of access, rectification, erasure, objection, restriction of processing and portability by writing to dm.reformasinnovamos@gmail.com, stating the right you wish to exercise and attaching proof of identity.",
              "You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) if you consider that the processing does not comply with applicable law.",
            ],
          },
          {
            heading: "6. Security",
            body: [
              "We apply appropriate technical and organisational measures to protect your data against unauthorised access, loss or alteration, including encryption in transit and access control to the enquiries database.",
            ],
          },
        ],
      },
      cookies: {
        title: "Cookie policy",
        updated: "Last updated: September 2026",
        blocks: [
          {
            heading: "1. What cookies are",
            body: [
              "A cookie is a small text file stored in your browser when you visit a website. It allows information about your visit to be remembered, such as your chosen language or your privacy preferences.",
            ],
          },
          {
            heading: "2. Cookies we use",
            body: [
              "Necessary technical cookies: essential for the site to work and to remember your cookie choice. No consent is required.",
              "Measurement cookies: only activated if you accept all cookies. They help us understand, in aggregate, which pages are visited most so we can improve our content.",
              "Third-party cookies: if you view the map embedded on the contact page, Google may set its own cookies. The map only loads after cookies are accepted or after you interact with it.",
            ],
          },
          {
            heading: "3. How to manage cookies",
            body: [
              "You can change your choice at any time by clearing this site's data in your browser, which will make the consent banner appear again. You can also block or delete cookies from the privacy settings in Chrome, Safari, Firefox or Edge.",
            ],
          },
        ],
      },
    },
    meta: {
      home: {
        title: "Renovations in Torrevieja | DM Reformas Costa Blanca",
        description:
          "Full renovation company in Torrevieja: kitchens, bathrooms, facades, roofs, pools and commercial units across the Costa Blanca. Free quote in 48 h.",
      },
      services: {
        title: "Renovation services in Torrevieja | DM Reformas",
        description:
          "Full renovations, kitchens, bathrooms, facades, roofs, pools, painting, electrics and commercial fit-outs in Torrevieja and the southern Costa Blanca.",
      },
      projects: {
        title: "Projects and before-and-after renovations | DM Reformas",
        description:
          "Gallery of renovations completed in Torrevieja, Orihuela Costa and Guardamar: apartments, kitchens, bathrooms, facades and pools with before and after photos.",
      },
      about: {
        title: "About us | Renovation company in Torrevieja",
        description:
          "Meet DM Reformas: over 15 years renovating homes and commercial units on the Costa Blanca, with in-house teams, guarantees and written deadlines.",
      },
      testimonials: {
        title: "Client reviews | DM Reformas Torrevieja",
        description:
          "Verified testimonials from DM Reformas clients in Torrevieja, La Mata, Orihuela Costa, Guardamar and Ciudad Quesada.",
      },
      contact: {
        title: "Contact and free quote | DM Reformas Torrevieja",
        description:
          "Request your no-obligation renovation quote in Torrevieja. Form, phone, WhatsApp and our Costa Blanca service area.",
      },
      legal: {
        title: "Legal notice | DM Reformas",
        description: "Legal information for the DM Reformas website, a renovation company in Torrevieja, Alicante.",
      },
      privacy: {
        title: "Privacy policy | DM Reformas",
        description: "How we process your personal data under the GDPR when you request a quote from DM Reformas.",
      },
      cookies: {
        title: "Cookie policy | DM Reformas",
        description: "Information about the cookies used on the DM Reformas website and how to manage them.",
      },
    },
  },
};

export const useDict = (locale: Locale) => dictionaries[locale];
