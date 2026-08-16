import { FileText } from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function CharteHome() {
  return (
    <Section id="charte" theme="light" className="relative overflow-hidden">
      <div className="rounded-xl3 bg-ink p-10 text-white md:p-14">
        <Badge tone="violet" className="mb-5">
          #PlayGG
        </Badge>
        <h2 className="font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl">
          Charte pour un esport mixte et responsable
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          Un esport responsable commence aussi par la manière dont on parle, on joue et on fait
          communauté.
        </p>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/65">
          SPLASH s&apos;engage sur ses pratiques éditoriales et sur les valeurs qui guident le
          projet.
        </p>
        <Button href="/charte" variant="dark" size="lg" className="mt-8 !bg-white !text-ink hover:!bg-white/90">
          <FileText size={18} /> Lire la Charte pour un esport responsable
        </Button>
      </div>
    </Section>
  );
}
