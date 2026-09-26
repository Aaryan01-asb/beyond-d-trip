import { Horizon, Routebook, SoulStop } from '@/schemas/cms-schemas';

export const mockHorizons: Horizon[] = [
  {
    id: 'maldives',
    title: 'Maldives',
    subtitle: 'Private Overwater Stays',
    description: 'Bespoke overwater villa retreats, glass-clear lagoon pools, and soft ivory sands melting into endless blue horizons.',
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 155000
  },
  {
    id: 'bali',
    title: 'Bali/Indonesia',
    subtitle: 'Tropical Forest & Spirit',
    description: 'Vibrant green rice terrace climbs, tranquil temple courtyards, and warm ocean swells breaking over coral sands.',
    moods: ['Solo Reset', 'Romance', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 105000
  },
  {
    id: 'thailand',
    title: 'Thailand',
    subtitle: 'Golden Temples & Islands',
    description: 'Mist-shrouded northern peaks, ornate gilded temples, and white sand island bays lined with limestone cliffs.',
    moods: ['Culture Deep-Dive', 'Family Loop', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 110000
  },
  {
    id: 'vietnam',
    title: 'Vietnam',
    subtitle: 'Heritage Bay Trails',
    description: 'Emerald bay limestone towers, ancient Gilded Age avenues, and vibrant food pathways teeming with generational recipes.',
    moods: ['Culture Deep-Dive', 'Solo Reset', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 105000
  },
  {
    id: 'sri-lanka',
    title: 'Sri Lanka',
    subtitle: 'Tea Groves & Surf Havens',
    description: 'Historic colonial stone forts, rolling hillside tea estates, and wild palm-lined surfing coves.',
    moods: ['Wild & Wide', 'Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 102000
  },
  {
    id: 'singapore',
    title: 'Singapore',
    subtitle: 'Metropolis in a Garden',
    description: 'Spectacular biome domes, futuristic cloud towers, and rich multi-cultural districts boasting world-class dining.',
    moods: ['Soft Luxury', 'Family Loop', 'Culture Deep-Dive'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 119000
  },
  {
    id: 'greece',
    title: 'Greece',
    subtitle: 'Sun-Drenched Tavern Tables',
    description: 'Stark white cave architecture, volcanic black sand bays, and sunset dining looking over the deep blue Aegean.',
    moods: ['Romance', 'Soft Luxury', 'Culture Deep-Dive'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 98000
  },
  {
    id: 'malaysia',
    title: 'Malaysia',
    subtitle: 'Rainforests & Skylines',
    description: 'Towering architectural skylines, dense prehistoric rainforest trails, and coastal beaches rich with colonial history.',
    moods: ['Soft Luxury', 'Family Loop', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 98000
  }
];

export const mockRoutebooks: Routebook[] = [
  // 1. MALDIVES - Private Lagoon Overwater Sanctuary
  {
    id: 'maldives-honeymoon-overwater',
    title: 'Private Lagoon Overwater Sanctuary',
    destinationId: 'maldives',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 285000, // $3,499 / ₹2,85,000 per person (Ultra-Luxury Tier 10%)
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'An Exclusive 5-Day Escape of Overwater Luxury and Marine Discovery featuring private villa lagoon access, guided reef snorkeling, ocean cruises, and eco-coral restoration.',
    inclusions: [
      'Luxury overwater villa with direct lagoon access & private sun deck',
      'VIP scenic seaplane transfers from Malé',
      'Guided house reef snorkeling with resident marine biologist',
      'Outer atoll dolphin watching cruise & deserted sandbank excursion',
      'Signature floating pool breakfast & sunset overwater dining'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Seaplane Arrival & Overwater Settling',
        description: 'Morning: Scenic seaplane flight over azure Maldivian atolls from Malé, followed by a VIP resort greeting.\nAfternoon: Check-in to your luxury overwater villa featuring direct lagoon access and a private sun deck.\nEvening: Sunset welcome dinner at an overwater specialty restaurant overlooking the Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'House Reef Exploration & Marine Safari',
        description: 'Morning: Guided house reef snorkeling expedition with a resident marine biologist to spot reef sharks and sea turtles.\nAfternoon: Private dhoni boat excursion to a nearby deserted sandbank for swimming in crystal-clear shallows.\nEvening: Starlit dining experience on a private deck.',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Outer Atoll Dolphin Cruise',
        description: 'Morning: High-energy water sports session (kayaking and paddleboarding) across the calm lagoon waters.\nAfternoon: Afternoon dolphin-watching cruise navigating active channels during golden hour.\nEvening: Casual beachside barbecue featuring fresh catch-of-the-day seafood.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Coral Restoration & Island Culture',
        description: 'Morning: Participate in an eco-friendly coral frame planting initiative to support local marine conservation.\nAfternoon: Guided cultural tour of a local inhabited island to experience authentic islander life and crafts.\nEvening: Fine-dining seafood pairing dinner under the open sky.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Floating Breakfast & Departure',
        description: 'Morning: Signature floating breakfast served inside your private infinity plunge pool.\nAfternoon: Final souvenir shopping at the island boutique before your seaplane transfer back to Malé.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 2. MALDIVES - Island Family Lagoon Loop
  {
    id: 'maldives-family-fun',
    title: 'Island Family Lagoon Loop',
    destinationId: 'maldives',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 155000, // $1,899 / ₹1,55,000 per person (Market-Competitive Tier 90%)
    moods: ['Family Loop', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Family-Friendly Tropical Adventure of Safe Shallows and Coastal Discovery featuring beachfront family villas, guided snorkeling, dolphin safaris, and lagoon sports.',
    inclusions: [
      'Spacious beachfront family villa steps away from shallow waters',
      'Shared family speedboat transfers from Malé',
      'Beginner-friendly guided snorkeling trip in protected shallows',
      'Wild spinner dolphin watching boat excursion & island bike rentals'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Family Arrival & Lagoon Orientation',
        description: 'Morning: Airport meet-and-greet followed by a shared family speedboat transfer to your resort island.\nAfternoon: Check-in to a spacious beachfront family villa steps away from the shallow lagoon.\nEvening: Welcome family buffet dinner featuring diverse international cuisines.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Kids Marine Discovery & Snorkeling',
        description: 'Morning: Supervised kids\' marine-education session while parents enjoy a morning beach walk.\nAfternoon: Family-friendly guided snorkeling trip tailored for beginners in protected, shallow waters.\nEvening: Relaxing beachside barbecue night with live acoustic music.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Eco-Boat Excursion & Dolphin Safari',
        description: 'Morning: Morning boat excursion dedicated to spotting wild spinner dolphins safely in their natural habitat.\nAfternoon: Island bicycle tour to explore local coconut groves and hidden family coves.\nEvening: Family movie night under the open-air pavilion.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Non-Motorized Watersports & Pool Fun',
        description: 'Morning: Engage in fun family activities like transparent kayaking and paddleboard racing.\nAfternoon: Open pool games and water slide sessions at the main resort pool complex.\nEvening: Farewell celebration dinner with special kids\' entertainment.',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Shell Collecting & Departure',
        description: 'Morning: Gentle morning beach walk to collect seashells and take final family photos.\nAfternoon: Check-out and speedboat transfer back to Malé airport.',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 3. MALDIVES - South Ari Atoll Whale Shark & Marine Reserve
  {
    id: 'maldives-south-ari-atoll',
    title: 'Maldives - South Ari Atoll Whale Shark & Marine Reserve',
    destinationId: 'maldives',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 175000, // ₹1,75,000 / $2,149 per person (Market-Competitive Tier)
    moods: ['Wild & Wide', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Prime Atoll Expedition Exploring Lagoon Sanctuaries and Marine Parks featuring seaplane flights, marine protected area excursions, cultural village walks, and dolphin cruises.',
    inclusions: [
      'Scenic roundtrip seaplane transfers from Malé',
      'South Ari Marine Protected Area guided boat safari',
      'Local island village cultural tour & deserted sandbank trip',
      'Late afternoon dhoni cruise tracking wild spinner dolphins',
      'Farewell seafood pairing dinner'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Seaplane Arrival & Lagoon Settling',
        description: 'Morning: Scenic seaplane flight over the Maldivian atolls directly to your resort island.\nAfternoon: Check-in to your beachfront or island bungalow with panoramic sea views.\nEvening: Sunset welcome dinner on the white sandy shoreline.',
        image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'South Ari Marine Protected Area Safari',
        description: 'Morning: Guided boat excursion into the famous South Ari Atoll reserve for marine sightseeing.\nAfternoon: Snorkeling and swimming in protected crystal-clear shallow lagoons.\nEvening: Starlit dinner overlooking the Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Local Atoll Culture & Sandbank Tour',
        description: 'Morning: Cultural excursion to a neighboring local island village to view traditional island architecture.\nAfternoon: Speedboat tour to a secluded sandbank for coastal exploration and photography.\nEvening: Casual beach barbecue under the stars.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Sunset Dolphin Cruise & Reef Tour',
        description: 'Morning: Water sports and coastal leisure around the resort house reef.\nAfternoon: Late afternoon dhoni cruise tracking wild spinner dolphins during golden hour.\nEvening: Farewell seafood pairing dinner.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Sunrise & Departure',
        description: 'Morning: Peaceful dawn beach walk capturing sunrise over the atoll.\nAfternoon: Resort check-out and seaplane transfer back to Malé airport.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 4. BALI - Ubud Jungle Canopy Retreat
  {
    id: 'bali-ubud-jungle-retreat',
    title: 'Ubud Jungle Canopy Retreat',
    destinationId: 'bali',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 105000, // $1,299 / ₹1,05,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Cultural Immersion Among Terraced Rice Fields, Temples, and Artisans featuring Tegallalang climbs, Tirta Empul, Monkey Forest, and cooking masterclasses.',
    inclusions: [
      'Boutique jungle resort accommodation in Ubud',
      'Private airport transfers from Denpasar',
      'Tegallalang rice terrace trek & Tirta Empul cultural tour',
      'Traditional Balinese cooking class & Legong dance performance'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in the Cultural Heart',
        description: 'Morning: Private airport transfer from Denpasar into the lush, misty hills of Ubud.\nAfternoon: Check-in to a boutique jungle resort overlooking tropical river valleys.\nEvening: Welcome dinner featuring authentic Balinese culinary specialties.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Sacred Temples & Rice Terraces',
        description: 'Morning: Early morning trek through the emerald-green Tegallalang Rice Terraces before crowds arrive.\nAfternoon: Guided exploration of the historic Tirta Empul Temple for cultural insights and architecture.\nEvening: Stroll through the bustling Ubud Art Market to view local wood carvings and hand-woven textiles.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Monkey Forest & Royal Palace',
        description: 'Morning: Walk through the sacred Ubud Monkey Forest sanctuary amid ancient moss-covered shrines.\nAfternoon: Tour the historical Ubud Royal Palace (Puri Saren Agung) and surrounding courtyards.\nEvening: Witness a traditional Legong dance performance accompanied by live gamelan music.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Traditional Culinary Masterclass & Village Walk',
        description: 'Morning: Morning market tour to source fresh local spices, followed by an authentic Balinese cooking masterclass.\nAfternoon: Guided village walk through traditional agricultural settlements and local organic farms.\nEvening: Quiet evening relaxation overlooking the jungle canopy.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Sunrise Ridge Walk & Departure',
        description: 'Morning: Peaceful dawn walk along the scenic Campuhan Ridge Walk trail.\nAfternoon: Final artisan boutique shopping, hotel check-out, and private transfer onward.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 5. BALI - Seminyak Boutique Villa & Beach Escape
  {
    id: 'bali-seminyak-beach-escape',
    title: 'Seminyak Boutique Villa & Beach Escape',
    destinationId: 'bali',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 120000, // $1,499 / ₹1,20,000 per person (Market-Competitive Tier 90%)
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A Chic 5-Day Coastal Escape of Designer Beach Walks and Cultural Landmarks featuring private pool villa stays, Uluwatu cliffside views, and Kecak fire dances.',
    inclusions: [
      'Private pool villa stay in Seminyak',
      'Private airport transfers from Denpasar',
      'Beginner surf lesson or coastal strolls',
      'Guided Uluwatu cliffside temple tour & Kecak fire dance'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Coastal Arrival & Sunset Walk',
        description: 'Morning: Private airport pickup and direct transfer to vibrant Seminyak.\nAfternoon: Check-in to a private pool villa featuring minimalist tropical architecture.\nEvening: Sunset beach walk and dinner at a renowned coastal venue along Seminyak Beach.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Coastal Exploration & Surfing Culture',
        description: 'Morning: Sunrise beach stroll and healthy breakfast at a trendy local café.\nAfternoon: Beginner-friendly surf lesson or coastal exploration along the golden shores.\nEvening: Fine dining experience in Seminyak’s premier dining district.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Designer Shopping & Cliffside Temple',
        description: 'Morning: Curated walking tour through Seminyak’s chic boutiques, art galleries, and design studios.\nAfternoon: Scenic coastal drive down to the iconic cliffside Pura Luhur Uluwatu temple.\nEvening: Watch the breathtaking sunset over the Indian Ocean followed by the dramatic Kecak fire dance.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Island Exploration & Culinary Tour',
        description: 'Morning: Day excursion exploring local southern coastal villages and hidden coves.\nAfternoon: Relaxing afternoon by your private villa pool with zero rush.\nEvening: Gourmet fusion dinner in the Petitenget district.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Brunch & Departure',
        description: 'Morning: Leisurely artisan brunch at a renowned local coffee roastery.\nAfternoon: Check-out and private transfer to Ngurah Rai International Airport.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 6. BALI - Nusa Penida Coastal Explorer
  {
    id: 'bali-nusa-penida-explorer',
    title: 'Nusa Penida Coastal Explorer',
    destinationId: 'bali',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 112000, // $1,399 / ₹1,12,000 per person (Market-Competitive Tier 90%)
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A Rugged 5-Day Island Adventure Featuring Dramatic Sea Cliffs and Hidden Coves across Kelingking T-Rex cliff, Broken Beach, Thousand Islands, and Goa Giri Putri.',
    inclusions: [
      'Cliffside eco-lodge stay on Nusa Penida',
      'Fast boat roundtrip transfers from Sanur',
      'Excursions to Kelingking Beach, Broken Beach & Angel\'s Billabong',
      'Goa Giri Putri cave temple & Thousand Islands viewpoint tours'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Speedboat Crossing & Island Settling',
        description: 'Morning: Fast boat transfer from Sanur port across the Badung Strait to Nusa Penida island.\nAfternoon: Check-in to an island cliffside eco-lodge overlooking the ocean.\nEvening: Sunset dinner overlooking the crashing waves with views toward Mount Agung.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Iconic Western Cliffs & Kelingking Beach',
        description: 'Morning: Early departure to view the legendary T-Rex shaped cliff formation at Kelingking Beach.\nAfternoon: Explore the dramatic limestone formations of Broken Beach (Pasih Uug) and Angel’s Billabong.\nEvening: Relaxing seafood dinner at a local island café.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Eastern Coastal Panorama & Temples',
        description: 'Morning: Visit the stunning viewpoint at Thousand Islands (Molenteng) and the famous tree house.\nAfternoon: Explore the mystical underground sanctuary of Goa Giri Putri Cave Temple.\nEvening: Stargazing night under clear island skies.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Crystal Bay & Marine Exploration',
        description: 'Morning: Coastal boat tour around the island\'s southern bays for coastal sightseeing and swimming.\nAfternoon: Relax and explore the scenic shoreline of Crystal Bay.\nEvening: Casual dinner featuring local island specialties.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Sunrise View & Return Transit',
        description: 'Morning: Catch the golden sunrise over the island hills.\nAfternoon: Check out, catch the fast boat back to Bali mainland, and head to the airport.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 7. THAILAND - Bangkok Imperial & Chiang Mai Hills
  {
    id: 'thailand-bangkok-chiangmai',
    title: 'Bangkok Imperial & Chiang Mai Hills',
    destinationId: 'thailand',
    durationDays: 8,
    durationNights: 7,
    startingPrice: 138000, // $1,699 / ₹1,38,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'An 8-Day Cultural Journey from Golden Palaces to Misty Mountain Temples spanning Grand Palace khlong cruises, Doi Suthep, and ethical elephant sanctuary immersion.',
    inclusions: [
      'Heritage boutique stays in Bangkok and Chiang Mai',
      'Domestic flight between Bangkok and Chiang Mai',
      'Grand Palace tour & Thonburi long-tail canal cruise',
      'Full-day ethical elephant sanctuary experience & Northern Thai cooking class'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in the City of Angels',
        description: 'Morning: Airport meet-and-greet in Bangkok and transfer to your downtown hotel.\nAfternoon: Refresh and take an introductory walk around the vibrant urban neighborhood.\nEvening: Welcome dinner cruise along the Chao River viewing illuminated temples.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Grand Palace & Canal Tour',
        description: 'Morning: Guided tour of the dazzling Grand Palace and the sacred Temple of the Emerald Buddha.\nAfternoon: Long-tail boat ride through Bangkok\'s historic Thonburi canals (khlongs).\nEvening: Heritage food walking tour through the bustling stalls of Chinatown.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Flight to Northern Thailand (Chiang Mai)',
        description: 'Morning: Check out and transfer to airport for a short domestic flight north to Chiang Mai.\nAfternoon: Check-in to a traditional boutique hotel nestled in the old city.\nEvening: Explore the famous Chiang Mai Night Bazaar for crafts and local culture.',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Doi Suthep & Mountain Temples',
        description: 'Morning: Scenic winding drive up the mountain to visit the sacred Wat Phra That Doi Suthep temple.\nAfternoon: Traditional Northern Thai lunch followed by a stroll through traditional craft villages.\nEvening: Evening walking tour around the historic Tha Phae Gate square.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Ethical Elephant Sanctuary Experience',
        description: 'Morning: Full-day immersion at an ethical elephant sanctuary; observe, feed, and walk alongside rescued elephants.\nAfternoon: Jungle picnic lunch by a flowing mountain stream.\nEvening: Return to Chiang Mai for a peaceful evening at leisure.',
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 6,
        title: 'Artisan Crafts & Cooking Masterclass',
        description: 'Morning: Visit a vibrant morning market to pick fresh ingredients with local chefs.\nAfternoon: Hands-on Northern Thai cooking class learning regional spice pastes and culinary techniques.\nEvening: Relaxing evening in the old city quarter.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 7,
        title: 'Return Flight to Bangkok',
        description: 'Morning: Morning flight back down to Bangkok.\nAfternoon: Last-minute shopping at modern retail hubs like Siam Paragon or MBK Center.\nEvening: Farewell rooftop dinner overlooking the sweeping city skyline.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 8,
        title: 'Departure',
        description: 'Morning: Leisurely breakfast and final packing.\nAfternoon: Hotel check-out and private transfer to Suvarnabhumi Airport for departure.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 8. THAILAND - Phuket Lagoon & Krabi Limestone Cliffs
  {
    id: 'thailand-phuket-krabi-cliffs',
    title: 'Phuket Lagoon & Krabi Limestone Cliffs',
    destinationId: 'thailand',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 122000, // $1,499 / ₹1,22,000 per person (Market-Competitive Tier 90%)
    moods: ['Wild & Wide', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 6-Day Island Hopping Spectacle Across Andaman Beaches and Karst Formations traversing Phi Phi Islands, Railay Beach hidden lagoons, and 4-island long-tail excursions.',
    inclusions: [
      'Beachside & cliff-backed resort stays in Phuket and Krabi',
      'Scenic Andaman ferry transfer between Phuket and Krabi',
      'Phi Phi Islands speedboat excursion (Maya Bay & Loh Samah)',
      'Railay Lagoon hike & 4-Island long-tail boat hopping'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Phuket',
        description: 'Morning: Arrive in Phuket and transfer to your beachside resort.\nAfternoon: Unwind on the golden sands of Kata or Karon Beach.\nEvening: Dine at a vibrant local beach restaurant with fresh seafood options.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Phi Phi Islands Speedboat Excursion',
        description: 'Morning: Speedboat departure to the world-famous Phi Phi Islands group.\nAfternoon: Sightseeing and swimming around Maya Bay, Loh Samah Bay, and Viking Cave.\nEvening: Return to Phuket for a lively evening in town.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Transfer to Krabi via Scenic Ferry',
        description: 'Morning: Check out and take a scenic ferry or road transfer across Phang Nga Bay to Krabi.\nAfternoon: Check in to your cliff-backed resort in Ao Nang or Railay Beach.\nEvening: Watch the legendary sunset over the dramatic limestone karsts jutting from the sea.',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Railay Beach & Hidden Lagoon Trail',
        description: 'Morning: Explore the stunning peninsular beaches of Railay accessible only by long-tail boat.\nAfternoon: Hike up the jungle trail to the hidden viewpoint overlooking the emerald lagoon.\nEvening: Relaxing candlelit dinner right on the beachfront.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: '4-Island Hopping Adventure',
        description: 'Morning: Long-tail boat tour visiting Tub Island, Chicken Island, Poda Island, and Phra Nang Cave Beach.\nAfternoon: Snorkeling and coastal sightseeing surrounded by tropical islands.\nEvening: Farewell beachside dinner under fairy lights.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 6,
        title: 'Morning Leisure & Departure',
        description: 'Morning: Relaxing morning walk or final souvenir shopping in Krabi town.\nAfternoon: Hotel check-out and transfer to Krabi International Airport.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 9. THAILAND - Krabi Rock Climbing & Jungle Adventure
  {
    id: 'thailand-krabi-adventure',
    title: 'Krabi Rock Climbing & Jungle Adventure',
    destinationId: 'thailand',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 114000, // $1,399 / ₹1,14,000 per person (Market-Competitive Tier 90%)
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'An Active 5-Day Adventure of Vertical Limestone Walls and Emerald Pools featuring guided vertical rock climbing, Emerald Pool hikes, and Ao Thalane mangrove kayaking.',
    inclusions: [
      'Jungle-wrapped resort lodging on Railay Peninsula',
      'Guided limestone vertical rock climbing session with safety gear',
      'Excursion to Khao Phra Bang Khram Emerald Pool & Tiger Cave Temple',
      'Sea kayaking in Ao Thalane mangrove canyons'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Railay Peninsula',
        description: 'Morning: Arrive in Krabi and take a traditional long-tail boat across to the dramatic cliffs of Railay West.\nAfternoon: Check-in to a jungle-wrapped resort surrounded by towering karsts.\nEvening: Welcome briefing with expert climbing instructors and gear setup.',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Limestone Rock Climbing Experience',
        description: 'Morning: Scale world-class limestone vertical walls overlooking the Andaman Sea under professional guidance.\nAfternoon: Explore clifftop viewpoints and hidden cave openings.\nEvening: Hearty dinner at a local tavern sharing day stories.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Deep Jungle Emerald Pool & Hot Springs',
        description: 'Morning: Day trip inland to the dense tropical jungle of Khao Phra Bang Khram Nature Reserve.\nAfternoon: Explore the nature trails around the crystal-clear Emerald Pool and natural thermal hot springs.\nEvening: Visit the sacred Tiger Cave Temple (Wat Tham Sua) at dusk for panoramic valley views.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Kayaking in Ao Thalane Canyons',
        description: 'Morning: Sea kayaking expedition winding through narrow mangrove canyons and hidden limestone lagoons.\nAfternoon: Spot wild macaques and exotic birds nesting in the limestone crevices.\nEvening: Sunset relaxation on Phra Nang Beach.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Nature Walk & Departure',
        description: 'Morning: Gentle morning nature walk amidst tropical foliage.\nAfternoon: Check-out, boat transfer back to the mainland, and departure transfer.',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 10. THAILAND - Koh Samui Coconut Grove Escape
  {
    id: 'thailand-koh-samui-grove',
    title: 'Koh Samui Coconut Grove Escape',
    destinationId: 'thailand',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 110000, // $1,349 / ₹1,10,000 per person (Market-Competitive Tier 90%)
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A Relaxing 5-Day Tropical Island Retreat Amid Palm Plantations and Quiet Coves featuring Ang Thong Marine Park cruises, Fisherman\'s Village walks, and island rock vistas.',
    inclusions: [
      'Beachfront coconut grove resort accommodation',
      'Full-day catamaran cruise to Ang Thong National Marine Park',
      'Culture tour of Big Buddha & Fisherman\'s Village Bophut',
      'Island sightseeing to Hin Ta & Hin Yai rock formations'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Island Arrival & Plantation Settling',
        description: 'Morning: Arrive at Koh Samui Airport and transfer to your beachfront resort.\nAfternoon: Check-in to a resort surrounded by swaying coconut palms.\nEvening: Sunset dinner on Maenam or Bophut Beach.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Ang Thong National Marine Park Cruise',
        description: 'Morning: Full-day catamaran excursion into the pristine Ang Thong National Marine Park archipelago.\nAfternoon: Kayak through hidden sea caves and hike up to view the saltwater lagoon (Talay Nai).\nEvening: Return to Samui for a quiet seaside dinner.',
        image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Cultural Temples & Fisherman’s Village',
        description: 'Morning: Visit the iconic Big Buddha Temple (Wat Phra Yai) and Wat Plai Laem.\nAfternoon: Explore the historic wooden shophouses and artisan boutiques of Fisherman’s Village in Bophut.\nEvening: Stroll the vibrant night market for local Thai snacks and crafts.',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Coastal Sightseeing & Island Tour',
        description: 'Morning: Scenic island drive visiting landmark rock formations (Hin Ta and Hin Yai) and coastal viewpoints.\nAfternoon: Free time to relax on the soft white sands of Chaweng or Choeng Mon Beach.\nEvening: Fine dining experience overlooking the Gulf of Thailand.',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Sunrise Breakfast & Departure',
        description: 'Morning: Peaceful sunrise breakfast by the ocean.\nAfternoon: Hotel check-out and transfer to Samui Airport for your return flight.',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 11. VIETNAM - Hanoi Street Food & Halong Bay Cruise
  {
    id: 'vietnam-hanoi-halong-bay',
    title: 'Hanoi Street Food & Halong Bay Cruise',
    destinationId: 'vietnam',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 122000, // $1,499 / ₹1,22,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 6-Day Journey Through Historic Northern Streets and Emerald Waters with Old Quarter street food walks, an overnight Halong Bay cruise, and Ninh Binh Hang Mua climbs.',
    inclusions: [
      'French-colonial style boutique stays in Hanoi',
      'Overnight luxury Halong Bay cruise with private cabin',
      'Guided Old Quarter food tour & Vietnamese water puppet show',
      'Day trip to Ninh Binh with Tam Coc sampan ride & Hang Mua hike'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Historic Hanoi',
        description: 'Morning: Arrive at Noi Bai International Airport and transfer to the Old Quarter.\nAfternoon: Check-in to a French-colonial style boutique hotel.\nEvening: Guided walking tour through the bustling maze of the Old Quarter tasting authentic local street delicacies.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Cultural Landmarks of Hanoi',
        description: 'Morning: Visit the solemn Ho Chi Minh Mausoleum, One Pillar Pagoda, and the historic Temple of Literature.\nAfternoon: Stroll around the tranquil Hoan Kiem Lake and cross the red Huc Bridge to Ngoc Son Temple.\nEvening: Experience a traditional Vietnamese water puppet show.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Cruise Departure to Halong Bay',
        description: 'Morning: Scenic morning drive from Hanoi through the Red River Delta to Halong Bay port.\nAfternoon: Board an overnight cruise ship; check-in and enjoy lunch as you sail among thousands of limestone karsts.\nEvening: Sunset viewing on the sun deck followed by evening leisure on board.',
        image: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Cave Exploration & Return to Hanoi',
        description: 'Morning: Early morning Tai Chi session on deck followed by exploring a magnificent stalactite cave.\nAfternoon: Brunch on board as the ship cruises back to port; transfer back to Hanoi.\nEvening: Free evening to enjoy Hanoi’s vibrant café culture.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Ninh Binh Day Trip (Halong on Land)',
        description: 'Morning: Day excursion to Ninh Binh; enjoy a peaceful sampan boat ride through the river caves of Tam Coc.\nAfternoon: Climb up Hang Mua peak for breathtaking panoramic views of limestone karsts and winding rivers.\nEvening: Return to Hanoi for a farewell dinner.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 6,
        title: 'Morning Market & Departure',
        description: 'Morning: Final souvenir shopping at Dong Xuan Market.\nAfternoon: Hotel check-out and private transfer to the airport.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 12. VIETNAM - Saigon History & Mekong River Delta
  {
    id: 'vietnam-saigon-mekong-delta',
    title: 'Saigon History & Mekong River Delta',
    destinationId: 'vietnam',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 114000, // $1,399 / ₹1,14,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 6-Day Southern Expedition Through Wartime History and Waterways featuring Cu Chi tunnels, War Remnants Museum, Mekong Delta boat rides, and floating market discovery.',
    inclusions: [
      'Downtown Ho Chi Minh City hotel & Mekong eco-lodge stay',
      'Cu Chi Tunnels historical exploration tour',
      'Private Mekong Delta river cruise & fruit orchard walk',
      'Floating market boat tour & Saigon River dinner cruise'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Ho Chi Minh City (Saigon)',
        description: 'Morning: Arrive in Saigon and transfer to your downtown hotel.\nAfternoon: Check-in and refresh after your journey.\nEvening: Welcome dinner at a local restaurant serving authentic Southern Vietnamese cuisine.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'City Landmarks & Historical Museums',
        description: 'Morning: Visit the poignant War Remnants Museum and the historic Reunification Palace.\nAfternoon: Architectural walk past the French-colonial Notre Dame Cathedral and the Central Post Office.\nEvening: Vibrant evening walk down the pedestrian Nguyen Hue Boulevard.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Cu Chi Tunnels Exploration',
        description: 'Morning: Half-day excursion to the legendary underground Cu Chi tunnel network used during the Vietnam War.\nAfternoon: Return to Saigon for lunch and free time to explore Ben Thanh Market.\nEvening: Dinner cruise along the Saigon River.',
        image: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Mekong Delta River Cruise (Ben Tre/Cai Be)',
        description: 'Morning: Scenic drive south to the lush Mekong River Delta region.\nAfternoon: Board a private motorized boat to explore local coconut candy workshops, floating villages, and fruit orchards.\nEvening: Stay overnight at a charming riverside eco-lodge or return to Saigon.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Floating Markets & Rural Life',
        description: 'Morning: Early morning boat ride to witness bustling local trade on the river.\nAfternoon: Bicycle ride along village paths lined with rice fields and fruit trees.\nEvening: Return transfer to Saigon for your final night.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 6,
        title: 'Morning Cafe & Departure',
        description: 'Morning: Savor traditional Vietnamese drip coffee at a local street-side cafe.\nAfternoon: Check-out and transfer to Tan Son Nhat International Airport.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 13. VIETNAM - Phu Quoc Sunset Beach Retreat
  {
    id: 'vietnam-phu-quoc-retreat',
    title: 'Phu Quoc Sunset Beach Retreat',
    destinationId: 'vietnam',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 105000, // $1,299 / ₹1,05,000 per person (Market-Competitive Tier 90%)
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Tropical Island Getaway of White Sands and Emerald Waters featuring Long Beach resort stays, An Thoi oversea cable car, pearl farms, and coastal wildlife safari.',
    inclusions: [
      'Luxury beachfront resort on Phu Quoc Long Beach',
      'Oversea cable car ride to An Thoi archipelago & island boat tour',
      'Guided tours of local pearl farm & organic pepper plantation',
      'Wildlife conservation park safari admission'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Island Arrival & Sunset View',
        description: 'Morning: Arrive at Phu Quoc International Airport and transfer to your beachfront resort.\nAfternoon: Check-in to a luxury resort on Long Beach.\nEvening: Welcome cocktail while watching the famous fiery sunset over the Gulf of Thailand.',
        image: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'An Thoi Archipelago Cable Car & Islands',
        description: 'Morning: Experience the world\'s longest oversea cable car ride offering panoramic views of island archipelagos.\nAfternoon: Speedboat tour around local coral islets for swimming and coastal sightseeing.\nEvening: Fresh seafood dinner at a vibrant night market in Duong Dong town.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Pearl Farms & Pepper Plantations',
        description: 'Morning: Visit a traditional local pearl farm to learn about pearl culture and harvesting.\nAfternoon: Tour a local organic pepper plantation and traditional fish sauce barrel house.\nEvening: Relaxing evening by the resort infinity pool.',
        image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Wildlife Park & Coastal Exploration',
        description: 'Morning: Explore Vietnam\'s largest wildlife conservation park and open safari area.\nAfternoon: Free time for beach walking and coastal exploration.\nEvening: Quiet candlelit dinner on the beach.',
        image: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Walk & Departure',
        description: 'Morning: Peaceful morning walk along the pristine coastline.\nAfternoon: Hotel check-out and transfer to Phu Quoc Airport.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 14. SRI LANKA - Galle Colonial Fort & Coast
  {
    id: 'sri-lanka-galle-fort-coast',
    title: 'Galle Colonial Fort & Coast',
    destinationId: 'sri-lanka',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 102000, // $1,249 / ₹1,02,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Coastal Journey Through UNESCO Forts and Golden Beaches with Galle Fort heritage walks, Unawatuna Bay swims, Madu River mangrove safaris, and turtle conservation.',
    inclusions: [
      'Colonial boutique stay inside Galle Fort ramparts',
      'Guided Galle Fort UNESCO walking tour',
      'Unawatuna Beach excursion',
      'Madu River mangrove wetland boat safari & sea turtle hatchery visit'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival & Southern Coastal Transfer',
        description: 'Morning: Arrive in Sri Lanka and take a scenic coastal drive down to Galle.\nAfternoon: Check-in to a charming colonial boutique hotel inside the historic Galle Fort walls.\nEvening: Sunset walk along the ramparts of the 17th-century fort overlooking the Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Galle Fort Heritage Walking Tour',
        description: 'Morning: Guided walking tour past Dutch-colonial churches, museums, and boutique lighthouse corners.\nAfternoon: Browse local artisan jewelry shops, lace-makers, and art galleries within the fort.\nEvening: Dinner at a trendy restored Dutch-period courtyard restaurant.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Coastal Heritage & Unawatuna Beach',
        description: 'Morning: Visit traditional coastal landmarks along the southern shore.\nAfternoon: Relax and swim in the calm, horseshoe-shaped bay of Unawatuna Beach.\nEvening: Beachside dining featuring fresh grilled local cuisine.',
        image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Madu River Safari & Conservation',
        description: 'Morning: Boat safari along the biodiverse Madu River wetlands through mangrove tunnels.\nAfternoon: Visit a sea turtle conservation hatchery to learn about rehabilitation efforts.\nEvening: Farewell dinner overlooking the coastal waves.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Heritage & Departure',
        description: 'Morning: Last-minute souvenir shopping inside Galle Fort.\nAfternoon: Hotel check-out and private transfer onward.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 15. SRI LANKA - Ella Tea Estates & Scenic Rail Pass
  {
    id: 'sri-lanka-ella-highlands',
    title: 'Ella Tea Estates & Scenic Rail Pass',
    destinationId: 'sri-lanka',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 105000, // $1,299 / ₹1,05,000 per person (Market-Competitive Tier 90%)
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Mountain Journey Through Misty Highlands and Iconic Railways spanning Little Adam\'s Peak hikes, Nine Arch Bridge, scenic mountain train rides, and Ceylon tea tours.',
    inclusions: [
      'Mountain-view eco-lodge lodging in Ella',
      'Little Adam\'s Peak hike & Nine Arch Bridge architectural walk',
      'Reserved blue train tickets for high-altitude mountain railway',
      'Working Ceylon tea factory tour & Ravana Falls excursion'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Journey to the Central Highlands (Ella)',
        description: 'Morning: Depart the coast and drive up through winding mountain roads toward Ella.\nAfternoon: Check-in to a mountain-view eco-lodge overlooking deep green valleys.\nEvening: Relaxing evening in the cozy mountain village center.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Little Adam’s Peak & Nine Arch Bridge',
        description: 'Morning: Gentle morning hike up Little Adam’s Peak through lush tea plantations.\nAfternoon: Walk down to marvel at the architectural masterpiece of the colonial-era Nine Arch Bridge.\nEvening: Dinner at a local cafe enjoying cool mountain breezes.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Legendary Blue Train Journey',
        description: 'Morning: Board one of the world\'s most scenic train rides from Ella through misty mountains and waterfalls.\nAfternoon: Arrive at a neighboring hill station village, explore local markets, and return via scenic route.\nEvening: Cozy fireside dinner at your lodge.',
        image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Tea Factory Tour & Ravana Falls',
        description: 'Morning: Guided tour of a working Ceylon tea factory to learn about tea plucking and processing.\nAfternoon: Visit the cascading waters of Ravana Falls and explore local legends.\nEvening: Farewell dinner with traditional Sri Lankan rice and curry.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Sunrise Vista & Departure',
        description: 'Morning: Catch the misty mountain sunrise over Ella Gap.\nAfternoon: Check-out and private transfer to your next destination.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 16. SRI LANKA - Yala Elephant & Leopard Safari Loop
  {
    id: 'sri-lanka-yala-safari',
    title: 'Yala Elephant & Leopard Safari Loop',
    destinationId: 'sri-lanka',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 118000, // $1,449 / ₹1,18,000 per person (Market-Competitive Tier 90%)
    moods: ['Wild & Wide', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Wildlife Expedition Through National Parks and Elephant Corridors with Yala 4x4 game drives, Bundala birding, and Udawalawe Elephant Transit Home visits.',
    inclusions: [
      'Luxury tented safari camp stay near Yala National Park',
      '4x4 Jeep game drive in Yala Block 1 to track leopards & sloth bears',
      'Bundala wetland migratory bird sanctuary safari',
      'Udawalawe National Park safari & Elephant Transit Home visit'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Transfer to Yala Wilderness',
        description: 'Morning: Scenic drive from Colombo or the central hills toward Sri Lanka’s wild southeast.\nAfternoon: Check-in to a luxury tented safari camp nestled near Yala National Park.\nEvening: Evening briefing around the campfire with expert naturalist trackers.',
        image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Full-Day Yala National Park Game Drive',
        description: 'Morning: Early morning 4x4 Jeep safari into Yala Block 1 to track leopards, sloth bears, and wild elephants.\nAfternoon: Picnic lunch inside the park followed by tracking water buffalo and exotic bird species.\nEvening: Return to camp for a barbecue dinner under the stars.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Bundala Bird Sanctuary & Coastal Drive',
        description: 'Morning: Morning safari at Bundala National Park, a premier wetland sanctuary for migratory flamingos and waterbirds.\nAfternoon: Relax at camp or visit nearby coastal salt pans.\nEvening: Stargazing and wildlife documentary screening at the camp lounge.',
        image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Udawalawe Elephant Transit Home',
        description: 'Morning: Transfer north toward Udawalawe; visit the Elephant Transit Home to watch baby elephants being fed.\nAfternoon: Afternoon safari at Udawalawe National Park known for large wild elephant herds.\nEvening: Celebration dinner celebrating a successful wildlife expedition.',
        image: 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Nature Walk & Departure',
        description: 'Morning: Guided bird-watching nature walk around the camp perimeter.\nAfternoon: Check-out and private transfer back to Colombo or airport.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 17. SINGAPORE - Singapore Skyline Luxury Stay
  {
    id: 'singapore-skyline-luxury',
    title: 'Singapore Skyline Luxury Stay',
    destinationId: 'singapore',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 188000, // $2,299 / ₹1,88,000 per person (Ultra-Luxury Tier 10%)
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 4-Day Ultra-Luxury Urban Escape of Iconic Skylines and Fine Dining featuring Marina Bay luxury suites, Michelin dining, Gardens by the Bay, and private harbor yachting.',
    inclusions: [
      'Marina Bay view luxury hotel accommodation',
      'VIP private Changi Airport transfers',
      'Multi-course Michelin-starred dining experience',
      'Gardens by the Bay cooled conservatories & private yacht harbor cruise'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival & Marina Bay Luxury',
        description: 'Morning: Arrive at Changi Airport and enjoy a VIP private transfer to downtown Singapore.\nAfternoon: Check-in to a luxury hotel overlooking Marina Bay.\nEvening: Evening stroll around the Marina Bay waterfront viewing the nightly Spectra light and water show.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Gardens by the Bay & Cloud Forest',
        description: 'Morning: Explore the futuristic Supertree Grove and cooled conservatories of Gardens by the Bay.\nAfternoon: High-end shopping along the world-class Orchard Road retail belt.\nEvening: Multi-course fine dining experience at a Michelin-starred restaurant overlooking the skyline.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Sentosa Luxury & Skyline Views',
        description: 'Morning: Cable car ride across to Sentosa Island for a morning of beachside relaxation and sightseeing.\nAfternoon: Private yacht harbor cruise viewing the southern islands.\nEvening: Sunset cocktails at a chic rooftop lounge overlooking the Straits of Singapore.',
        image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Heritage Brunch & Departure',
        description: 'Morning: Indulge in a luxurious Singaporean hotel Sunday brunch or Peranakan feast.\nAfternoon: Visit Jewel Changi Airport to experience the magnificent Rain Vortex before departure.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 18. SINGAPORE - Marina Bay Skyline & Iconic Gardens Gateway
  {
    id: 'singapore-marina-bay-gardens',
    title: 'Singapore - Marina Bay Skyline & Iconic Gardens Gateway',
    destinationId: 'singapore',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 119000, // ₹1,19,000 / $1,449 per person (Market-Competitive Tier)
    moods: ['Soft Luxury', 'Culture Deep-Dive'],
    image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 4-Day Urban Landmark Journey Through Architectural Masterpieces and Futuristic Gardens featuring Marina Bay walking tours, Gardens by the Bay, Civic District monuments, and Sentosa cable car views.',
    inclusions: [
      'Downtown luxury hotel accommodation',
      'Spectra light & water show experience',
      'Gardens by the Bay Supertree Grove & Cloud Forest passes',
      'Sentosa scenic cable car journey & Jewel Changi Rain Vortex'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival & Marina Bay Waterfront',
        description: 'Morning: Arrive at Changi Airport and transfer to your downtown luxury hotel.\nAfternoon: Check-in and begin an architectural walking tour around the Marina Bay waterfront.\nEvening: Experience the dazzling Spectra light and water show against the glittering city skyline.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Gardens by the Bay & Cloud Forest Marvels',
        description: 'Morning: Explore the towering Supertree Grove and the mist-filled indoor mountain of the Cloud Forest.\nAfternoon: Walk through the historic Civic District, viewing landmark monuments and colonial-era architecture.\nEvening: Evening stroll along the scenic Singapore River through historic Clarke Quay.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Sentosa Island Panoramic Gateway',
        description: 'Morning: Cable car ride across to Sentosa Island offering sweeping panoramic views of the southern straits.\nAfternoon: Sightseeing around island coastal viewpoints, beaches, and landmark attractions.\nEvening: Sunset cocktails at a chic rooftop lounge overlooking the city.',
        image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Botanic Gardens & Departure',
        description: 'Morning: Peaceful morning walk through the UNESCO-listed Singapore Botanic Gardens and National Orchid Garden.\nAfternoon: Visit Jewel Changi Airport to experience the magnificent indoor Rain Vortex before your flight home.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 19. SINGAPORE - Sentosa Coastal & Island Panorama Explorer
  {
    id: 'singapore-sentosa-panorama',
    title: 'Singapore - Sentosa Coastal & Island Panorama Explorer',
    destinationId: 'singapore',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 125000, // ₹1,25,000 / $1,520 per person (Market-Competitive Tier)
    moods: ['Family Loop', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 4-Day Scenic Island Escape Featuring Cable Car Skies, Beaches, and Marine Life with Sentosa resort stays, S.A.Q. Aquarium glass tunnels, Fort Siloso, and Mount Faber views.',
    inclusions: [
      'Sentosa Island resort accommodation',
      'S.A.Q. Aquarium full admission & underwater tunnel access',
      'Wings of Time night laser show tickets',
      'Mount Faber scenic cable car roundtrip'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Island Arrival & Beachfront Settling',
        description: 'Morning: Arrive in Singapore and transfer directly to a resort on Sentosa Island.\nAfternoon: Check-in and take a coastal walking tour along Siloso and Palawan beaches.\nEvening: Welcome dinner overlooking the sunset straits.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'S.A.Q. Marine Exhibits & Island Sights',
        description: 'Morning: Explore the massive underwater glass tunnels and marine exhibits at S.A.Q. Aquarium.\nAfternoon: Sightseeing tour exploring historical Fort Siloso and island panoramic viewpoints.\nEvening: Watch the spectacular Wings of Time night laser and fire show.',
        image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Mount Faber Cable Car & City Skyline',
        description: 'Morning: Scenic cable car journey connecting Sentosa to Mount Faber peak for stunning city overlooks.\nAfternoon: Explore the cultural streetscapes and historic colonial architecture of the main island.\nEvening: Dinner at a scenic mountainside or waterfront venue.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Nature Walk & Departure',
        description: 'Morning: Morning coastal stroll or nature trail hike within the island\'s green pockets.\nAfternoon: Final souvenir shopping and transfer to Changi Airport for departure.',
        image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 20. GREECE - Santorini Caldera & Cave Living
  {
    id: 'greece-santorini-caldera',
    title: 'Santorini Caldera & Cave Living',
    destinationId: 'greece',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 235000, // $2,899 / ₹2,35,000 per person (Ultra-Luxury Tier 10%)
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Romantic Island Escape of Cliffside Caldera Views and Cave Suites featuring Oia cave living, volcanic catamaran sailing, ancient Akrotiri, and Assyrtiko wine tasting.',
    inclusions: [
      'Cliffside volcanic cave suite with private caldera terrace',
      'Volcanic caldera catamaran sailing cruise with fresh seafood',
      'Guided Ancient Akrotiri archaeological tour',
      'Cliffside winery tour & Assyrtiko wine pairing session'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Volcanic Santorini',
        description: 'Morning: Arrive in Santorini via ferry or flight and transfer to Oia or Fira.\nAfternoon: Check-in to a traditional whitewashed cave suite carved directly into the volcanic caldera cliff.\nEvening: Watch the world-famous Santorini sunset from Oia Castle overlooking blue-domed churches.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Caldera Catamaran Cruise',
        description: 'Morning: Morning catamaran sailing excursion into the volcanic caldera waters.\nAfternoon: Sail around the volcanic islets, swim near hot springs, and sightsee along Red Beach.\nEvening: Enjoy a fresh Greek seafood dinner served on board or at a cliffside taverna.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Ancient Akrotiri & Winery Tour',
        description: 'Morning: Guided tour of the prehistoric archaeological site of Akrotiri (the Minoan Pompeii).\nAfternoon: Visit a traditional cliffside winery to taste unique Assyrtiko volcanic wines paired with local cheeses.\nEvening: Stroll through the lively capital of Fira at twilight.',
        image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Cliff Trail Hike & Coastal Exploration',
        description: 'Morning: Scenic cliffside walking trail hike from Firostefani to Oia past volcanic vistas.\nAfternoon: Explore the volcanic black sand coastline and villages of Kamari or Perissa.\nEvening: Romantic candlelit dinner overlooking the illuminated caldera.',
        image: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Caldera View & Departure',
        description: 'Morning: Leisurely breakfast on your private terrace overlooking the Aegean Sea.\nAfternoon: Hotel check-out and transfer to Santorini airport or port.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 21. GREECE - Mykonos Windmills & Beach Clubs
  {
    id: 'greece-mykonos-windmills',
    title: 'Mykonos Windmills & Beach Clubs',
    destinationId: 'greece',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 145000, // $1,799 / ₹1,45,000 per person (Market-Competitive Tier 90%)
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Glamorous Island Retreat of Iconic Windmills and Coastal Exploration featuring Aegean resorts, Little Venice sunsets, and sacred Delos Island day trips.',
    inclusions: [
      'Chic Aegean-style resort accommodation in Mykonos',
      'Guided walking tour of Mykonos Town (Chora) & 16th-century Windmills',
      'Delos Island archaeological boat excursion',
      'Sunset cocktails in Little Venice & coastal bay exploration'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Mykonos',
        description: 'Morning: Arrive in Mykonos and transfer to your chic Aegean-style resort.\nAfternoon: Check-in and relax by the pool.\nEvening: Walk through Mykonos Town (Chora) to view the iconic 16th-century windmills lit up at night.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Little Venice & Coastal Views',
        description: 'Morning: Explore the picturesque, labyrinthine alleys of Little Venice with waves crashing against colorful balconies.\nAfternoon: Sightsee along the golden sands and coastal paths of Psarou or Platis Gialos.\nEvening: Sunset cocktails at a famous seafront lounge in Little Venice.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Delos Island Archaeological Excursion',
        description: 'Morning: Morning boat excursion to the sacred island of Delos, the legendary birthplace of Apollo and Artemis.\nAfternoon: Explore ancient ruins, marble lions, and Hellenistic mosaics.\nEvening: Dine at a trendy traditional taverna in the heart of Chora.',
        image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Island Tour & Coastal Sightseeing',
        description: 'Morning & Afternoon: Scenic island drive visiting traditional lighthouses, remote chapels, and beautiful coastlines.\nEvening: Vibrant evening experience in Mykonos Town.',
        image: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Leisure & Departure',
        description: 'Morning: Relaxing morning coffee at a harbor-front cafe.\nAfternoon: Check-out and transfer to Mykonos Airport or ferry port.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 22. GREECE - Athens Ancient Acropolis & Culture
  {
    id: 'greece-athens-acropolis',
    title: 'Athens Ancient Acropolis & Culture',
    destinationId: 'greece',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 98000, // $1,199 / ₹98,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 4-Day Historical Journey Through Classical Monuments and Modern Neighborhoods spanning the Acropolis, Parthenon, New Acropolis Museum, and Plaka alleys.',
    inclusions: [
      'Downtown Athens hotel near Plaka & Syntagma',
      'Guided Acropolis & Parthenon archaeological tour',
      'Skip-the-line entrance to New Acropolis Museum',
      'Ancient Agora walking tour & rooftop dinner with Acropolis view'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in the Cradle of Democracy',
        description: 'Morning: Arrive in Athens and transfer to your downtown hotel near Syntagma or Plaka.\nAfternoon: Check-in and take a welcoming walk through the historic Plaka neighborhood.\nEvening: Traditional Greek dinner with view of the illuminated Acropolis.',
        image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'The Acropolis & New Acropolis Museum',
        description: 'Morning: Guided archaeological tour of the Acropolis visiting the Parthenon, Erechtheion, and Temple of Athena Nike.\nAfternoon: Explore the state-of-the-art Acropolis Museum housing ancient friezes and artifacts.\nEvening: Stroll through the lively Monastiraki flea market square.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Ancient Agora & National Gardens',
        description: 'Morning: Wander through the Ancient Agora, the heart of public life in ancient Athens.\nAfternoon: Relax in the shaded pathways of the National Gardens and view the Panathenaic Stadium.\nEvening: Farewell rooftop dinner overlooking the Acropolis skyline.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Morning Coffee & Departure',
        description: 'Morning: Experience traditional Greek coffee culture at a local spot in Kolonaki.\nAfternoon: Hotel check-out and private transfer to Athens International Airport.',
        image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 23. GREECE - Crete Traditional Olive & Wine Trail
  {
    id: 'greece-crete-olive-wine',
    title: 'Crete Traditional Olive & Wine Trail',
    destinationId: 'greece',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 110000, // $1,349 / ₹1,10,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Cretan Cultural Journey Through Olive Groves, Vineyards, and Venetian Ports traversing Chania\'s Venetian harbor, olive oil estates, indigenous wine tastings, and Samaria Gorge.',
    inclusions: [
      'Chania Old Town historic boutique hotel stay',
      'Traditional Cretan olive mill tour & extra virgin tasting',
      'Cretan wine country tour tasting Vidiano & Liatiko grapes',
      'Samaria Gorge active hiking experience & coastal boat return'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Chania',
        description: 'Morning: Arrive in Crete and transfer to the stunning Venetian port city of Chania.\nAfternoon: Check-in to a historic boutique hotel in the Old Town.\nEvening: Stroll along the picturesque Venetian harbor and historic lighthouse.',
        image: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Olive Oil Estate & Tasting',
        description: 'Morning: Visit a traditional Cretan olive mill to learn about ancient olive oil production and extra virgin tasting.\nAfternoon: Explore the bustling Chania indoor municipal market for local cheeses and herbs.\nEvening: Dinner at a taverna serving authentic Cretan dakos and local specialties.',
        image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Cretan Wine Country Tour',
        description: 'Morning: Journey into the inland hills of Heraklion or Chania to visit local family-run vineyards.\nAfternoon: Taste indigenous grape varieties like Vidiano and Liatiko paired with local meze.\nEvening: Relaxing evening in a mountain village square.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Samaria Gorge Hiking Experience',
        description: 'Morning: Full-day active trek through Europe’s longest gorge amidst dramatic limestone cliffs (seasonal).\nAfternoon: Relax on the southern coast at Agia Roumeli before taking a boat transfer back.\nEvening: Hearty post-hike dinner in Chania.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Souvenirs & Departure',
        description: 'Morning: Pick up local Cretan honey, mountain tea, and hand-crafted souvenirs.\nAfternoon: Check-out and transfer to Chania or Heraklion Airport.',
        image: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 24. MALAYSIA - Kuala Lumpur Skyline & Rainforest Loop
  {
    id: 'malaysia-kl-skyline-rainforest',
    title: 'Kuala Lumpur Skyline & Rainforest Loop',
    destinationId: 'malaysia',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 98000, // $1,199 / ₹98,000 per person (Market-Competitive Tier 90%)
    moods: ['Soft Luxury', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Urban and Eco-Adventure Through Skyscrapers and Ancient Jungles featuring Petronas views, Batu Caves rainbow stairs, KL Forest canopy walks, and Genting cable cars.',
    inclusions: [
      'Downtown Kuala Lumpur luxury hotel stay',
      'Batu Caves guided excursion & Merdeka Square heritage walk',
      'KL Forest Eco Park canopy walk & KL Tower observation deck',
      'Day trip to Genting Highlands via scenic cable car'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Kuala Lumpur',
        description: 'Morning: Arrive at KLIA and transfer to your downtown luxury hotel.\nAfternoon: Check-in and admire views of the iconic Petronas Twin Towers.\nEvening: Welcome dinner at Jalan Alor street food area tasting local Malaysian delights.',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'City Icons & Batu Caves',
        description: 'Morning: Visit the towering limestone Batu Caves and climb the 272 rainbow stairs to the Hindu shrine.\nAfternoon: Tour the historic Merdeka Square, Sultan Abdul Samad Building, and Central Market.\nEvening: Sunset view and dinner from the KL Tower observation deck.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'KL Forest Eco Park & Bukit Bintang',
        description: 'Morning: Walk along the canopy canopy-walk bridges of the KL Forest Eco Park right in the city center.\nAfternoon: Explore modern shopping and entertainment districts in Bukit Bintang.\nEvening: Rooftop cocktail overlooking the glittering city skyline.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Day Trip to Genting Highlands',
        description: 'Morning: Cable car ride up to Genting Highlands resort and sightseeing complex.\nAfternoon: Enjoy mountain air, cool viewpoints, and indoor entertainment.\nEvening: Return to Kuala Lumpur for a farewell feast.',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Heritage & Departure',
        description: 'Morning: Breakfast featuring local Malaysian breakfast favorites.\nAfternoon: Hotel check-out and transfer to Kuala Lumpur International Airport.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 25. MALAYSIA - Langkawi Rainforest & Lagoon Retreat
  {
    id: 'malaysia-langkawi-lagoon',
    title: 'Langkawi Rainforest & Lagoon Retreat',
    destinationId: 'malaysia',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 102000, // $1,249 / ₹1,02,000 per person (Market-Competitive Tier 90%)
    moods: ['Soft Luxury', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Island Getaway of Geoparks, Cable Cars, and Emerald Waters featuring Langkawi SkyCab & SkyBridge, Kilim Karst mangrove safaris, and Dayang Bunting island hopping.',
    inclusions: [
      'Tropical rainforest & ocean resort accommodation',
      'Langkawi Cable Car & SkyBridge experience',
      'Kilim Karst Geoforest Park boat safari through mangrove canyons',
      'Island hopping tour to Lake of the Pregnant Maiden & Beras Basah'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Island Arrival & Beach Settling',
        description: 'Morning: Arrive at Langkawi International Airport and transfer to your beach resort.\nAfternoon: Check-in to a tropical resort nestled between rainforest and ocean.\nEvening: Sunset walk along Pantai Cenang beach.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Langkawi Sky Cab & SkyBridge',
        description: 'Morning: Ride the steep Langkawi Cable Car up to Mount Machinchang.\nAfternoon: Walk across the curved Langkawi SkyBridge suspended over dense rainforest canopy.\nEvening: Dinner at a romantic seaside restaurant.',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Kilim Karst Geoforest Park Boat Tour',
        description: 'Morning: Boat safari through the mangrove forests of Kilim Karst Geoforest Park.\nAfternoon: Explore bat caves, fossil beds, and wildlife habitats along the river.\nEvening: Relaxing evening by the resort pool.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Island Hopping & Coastal Sightseeing',
        description: 'Morning: Boat tour visiting Dayang Bunting Island (Lake of the Pregnant Maiden) and Beras Basah Island.\nAfternoon: Swimming and coastal sightseeing in clear tropical waters.\nEvening: Fresh seafood dinner on the waterfront.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Duty-Free Shopping & Departure',
        description: 'Morning: Quick duty-free shopping in Kuah Town for souvenirs.\nAfternoon: Check-out and transfer to Langkawi Airport.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },

  // 26. MALAYSIA - Penang Shophouse Heritage & Food
  {
    id: 'malaysia-penang-heritage',
    title: 'Penang Shophouse Heritage & Food',
    destinationId: 'malaysia',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 98000, // $1,199 / ₹98,000 per person (Market-Competitive Tier 90%)
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A 5-Day Cultural Exploration of UNESCO Street Art and Culinary Capitals with George Town Peranakan shophouse stays, Clan Jetties, Kek Lok Si, and Penang Hill funicular.',
    inclusions: [
      'Restored Peranakan heritage shophouse boutique stay',
      'George Town street art mural tour & Pinang Peranakan Mansion',
      'Kek Lok Si Buddhist temple & Penang Hill funicular railway',
      'Tropical Spice Garden tour & Gurney Drive food trail'
    ],
    dayByDayTimeline: [
      {
        day: 1,
        title: 'Arrival in Historic George Town',
        description: 'Morning: Arrive in Penang and transfer to George Town.\nAfternoon: Check-in to a beautifully restored Peranakan heritage shophouse boutique hotel.\nEvening: Evening walk to spot famous street art murals scattered across historic alleys.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 2,
        title: 'Peranakan Culture & Clan Jetties',
        description: 'Morning: Tour the ornate Pinang Peranakan Mansion to experience 19th-century Straits Chinese luxury.\nAfternoon: Walk along the historic wooden waterfront stilt houses of the Clan Jetties.\nEvening: Famous heritage food tour tasting local culinary icons.',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 3,
        title: 'Kek Lok Si Temple & Penang Hill',
        description: 'Morning: Visit the sprawling Buddhist temple complex of Kek Lok Si with its magnificent multi-tier pagoda.\nAfternoon: Take the funicular railway up Penang Hill for panoramic views across the island.\nEvening: Dine at the famous Gurney Drive open-air food market.',
        image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 4,
        title: 'Tropical Spice Garden & Coastal Drive',
        description: 'Morning: Wander through the lush Tropical Spice Garden learning about nutmeg, cloves, and ginger.\nAfternoon: Relax and sightsee along the sandy shores of Batu Ferringhi beach.\nEvening: Dinner featuring regional fusion cuisine.',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80'
      },
      {
        day: 5,
        title: 'Morning Heritage & Departure',
        description: 'Morning: Final morning walk through George Town\'s historic quarters.\nAfternoon: Check-out and private transfer to Penang International Airport.',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  }
];

export const mockSoulStops: SoulStop[] = [
  {
    id: 'maldives-sunset-cruise',
    title: 'Vintage Sunset Boat Sail',
    description: 'Sail lagoon waters on a traditional wooden dhoni boat with sunset refreshments under coastal skies.',
    price: 12500,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'maldives'
  },
  {
    id: 'maldives-coral-reef-snorkel',
    title: 'Coral Garden Snorkeling Safari',
    description: 'Swim with gentle sea turtles and reef fish in protected biosphere channels.',
    price: 11000,
    moods: ['Wild & Wide', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'maldives'
  },
  {
    id: 'bali-ubud-swing',
    title: 'Jungle Canopy Swing & Coffee',
    description: 'Swing high over Ubud forest valley canopies, followed by local artisan coffee tastings.',
    price: 4500,
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'bali'
  },
  {
    id: 'bali-tirta-empul-purification',
    title: 'Temple Water Cleansing',
    description: 'Join a guide for traditional architectural exploration and spring water sights at Tirta Empul.',
    price: 5500,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'bali'
  },
  {
    id: 'thailand-elephant-walk',
    title: 'Ethical Elephant Forest Walk',
    description: 'Feed rescued giants and walk alongside them to the jungle river bank.',
    price: 7500,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'thailand'
  },
  {
    id: 'thailand-khao-soi-curry-class',
    title: 'Organic Garden Curry Class',
    description: 'Master hand-crushing yellow curry paste at a private mountain cooking farm.',
    price: 6000,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'thailand'
  },
  {
    id: 'vietnam-hanoi-streetfood',
    title: 'Old Quarter Secret Street Food',
    description: 'Explore the narrow alleys of Hanoi with a food guide, tasting egg coffee and hot bun cha.',
    price: 5000,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'vietnam'
  },
  {
    id: 'vietnam-mekong-delta-row',
    title: 'Mekong Canal Row Boat ride',
    description: 'Float down palm-lined brown river delta canals in traditional hand-rowed wooden boats.',
    price: 4500,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'vietnam'
  },
  {
    id: 'sri-lanka-tea-sommelier',
    title: 'Ceylon Tea Estate Sommelier',
    description: 'Taste rare golden and white tea brews inside a 100-year-old mountain factory.',
    price: 5500,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'sri-lanka'
  },
  {
    id: 'sri-lanka-surf-weligama',
    title: 'Weligama Beach Surf session',
    description: 'Learn to catch soft peeling sand-bottom waves with an experienced local guide.',
    price: 4000,
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'sri-lanka'
  },
  {
    id: 'singapore-gardens-oculus',
    title: 'Gardens by the Bay Oculus Walk',
    description: 'Walk high mountain suspension bridges inside the futuristic Cloud Forest dome.',
    price: 6500,
    moods: ['Soft Luxury', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'singapore'
  },
  {
    id: 'greece-caldera-wine',
    title: 'Oia Volcanic Wine Flight',
    description: 'Taste Assyrtiko white wines grown in dry volcanic ash soils at cliffside terraces.',
    price: 11000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'greece'
  },
  {
    id: 'greece-athens-acropolis-sunrise',
    title: 'Acropolis Sunrise Guided Walk',
    description: 'Avoid all crowds to explore the Parthenon columns at first morning light.',
    price: 8000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'greece'
  },
  {
    id: 'malaysia-kl-heli-sunset',
    title: 'KL Heliport Sunset Lounge',
    description: 'Sip cocktails on an active helipad with 360 views of Petronas towers.',
    price: 9000,
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'malaysia'
  },
  {
    id: 'malaysia-penang-cooking',
    title: 'Nyonya Shophouse Cooking Class',
    description: 'Grind rich sambal pastes and prepare traditional blue pea rice in historic courtyards.',
    price: 5500,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'malaysia'
  }
];

export const allMoods = [
  'Romance',
  'Solo Reset',
  'Wild & Wide',
  'Family Loop',
  'Culture Deep-Dive',
  'Soft Luxury'
];
