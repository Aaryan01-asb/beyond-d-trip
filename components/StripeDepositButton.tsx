"use strict";
"use client";

import React, { useState } from "react";
import { ShieldCheck, Calendar, Lock } from "lucide-react";

interface StripeDepositButtonProps {
  routebookId: string;
  routebookTitle: string;
  depositAmount: number; // e.g. 250
}

export default function StripeDepositButton({
  routebookId,
  routebookTitle,
  depositAmount,
}: StripeDepositButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routebookId,
          routebookTitle,
          depositAmount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initialize Checkout session");
      }

      const session = await response.json();
      
      if (session.url) {
        window.location.href = session.url;
      } else {
        throw new Error("No checkout URL returned from server");
      }
    } catch (error) {
      console.error("Stripe checkout error:", error);
      const errMsg = error instanceof Error ? error.message : "Something went wrong initializing checkout.";
      alert(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-warm-sand border border-ink/10 rounded-2xl p-5 md:p-6 flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <div className="bg-terracotta/10 p-2 rounded-xl text-terracotta shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <span className="font-serif font-bold text-base text-ink">Secure My Spot</span>
          <span className="text-xs text-muted-clay leading-relaxed mt-0.5">
            Place a small fully-refundable hold deposit of <strong className="text-ink">₹{depositAmount.toLocaleString('en-IN')}</strong> to block your travel dates and lock this pricing tier.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 mt-1">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-clay">
          <Calendar className="w-3.5 h-3.5 text-terracotta" />
          <span>Flexible dates: adjustment within 30 days</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-clay">
          <Lock className="w-3.5 h-3.5 text-terracotta" />
          <span>Secured checkout session with 256-bit encryption</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-ink hover:bg-terracotta text-pure-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg mt-2"
      >
        <span>{loading ? "Redirecting..." : `Secure Dates with ₹${depositAmount.toLocaleString('en-IN')} Hold`}</span>
      </button>

      <span className="text-[10px] text-center text-muted-clay italic">
        * Cancel anytime before final confirmation for a 100% immediate refund.
      </span>
    </div>
  );
}
