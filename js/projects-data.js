/**
 * projects-data.js
 * ─────────────────────────────────────────────────────────────
 * Central data store for all portfolio projects.
 * To add a new project: duplicate any entry below, change the id,
 * fill in the fields, and add a matching card in index.html.
 * ─────────────────────────────────────────────────────────────
 */

const PROJECTS = {

  /* ── CIA Mr. Monkey ────────────────────────────────────────── */
  cia: {
    id: "cia",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/CiaMrMonkey.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento1.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento3.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Pagode.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC06371.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Corporativo/Corporativo2.JPG.jpeg",
    ],
    title: "CIA",
    subtitle: "Produção Audiovisual Cinematográfica",
    category: "Evento Corporativo",
    duration: "3:45",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1175168610?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Produção audiovisual completa para o evento CIA, transformando momentos
            corporativos em narrativas cinematográficas. Nosso approach criativo
            capturou a essência do evento com técnica cinematográfica premium.`,

    services: [
      "Captação multicâmera 4K",
      "Direção criativa e roteiro",
      "Edição cinematográfica",
      "Color grading profissional",
      "Trilha sonora original",
      "Entrega em tempo real",
    ],

    tech: ["Sony FX30", "DJI Drone", "Adobe Premiere", "DaVinci Resolve"],

    cta: {
      title: "Transforme Seu Evento",
      description:
        "Pronto para elevar sua produção audiovisual? Vamos conversar sobre seu projeto.",
    },

    /** Optional: related project ids shown at the bottom */
    related: ["beats", "djnazar"],
  },

  /* ── BEATS ──────────────────────────────────────────────────── */
  beats: {
    id: "beats",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Beats.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento1.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Pagode.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento3.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/CiaMrMonkey.PNG",
    ],
    title: "BEATS",
    subtitle: "Cobertura de Show Musical",
    category: "Show / Entretenimento",
    duration: "4:10",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1175166493?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Cobertura completa do show BEATS com captação multicâmera, drone
            aéreo e edição cinematográfica que traduziu a energia do evento em
            imagens poderosas e imersivas.`,

    services: [
      "Captação multicâmera 4K",
      "Imagens aéreas com Drone",
      "Edição dinâmica",
      "Color grading vibrante",
      "Entrega Real Time para Stories",
      "After Movie completo",
    ],

    tech: ["Sony FX30", "DJI Drone", "Adobe Premiere", "DaVinci Resolve"],

    cta: {
      title: "Quer Cobrir Seu Show?",
      description:
        "Transformamos a energia do seu evento em conteúdo que viraliza. Solicite um orçamento.",
    },

    related: ["cia", "djnazar"],
  },

  /* ── DJ NAZAR ────────────────────────────────────────────────── */
  djnazar: {
    id: "djnazar",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/NazarXMacaubaAfterMovie.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento3.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Beats.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Pagode.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento1.PNG",
    ],
    title: "DJ NAZAR",
    subtitle: "After Movie — Nazar × Macaúba",
    category: "After Movie",
    duration: "5:20",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1184428989?autoplay=1&loop=1&autopause=0&muted=0",

    about: `After movie cinematográfico da parceria Nazar × Macaúba. Narrativa
            visual que captura a fusão entre artista e cenário com linguagem
            autoral e ritmo de clipe musical.`,

    services: [
      "Direção de fotografia",
      "Captação em 4K",
      "Edição estilo clipe",
      "Mixagem de áudio",
      "Color grading cinematográfico",
    ],

    tech: ["Sony FX30", "DJI Drone", "DaVinci Resolve", "Adobe Premiere"],

    cta: {
      title: "After Movie para Seu Evento?",
      description:
        "Criamos narrativas visuais que eternizam sua história. Vamos falar sobre seu projeto.",
    },

    related: ["beats", "cia"],
  },

  /* ── VOVÔ JAMES ──────────────────────────────────────────────── */
  vovnjames: {
    id: "vovnjames",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/VovoJames.png",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento1.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Pagode.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento3.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Beats.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC06371.JPG",
    ],
    title: "VOVÔ JAMES",
    subtitle: "Cobertura de Show Noturno",
    category: "Show / Entretenimento",
    duration: "3:55",

    videoOrientation: "horizontal", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1174868082?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Produção completa do show Vovô James: captação em baixa luminosidade
            com equipamentos de última geração, entregando imagens vibrantes mesmo
            em condições de palco desafiadoras.`,

    services: [
      "Captação em baixa luz",
      "Multicâmera 4K",
      "Edição cinematográfica",
      "Real Time para redes sociais",
      "After Movie",
    ],

    tech: ["Sony FX30", "Lentes fixas f/1.4", "DaVinci Resolve", "Adobe Premiere"],

    cta: {
      title: "Seu Show Merece Qualidade",
      description:
        "Captamos a essência de cada artista com qualidade cinematográfica. Solicite um orçamento.",
    },

    related: ["beats", "djnazar"],
  },

  /* ── HUNGRIA ─────────────────────────────────────────────────── */
  hungria: {
    id: "hungria",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Hungria.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento3.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/VovoJames.png",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Producao-De-Eventos/evento1.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/NazarXMacaubaAfterMovie.PNG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
    ],
    title: "HUNGRIA",
    subtitle: "Cobertura de Show — Deixa Rolar",
    category: "Show / Entretenimento",
    duration: "4:30",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1174900423?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Cobertura cinematográfica do show do Hungria. Imagens áreas e
            multicâmera que capturam a grandiosidade do artista e a energia
            do público em uma produção de alto padrão.`,

    services: [
      "Captação multicâmera 4K",
      "Drone aéreo",
      "Edição cinematográfica",
      "Color grading profissional",
      "After Movie",
      "Real Time Stories",
    ],

    tech: ["Sony FX30", "DJI Drone", "DaVinci Resolve", "Adobe Premiere"],

    cta: {
      title: "Eleve Seu Evento",
      description:
        "Produções com padrão broadcast para shows e eventos de grande porte.",
    },

    related: ["beats", "cia"],
  },

  /* ── HERING ──────────────────────────────────────────────────── */
  hering: {
    id: "hering",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/imagem_2026-03-22_121103528.png",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Corporativo/Corporativo-Eletrica-Gerar.JPG.jpeg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Corporativo/Corporativo2.JPG.jpeg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/fotografia3.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC06371.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Avaliacoes-Clientes/chefe-gabi.JPEG",
    ],
    title: "HERING",
    subtitle: "Vídeo Institucional Corporativo",
    category: "Corporativo",
    duration: "2:15",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1174875899?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Vídeo institucional para a Hering com direção criativa voltada ao
            fortalecimento de marca. Produção com roteiro estratégico, locações
            cuidadosamente selecionadas e edição premium.`,

    services: [
      "Roteiro estratégico",
      "Direção criativa",
      "Captação 4K",
      "Color grading de marca",
      "Motion graphics",
      "Entrega multiplataforma",
    ],

    tech: ["Sony FX30", "Adobe Premiere", "After Effects", "DaVinci Resolve"],

    cta: {
      title: "Vídeo Institucional para Sua Marca",
      description:
        "Criamos conteúdo corporativo que posiciona e conecta marcas ao seu público.",
    },

    related: ["djdushy", "heloibbq"],
  },

  /* ── DJ DUSHY ────────────────────────────────────────────────── */
  djdushy: {
    id: "djdushy",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/DushyPerfil.JPEG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC06371.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/fotografia3.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/GABI.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Corporativo/Corporativo2.JPG.jpeg",
    ],
    title: "DJ DUSHY",
    subtitle: "Conteúdo para Redes Sociais",
    category: "Fotografia & Conteúdo",
    duration: "—",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1174895872?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Produção de conteúdo estratégico para o DJ Dushy: fotos profissionais,
            vídeos curtos e stories que elevaram o engajamento nas redes sociais
            e fortaleceram a identidade visual do artista.`,

    services: [
      "Sessão fotográfica profissional",
      "Reels e TikToks",
      "Edição e retoque",
      "Identidade visual nas redes",
      "Planejamento de conteúdo",
    ],

    tech: ["Sony FX30", "Lightroom", "Adobe Premiere", "CapCut Pro"],

    cta: {
      title: "Conteúdo que Viraliza",
      description:
        "Produzimos fotos e vídeos estratégicos que impulsionam sua presença digital.",
    },

    related: ["hering", "sarobajtruck"],
  },

  /* ── HELOY BBQ ───────────────────────────────────────────────── */
  heloibbq: {
    id: "heloibbq",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Heloy.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/fotografia3.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Avaliacoes-Clientes/chefe-gabi.JPEG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/GABI.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC06371.JPG",
    ],
    title: "HELOY BBQ",
    subtitle: "Conteúdo Gastronômico",
    category: "Fotografia & Conteúdo",
    duration: "—",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1174885892?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Produção de conteúdo visual para a marca Heloy BBQ: fotografia
            gastronômica, vídeos de processo e material para redes sociais que
            traduzem a qualidade da marca em imagens apetitosas.`,

    services: [
      "Fotografia gastronômica",
      "Vídeos de processo",
      "Conteúdo para Instagram",
      "Edição profissional",
      "Identidade visual",
    ],

    tech: ["Sony FX30", "Lightroom", "Adobe Premiere"],

    cta: {
      title: "Mostre Seu Produto com Qualidade",
      description:
        "Fotos e vídeos que fazem o público querer o que você oferece.",
    },

    related: ["djdushy", "sarobajtruck"],
  },

  /* ── SAROBA TRUCK ────────────────────────────────────────────── */
  sarobajtruck: {
    id: "sarobajtruck",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/saroba.jpg.jpeg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/fotografia3.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Heloy.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC06371.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/DushyPerfil.JPEG",
    ],
    title: "SAROBA TRUCK",
    subtitle: "Identidade Visual & Conteúdo",
    category: "Fotografia & Conteúdo",
    duration: "—",

    videoOrientation: "horizontal", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1179022512?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Trabalho completo de fotografia e conteúdo para a Saroba Truck,
            capturando o universo e a personalidade da marca com imagens que
            geram identificação e impulsionam as vendas.`,

    services: [
      "Fotografia de produto",
      "Fotografia de evento",
      "Reels e Stories",
      "Edição profissional",
      "Planejamento editorial",
    ],

    tech: ["Sony FX30", "Lightroom", "Adobe Premiere"],

    cta: {
      title: "Sua Marca Merece Destaque",
      description:
        "Conteúdo visual estratégico que coloca sua marca no mapa.",
    },

    related: ["heloibbq", "djdushy"],
  },

  /* ── GABI ────────────────────────────────────────────────────── */
  gabi: {
    id: "gabi",
    gallery: [
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/GABI.JPG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Avaliacoes-Clientes/chefe-gabi.JPEG",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/fotografia3.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Fotografia-E-Conteudo/DSC01718.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Portfolio-Capas/Heloy.jpg",
      "https://pub-6ed96f3ac779487aaa566a1e4d9ecd58.r2.dev/Servicos/Corporativo/Corporativo2.JPG.jpeg",
    ],
    title: "GABI",
    subtitle: "Chef Gabi Tropicana — Gastronomia do Cerrado",
    category: "Corporativo / Branding",
    duration: "2:40",

    videoOrientation: "vertical", // "vertical" = phone 9:16 | "horizontal" = cinema 16:9
    videoSrc:
      "https://player.vimeo.com/video/1175167123?autoplay=1&loop=1&autopause=0&muted=0",

    about: `Produção audiovisual completa para a Chef Gabi Tropicana, embaixadora
            da gastronomia do Cerrado. Vídeos institucionais e conteúdo de marca
            que traduzem a autenticidade e o requinte da culinária regional.`,

    services: [
      "Vídeo institucional",
      "Fotografia gastronômica",
      "Conteúdo para redes sociais",
      "Edição cinematográfica",
      "Color grading cálido",
    ],

    tech: ["Sony FX30", "DaVinci Resolve", "Lightroom", "Adobe Premiere"],

    cta: {
      title: "Conte Sua História com Imagens",
      description:
        "Criamos conteúdo que posiciona marcas e eterniza histórias únicas.",
    },

    related: ["hering", "heloibbq"],
  },
};

export default PROJECTS;