"use strict";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12 font-sans selection:bg-terracotta/20 selection:text-terracotta">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        
        {/* Navigation Back */}
        <Link
          href="/"
          className="text-xs font-bold text-muted-clay hover:text-terracotta transition-colors flex items-center gap-1.5 self-start cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-ink/5 pb-6">
          <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> LEGAL DESK
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-clay italic">
            Last Updated: August 12, 2026
          </p>
        </div>

        {/* Editorial Content */}
        <div className="text-ink/90 leading-relaxed text-xs md:text-sm flex flex-col gap-6">
          <p className="font-medium text-ink">
            At Beyond D Trip, we prioritize the trust and security of our travelers. This Privacy Policy details how we collect, store, utilize, and safeguard the information you share when browsing our curated horizons or coordinating bespoke itineraries.
          </p>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">1. Information Collection</h3>
            <p>
              We gather information that helps us personalize your journeys. This includes itinerary choices (preferred vibes) and custom query details you whisper to our concierge team.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">2. How We Use Your Data</h3>
            <p>
              Your data is utilized solely to compile your preferences, hold secure dates through Stripe deposit checkpoints, and format your custom dispatch queries before directing you to our direct WhatsApp booking line.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">3. Data Integrity & Security</h3>
            <p>
              We do not sell, rent, or distribute traveler directories to third-party marketing entities. Any deposit handling is processed in compliance with Stripe&apos;s encrypted standard checkout protocols.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">4. Your Access Controls</h3>
            <p>
              You maintain the absolute right to view, modify, or completely delete your traveler profile data (including wishlist histories and enquiries). Simply contact our concierge desk to process immediate data resets.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
