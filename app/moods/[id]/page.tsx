import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockHorizons, mockRoutebooks, allMoods } from "@/data/mockCmsData";
import { Compass, Sparkles, Clock } from "lucide-react";

interface MoodHubPageProps {
  params: Promise<{ id: string }>;
}

export const dynamic = "force-dynamic";

// Map slug to actual mood name
function getMoodNameFromSlug(slug: string): string | null {
  if (!slug) return null;
  const normalized = slug.toLowerCase();
  
  for (const mood of allMoods) {
    const moodSlug = mood
      .toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-");
    
    if (moodSlug === normalized) {
      return mood;
    }
  }
  return null;
}

const moodBlurbs: Record<string, string> = {
  "Romance": "Moments designed to be shared. Sunset sails, candlelit gardens, and cliffside suites made for two.",
  "Solo Reset": "A pilgrimage back to yourself. Quiet temple walks, therapeutic hot springs, and time to slow down.",
  "Wild & Wide": "Raw nature and endless vistas. Black sands, volcanic trails, and waterfalls that stir the spirit.",
  "Family Loop": "Curated adventures for everyone. Hands-on local cooking, easy cycling, and memorable lodging.",
  "Culture Deep-Dive": "An immersion in living history. Centurys-old tea ceremonies, monk guides, and heritage architecture.",
  "Soft Luxury": "Quiet refinement. Vintage chauffeur drives, boutique chateaux, and sommelier-curated vineyard picnics."
};

export default async function MoodHubPage({ params }: MoodHubPageProps) {
  const { id } = await params;
  
  const moodName = getMoodNameFromSlug(id);
  if (!moodName) {
    notFound();
  }

  const matchingHorizons = mockHorizons.filter((h) => h.moods.includes(moodName));
  const matchingRoutebooks = mockRoutebooks.filter((r) => r.moods.includes(moodName));

  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl border-b border-ink/5 pb-8">
          <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" /> BEYOND MOOD
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
            Vibe: {moodName}
          </h1>
          <p className="text-sm md:text-base text-muted-clay leading-relaxed">
            {moodBlurbs[moodName] || "Curated journeys tailored to feed this specific state of mind."}
          </p>
        </div>

        {/* Horizons in this mood */}
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
            <Compass className="w-5 h-5 text-terracotta" />
            <span>Matching Horizons</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {matchingHorizons.map((h) => (
              <Link
                href={`/horizons/${h.id}`}
                key={h.id}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover-lift bg-ink border border-ink/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={h.image}
                  alt={h.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-pure-white flex flex-col gap-1.5 z-10">
                  <span className="font-serif text-[10px] uppercase tracking-widest text-terracotta font-semibold">
                    {h.subtitle}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold">{h.title}</h3>
                  <span className="text-[11px] text-pure-white/75 mt-1">Starting from ₹{h.startingPrice.toLocaleString('en-IN')}/p</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Routebooks in this mood */}
        <div className="flex flex-col gap-6 pt-10 border-t border-ink/5">
          <h2 className="font-serif text-2xl font-bold text-ink flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-terracotta" />
            <span>Itineraries Carving this Vibe</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {matchingRoutebooks.map((r) => (
              <div
                key={r.id}
                className="group bg-pure-white border border-ink/5 rounded-3xl overflow-hidden flex flex-col hover-lift shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {r.moods.map((m) => (
                      <span key={m} className="bg-ink/75 backdrop-blur-sm text-pure-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-muted-clay font-bold tracking-wider uppercase">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{r.durationDays} Days / {r.durationNights} Nights</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-ink leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-xs text-muted-clay leading-relaxed">
                      {r.editorialBlurb}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-muted-clay uppercase tracking-wider">Investment</span>
                      <span className="font-serif text-base font-bold text-terracotta">₹{r.startingPrice.toLocaleString('en-IN')}/p</span>
                    </div>
                    <Link
                      href={`/routebooks/${r.id}`}
                      className="bg-ink hover:bg-terracotta text-pure-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow transition-all cursor-pointer"
                    >
                      Read Notebook
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
