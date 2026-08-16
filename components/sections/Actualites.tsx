import { CalendarDays } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { actualites } from "@/lib/data";

export default function Actualites() {
  return (
    <Section
      id="actualites"
      theme="dark"
      eyebrow="Actualités"
      title="L'historique du projet"
      description="Toutes les actualités de SPLASH : enregistrements publics, sorties d'épisodes, temps forts et prochains rendez-vous."
    >
      <div className="space-y-6">
        {actualites.map((actu) => (
          <article
            key={actu.id}
            className="rounded-xl3 border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-1.5 text-xs font-medium text-white/60">
              <CalendarDays size={14} /> {actu.date}
            </p>
            <h3 className="mt-5 font-display text-xl uppercase leading-[0.95] tracking-tight md:text-3xl">
              {actu.title}
            </h3>
            <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-white/65 md:text-base">
              {actu.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button
                href={actu.primaryCta.href}
                target={actu.primaryCta.external ? "_blank" : undefined}
                rel={actu.primaryCta.external ? "noopener noreferrer" : undefined}
                size="md"
              >
                {actu.primaryCta.label}
              </Button>
              <Button href={actu.secondaryCta.href} variant="outlineLight" size="md">
                {actu.secondaryCta.label}
              </Button>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-sm text-white/40">
        D&apos;autres actualités suivront à mesure que le projet avance : nouveaux épisodes,
        événements et rendez-vous à venir.
      </p>
    </Section>
  );
}
