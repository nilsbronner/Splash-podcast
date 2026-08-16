export const categories = [
  "Santé",
  "Inclusion",
  "Esport",
  "Handicap",
  "Diversité",
  "RSE",
  "Recherche",
  "Management",
] as const;

export type Category = (typeof categories)[number];

export interface Episode {
  id: string;
  number: number;
  title: string;
  summary: string;
  categories: Category[];
  guests: string;
  duration: string;
  releaseDate: string;
}

export const episodes: Episode[] = [
  {
    id: "burnout-esport",
    number: 1,
    title: "Burnout : quand la passion devient un risque",
    summary:
      "Un joueur pro raconte son épuisement, une chercheuse en psychologie du sport décrypte les mécanismes, et l'équipe ouvre le débat sur la prévention en structure esport.",
    categories: ["Santé", "Esport", "Recherche"],
    guests: "Témoignage joueur pro · Dr. en psychologie du sport",
    duration: "52 min",
    releaseDate: "Épisode 1 — Saison 1",
  },
  {
    id: "inclusion-manettes",
    number: 2,
    title: "Le jeu vidéo est-il vraiment pour tout le monde ?",
    summary:
      "Handicap et accessibilité : un joueur en situation de handicap partage son quotidien manette en main, un ergonome du jeu vidéo explique les avancées techniques.",
    categories: ["Handicap", "Inclusion"],
    guests: "Joueur & créateur de contenu · Expert accessibilité",
    duration: "48 min",
    releaseDate: "Épisode 2 — Saison 1",
  },
  {
    id: "mixite-esport",
    number: 3,
    title: "La mixité des équipes est-elle l'avenir de l'esport ?",
    summary:
      "Enregistré en public aux Strasbourg Esport Days : entre témoignage vécu, données de recherche sur la représentation et pistes concrètes pour les organisations, un état des lieux sans détour.",
    categories: ["Diversité", "Esport", "Recherche"],
    guests: "Joueuse compétitive · Sociologue du sport",
    duration: "55 min",
    releaseDate: "Épisode 3 — Enregistré en public aux Strasbourg Esport Days",
  },
  {
    id: "toxicite-moderation",
    number: 4,
    title: "Toxicité en ligne : jusqu'où va la responsabilité des studios ?",
    summary:
      "Un ancien modérateur témoigne, un chercheur en cyberviolence pose le cadre, et l'équipe interroge les entreprises sur leurs politiques RSE.",
    categories: ["Santé", "RSE", "Recherche"],
    guests: "Ex-modérateur communautaire · Chercheur en cyberviolence",
    duration: "50 min",
    releaseDate: "Épisode 4 — Saison 1",
  },
  {
    id: "management-studios",
    number: 5,
    title: "Crunch : peut-on encore faire des jeux sans s'épuiser ?",
    summary:
      "Un développeur revient sur une période de crunch, une consultante RH spécialisée jeu vidéo propose des modèles alternatifs de management.",
    categories: ["Management", "Santé", "RSE"],
    guests: "Développeur de jeux vidéo · Consultante RH gaming",
    duration: "58 min",
    releaseDate: "Épisode 5 — Saison 1",
  },
  {
    id: "addiction-familles",
    number: 6,
    title: "Addiction : ce que les familles ne savent pas toujours dire",
    summary:
      "Un témoignage familial fort, un addictologue spécialisé écrans, et une ouverture sur les dispositifs d'aide existants en France.",
    categories: ["Santé", "Inclusion"],
    guests: "Témoignage familial · Addictologue",
    duration: "53 min",
    releaseDate: "Épisode 6 — Saison 1",
  },
];

export type SupportTier = "sponsors" | "mecenes" | "partenaires";

export interface Supporter {
  name: string;
  description: string;
  tier: SupportTier;
  href?: string;
  placeholder?: boolean;
}

export const supporters: Supporter[] = [
  {
    name: "Votre marque ici",
    description: "Exemple de sponsor — à remplacer par un partenaire réel.",
    tier: "sponsors",
    placeholder: true,
  },
  {
    name: "Votre marque ici",
    description: "Exemple de sponsor — à remplacer par un partenaire réel.",
    tier: "sponsors",
    placeholder: true,
  },
  {
    name: "Fondation exemple",
    description: "Exemple de mécène — à remplacer par un partenaire réel.",
    tier: "mecenes",
    placeholder: true,
  },
  {
    name: "Fondation exemple",
    description: "Exemple de mécène — à remplacer par un partenaire réel.",
    tier: "mecenes",
    placeholder: true,
  },
  {
    name: "Fondation exemple",
    description: "Exemple de mécène — à remplacer par un partenaire réel.",
    tier: "mecenes",
    placeholder: true,
  },
  {
    name: "Skillcamp",
    description: "Structure porteuse du projet SPLASH.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "BEMOTION",
    description: "Partenaire production audiovisuelle : podcast, plateau, direction artistique vidéo.",
    tier: "partenaires",
    href: "#",
  },
  {
    name: "RESET",
    description: "Association partenaire, caution scientifique et associative sur les enjeux santé et inclusion.",
    tier: "partenaires",
    href: "/equipe",
  },
];

