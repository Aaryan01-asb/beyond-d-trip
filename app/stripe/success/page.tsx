"use strict";
"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, MessageSquare, Notebook } from "lucide-react";

function SuccessPageContent() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Curated Itinerary";
  const amount = searchParams.get("amount") || "250";
  const sessionId = searchParams.get("session_id") || "cs_test_mock";

  return (
    <div className="bg-pure-white border border-ink/10 shadow-2xl p-8 md:p-12 rounded-3xl w-full max-w-xl text-center flex flex-col gap-6 animate-fade-up">
      
      {/* Success Icon */}
      <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-md">
        <ShieldCheck className="w-8 h-8" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold text-terracotta uppercase tracking-widest">TRANSACTION CONFIRMED</span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink">Your Spot is Secured</h1>
        <p className="text-xs text-muted-clay mt-1">
          Deposit session: <code className="bg-warm-sand px-1.5 py-0.5 rounded text-[10px] text-ink font-semibold">{sessionId}</code>
        </p>
      </div>

      {/* Deposit Summary Box */}
      <div className="bg-warm-sand/50 border border-ink/5 p-5 rounded-2xl flex flex-col gap-2 text-sm text-left">
        <div className="flex justify-between border-b border-ink/5 pb-2 font-medium">
          <span className="text-muted-clay">Itinerary:</span>
          <span className="text-ink text-right max-w-[70%] truncate font-bold">{title}</span>
        </div>
        <div className="flex justify-between pt-1 font-medium">
          <span className="text-muted-clay">Refundable Hold:</span>
          <span className="text-terracotta font-bold">₹{Number(amount).toLocaleString('en-IN')} INR</span>
        </div>
      </div>

      <div className="text-xs text-muted-clay leading-relaxed max-w-md mx-auto">
        We have placed a temporary booking hold on this package. A dedicated head concierge representative will contact you via WhatsApp or email within 15 minutes to align dates and begin personal customization.
      </div>

      {/* Action button triggers */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
        <Link
          href="/account"
          className="bg-ink hover:bg-terracotta text-pure-white text-xs font-semibold px-6 py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Notebook className="w-4 h-4" />
          <span>Open My Notebook</span>
        </Link>
        
        <a
          href={`https://wa.me/919375755205?text=${encodeURIComponent(
            `Hello Beyond D Trip! I just placed a ₹${Number(amount).toLocaleString('en-IN')} deposit hold on "${title}" (Session: ${sessionId}). Let's customization planning.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-pure-white text-xs font-semibold px-6 py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      <div className="text-[10px] text-muted-clay italic mt-2">
        * This deposit is 100% refundable at any point before final customization signing.
      </div>

    </div>
  );
}

export default function StripeSuccessPage() {
  return (
    <div className="bg-warm-sand min-h-screen pt-40 pb-20 px-6 flex items-center justify-center">
      <Suspense fallback={
        <div className="bg-pure-white border border-ink/10 shadow-2xl p-8 rounded-3xl w-full max-w-xl text-center py-20 text-sm font-semibold text-muted-clay">
          Loading Booking Details...
        </div>
      }>
        <SuccessPageContent />
      </Suspense>
    </div>
  );
}
