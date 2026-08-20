"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mockRoutebooks, mockHorizons } from "@/data/mockCmsData";
import { Sparkles, X, RotateCw, ArrowRight } from "lucide-react";

export default function WanderButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [selectedRoutebook, setSelectedRoutebook] = useState<typeof mockRoutebooks[0] | null>(null);

  const triggerWander = () => {
    setIsShuffling(true);
    setIsOpen(true);
    setIsFlipped(false);

    // Choose a random routebook
    const randomIndex = Math.floor(Math.random() * mockRoutebooks.length);
    setSelectedRoutebook(mockRoutebooks[randomIndex]);

    setTimeout(() => {
      setIsShuffling(false);
    }, 850);
  };

  const handleShuffleAgain = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card flip click
    setIsShuffling(true);
    setIsFlipped(false);

    setTimeout(() => {
      // Choose a random routebook that is different from current one
      let nextIndex = Math.floor(Math.random() * mockRoutebooks.length);
      if (mockRoutebooks.length > 1 && selectedRoutebook) {
        while (mockRoutebooks[nextIndex].id === selectedRoutebook.id) {
          nextIndex = Math.floor(Math.random() * mockRoutebooks.length);
        }
      }
      setSelectedRoutebook(mockRoutebooks[nextIndex]);
      setIsShuffling(false);
    }, 850);
  };

  const handleFlip = () => {
    if (isShuffling) return;
    setIsFlipped(!isFlipped);
  };

  const getDestinationName = (id: string) => {
    return mockHorizons.find(h => h.id === id)?.title || "Unknown Horizon";
  };

  return (
    <>
      <button
        onClick={triggerWander}
        className="group relative flex items-center gap-2 bg-terracotta hover:bg-terracotta/95 text-pure-white px-8 py-4 rounded-full font-semibold text-lg tracking-wide shadow-xl hover:shadow-terracotta/30 transition-all transform hover:-translate-y-0.5 cursor-pointer z-10 font-sans"
      >
        <Sparkles className="w-5 h-5 animate-pulse group-hover:rotate-12 transition-transform" />
        <span>Wander</span>
      </button>

      {/* Wander Postcard Modal */}
      {isOpen && selectedRoutebook && (
        <div className="fixed inset-0 bg-ink/75 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-lg aspect-[4/3] md:aspect-[1.5/1] perspective-1000 z-10">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-pure-white hover:text-terracotta bg-pure-white/10 hover:bg-pure-white/20 p-2 rounded-full transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Shuffling loader view */}
            {isShuffling ? (
              <div className="absolute inset-0 bg-warm-sand text-ink rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center border border-ink/10 shadow-2xl z-30 font-sans">
                <div className="relative w-28 h-32 mb-6 flex items-center justify-center">
                  <div className="absolute w-20 h-28 bg-ink rounded-lg border border-pure-white/10 shadow-md rotate-6 animate-pulse translate-x-2" />
                  <div className="absolute w-20 h-28 bg-terracotta rounded-lg border border-pure-white/10 shadow-md -rotate-12 animate-pulse -translate-x-2" />
                  <div className="absolute w-20 h-28 bg-pure-white rounded-lg border border-ink/10 shadow-lg rotate-3 flex items-center justify-center font-serif text-2xl text-ink font-bold animate-bounce">
                    ✈
                  </div>
                </div>
                <h4 className="font-serif text-lg font-bold text-ink">Shuffling Horizons...</h4>
                <p className="text-[10px] text-muted-clay uppercase tracking-widest font-bold mt-1">Drawing travel postcards</p>
              </div>
            ) : (
              /* 3D Flipping Card Container */
              <div
                className={`w-full h-full transition-transform duration-700 preserve-3d relative rounded-2xl cursor-pointer select-none ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
                onClick={handleFlip}
              >
                
                {/* FRONT: Postcard Front Cover */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-ink rounded-2xl overflow-hidden shadow-2xl border border-pure-white/10 flex flex-col justify-end p-6 md:p-8">
                  {/* Background Image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedRoutebook.image}
                    alt={selectedRoutebook.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                  />
                  {/* Bottom Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  
                  {/* Postcard Stamp Sticker */}
                  <div className="absolute top-6 right-6 w-16 h-16 md:w-20 md:h-20 bg-warm-sand/90 text-ink border-2 border-dashed border-ink/40 p-2 rounded-lg flex flex-col items-center justify-center rotate-6 shadow-md">
                    <span className="font-serif text-[10px] uppercase font-bold tracking-widest">BEYOND</span>
                    <span className="text-xs">✈</span>
                    <span className="font-sans text-[8px] font-bold text-muted-clay uppercase">{selectedRoutebook.durationDays} Days</span>
                  </div>

                  <div className="relative z-10 text-pure-white flex flex-col gap-2 font-sans">
                    <span className="font-sans text-xs uppercase tracking-widest text-terracotta font-bold">
                      {getDestinationName(selectedRoutebook.destinationId)}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold max-w-sm">
                      {selectedRoutebook.title}
                    </h3>
                    <p className="font-sans text-xs text-pure-white/85 italic flex items-center gap-1.5 mt-2">
                      <RotateCw className="w-3.5 h-3.5 animate-spin-slow" /> Tap postcard to turn over
                    </p>
                  </div>
                </div>

                {/* BACK: Postcard Back (Message, Details & Call to Action) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-warm-sand text-ink rounded-2xl p-6 md:p-8 shadow-2xl border border-ink/10 flex flex-col justify-between">
                  
                  {/* Postcard Layout Grid */}
                  <div className="grid grid-cols-5 h-full font-sans">
                    
                    {/* Left Column: Hand-written note style */}
                    <div className="col-span-3 border-r border-ink/15 pr-4 flex flex-col justify-between">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                          <span className="font-serif text-xs text-muted-clay uppercase tracking-wider">JOURNEY PLAN</span>
                          <h4 className="font-serif text-base font-bold leading-tight mt-0.5">{selectedRoutebook.title}</h4>
                        </div>
                        <p className="font-sans text-xs text-ink/85 leading-relaxed italic">
                          &quot;{selectedRoutebook.editorialBlurb.substring(0, 95)}...&quot;
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-0.5">
                        <span className="font-serif text-[9px] text-muted-clay uppercase">ESTIMATED INVESTMENT</span>
                        <span className="font-serif text-lg font-bold text-terracotta leading-none">
                          ₹{selectedRoutebook.startingPrice.toLocaleString('en-IN')} <span className="text-[10px] font-sans text-muted-clay font-normal">/ person</span>
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Address and Stamp Placeholder */}
                    <div className="col-span-2 pl-4 flex flex-col justify-between items-end">
                      {/* Tiny Stamp Area */}
                      <div className="w-12 h-14 md:w-16 md:h-18 border border-ink/20 rounded flex items-center justify-center text-muted-clay text-xs select-none">
                        stamp
                      </div>

                      {/* Address lines simulation */}
                      <div className="w-full flex flex-col gap-1.5 mt-4 mb-2">
                        <div className="border-b border-ink/15 text-[9px] font-semibold text-muted-clay tracking-wider pb-0.5">
                          TO: Curated Traveller
                        </div>
                        <div className="border-b border-ink/15 text-[9px] font-semibold text-muted-clay tracking-wider pb-0.5">
                          VIA: {getDestinationName(selectedRoutebook.destinationId)}
                        </div>
                        <div className="border-b border-ink/15 text-[9px] font-semibold text-muted-clay tracking-wider pb-0.5">
                          MOOD: {selectedRoutebook.moods[0]}
                        </div>
                      </div>

                      {/* Explore & Shuffle Action Buttons */}
                      <div className="flex gap-2 w-full mt-2">
                        <button
                          onClick={handleShuffleAgain}
                          className="flex items-center gap-1 bg-pure-white hover:bg-ink/5 text-ink border border-ink/20 text-[10px] font-bold px-2.5 py-2 rounded-lg transition-all cursor-pointer justify-center flex-1"
                        >
                          <RotateCw className="w-3 h-3" />
                          <span>Shuffle</span>
                        </button>
                        
                        <Link
                          href={`/routebooks/${selectedRoutebook.id}`}
                          className="flex items-center gap-1 bg-ink hover:bg-terracotta text-pure-white text-[10px] font-bold px-2.5 py-2 rounded-lg shadow transition-all cursor-pointer justify-center flex-1"
                          onClick={(e) => e.stopPropagation()} // Prevent card flip click
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="text-center font-sans text-[9px] text-muted-clay italic mt-4">
                    Tap anywhere to flip back
                  </div>

                </div>

              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
