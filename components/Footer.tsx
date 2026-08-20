"use strict";
"use client";

import React from "react";
import Link from "next/link";
import { Send, Mail, Phone, Clock } from "lucide-react";

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
import { allMoods, mockHorizons } from "@/data/mockCmsData";

export default function Footer() {

  return (
    <footer className="bg-warm-sand border-t border-ink/5 text-ink pt-16 pb-8 px-6 md:px-12 w-full mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-12">
        
        {/* Editorial Brand Section */}
        <div className="flex flex-col gap-4">
          <div className="bg-pure-white px-3 py-2.5 rounded-xl shadow-md flex items-center justify-center self-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.jpg"
              alt="Beyond D Trips Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-muted-clay leading-relaxed max-w-xs">
            Where the itinerary ends, the trip begins. Cozy editorial travel curations, designed for aesthetic-conscious wanderers.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/beyonddtrips/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-clay hover:text-terracotta transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919375755205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-clay hover:text-terracotta transition-colors"
              aria-label="WhatsApp Concierge"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:Tanujabeyonddtrips@gmail.com"
              className="text-muted-clay hover:text-terracotta transition-colors"
              aria-label="Email support"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Horizons Sitemap */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-clay">Horizons</h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {mockHorizons.map((horizon) => (
              <li key={horizon.id}>
                <Link href={`/horizons/${horizon.id}`} className="hover:text-terracotta transition-colors">
                  {horizon.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/horizons" className="hover:text-terracotta text-xs text-muted-clay transition-colors italic">
                View all Horizons →
              </Link>
            </li>
          </ul>
        </div>

        {/* Moods Sitemap */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-clay">Wander by Mood</h4>
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {allMoods.slice(0, 5).map((mood) => (
              <li key={mood}>
                <Link href={`/moods/${mood.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-terracotta transition-colors">
                  {mood}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Concierge & Hours */}
        <div className="flex flex-col gap-3">
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-clay">Concierge Desk</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-clay">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-terracotta shrink-0" />
              <span>Mon - Sat: 9am - 7pm EST</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4 text-terracotta shrink-0" />
              <span>Response in &lt; 15 mins</span>
            </div>
          </div>
        </div>

      </div>

      {/* Legal Strip */}
      <div className="max-w-6xl mx-auto border-t border-ink/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-clay">
        <span>© {new Date().getFullYear()} Beyond D Trip. All rights reserved.</span>
        <div className="flex gap-6 font-medium">
          <Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link>
          <Link href="/concierge" className="hover:text-ink transition-colors">Contact Support</Link>
        </div>
      </div>
    </footer>
  );
}