export interface ParticiperCard {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export const participerCards: ParticiperCard[] = [
  {
    title: "Devenir bénévole",
    description:
      "Recherche audio, community management, recherche documentaire, design, développement web : chaque compétence compte.",
    cta: "Proposer mon aide",
    href: "/temoigner",
  },
  {
    title: "Devenir partenaire",
    description: "Contribuez techniquement ou humainement au projet et gagnez en visibilité auprès de notre communauté.",
    cta: "Devenir partenaire",
    href: "/temoigner",
  },
  {
    title: "Devenir sponsor",
    description: "Soutenez financièrement SPLASH et associez votre marque à un projet à impact durable.",
    cta: "Devenir sponsor",
    href: "/temoigner",
  },
  {
    title: "Devenir mécène",
    description: "Un soutien libre, sans objectif commercial, pour permettre à SPLASH de rester indépendant.",
    cta: "Devenir mécène",
    href: "/temoigner",
  },
  {
    title: "Proposer une expertise",
    description: "Chercheur, professionnel de santé, juriste, spécialiste esport : partagez votre regard avec la communauté.",
    cta: "Proposer une expertise",
    href: "/temoigner",
  },
  {
    title: "Intervenir dans un épisode",
    description: "Vécu, expertise ou facilitation : rejoignez le triptyque d'un prochain épisode SPLASH.",
    cta: "Candidater",
    href: "/temoigner",
  },
  {
    title: "Organiser un événement ensemble",
    description: "Viewing party, conférence, tournoi solidaire : construisons un temps fort commun.",
    cta: "Proposer un événement",
    href: "/temoigner",
  },
];

export interface PressAsset {
  label: string;
  description: string;
}

export const pressAssets: PressAsset[] = [
  { label: "Présentation courte de SPLASH", description: "Le projet en une page : pitch, ligne éditoriale, partenaires" },
  { label: "Dossier de presse", description: "Présentation complète du projet, de son équipe et de ses ambitions" },
  { label: "Communiqué(s) de presse", description: "Annonces officielles liées au lancement et aux temps forts de SPLASH" },
  { label: "Logos", description: "Fichiers vectoriels et rasterisés, fonds clair et sombre" },
  { label: "Photos / visuels officiels", description: "Visuels plateau, équipe et événements en haute définition" },
  { label: "Présentation de l'équipe", description: "Bios et rôles de l'équipe qui conçoit et produit SPLASH" },
  { label: "Présentation des épisodes", description: "Résumés et angles éditoriaux de chaque épisode de la saison 1" },
];

export interface TeamMember {
  name: string;
  org: "Skillcamp" | "BEMOTION" | "RESET";
  role: string;
  href?: string;
}

export const team: TeamMember[] = [
  {
    name: "Lucia",
    org: "Skillcamp",
    role: "Porteuse du projet, ligne éditoriale",
    href: "#",
  },
  {
    name: "Nils",
    org: "BEMOTION",
    role: "Production",
    href: "#",
  },
  {
    name: "Matteo",
    org: "BEMOTION",
    role: "Production",
    href: "#",
  },
  {
    name: "Olivier",
    org: "RESET",
    role: "Président",
    href: "#",
  },
  {
    name: "Alexandre",
    org: "RESET",
    role: "Animation",
    href: "#",
  },
];

export interface Intervenant {
  name: string;
  tags: string[];
  bio: string[];
  href?: string;
}

export const intervenants: Intervenant[] = [
  {
    name: "Alexandre",
    tags: ["RESET", "Animation", "Psychologie", "Épistémologie"],
    bio: ["Anime les échanges et met en perspective les sujets abordés à l'antenne."],
    href: "#",
  },
  {
    name: "Dr Louis-Marie d'Ussel",
    tags: ["Psychiatre", "Addictologue"],
    bio: [
      "Hôpitaux Universitaires de Strasbourg.",
      "Responsable médical du CSAPA de la Médicale B.",
      "Référent des addictions comportementales.",
    ],
    href: "#",
  },
  {
    name: "Lilith",
    tags: ["Joueuse de League of Legends", "Créatrice de contenu"],
    bio: ["Partage son vécu de joueuse et de créatrice pour éclairer les sujets traités dans les épisodes."],
    href: "#",
  },
];

export interface Actualite {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string };
}

export const actualites: Actualite[] = [
  {
    id: "splash-strasbourg-esport-days",
    date: "16 août 2026",
    title: "SPLASH aux Strasbourg Esport Days",
    excerpt:
      "Le prochain épisode de SPLASH sera enregistré en public le dimanche 6 septembre à 10h30, au Palais de la musique et des congrès de Strasbourg.",
    body: [
      "Le prochain épisode de SPLASH sera enregistré en public le dimanche 6 septembre à 10h30, au Palais de la musique et des congrès de Strasbourg, dans le cadre des Strasbourg Esport Days.",
      "La mixité des équipes est-elle l'avenir de l'esport ?",
      "Venez assister à l'enregistrement de l'épisode 3 et découvrir la conversation en direct.",
    ],
    primaryCta: { label: "Venir aux SED", href: "#", external: true },
    secondaryCta: { label: "En savoir plus sur l'épisode 3", href: "/episodes" },
  },
];
