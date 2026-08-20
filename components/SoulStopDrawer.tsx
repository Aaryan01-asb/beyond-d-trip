"use strict";
"use client";

import React, { useEffect } from "react";
import { X, MapPin, Sparkles, Send } from "lucide-react";
import { SoulStop } from "@/schemas/cms-schemas";
import { mockHorizons } from "@/data/mockCmsData";

interface SoulStopDrawerProps {
  stop: SoulStop | null;
  onClose: () => void;
}

export default function SoulStopDrawer({ stop, onClose }: SoulStopDrawerProps) {
  useEffect(() => {
    if (stop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [stop]);

  if (!stop) return null;

  const destinationName =
    mockHorizons.find((h) => h.id === stop.destinationId)?.title || "Unknown Horizon";

  const rawMessage = `Hello Beyond D Trip! I am interested in inquiring about the Soul Stop experience: "${stop.title}" in ${destinationName}.`;
  const encodedMessage = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/919375755205?text=${encodedMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-xs cursor-default" onClick={onClose} />

      {/* Slide-in Drawer Container */}
      <div className="relative z-10 w-full max-w-md bg-warm-sand h-full shadow-2xl flex flex-col justify-between animate-fade-up overflow-y-auto border-l border-ink/10 font-sans">
        <div>
          {/* Cover Photo */}
          <div className="relative aspect-[16/10] bg-ink w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={stop.image}
              alt={stop.title}
              className="w-full h-full object-cover opacity-95"
            />
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-pure-white bg-ink/40 hover:bg-ink/60 p-2 rounded-full backdrop-blur-xs transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 right-4 bg-terracotta text-pure-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              ₹{stop.price.toLocaleString("en-IN")}/p
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-muted-clay uppercase tracking-widest flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                {destinationName}
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                {stop.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {stop.moods.map((mood) => (
                <span
                  key={mood}
                  className="bg-pure-white border border-ink/5 text-ink text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs"
                >
                  <Sparkles className="w-3 h-3 text-terracotta" />
                  {mood}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-ink/5 pt-4 mt-2">
              <h4 className="font-serif text-sm font-bold text-ink">About this Stop</h4>
              <p className="text-xs text-muted-clay leading-relaxed">
                {stop.description}
              </p>
            </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="p-6 border-t border-ink/5 bg-pure-white flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-ink hover:bg-terracotta text-pure-white font-semibold py-4 px-6 rounded-xl text-xs transition-colors shadow-lg cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Enquire via WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="text-xs text-muted-clay hover:text-ink font-semibold transition-colors py-2 text-center cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
