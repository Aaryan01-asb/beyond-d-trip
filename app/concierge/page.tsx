"use strict";

import React from "react";
import Link from "next/link";
import WhisperForm from "@/components/WhisperForm";
import { ArrowLeft, Clock, Mail, Phone } from "lucide-react";

export default function ConciergePage() {
  return (
    <div className="bg-warm-sand min-h-screen pt-28 pb-16 px-6 md:px-12 font-sans selection:bg-terracotta/20 selection:text-terracotta">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Navigation Back */}
        <Link
          href="/"
          className="text-xs font-bold text-muted-clay hover:text-terracotta transition-colors flex items-center gap-1.5 self-start cursor-pointer uppercase tracking-wider"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start w-full">
          
          {/* Left Column: Descriptive Curation Desk Info */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> LIVE SUPPORT DESK
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
                Our Concierge Desk is Open
              </h1>
              <p className="text-sm md:text-base text-muted-clay leading-relaxed">
                Connect directly with our planning partners to finalize itinerary routes, customize hotel tiers, or enquire about custom packages.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-ink/5">
              
              <a
                href="https://wa.me/919375755205?text=Hello%20Beyond%20D%20Trip!%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-ink/10 bg-pure-white rounded-2xl p-5 hover:border-terracotta transition-colors flex flex-col gap-3 cursor-pointer"
              >
                <div className="text-green-600 bg-green-50 p-3 rounded-xl self-start">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-sm text-ink group-hover:text-terracotta transition-colors">WhatsApp Line</span>
                  <span className="text-xs text-muted-clay leading-relaxed">Direct chats with our coordinators. Response in &lt; 15 mins.</span>
                </div>
              </a>

              <a
                href="mailto:Tanujabeyonddtrips@gmail.com"
                className="group border border-ink/10 bg-pure-white rounded-2xl p-5 hover:border-terracotta transition-colors flex flex-col gap-3 cursor-pointer"
              >
                <div className="text-terracotta bg-terracotta/5 p-3 rounded-xl self-start">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-sm text-ink group-hover:text-terracotta transition-colors">Email Desk</span>
                  <span className="text-xs text-muted-clay leading-relaxed">Send queries or custom requests. Response in &lt; 4 hours.</span>
                </div>
              </a>

            </div>

            {/* Service hours warning */}
            <div className="bg-pure-white border border-ink/5 p-5 rounded-2xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5 text-xs">
                <span className="font-semibold text-ink">Operational Hours</span>
                <span className="text-muted-clay leading-relaxed">Monday - Saturday: 9:00 AM - 7:00 PM EST. Inquiries submitted outside these hours will be handled immediately the following morning.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Whisper Form */}
          <div className="lg:col-span-2">
            <WhisperForm />
          </div>

        </div>

      </div>
    </div>
  );
}
