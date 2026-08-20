"use strict";
"use client";

import React, { useState, useEffect, useRef } from "react";
import { mockHorizons, allMoods } from "@/data/mockCmsData";
import { Compass, Calendar, Sparkles, Send } from "lucide-react";

interface WhisperFormProps {
  initialDestinationId?: string;
  initialMood?: string;
}

export default function WhisperForm({ initialDestinationId = "", initialMood = "" }: WhisperFormProps) {
  const [destinationId, setDestinationId] = useState(initialDestinationId);
  const [travelDates, setTravelDates] = useState("");
  const [mood, setMood] = useState(initialMood);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
      }
    }
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getDaysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startDayIndex = firstDay.getDay();
    
    const days = [];
    for (let i = 0; i < startDayIndex; i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  };

  const formatDateString = (start: Date | null, end: Date | null) => {
    if (!start) return "";
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
    if (!end) {
      return start.toLocaleDateString("en-US", options);
    }
    if (start.getFullYear() === end.getFullYear()) {
      if (start.getMonth() === end.getMonth()) {
        return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${end.getDate()}, ${start.getFullYear()}`;
      }
      return `${start.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${end.toLocaleDateString("en-US", { month: "short", day: "numeric" })}, ${start.getFullYear()}`;
    }
    return `${start.toLocaleDateString("en-US", options)} - ${end.toLocaleDateString("en-US", options)}`;
  };

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
      setTravelDates(formatDateString(date, null));
    } else {
      if (date.getTime() === startDate.getTime()) {
        setEndDate(date);
        setTravelDates(formatDateString(startDate, null));
        setShowCalendar(false);
      } else if (date < startDate) {
        setStartDate(date);
        setEndDate(null);
        setTravelDates(formatDateString(date, null));
      } else {
        setEndDate(date);
        const dateStr = formatDateString(startDate, date);
        setTravelDates(dateStr);
        setShowCalendar(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!destinationId || !travelDates || !mood) {
      alert("Please fill in all details to whisper your plan.");
      return;
    }

    setIsSubmitting(true);
    const destinationName = mockHorizons.find(h => h.id === destinationId)?.title || destinationId;

    // Craft formatted message
    const rawMessage = `Hello Beyond D Trip! I'd like to whisper a plan. I am dreaming of exploring ${destinationName} during ${travelDates} with a focus on a ${mood} vibe. Can you help me curate this journey?`;
    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappLink = `https://wa.me/919375755205?text=${encodedMessage}`;



    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-pure-white border border-ink/10 shadow-2xl p-6 md:p-8 rounded-3xl w-full max-w-lg flex flex-col gap-6"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="font-serif text-2xl font-bold tracking-wide text-ink">Whisper a Plan</h3>
        <p className="text-xs text-muted-clay leading-relaxed">
          Tell us your dream location, dates, and vibe. We will compile your details and open a direct channel with our head travel desk.
        </p>
      </div>

      {/* Destination Field */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-terracotta" />
          <span>Where are we going?</span>
        </label>
        <select
          value={destinationId}
          onChange={(e) => setDestinationId(e.target.value)}
          required
          className="w-full bg-warm-sand/50 text-ink border border-ink/10 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-terracotta cursor-pointer transition-colors"
        >
          <option value="" disabled>Select a Horizon</option>
          {mockHorizons.map((h) => (
            <option key={h.id} value={h.id}>
              {h.title}
            </option>
          ))}
        </select>
      </div>

      {/* Dates Field */}
      <div className="flex flex-col gap-2 relative">
        <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-terracotta" />
          <span>When?</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={travelDates}
            readOnly
            onClick={() => setShowCalendar(!showCalendar)}
            required
            placeholder="Select date range"
            className="w-full bg-warm-sand/50 text-ink border border-ink/10 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-terracotta transition-colors cursor-pointer"
          />
          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-clay pointer-events-none" />
        </div>

        {/* Dropdown Calendar Picker */}
        {showCalendar && (
          <div ref={calendarRef} className="absolute top-[102%] left-0 z-50 w-full bg-pure-white border border-ink/10 shadow-2xl rounded-2xl p-4 animate-fade-up font-sans select-none">
            {/* Header: Month / Year Navigation */}
            <div className="flex items-center justify-between pb-3 border-b border-ink/5 mb-3">
              <button
                type="button"
                onClick={prevMonth}
                className="p-1.5 rounded-lg hover:bg-warm-sand text-ink transition-colors cursor-pointer text-xs font-bold"
              >
                &larr; Prev
              </button>
              <span className="font-serif text-sm font-bold text-ink">
                {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                className="p-1.5 rounded-lg hover:bg-warm-sand text-ink transition-colors cursor-pointer text-xs font-bold"
              >
                Next &rarr;
              </button>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-muted-clay uppercase tracking-wider mb-1">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {getDaysInMonth().map((date, idx) => {
                if (!date) {
                  return <div key={`empty-${idx}`} className="h-8" />;
                }
                
                const isSelectedStart = startDate && date.getTime() === startDate.getTime();
                const isSelectedEnd = endDate && date.getTime() === endDate.getTime();
                const isInRange = startDate && endDate && date > startDate && date < endDate;
                const isToday = new Date().toDateString() === date.toDateString();

                let dayClass = "h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer font-medium ";
                if (isSelectedStart || isSelectedEnd) {
                  dayClass += "bg-terracotta text-pure-white font-bold scale-105 shadow-md shadow-terracotta/20";
                } else if (isInRange) {
                  dayClass += "bg-terracotta/10 text-terracotta font-semibold";
                } else {
                  dayClass += "hover:bg-warm-sand text-ink";
                }

                if (isToday && !isSelectedStart && !isSelectedEnd && !isInRange) {
                  dayClass += " border border-terracotta/30";
                }

                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onClick={() => handleDateClick(date)}
                    className={dayClass}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
            
            {/* Quick Actions / Reset */}
            <div className="flex justify-between items-center mt-3 pt-3 border-t border-ink/5 text-[10px] font-bold">
              <button
                type="button"
                onClick={() => {
                  setStartDate(null);
                  setEndDate(null);
                  setTravelDates("");
                }}
                className="text-muted-clay hover:text-terracotta transition-colors"
              >
                Clear Dates
              </button>
              <button
                type="button"
                onClick={() => setShowCalendar(false)}
                className="text-terracotta hover:text-ink transition-colors"
              >
                Close Calendar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mood Select */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-ink uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          <span>Select Vibe / Mood</span>
        </label>
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          required
          className="w-full bg-warm-sand/50 text-ink border border-ink/10 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-terracotta cursor-pointer transition-colors"
        >
          <option value="" disabled>Select your travel mood</option>
          {allMoods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-ink hover:bg-terracotta text-pure-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 mt-2"
      >
        <Send className="w-4 h-4" />
        <span>{isSubmitting ? "Opening WhatsApp..." : "Whisper My Plan"}</span>
      </button>
    </form>
  );
}
