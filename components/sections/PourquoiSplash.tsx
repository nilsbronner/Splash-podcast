import Image from "next/image";
import { MessageCircle, Play } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function PourquoiSplash() {
  return (
    <Section id="pourquoi-splash" theme="light" eyebrow="Le nom SPLASH ?" title="D'où vient ce nom ?">
      <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-ink/70">
          <p>Splash trouve son origine dans Fortnite.</p>
          <p>
            Le Chug Splash est un objet avec lequel la joueuse ou le joueur peut « splasher »
            (éclabousser) son équipe pour lui redonner de la vie ou des boucliers. Il propage une
            onde dès son impact avec le sol.
          </p>
          <p>
            Splash entre en contact avec une pensée lisse, trop lisse. Une pensée collective figée
            dans des idées préconçues, des jugements rapides, des réactions automatiques...
          </p>
          <p>
            Splash veut créer une onde pour bousculer les esprits, provoquer l&apos;esprit critique
            et inviter au discernement.
          </p>
          <p>
            Afin que la compréhension devienne une forme de soin, et que la parole ouvre des voies
            de transformation.
          </p>
          <p className="font-display text-2xl uppercase leading-tight tracking-tight text-ink">
            SPLASH, ça change la vie et le <span className="text-gradient-splash">game</span>
            <span className="text-orange-500">!</span>
          </p>
        </div>

        <div className="hidden shrink-0 justify-self-end lg:block">
          <div className="animate-float">
            <Image
              src="/brand/icon-orange.png"
              alt=""
              aria-hidden
              width={140}
              height={140}
              className="h-28 w-28 drop-shadow-xl xl:h-32 xl:w-32"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-4">
        <Button href="/episodes" size="lg">
          <Play size={18} /> Voir les épisodes
        </Button>
        <Button
          href="https://discord.gg/splash"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="lg"
        >
          <MessageCircle size={18} /> Rejoindre la communauté
        </Button>
      </div>
    </Section>
  );
}
