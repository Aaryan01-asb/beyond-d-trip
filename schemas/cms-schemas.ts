/**
 * Types & Schema Definitions for Beyond D Trip Headless CMS
 * This file contains both the TypeScript interfaces used within the application
 * and the JavaScript schema declarations ready to be copy-pasted into Sanity.io
 */

export interface Horizon {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  moods: string[];
  image: string; // Unsplash/Pexels image URL
  startingPrice: number;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  image: string; // Unsplash/Pexels image URL
}

export interface Routebook {
  id: string;
  title: string;
  destinationId: string; // Reference to Horizon
  durationDays: number;
  durationNights: number;
  startingPrice: number;
  moods: string[];
  image: string; // Cover image URL
  editorialBlurb: string;
  inclusions: string[];
  dayByDayTimeline: DayItinerary[];
}

export interface SoulStop {
  id: string;
  title: string;
  description: string;
  price: number;
  moods: string[];
  image: string; // Unsplash/Pexels image URL
  destinationId: string; // Reference to Horizon
}

/**
 * Sanity.io Schema Structure Definitions (Copy-Paste Scaffold)
 * Use these configurations to quickly setup your Sanity schemas (schemas/index.js)
 */

interface SanityRule {
  required: () => SanityRule;
  min: (val: number) => SanityRule;
}

export const SanityHorizonsSchema = {
  name: 'horizon',
  title: 'Horizon (Destination)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: SanityRule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'e.g. Islands That Slow You Down',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short editorial introduction to this destination.',
    },
    {
      name: 'moods',
      title: 'Mood Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Mood tags such as Romance, Solo Reset, Wild & Wide, Family Loop, Culture Deep-Dive, Soft Luxury',
    },
    {
      name: 'image',
      title: 'Image URL',
      type: 'url',
      description: 'Direct photo URL from Unsplash or Pexels.',
      validation: (Rule: SanityRule) => Rule.required(),
    },
    {
      name: 'startingPrice',
      title: 'Starting Price (INR)',
      type: 'number',
      validation: (Rule: SanityRule) => Rule.required().min(0),
    }
  ]
};

export const SanityRoutebooksSchema = {
  name: 'routebook',
  title: 'Routebook (Itinerary Package)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: SanityRule) => Rule.required(),
    },
    {
      name: 'destination',
      title: 'Destination Horizon',
      type: 'reference',
      to: [{ type: 'horizon' }],
      validation: (Rule: SanityRule) => Rule.required(),
    },
    {
      name: 'durationDays',
      title: 'Duration (Days)',
      type: 'number',
      validation: (Rule: SanityRule) => Rule.required().min(1),
    },
    {
      name: 'durationNights',
      title: 'Duration (Nights)',
      type: 'number',
      validation: (Rule: SanityRule) => Rule.required().min(0),
    },
    {
      name: 'startingPrice',
      title: 'Starting Price /p (INR)',
      type: 'number',
      validation: (Rule: SanityRule) => Rule.required().min(0),
    },
    {
      name: 'moods',
      title: 'Mood Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Mood filters matching this itinerary.',
    },
    {
      name: 'image',
      title: 'Cover Image URL',
      type: 'url',
      description: 'Pexels or Unsplash high-resolution URL.',
    },
    {
      name: 'editorialBlurb',
      title: 'Editorial Blurb',
      type: 'text',
      description: 'Romanticized introduction to the journey.',
    },
    {
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lists of what is included (e.g. "Boutique stays", "Rooftop dining").',
    },
    {
      name: 'dayByDayTimeline',
      title: 'Day-by-Day Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'dayItinerary',
          fields: [
            { name: 'day', title: 'Day Number', type: 'number' },
            { name: 'title', title: 'Day Title', type: 'string' },
            { name: 'description', title: 'Day Description', type: 'text' },
            { name: 'image', title: 'Day Photo URL', type: 'url' }
          ]
        }
      ]
    }
  ]
};

export const SanitySoulStopsSchema = {
  name: 'soulStop',
  title: 'Soul Stop (Experiences)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: SanityRule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Cozy, storytelling description of the experience.',
    },
    {
      name: 'price',
      title: 'Price /p (INR)',
      type: 'number',
      validation: (Rule: SanityRule) => Rule.required().min(0),
    },
    {
      name: 'moods',
      title: 'Mood Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'image',
      title: 'Image URL',
      type: 'url',
    },
    {
      name: 'destination',
      title: 'Destination Horizon',
      type: 'reference',
      to: [{ type: 'horizon' }],
      validation: (Rule: SanityRule) => Rule.required(),
    }
  ]
};
