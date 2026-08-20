"use strict";
"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Heart, MessageSquare, ExternalLink } from "lucide-react";

interface DiaryPost {
  id: string;
  url: string;
  likes: string;
  caption: string;
  comments?: string;
  location?: string;
}

interface DiaryLightboxProps {
  posts: DiaryPost[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function DiaryLightbox({
  posts,
  activeIndex,
  onClose,
  onNavigate,
}: DiaryLightboxProps) {
  const currentPost = posts[activeIndex];
  const handlePrev = React.useCallback(() => {
    const prevIndex = (activeIndex - 1 + posts.length) % posts.length;
    onNavigate(prevIndex);
  }, [activeIndex, posts.length, onNavigate]);

  const handleNext = React.useCallback(() => {
    const nextIndex = (activeIndex + 1) % posts.length;
    onNavigate(nextIndex);
  }, [activeIndex, posts.length, onNavigate]);

  // Key event listeners for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Block scroll when open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  if (!currentPost) return null;

  return (
    <div className="fixed inset-0 bg-ink/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10 animate-fade-in">
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Lightbox Shell */}
      <div className="relative z-10 w-full max-w-4xl bg-pure-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[70vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-pure-white md:text-ink hover:text-terracotta bg-ink/30 md:bg-ink/5 hover:bg-ink/10 p-2.5 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Photo & Arrows */}
        <div className="relative flex-grow bg-black flex items-center justify-center h-[55%] md:h-full md:w-3/5">
          {/* Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentPost.url}
            alt={currentPost.caption}
            className="w-full h-full object-contain"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 bg-pure-white/10 hover:bg-pure-white/20 text-pure-white p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Previous Post"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 bg-pure-white/10 hover:bg-pure-white/20 text-pure-white p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Next Post"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Mobile Swipe / Hint indicators */}
          {currentPost.location && (
            <div className="absolute bottom-4 left-4 bg-ink/75 backdrop-blur-sm text-pure-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">
              📍 {currentPost.location}
            </div>
          )}
        </div>

        {/* Right Side: Editorial Snap / Details */}
        <div className="p-6 md:p-8 flex flex-col justify-between md:w-2/5 bg-pure-white text-ink h-[45%] md:h-full overflow-y-auto font-sans">
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-bold text-terracotta">@beyonddtrips</span>
              </div>
              <span className="text-[10px] text-muted-clay uppercase tracking-wider font-semibold">Trip Diary Entry</span>
            </div>

            {/* Engagement Details */}
            <div className="flex items-center gap-6 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-ink">
                <Heart className="w-4 h-4 text-terracotta fill-terracotta/25" /> {currentPost.likes} Likes
              </span>
              {currentPost.comments && (
                <span className="flex items-center gap-1.5 text-muted-clay">
                  <MessageSquare className="w-4 h-4" /> {currentPost.comments} Comments
                </span>
              )}
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-sans text-xs text-ink/90 leading-relaxed italic border-l-2 border-terracotta/20 pl-4 py-1">
                &ldquo;{currentPost.caption}&rdquo;
              </p>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-ink/5">
            <a
              href="https://www.instagram.com/beyonddtrips/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ink hover:bg-terracotta text-pure-white text-xs font-semibold py-3 px-4 rounded-xl shadow transition-colors cursor-pointer w-full font-sans"
            >
              <span>View original post on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="text-xs text-muted-clay hover:text-ink font-semibold transition-colors py-1 cursor-pointer w-full text-center font-sans"
            >
              Back to feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
