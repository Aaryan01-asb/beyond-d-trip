import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockHorizons, mockRoutebooks, mockSoulStops } from "@/data/mockCmsData";
import WhisperForm from "@/components/WhisperForm";
import { Compass, Sparkles, Clock, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

interface HorizonDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function HorizonDetailPage({ params }: HorizonDetailPageProps) {
  const { id } = await params;
  
  const horizon = mockHorizons.find((h) => h.id === id);
  if (!horizon) {
    notFound();
  }

  // Get matching packages & experiences
  const matchingRoutebooks = mockRoutebooks.filter((r) => r.destinationId === id);
  const matchingSoulStops = mockSoulStops.filter((s) => s.destinationId === id);

  return (
    <div className="flex flex-col min-h-screen bg-warm-sand">
      
      {/* 1. Full-bleed Hero Visual */}
      <section className="relative h-[65vh] w-full bg-ink flex flex-col justify-end pb-16 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={horizon.image}
          alt={horizon.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#222018] via-ink/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col gap-3 text-pure-white">
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta font-bold">
            Horizon Destination
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
            {horizon.title}
          </h1>
          <p className="font-serif text-lg md:text-xl text-pure-white/90 italic max-w-xl">
            &ldquo;{horizon.subtitle}&rdquo;
          </p>
        </div>
      </section>

      {/* 2. Editorial Description & Whisper a Plan layout */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start w-full">
        
        {/* Left Column: Description & Curations */}
        <div className="lg:col-span-3 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-2xl font-bold text-ink">Editorial Note</h2>
            <p className="text-sm md:text-base text-muted-clay leading-relaxed whitespace-pre-line font-medium">
              {horizon.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {horizon.moods.map((mood) => (
                <span
                  key={mood}
                  className="bg-terracotta/10 text-terracotta border border-terracotta/10 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
                >
                  {mood}
                </span>
              ))}
            </div>
          </div>

          {/* Routebooks Section */}
          <div className="flex flex-col gap-6 pt-6 border-t border-ink/5">
            <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
              <Compass className="w-5 h-5 text-terracotta" />
              <span>Available Routebooks</span>
            </h3>

            {matchingRoutebooks.length === 0 ? (
              <p className="text-xs italic text-muted-clay">No itineraries available for this destination currently.</p>
            ) : (
              <div className="flex flex-col gap-6">
                {matchingRoutebooks.map((r) => (
                  <div
                    key={r.id}
                    className="group bg-pure-white border border-ink/5 rounded-3xl p-5 md:p-6 shadow flex flex-col sm:flex-row gap-5 hover-lift"
                  >
                    <div className="relative aspect-[16/10] sm:w-48 overflow-hidden rounded-2xl bg-ink shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.image}
                        alt={r.title}
                        className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="flex flex-col justify-between flex-grow gap-3">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-clay font-bold tracking-wider uppercase">
                          <Clock className="w-3 h-3" />
                          <span>{r.durationDays} Days / {r.durationNights} Nights</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-ink group-hover:text-terracotta transition-colors leading-tight">
                          {r.title}
                        </h4>
                        <p className="text-xs text-muted-clay line-clamp-2">
                          {r.editorialBlurb}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-ink/5 pt-3 mt-1 text-xs">
                        <span className="font-bold text-ink">From ₹{r.startingPrice.toLocaleString('en-IN')}/p</span>
                        <Link
                          href={`/routebooks/${r.id}`}
                          className="text-terracotta font-semibold hover:underline flex items-center gap-1"
                        >
                          <span>Open Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Soul Stops Section */}
          <div className="flex flex-col gap-6 pt-6 border-t border-ink/5">
            <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-terracotta" />
              <span>Soul Stops on Location</span>
            </h3>

            {matchingSoulStops.length === 0 ? (
              <p className="text-xs italic text-muted-clay">No experiences available currently.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchingSoulStops.map((s) => (
                  <Link
                    href={`/soul-stops?highlight=${s.id}`}
                    key={s.id}
                    className="group bg-pure-white border border-ink/5 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover-lift cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-95"
                      />
                      <div className="absolute top-2 right-2 bg-ink/80 backdrop-blur-sm text-pure-white px-2 py-0.5 rounded-full text-[10px] font-semibold">
                        +₹{s.price.toLocaleString('en-IN')}/p
                      </div>
                    </div>
                    <div className="p-4 flex flex-col gap-1.5">
                      <h4 className="font-serif text-sm font-bold text-ink group-hover:text-terracotta transition-colors leading-tight">{s.title}</h4>
                      <p className="text-[11px] text-muted-clay leading-relaxed">{s.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Sticky Whisper Form */}
        <div className="lg:col-span-2 lg:sticky lg:top-28">
          <WhisperForm initialDestinationId={horizon.id} initialMood={horizon.moods[0]} />
        </div>

      </section>

    </div>
  );
}
