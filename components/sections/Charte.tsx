import { FileText, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

const piliers = [
  {
    icon: MessageCircle,
    title: "La manière dont on parle",
    description:
      "Un langage qui inclut plutôt qu'il n'exclut, dans les échanges comme dans l'animation des épisodes.",
  },
  {
    icon: Sparkles,
    title: "La manière dont on joue",
    description: "Une pratique du jeu et de l'esport qui laisse sa place à toutes et tous, quel que soit le niveau ou le profil.",
  },
  {
    icon: ShieldCheck,
    title: "La manière dont on fait communauté",
    description: "Des espaces d'échange — Discord, événements, plateau — pensés pour rester sûrs et respectueux.",
  },
];

export default function Charte() {
  return (
    <Section
      id="charte"
      theme="dark"
      eyebrow="#PlayGG"
      title="Charte pour un esport mixte et responsable"
      description="Un esport responsable commence aussi par la manière dont on parle, on joue et on fait communauté. SPLASH s'engage publiquement sur ses pratiques éditoriales et sur les valeurs qui guident le projet."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {piliers.map((p) => (
          <div key={p.title} className="rounded-xl2 border border-white/10 bg-white/[0.03] p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-splash-gradient text-white">
              <p.icon size={18} />
            </span>
            <p className="mt-5 font-display text-base font-semibold">{p.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-xl3 border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-300">
            <FileText size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-white/90">Texte complet de la Charte</p>
            <p className="mt-1 text-xs leading-relaxed text-white/50">
              Les articles détaillés de la Charte #PlayGG sont en cours de finalisation.
            </p>
          </div>
        </div>
        <Badge tone="neutral">Bientôt disponible</Badge>
      </div>
    </Section>
  );
}
