"use strict";
"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import { mockRoutebooks, mockSoulStops, mockHorizons } from "@/data/mockCmsData";
import SoulStopSelector from "@/components/SoulStopSelector";
import StripeDepositButton from "@/components/StripeDepositButton";
import WhisperForm from "@/components/WhisperForm";
import { Clock } from "lucide-react";

export const dynamic = "force-dynamic";

interface RoutebookDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function RoutebookDetailPage({ params }: RoutebookDetailPageProps) {
  // Resolve params using React.use()
  const { id } = use(params);

  const routebook = mockRoutebooks.find((r) => r.id === id);
  if (!routebook) {
    notFound();
  }

  // Get matching experiences for this specific destination
  const horizon = mockHorizons.find((h) => h.id === routebook.destinationId);
  const destinationSoulStops = mockSoulStops.filter(
    (s) => s.destinationId === routebook.destinationId
  );

  // Pinned experiences state
  const [pinnedStops, setPinnedStops] = useState<string[]>([]);

  const handleTogglePin = (stopId: string) => {
    setPinnedStops((prev) =>
      prev.includes(stopId) ? prev.filter((id) => id !== stopId) : [...prev, stopId]
    );
  };


  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Cover Section */}
        <div className="relative h-[50vh] rounded-3xl overflow-hidden shadow-2xl bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={routebook.image}
            alt={routebook.title}
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 text-pure-white flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            <div className="flex flex-col gap-2">
              <span className="font-serif text-xs uppercase tracking-widest text-terracotta font-semibold">
                Itinerary Routebook &middot; {horizon?.title}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                {routebook.title}
              </h1>
              <div className="flex items-center gap-4 text-xs font-semibold text-pure-white/80 mt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-terracotta" />
                  {routebook.durationDays} Days / {routebook.durationNights} Nights
                </span>
                <span>&bull;</span>
                <span>Vibes: {routebook.moods.join(", ")}</span>
              </div>
            </div>

            <div className="bg-pure-white/10 border border-pure-white/10 backdrop-blur-md p-4 rounded-2xl flex flex-col text-right shrink-0">
              <span className="text-[10px] text-pure-white/70 uppercase font-bold tracking-wider">Base Package Price</span>
              <span className="font-serif text-2xl font-bold text-pure-white">₹{routebook.startingPrice.toLocaleString('en-IN')} <span className="text-xs font-sans text-pure-white/70">/p</span></span>
            </div>
          </div>
        </div>

        {/* Dynamic Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* Left Columns: Day-by-Day Timeline, Inclusions, and Custom Pin selector */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            
            {/* Editorial blurb */}
            <div className="bg-pure-white border border-ink/5 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-3">
              <h2 className="font-serif text-xl font-bold text-ink">The Journey Vibe</h2>
              <p className="text-sm md:text-base text-muted-clay leading-relaxed italic">
                &ldquo;{routebook.editorialBlurb}&rdquo;
              </p>
            </div>

            {/* Day-by-Day Scroll timeline */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl font-bold text-ink">Timeline Diary</h2>
              
              <div className="relative border-l-2 border-terracotta/20 pl-6 md:pl-8 ml-3 md:ml-4 flex flex-col gap-12">
                {routebook.dayByDayTimeline.map((day) => (
                  <div key={day.day} className="relative flex flex-col gap-4">
                    {/* Timeline Node dot */}
                    <div className="absolute -left-[39px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-terracotta border-4 border-warm-sand flex items-center justify-center text-[10px] font-bold text-pure-white shadow">
                      {day.day}
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-sans text-[10px] font-bold text-terracotta uppercase tracking-wider">
                        Day {day.day}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink leading-tight">
                        {day.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-clay leading-relaxed">
                        {day.description}
                      </p>
                    </div>

                    <div className="relative aspect-[16/10] w-full max-w-md overflow-hidden rounded-2xl bg-ink shadow mt-1">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={day.image}
                        alt={day.title}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Soul Stops Pinning widget */}
            <SoulStopSelector
              soulStops={destinationSoulStops}
              pinnedIds={pinnedStops}
              onTogglePin={handleTogglePin}
              basePrice={routebook.startingPrice}
            />

            {/* Inclusions block */}
            <div className="bg-pure-white border border-ink/5 p-6 md:p-8 rounded-3xl shadow-sm flex flex-col gap-4">
              <h2 className="font-serif text-xl font-bold text-ink">Included in this Journey</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm font-medium text-muted-clay">
                {routebook.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-terracotta font-bold text-base leading-none">•</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Sticky Stripe & WhatsApp checkouts */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            
            {/* Stripe Hold Deposit Booking Widget */}
            <StripeDepositButton
              routebookId={routebook.id}
              routebookTitle={routebook.title}
              depositAmount={21000}
            />

            {/* Whisper a Plan Form Container */}
            <WhisperForm
              initialDestinationId={routebook.destinationId}
              initialMood={routebook.moods[0]}
            />

          </div>

        </div>

      </div>
    </div>
  );
}
