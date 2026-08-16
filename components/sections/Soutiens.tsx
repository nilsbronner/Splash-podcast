import { clsx } from "clsx";
import Section from "@/components/ui/Section";
import { supporters, type SupportTier } from "@/lib/data";

const tiers: { tier: SupportTier; title: string; description: string; cols: string }[] = [
  {
    tier: "sponsors",
    title: "Sponsors",
    description: "Ils financent le projet avec un objectif de visibilité.",
    cols: "sm:grid-cols-2",
  },
  {
    tier: "mecenes",
    title: "Mécènes",
    description: "Ils soutiennent sans contrepartie commerciale.",
    cols: "sm:grid-cols-3",
  },
  {
    tier: "partenaires",
    title: "Partenaires",
    description: "Ils contribuent techniquement ou humainement au projet.",
    cols: "sm:grid-cols-4",
  },
];

export default function Soutiens() {
  return (
    <Section
      id="soutiens"
      theme="light"
      eyebrow="Nos soutiens"
      title="Ceux qui rendent SPLASH possible"
      description="Trois formes de soutien, trois niveaux d'engagement — que nous choisissons de rendre visibles distinctement, en toute transparence."
    >
      <div className="space-y-14">
        {tiers.map((col) => {
          const items = supporters.filter((s) => s.tier === col.tier);
          return (
            <div key={col.tier}>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-b border-ink/8 pb-4">
                <h3 className="font-display text-xl uppercase tracking-tight text-ink">{col.title}</h3>
                <p className="text-sm text-ink/50">{col.description}</p>
              </div>

              {items.length > 0 ? (
                <div className={clsx("grid grid-cols-2 gap-5", col.cols)}>
                  {items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="focus-ring group flex aspect-[3/2] flex-col items-center justify-center gap-2 rounded-xl2 border border-ink/8 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-orange-400/40 hover:shadow-md"
                    >
                      <p className="font-display text-lg uppercase leading-tight tracking-tight text-ink">
                        {item.name}
                      </p>
                      <p className="text-xs leading-relaxed text-ink/50">{item.description}</p>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl2 border border-dashed border-ink/15 p-8 text-center">
                  <p className="text-sm text-ink/50">
                    Cette place est libre. Soyez les premiers à la rejoindre.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
