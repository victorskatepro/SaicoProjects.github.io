export type Lang = "en" | "es";

const t = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      hire: "Hire me",
    },
    hero: {
      badge: "Open to Senior & Lead roles",
      title2: "Technical Lead",
      sub: "Building fintech and mobile products used by thousands — and engineered to last.",
      desc: "Technical Lead at Interbank · 8+ years shipping mobile apps that drive real revenue at scale.",
      metrics: [
        { value: "100k+", label: "Active Users" },
        { value: "$5M", label: "Annual Profit" },
        { value: "8+", label: "Years Experience" },
      ],
      cta1: "View my work",
      cta2: "View CV",
      cta3: "Get in touch",
    },
    about: {
      label: "About",
      heading1: "Engineering for",
      heading2: "real-world impact",
      p1: "I'm a software engineer and technical lead based in Huancayo, Peru. Over eight years I've taken mobile products from concept to production at fintech, logistics, and enterprise scale — owning architecture, delivery, and the people who build alongside me.",
      p2: "My work lives at the intersection of security and speed. I build Android-first experiences secured with AES-256 and SSL pinning, backed by cloud infrastructure on Azure, and deployed through automated pipelines I design myself. The app I currently lead generates $5M in profit and serves 100,000 active users.",
      p3: "I care about numbers that matter: retention rates, conversion lifts, load time cuts. I've also spent time as a mobile programming professor at TECSUP — because clear thinking sharpens better code.",
      cards: [
        { icon: "📍", label: "Location", value: "Huancayo, Peru" },
        { icon: "🏢", label: "Current Role", value: "Technical Lead @ Interbank" },
        { icon: "📱", label: "Specialization", value: "Android, iOS, Fintech" },
        { icon: "🎓", label: "Education", value: "TECSUP — Mobile Programming Professor" },
        { icon: "🌐", label: "Languages", value: "Spanish (native), English (professional)" },
      ],
    },
    experience: {
      label: "Experience",
      heading: "Where I've built things",
      current: "Current",
      items: [
        {
          role: "Technical Lead — Money Exchange",
          company: "Interbank",
          period: "Jan 2025 – present",
          bullets: [
            "Leads the mobile product responsible for $5M in annual profit and 100,000 active users",
            "Owns end-to-end architecture: security layer (MTLS, JWT, DexGuard), Azure cloud stack, and CI/CD pipeline",
            "Drives cross-functional delivery across mobile, backend, and DevOps teams",
          ],
        },
        {
          role: "Senior Android Developer",
          company: "PedidosYa",
          period: "Dec 2021 – Aug 2024",
          bullets: [
            "Increased user retention by 20% through targeted UX improvements and performance work",
            "Lifted card acquisition conversion by 15% via redesigned onboarding and payment flows",
            "Cut search feature load time by 30% through caching and architecture refactors",
          ],
        },
        {
          role: "Mobile Programming Professor",
          company: "TECSUP",
          period: "Mar 2022 – Dec 2024",
          bullets: [
            "Designed and delivered Android development curriculum to engineering students",
            "Bridged industry practice (Jetpack Compose, Clean Architecture) with academic instruction",
            "Mentored students through real-world mobile project delivery",
          ],
        },
        {
          role: "Tech Lead",
          company: "Interbank",
          period: "Prior role",
          bullets: [
            "Established CI/CD pipelines and GitFlow conventions adopted across mobile teams",
            "Led a team of engineers through delivery of internal banking tools",
            "Introduced security standards later scaled company-wide",
          ],
        },
        {
          role: "Software Engineer",
          company: "Everis / NTT Data",
          period: "",
          bullets: [
            "Developed enterprise mobile and web solutions for large-scale clients",
            "Worked within agile squads using SCRUM across multi-country delivery teams",
          ],
        },
        {
          role: "Software Developer",
          company: "Solera",
          period: "",
          bullets: [
            "Built and maintained automotive industry software on the Android platform",
            "Contributed to international product delivery with cross-functional teams",
          ],
        },
      ],
    },
    projects: {
      label: "Projects",
      heading: "Things I've shipped",
      filters: ["All", "Featured", "iOS", "Android", "Mobile", "Web"],
      items: [
        {
          title: "Money Exchange — Interbank",
          description: "Native Android currency exchange product. AES-256 encryption, MTLS-secured communications, real-time Azure-backed data processing. 100,000 active customers. $5M in annual profit.",
          metrics: ["100k users", "$5M profit"],
        },
        {
          title: "PedidosYa — Android App",
          description: "Latin America's leading food and delivery platform. Improved search, payment, and onboarding — reducing load time by 30%, lifting retention by 20%, boosting card conversion by 15%.",
          metrics: ["+20% retention", "+15% conversion", "-30% load time"],
        },
        {
          title: "Android Projects",
          description: "Enterprise Android applications with Kotlin, Clean Architecture, and SOLID principles. Fintech, logistics, and retail verticals with production-grade security.",
          metrics: [],
        },
        {
          title: "iOS Projects",
          description: "Native iOS applications built with Swift and SwiftUI. Banking, productivity, and consumer-facing apps with native UX patterns and Apple platform best practices.",
          metrics: [],
        },
        {
          title: "Mobile Projects",
          description: "Cross-platform and hybrid mobile applications. E-commerce, logistics, location services, and enterprise tools — all production-grade architecture.",
          metrics: [],
        },
        {
          title: "Web & Infrastructure",
          description: "Full-stack web applications and DevOps infrastructure. CI/CD pipelines, Azure cloud deployments, and enterprise web solutions for banking and retail clients.",
          metrics: [],
        },
      ],
    },
    skills: {
      label: "Skills",
      heading: "What I work with",
      categories: [
        { name: "Mobile Development" },
        { name: "Web & Backend" },
        { name: "Cloud & DevOps" },
        { name: "Security" },
        { name: "Practices & Methods" },
      ],
    },
    contact: {
      label: "Contact",
      heading1: "Let's build something",
      heading2: "that matters",
      body: "I'm open to senior engineering and technical lead roles — especially where mobile, security, and scale intersect. Send me a message and I'll get back to you within a day.",
      location: "Based in Huancayo, Peru · Available for remote and on-site roles",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      hire: "Contrátame",
    },
    hero: {
      badge: "Disponible para roles Senior y Tech Lead",
      title2: "Technical Lead",
      sub: "Construyendo productos fintech y mobile usados por miles — y diseñados para durar.",
      desc: "Technical Lead en Interbank · 8+ años lanzando apps móviles que generan ingresos reales a escala.",
      metrics: [
        { value: "100k+", label: "Usuarios Activos" },
        { value: "$5M", label: "Ganancia Anual" },
        { value: "8+", label: "Años de Experiencia" },
      ],
      cta1: "Ver mi trabajo",
      cta2: "Ver CV",
      cta3: "Contáctame",
    },
    about: {
      label: "Sobre mí",
      heading1: "Ingeniería con",
      heading2: "impacto real",
      p1: "Soy ingeniero de software y líder técnico con base en Huancayo, Perú. En ocho años he llevado productos móviles del concepto a la producción en fintech, logística y banca — liderando arquitectura, entrega y los equipos que construyen conmigo.",
      p2: "Mi trabajo vive en la intersección entre seguridad y velocidad. Construyo experiencias Android-first protegidas con AES-256 y SSL Pinning, respaldadas por infraestructura Azure, y desplegadas a través de pipelines CI/CD que diseño yo mismo. La app que lidero genera $5M en ganancias y sirve a 100,000 usuarios activos.",
      p3: "Me importan los números que importan: tasas de retención, conversiones, tiempos de carga. También fui profesor de programación móvil en TECSUP — porque pensar con claridad produce mejor código.",
      cards: [
        { icon: "📍", label: "Ubicación", value: "Huancayo, Perú" },
        { icon: "🏢", label: "Rol actual", value: "Technical Lead @ Interbank" },
        { icon: "📱", label: "Especialización", value: "Android, iOS, Fintech" },
        { icon: "🎓", label: "Educación", value: "TECSUP — Profesor de Programación Móvil" },
        { icon: "🌐", label: "Idiomas", value: "Español (nativo), Inglés (profesional)" },
      ],
    },
    experience: {
      label: "Experiencia",
      heading: "Dónde he construido cosas",
      current: "Actual",
      items: [
        {
          role: "Technical Lead — Money Exchange",
          company: "Interbank",
          period: "Ene 2025 – presente",
          bullets: [
            "Lidera el producto móvil responsable de $5M en ganancias anuales y 100,000 usuarios activos",
            "Dueño de la arquitectura end-to-end: capa de seguridad (MTLS, JWT, DexGuard), stack Azure y pipeline CI/CD",
            "Impulsa la entrega cross-funcional entre equipos mobile, backend y DevOps",
          ],
        },
        {
          role: "Senior Android Developer",
          company: "PedidosYa",
          period: "Dic 2021 – Ago 2024",
          bullets: [
            "Incrementó la retención de usuarios en 20% mediante mejoras de UX y performance",
            "Elevó la conversión de adquisición de tarjetas en 15% con flujos de onboarding rediseñados",
            "Redujo el tiempo de carga del buscador en 30% con caché y refactors de arquitectura",
          ],
        },
        {
          role: "Profesor de Programación Móvil",
          company: "TECSUP",
          period: "Mar 2022 – Dic 2024",
          bullets: [
            "Diseñó y dictó currículo de desarrollo Android para estudiantes de ingeniería",
            "Integró práctica de industria (Jetpack Compose, Clean Architecture) en instrucción académica",
            "Mentoreó estudiantes en entrega de proyectos móviles reales",
          ],
        },
        {
          role: "Tech Lead",
          company: "Interbank",
          period: "Rol previo",
          bullets: [
            "Estableció pipelines CI/CD y convenciones GitFlow adoptadas por los equipos mobile",
            "Lideró un equipo de ingenieros en la entrega de herramientas bancarias internas",
            "Introdujo estándares de seguridad escalados luego a nivel empresa",
          ],
        },
        {
          role: "Software Engineer",
          company: "Everis / NTT Data",
          period: "",
          bullets: [
            "Desarrolló soluciones móviles y web empresariales para clientes de gran escala",
            "Trabajó en squads ágiles usando SCRUM en equipos de entrega multinacional",
          ],
        },
        {
          role: "Software Developer",
          company: "Solera",
          period: "",
          bullets: [
            "Construyó y mantuvo software para la industria automotriz en plataforma Android",
            "Contribuyó a la entrega de productos internacionales con equipos cross-funcionales",
          ],
        },
      ],
    },
    projects: {
      label: "Proyectos",
      heading: "Lo que he lanzado",
      filters: ["Todo", "Destacados", "iOS", "Android", "Móvil", "Web"],
      items: [
        {
          title: "Money Exchange — Interbank",
          description: "Producto Android nativo de cambio de divisas. Cifrado AES-256, comunicaciones MTLS, procesamiento de datos en tiempo real con Azure. 100,000 clientes activos. $5M en ganancias anuales.",
          metrics: ["100k usuarios", "$5M ganancia"],
        },
        {
          title: "PedidosYa — App Android",
          description: "La plataforma líder de delivery en Latinoamérica. Mejoró búsqueda, pagos y onboarding — reduciendo el tiempo de carga en 30%, aumentando retención en 20% y conversión de tarjetas en 15%.",
          metrics: ["+20% retención", "+15% conversión", "-30% carga"],
        },
        {
          title: "Proyectos Android",
          description: "Aplicaciones Android empresariales con Kotlin, Clean Architecture y principios SOLID. Verticales en fintech, logística y retail con seguridad de nivel producción.",
          metrics: [],
        },
        {
          title: "Proyectos iOS",
          description: "Aplicaciones iOS nativas con Swift y SwiftUI. Apps bancarias, de productividad y consumo con patrones UX nativos y buenas prácticas de la plataforma Apple.",
          metrics: [],
        },
        {
          title: "Proyectos Móvil",
          description: "Aplicaciones móviles híbridas y multiplataforma. E-commerce, logística, servicios de ubicación y herramientas empresariales — todas con arquitectura de nivel producción.",
          metrics: [],
        },
        {
          title: "Web e Infraestructura",
          description: "Aplicaciones web full-stack e infraestructura DevOps. Pipelines CI/CD, despliegues en Azure y soluciones web empresariales para clientes de banca y retail.",
          metrics: [],
        },
      ],
    },
    skills: {
      label: "Habilidades",
      heading: "Con qué trabajo",
      categories: [
        { name: "Desarrollo Móvil" },
        { name: "Web y Backend" },
        { name: "Cloud y DevOps" },
        { name: "Seguridad" },
        { name: "Prácticas y Métodos" },
      ],
    },
    contact: {
      label: "Contacto",
      heading1: "Construyamos algo",
      heading2: "que importe",
      body: "Estoy abierto a roles de ingeniería senior y tech lead — especialmente donde se cruzan mobile, seguridad y escala. Escríbeme y te respondo en menos de un día.",
      location: "Ubicado en Huancayo, Perú · Disponible para trabajo remoto y presencial",
    },
  },
} as const;

export type Translations = typeof t.en | typeof t.es;
export default t;
