"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mockHorizons, allMoods } from "@/data/mockCmsData";
import { Compass, ArrowRight, Sparkles } from "lucide-react";

export default function HorizonsHub() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const filteredHorizons = selectedMood
    ? mockHorizons.filter(h => h.moods.includes(selectedMood))
    : mockHorizons;

  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5">
            <Compass className="w-4 h-4" /> EXPLORE HORIZONS
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
            Where do you want to feel?
          </h1>
          <p className="text-sm md:text-base text-muted-clay leading-relaxed">
            Our private destinations are curated not by geography, but by the atmosphere they provide. Browse our collections and filter by travel mood.
          </p>
        </div>

        {/* Mood Filter Pill Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-ink/5">
          <button
            onClick={() => setSelectedMood(null)}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              selectedMood === null
                ? "bg-ink text-pure-white"
                : "bg-pure-white border border-ink/10 text-ink hover:border-terracotta"
            }`}
          >
            All Vibes
          </button>
          {allMoods.map((mood) => (
            <button
              key={mood}
              onClick={() => setSelectedMood(mood)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedMood === mood
                  ? "bg-terracotta text-pure-white"
                  : "bg-pure-white border border-ink/10 text-ink hover:border-terracotta"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>

        {/* Horizons Grid */}
        {filteredHorizons.length === 0 ? (
          <div className="text-center py-20 bg-pure-white rounded-3xl border border-ink/5 shadow">
            <Sparkles className="w-8 h-8 text-terracotta mx-auto mb-3" />
            <p className="font-serif text-lg font-bold text-ink">No Horizons found for this vibe</p>
            <p className="text-xs text-muted-clay mt-1">Try resetting the filter to explore all destinations.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHorizons.map((h) => (
              <Link
                href={`/horizons/${h.id}`}
                key={h.id}
                className="group bg-pure-white border border-ink/5 rounded-3xl overflow-hidden shadow-xl hover-lift flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={h.image}
                    alt={h.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 max-w-[80%]">
                    {h.moods.map((mood) => (
                      <span
                        key={mood}
                        className="bg-ink/75 backdrop-blur-sm text-pure-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      >
                        {mood}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-terracotta uppercase tracking-wider font-serif">
                      {h.subtitle}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ink group-hover:text-terracotta transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-xs text-muted-clay leading-relaxed">
                      {h.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-2 text-xs">
                    <span className="text-ink font-bold font-sans">Starting at ₹{h.startingPrice.toLocaleString('en-IN')}/p</span>
                    <span className="text-terracotta font-semibold flex items-center gap-1 hover:underline">
                      Explore Horizon <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
