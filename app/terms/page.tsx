"use strict";

import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function TermsOfServicePage() {
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
            <BookOpen className="w-4 h-4" /> LEGAL DESK
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink">
            Terms of Service
          </h1>
          <p className="text-xs text-muted-clay italic">
            Last Updated: August 12, 2026
          </p>
        </div>

        {/* Editorial Content */}
        <div className="text-ink/90 leading-relaxed text-xs md:text-sm flex flex-col gap-6">
          <p className="font-medium text-ink">
            Welcome to Beyond D Trip. By utilizing this private concierge framework to browse curated packages, secure deposits, or communicate with our booking desk, you agree to comply with the terms detailed below.
          </p>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">1. Curated Itinerary Usage</h3>
            <p>
              Our Routebook packages and Soul Stops represent bespoke, editorially-designed itineraries. While we encourage browsing and downloading itinerary summaries for personal exploration, direct comercial duplication of our design layouts is strictly prohibited.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">2. Deposit & Hold Policies</h3>
            <p>
              Hold deposits placed on date packages (e.g. ₹21,000 dates hold) are held securely by Stripe. They are fully refundable within 30 days of registration or until final reservation confirmation, whichever arrives first.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">3. Limitation of Liability</h3>
            <p>
              Beyond D Trip operates as a private travel consultant desk. We secure reservations with third-party boutique properties and experience operators. We are not liable for external schedule adjustments or weather disruptions occurring on destination horizons.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-lg font-bold text-ink">4. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms as our private concierge services expand. Continued utilization of our travel planner updates indicates acceptance of modified operational parameters.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
