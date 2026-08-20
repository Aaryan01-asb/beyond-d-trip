"use strict";
"use client";

import React from "react";
import { SoulStop } from "@/schemas/cms-schemas";
import { Sparkles, Plus, Check } from "lucide-react";

interface SoulStopSelectorProps {
  soulStops: SoulStop[];
  pinnedIds: string[];
  onTogglePin: (id: string) => void;
  basePrice: number;
}

export default function SoulStopSelector({
  soulStops,
  pinnedIds,
  onTogglePin,
  basePrice,
}: SoulStopSelectorProps) {
  const selectedStops = soulStops.filter((stop) => pinnedIds.includes(stop.id));
  const stopsTotalPrice = selectedStops.reduce((sum, stop) => sum + stop.price, 0);
  const finalPrice = basePrice + stopsTotalPrice;

  return (
    <div className="bg-pure-white border border-ink/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-xl">
      <div className="flex flex-col gap-1">
        <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-terracotta" />
          <span>Pin Local Experiences (Soul Stops)</span>
        </h3>
        <p className="text-xs text-muted-clay leading-relaxed">
          Lightly customize your journey. Check experiences below to stitch them directly into your Routebook timeline.
        </p>
      </div>

      {soulStops.length === 0 ? (
        <p className="text-xs italic text-muted-clay">No local experiences available for this Horizon currently.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {soulStops.map((stop) => {
            const isPinned = pinnedIds.includes(stop.id);
            return (
              <div
                key={stop.id}
                onClick={() => onTogglePin(stop.id)}
                className={`group border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isPinned
                    ? "border-terracotta bg-terracotta/5 shadow-md"
                    : "border-ink/10 bg-warm-sand/20 hover:border-terracotta hover:bg-pure-white"
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={stop.image}
                    alt={stop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-ink/70 backdrop-blur-sm text-pure-white px-2.5 py-1 rounded-full text-xs font-semibold">
                    +₹{stop.price.toLocaleString('en-IN')}/p
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <h4 className="font-serif text-sm font-bold text-ink group-hover:text-terracotta transition-colors leading-tight">
                    {stop.title}
                  </h4>
                  <p className="text-xs text-muted-clay leading-relaxed line-clamp-2">
                    {stop.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-ink/5 pt-3 mt-1">
                    <span className="text-[10px] text-muted-clay uppercase tracking-wider font-semibold">
                      Vibe: {stop.moods[0]}
                    </span>
                    <button
                      type="button"
                      className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full transition-all ${
                        isPinned
                          ? "bg-terracotta text-pure-white"
                          : "bg-ink text-pure-white hover:bg-terracotta"
                      }`}
                    >
                      {isPinned ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Pinned</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Pin Experience</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pricing Summary Block */}
      <div className="border-t border-ink/10 pt-6 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 bg-warm-sand/50 p-4 rounded-2xl">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="text-xs text-muted-clay font-medium uppercase tracking-wider">Customized Itinerary Investment</span>
          <div className="flex items-baseline gap-2 justify-center md:justify-start">
            <span className="font-serif text-3xl font-bold text-ink">₹{finalPrice.toLocaleString('en-IN')}</span>
            <span className="text-xs text-muted-clay font-medium">/p</span>
          </div>
        </div>

        {selectedStops.length > 0 && (
          <div className="flex flex-col items-center md:items-end gap-1 text-xs text-muted-clay font-medium">
            <span>Base price: ₹{basePrice.toLocaleString('en-IN')}</span>
            <span>+ {selectedStops.length} Soul Stop{selectedStops.length > 1 ? "s" : ""}: +₹{stopsTotalPrice.toLocaleString('en-IN')}</span>
          </div>
        )}
      </div>
    </div>
  );
}
