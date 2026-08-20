"use client";

import React, { useState } from "react";
import { Heart, MessageSquare, ExternalLink } from "lucide-react";
import DiaryLightbox from "@/components/DiaryLightbox";

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

export default function DiariesPage() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  
  const diaryPosts = [
    {
      id: "p1",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      likes: "1.4k",
      comments: "142",
      location: "Positano, Italy",
      caption: "Mornings in Positano look like fresh pastries on a private terrace and lemon orchards scenting the breeze. Sticking around Ravello paths today.",
    },
    {
      id: "p2",
      url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      likes: "1.1k",
      comments: "86",
      location: "Kyoto, Japan",
      caption: "Avoiding crowds with a 6:00 AM walk through Arashiyama bamboo forest. The green light filter makes you feel like you are walking on another world.",
    },
    {
      id: "p3",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
      likes: "2.5k",
      comments: "310",
      location: "Vatnajokull, Iceland",
      caption: "Wired up crampons and climbed deep inside Vatnajokull neon-blue glacial caves. Ice formations that have frozen still for 800 years. Absolutely unreal.",
    },
    {
      id: "p4",
      url: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200&q=80",
      likes: "920",
      comments: "74",
      location: "Gordes, France",
      caption: "Lavender peak season in Provence. Spent the afternoon cycling past violet fields to Abbey of Senanque before checking into our golden-stone chateau stay.",
    },
    {
      id: "p5",
      url: "https://images.unsplash.com/photo-1520116468816-95b69f847357?auto=format&fit=crop&w=1200&q=80",
      likes: "1.8k",
      comments: "155",
      location: "Ravello, Italy",
      caption: "Infinite horizons from the Terrace of Infinity at Villa Cimbrone. Sitting 1,200 feet above the Mediterranean water lines.",
    },
    {
      id: "p6",
      url: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
      likes: "1.3k",
      comments: "118",
      location: "Gion, Kyoto",
      caption: "Exclusive chanoyu tea ceremony in a hidden wooden room with a third-generation apprentice. The choreographic silence was a highlight.",
    }
  ];

  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl border-b border-ink/5 pb-8">
          <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5">
            <Instagram className="w-4 h-4" /> TRIP DIARIES
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
            Aesthetic Journeys
          </h1>
          <p className="text-sm md:text-base text-muted-clay leading-relaxed">
            A live look into our travelers diaries. Flip through real snapshots, journals, and local visual proof shared on the feed.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diaryPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-pure-white border border-ink/5 rounded-3xl overflow-hidden shadow-xl flex flex-col hover-lift"
            >
              {/* Photo Area */}
              <div
                onClick={() => setActiveLightboxIndex(index)}
                className="relative aspect-square overflow-hidden bg-ink cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.url}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Stamp location label overlay */}
                <div className="absolute bottom-4 left-4 bg-ink/75 backdrop-blur-sm text-pure-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">
                  📍 {post.location}
                </div>
              </div>

              {/* Engagement & Caption details */}
              <div className="p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center text-xs font-bold border-b border-ink/5 pb-3">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-ink">
                      <Heart className="w-4 h-4 text-terracotta fill-terracotta/20" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-muted-clay">
                      <MessageSquare className="w-4 h-4" /> {post.comments}
                    </span>
                  </div>
                  <a
                    href="https://www.instagram.com/beyonddtrips/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-clay hover:text-terracotta flex items-center gap-1 text-[11px]"
                  >
                    <span>Feed</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-ink/80 leading-relaxed italic text-left">
                  &ldquo;{post.caption}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-screen lightbox */}
        {activeLightboxIndex !== null && (
          <DiaryLightbox
            posts={diaryPosts}
            activeIndex={activeLightboxIndex}
            onClose={() => setActiveLightboxIndex(null)}
            onNavigate={(idx) => setActiveLightboxIndex(idx)}
          />
        )}

      </div>
    </div>
  );
}
