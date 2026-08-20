"use strict";
"use client";

import React from "react";
import { allMoods } from "@/data/mockCmsData";
import { Heart, User, Trees, Users, BookOpen, Star, RefreshCw } from "lucide-react";

interface MoodDialProps {
  selectedMood: string | null;
  onMoodSelect: (mood: string | null) => void;
}

const moodIcons: Record<string, React.ReactNode> = {
  "Romance": <Heart className="w-4 h-4" />,
  "Solo Reset": <User className="w-4 h-4" />,
  "Wild & Wide": <Trees className="w-4 h-4" />,
  "Family Loop": <Users className="w-4 h-4" />,
  "Culture Deep-Dive": <BookOpen className="w-4 h-4" />,
  "Soft Luxury": <Star className="w-4 h-4" />
};

export default function MoodDial({ selectedMood, onMoodSelect }: MoodDialProps) {

  const handleMoodClick = (mood: string) => {
    // Toggle logic: click active mood to deselect/reset
    const nextMood = selectedMood === mood ? null : mood;
    onMoodSelect(nextMood);

    // Smooth scroll down to filtered results section
    if (nextMood) {
      setTimeout(() => {
        const element = document.getElementById("filtered-results");
        if (element) {
          const yOffset = -100; // offset to clear sticky header and dial
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="w-full py-6 sticky top-16 z-40 bg-[#FBF7F2]/90 backdrop-blur-md shadow-sm border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="font-serif text-lg font-bold tracking-wide text-ink flex items-center gap-2">
              Filter by Mood
            </h3>
            <p className="text-xs text-muted-clay">
              Select a mood to re-prioritize and filter Horizons and Routebooks in real-time.
            </p>
          </div>
          {selectedMood && (
            <button
              onClick={() => onMoodSelect(null)}
              className="text-xs text-terracotta hover:underline font-semibold flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Mood Filter
            </button>
          )}
        </div>

        {/* Scrollable Dial Row */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
          {allMoods.map((mood) => {
            const isActive = selectedMood === mood;
            return (
              <button
                key={mood}
                onClick={() => handleMoodClick(mood)}
                className={`flex items-center gap-2 shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-terracotta border-terracotta text-pure-white shadow-md shadow-terracotta/25 scale-[1.02]"
                    : "bg-pure-white/80 border-ink/10 text-ink hover:border-terracotta hover:text-terracotta"
                }`}
              >
                {moodIcons[mood]}
                <span>{mood}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
