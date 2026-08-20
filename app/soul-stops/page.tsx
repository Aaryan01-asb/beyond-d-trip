"use strict";
"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { mockSoulStops, mockHorizons, allMoods } from "@/data/mockCmsData";
import { Sparkles, MapPin, Compass } from "lucide-react";

function SoulStopsContent() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("highlight");

  const [selectedDestination, setSelectedDestination] = useState<string>("all");
  const [selectedMood, setSelectedMood] = useState<string>("all");
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Handle auto-scroll to highlighted item
  useEffect(() => {
    if (highlightId && cardRefs.current[highlightId]) {
      setTimeout(() => {
        cardRefs.current[highlightId]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 500);
    }
  }, [highlightId]);

  // Filter logic
  const filteredStops = mockSoulStops.filter((stop) => {
    const matchesDest = selectedDestination === "all" || stop.destinationId === selectedDestination;
    const matchesMood = selectedMood === "all" || stop.moods.includes(selectedMood);
    return matchesDest && matchesMood;
  });

  const getDestinationName = (destId: string) => {
    return mockHorizons.find((h) => h.id === destId)?.title || "Unknown Destination";
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-3 max-w-2xl">
        <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> SOUL STOPS
        </span>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
          Bite-Sized Moments
        </h1>
        <p className="text-sm md:text-base text-muted-clay leading-relaxed">
          Local, immersive experiences that bring color to a destination. Book them as standalone moments or pin them to customize any Routebook itinerary.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 border-b border-ink/5 pb-6">
        {/* Destination filter */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[10px] font-bold uppercase tracking-wider text-muted-clay flex items-center gap-1">
            <Compass className="w-3 h-3" /> Filter by Horizon
          </label>
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className="w-full bg-pure-white text-ink border border-ink/10 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-terracotta cursor-pointer transition-colors"
          >
            <option value="all">All Horizons (Destinations)</option>
            {mockHorizons.map((h) => (
              <option key={h.id} value={h.id}>
                {h.title}
              </option>
            ))}
          </select>
        </div>

        {/* Mood filter */}
        <div className="flex flex-col gap-1.5 flex-1">
          <label className="text-[10px] font-bold uppercase tracking-wider text-muted-clay flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Filter by Mood Vibe
          </label>
          <select
            value={selectedMood}
            onChange={(e) => setSelectedMood(e.target.value)}
            className="w-full bg-pure-white text-ink border border-ink/10 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-terracotta cursor-pointer transition-colors"
          >
            <option value="all">All Moods</option>
            {allMoods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Soul Stops Grid */}
      {filteredStops.length === 0 ? (
        <div className="text-center py-20 bg-pure-white rounded-3xl border border-ink/5 shadow">
          <Sparkles className="w-8 h-8 text-terracotta mx-auto mb-3" />
          <p className="font-serif text-lg font-bold text-ink">No experiences match your filters</p>
          <p className="text-xs text-muted-clay mt-1">Try broadening your horizon or vibe selections.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStops.map((stop) => {
            const isHighlighted = stop.id === highlightId;
            return (
              <div
                ref={(el) => { cardRefs.current[stop.id] = el; }}
                key={stop.id}
                className={`group bg-pure-white border rounded-3xl overflow-hidden shadow-xl hover-lift flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted ? "ring-2 ring-terracotta scale-[1.02] border-terracotta" : "border-ink/5"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stop.image}
                    alt={stop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-95"
                  />
                  <div className="absolute top-4 right-4 bg-ink/80 backdrop-blur-sm text-pure-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    ₹{stop.price.toLocaleString('en-IN')}/p
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-muted-clay font-bold tracking-wider uppercase">
                      <MapPin className="w-3 h-3 text-terracotta" />
                      <span>{getDestinationName(stop.destinationId)}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-ink group-hover:text-terracotta transition-colors leading-tight">
                      {stop.title}
                    </h3>
                    <p className="text-xs text-muted-clay leading-relaxed">
                      {stop.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-2">
                    <div className="flex gap-1">
                      {stop.moods.map((mood) => (
                        <span
                          key={mood}
                          className="bg-warm-sand text-ink text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        >
                          {mood}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/919375755205?text=${encodeURIComponent(
                        `Hello Beyond D Trip! I am interested in booking the experience: "${stop.title}" in ${getDestinationName(
                          stop.destinationId
                        )}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-ink hover:bg-terracotta text-pure-white text-[11px] font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SoulStopsHub() {
  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12">
      <Suspense fallback={
        <div className="max-w-6xl mx-auto py-20 text-center text-sm font-semibold text-muted-clay">
          Opening Experiences Collection...
        </div>
      }>
        <SoulStopsContent />
      </Suspense>
    </div>
  );
}
