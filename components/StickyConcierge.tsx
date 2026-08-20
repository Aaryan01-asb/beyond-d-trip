"use strict";
"use client";

import React, { useState } from "react";
import WhisperForm from "./WhisperForm";
import { MessageSquare, X } from "lucide-react";

export default function StickyConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Action Button (Desktop) & Sticky Bottom Bar (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        {/* Whisper a Plan Drawer Trigger */}
        <button
          onClick={toggleOpen}
          className="bg-ink hover:bg-terracotta text-pure-white px-6 py-3.5 rounded-full font-semibold text-sm tracking-wide shadow-2xl flex items-center gap-2 transform hover:-translate-y-0.5 transition-all cursor-pointer border border-pure-white/10"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Whisper a Plan</span>
        </button>

        {/* Direct WhatsApp Concierge Button */}
        <a
          href="https://wa.me/919375755205?text=Hello%20Beyond%20D%20Trip!%20I%20have%20an%20inquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-pure-white p-4 rounded-full shadow-2xl transition-all hover:scale-105 cursor-pointer flex items-center justify-center border border-white/10"
          aria-label="WhatsApp Concierge Chat"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.793 1.451 5.48.003 9.943-4.453 9.946-9.93.001-2.652-1.03-5.148-2.902-7.022C16.602 1.771 14.115.74 11.998.74c-5.485 0-9.946 4.455-9.95 9.932-.002 1.796.48 3.553 1.393 5.097L2.45 20.3l4.197-1.146z" />
          </svg>
        </a>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ink text-pure-white border-t border-pure-white/10 flex items-center justify-between px-4 py-3 shadow-2xl">
        <button
          onClick={toggleOpen}
          className="flex-1 bg-terracotta text-center py-2.5 rounded-xl font-bold text-sm tracking-wide mr-2 hover:bg-terracotta/95 transition-all cursor-pointer"
        >
          Whisper a Plan
        </button>
        <a
          href="https://wa.me/919375755205"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 p-2.5 rounded-xl text-pure-white transition-all hover:bg-green-700 cursor-pointer flex items-center justify-center"
          aria-label="WhatsApp Concierge"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.793 1.451 5.48.003 9.943-4.453 9.946-9.93.001-2.652-1.03-5.148-2.902-7.022C16.602 1.771 14.115.74 11.998.74c-5.485 0-9.946 4.455-9.95 9.932-.002 1.796.48 3.553 1.393 5.097L2.45 20.3l4.197-1.146z" />
          </svg>
        </a>
      </div>

      {/* Drawer Overlay (Both Desktop/Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 bg-ink/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-pointer" onClick={toggleOpen} />
          <div className="relative z-10 w-full max-w-md bg-pure-white rounded-3xl p-1.5 shadow-2xl animate-fade-up">
            <button
              onClick={toggleOpen}
              className="absolute top-4 right-4 text-ink/40 hover:text-ink hover:bg-ink/5 p-1.5 rounded-full transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <WhisperForm />
          </div>
        </div>
      )}
    </>
  );
}
