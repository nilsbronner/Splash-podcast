import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/ui/CtaBanner";
import Episodes from "@/components/sections/Episodes";

export const metadata: Metadata = {
  title: "Les épisodes",
  description:
    "Saison 1 — 6 voix, 6 histoires. Un nouvel épisode SPLASH chaque 1er mardi du mois.",
};

export default function EpisodesPage() {
  return (
    <>
      <PageHeader />
      <Episodes />
      <CtaBanner
        title="Vous avez une histoire à raconter ?"
        description="Chaque épisode part d'un témoignage. Le vôtre pourrait être le prochain."
        primary={{ label: "Témoigner", href: "/temoigner" }}
        secondary={{ label: "Rejoindre Discord", href: "https://discord.gg/K84WaeSFt", external: true }}
      />
    </>
  );
}
