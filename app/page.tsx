"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mockHorizons, mockRoutebooks, mockSoulStops } from "@/data/mockCmsData";
import { SoulStop } from "@/schemas/cms-schemas";
import MoodDial from "@/components/MoodDial";
import WanderButton from "@/components/WanderButton";
import DiaryLightbox from "@/components/DiaryLightbox";
import SoulStopDrawer from "@/components/SoulStopDrawer";
import { Compass, Sparkles, Clock, ArrowRight } from "lucide-react";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [diaryLightboxIndex, setDiaryLightboxIndex] = useState<number | null>(null);
  const [selectedSoulStop, setSelectedSoulStop] = useState<SoulStop | null>(null);

  // Live filtering logic based on selected mood computed on render
  const horizons = selectedMood
    ? mockHorizons.filter((h) => h.moods.includes(selectedMood))
    : mockHorizons;

  const routebooks = selectedMood
    ? mockRoutebooks.filter((r) => r.moods.includes(selectedMood))
    : mockRoutebooks;

  // Instagram Mock Feed (Trip Diaries)
  const mockTripDiaries = [
    { id: "td1", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", likes: "1.2k", caption: "Sunset swims off Amalfi cliffside cliffs." },
    { id: "td2", url: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1200&q=80", likes: "938", caption: "A calm Kyoto dawn under whispering leaves." },
    { id: "td3", url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80", likes: "2.1k", caption: "Walking volcanic fields in South Iceland." },
    { id: "td4", url: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=1200&q=80", likes: "840", caption: "Cycling through lavender paths in Luberon." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION (Full-bleed Visual, Ink overlay, Serif Headline) */}
      <section className="relative h-[95vh] w-full bg-ink flex flex-col justify-end pb-24 overflow-hidden">
        {/* Full-bleed background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"
          alt="Kyoto Bamboo Path Dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-75 object-center"
        />
        
        {/* Soft bottom-to-top gradient wash overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222018] via-ink/40 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col gap-6 text-pure-white animate-fade-up">
          <span className="font-sans text-xs md:text-sm uppercase tracking-widest text-terracotta font-bold">
            BEYOND D TRIP &middot; PRIVATE TRAVEL CONCIERGE
          </span>
          <h1 className="font-serif text-4xl md:text-7xl font-bold tracking-tight max-w-4xl leading-tight">
            Where the itinerary ends,<br />the trip begins.
          </h1>
          <p className="font-sans text-sm md:text-lg text-pure-white/80 max-w-xl leading-relaxed font-medium">
            Discover cozier, photo-first travel packages and bookable local experiences. Crafted for curious travellers who seek curation, not databases.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <WanderButton />
            <Link
              href="/horizons"
              className="text-pure-white border border-pure-white/20 hover:bg-pure-white/15 px-6 py-4 rounded-full font-semibold text-base transition-all hover:border-pure-white cursor-pointer"
            >
              Explore Horizons
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="bg-warm-sand py-16 px-6 md:px-12 w-full border-b border-ink/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 text-center items-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
            What travellers say
          </h2>
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-ink/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.923243460655!2d75.78443799999997!3d26.905930999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59443a4cbcf%3A0x915ec88d2569f437!2sBeyond%20D%20Trips!5e0!3m2!1sen!2sin!4v1790452532066!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <p className="text-sm font-medium text-ink/80 flex items-center justify-center gap-2 flex-wrap">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJz8ukQ5S1bTkRN_RpJY3IXpE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline font-semibold"
            >
              Write a review
            </a>{" "}
            |{" "}
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJz8ukQ5S1bTkRN_RpJY3IXpE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:underline font-semibold"
            >
              Read all reviews on Google
            </a>
          </p>
        </div>
      </section>

      {/* 2. MOOD DIAL SECTION (Sticky Horizontal Scroll Filters) */}
      <MoodDial selectedMood={selectedMood} onMoodSelect={setSelectedMood} />

      {/* 3. HORIZONS SECTION (Curated Destinations rail) */}
      <section id="filtered-results" className="bg-warm-sand py-16 px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <Compass className="w-4 h-4" /> CURATED HORIZONS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
              Destinations with Feeling
            </h2>
          </div>
          <Link
            href="/horizons"
            className="text-sm font-semibold text-ink hover:text-terracotta transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>All Horizons</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizons Card Row (Desktop Grid / Mobile Horizontal Rail) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {horizons.slice(0, 3).map((h) => (
            <Link
              href={`/horizons/${h.id}`}
              key={h.id}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl hover-lift bg-ink border border-ink/5"
            >
              {/* Image zoom effect */}
              <div className="absolute inset-0 w-full h-full image-zoom-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={h.image}
                  alt={h.title}
                  className="w-full h-full object-cover opacity-85 image-zoom-hover"
                />
              </div>
              
              {/* bottom ink gradient for type readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-pure-white flex flex-col gap-2 z-10">
                <span className="font-serif text-[11px] uppercase tracking-widest text-terracotta font-semibold">
                  {h.subtitle}
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-bold">{h.title}</h3>
                
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-pure-white/10 text-xs">
                  <span className="text-pure-white/75 font-semibold">From ₹{h.startingPrice.toLocaleString('en-IN')}/p</span>
                  <span className="flex items-center gap-1 text-terracotta hover:underline font-bold">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. FEATURED ROUTEBOOKS (Notebook-style Packages) */}
      <section className="bg-pure-white py-20 px-6 md:px-12 w-full">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Sparkles className="w-4 h-4" /> FEATURED JOURNEYS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
                Routebooks to Flip Through
              </h2>
            </div>
            <Link
              href="/horizons"
              className="text-sm font-semibold text-ink hover:text-terracotta transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Explore packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Notebook cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routebooks.map((r) => {
              return (
                <div
                  key={r.id}
                  className="group bg-warm-sand/40 border border-ink/5 rounded-3xl overflow-hidden flex flex-col hover-lift shadow-xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    />

                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {r.moods.map((m) => (
                        <span key={m} className="bg-ink/75 backdrop-blur-sm text-pure-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-xs text-muted-clay font-bold tracking-wider uppercase">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{r.durationDays} Days / {r.durationNights} Nights</span>
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-ink leading-tight">
                        {r.title}
                      </h3>
                      <p className="text-xs text-muted-clay leading-relaxed line-clamp-3">
                        {r.editorialBlurb}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-clay uppercase tracking-wider">Investment</span>
                        <span className="font-serif text-lg font-bold text-terracotta">₹{r.startingPrice.toLocaleString('en-IN')}/p</span>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SOUL STOPS TEASER */}
      <section className="bg-warm-sand py-16 px-6 md:px-12 w-full">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Sparkles className="w-4 h-4" /> BOOKABLE EXPERIENCES
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink">
                Soul Stops to Stitch In
              </h2>
            </div>
            <Link
              href="/soul-stops"
              className="text-sm font-semibold text-ink hover:text-terracotta transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>View all Experiences</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {mockSoulStops.slice(0, 4).map((s) => (
              <div
                onClick={() => setSelectedSoulStop(s)}
                key={s.id}
                className="group bg-pure-white border border-ink/5 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between hover-lift cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-ink/75 backdrop-blur-sm text-pure-white px-2 py-0.5 rounded-full text-[10px] font-bold">
                    ₹{s.price.toLocaleString('en-IN')}/p
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <h4 className="font-serif text-sm font-bold text-ink group-hover:text-terracotta transition-colors line-clamp-1 text-left">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-muted-clay leading-relaxed line-clamp-2 text-left">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRIP DIARIES (Instagram-powered Visual Proof) */}
      <section className="bg-ink text-pure-white py-16 px-6 md:px-12 w-full border-t border-pure-white/5">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center justify-center gap-1.5">
              <Instagram className="w-4 h-4" /> SOCIALS PROOF
            </span>
            <h2 className="font-serif text-3xl font-bold text-pure-white">
              Trip Diaries on the Feed
            </h2>
            <p className="text-xs text-muted-clay">
              Real snapshots shared by travelers exploring our Horizons. Find inspiration and follow along on Instagram.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockTripDiaries.map((diary, index) => (
              <button
                onClick={() => setDiaryLightboxIndex(index)}
                key={diary.id}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl border border-pure-white/10 block w-full text-left cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={diary.url}
                  alt={diary.caption}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-terracotta">@beyonddtrips</span>
                    <span className="font-semibold text-pure-white/75">{diary.likes} ❤️</span>
                  </div>
                  <p className="text-[11px] text-pure-white/90 leading-relaxed italic line-clamp-3 text-left">
                    &quot;{diary.caption}&quot;
                  </p>
                  <span className="text-[10px] text-muted-clay uppercase tracking-widest font-bold self-end hover:underline">
                    View Post →
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <a
              href="https://www.instagram.com/beyonddtrips/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-pure-white hover:text-terracotta transition-colors underline decoration-terracotta underline-offset-4"
            >
              Follow our journal @beyonddtrips
            </a>
          </div>
        </div>
      </section>

      {/* Experience details drawer */}
      <SoulStopDrawer
        stop={selectedSoulStop}
        onClose={() => setSelectedSoulStop(null)}
      />

      {/* Diaries full-screen photo lightbox */}
      {diaryLightboxIndex !== null && (
        <DiaryLightbox
          posts={mockTripDiaries}
          activeIndex={diaryLightboxIndex}
          onClose={() => setDiaryLightboxIndex(null)}
          onNavigate={(idx) => setDiaryLightboxIndex(idx)}
        />
      )}

    </div>
  );
}
