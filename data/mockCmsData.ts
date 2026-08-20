import { Horizon, Routebook, SoulStop } from '@/schemas/cms-schemas';

export const mockHorizons: Horizon[] = [
  {
    id: 'maldives',
    title: 'Maldives',
    subtitle: 'Private Overwater Stays',
    description: 'Bespoke overwater villa retreats, glass-clear lagoon pools, and soft ivory sands melting into endless blue horizons.',
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 195000
  },
  {
    id: 'bali',
    title: 'Bali/Indonesia',
    subtitle: 'Tropical Forest & Spirit',
    description: 'Vibrant green rice terrace climbs, tranquil temple courtyards, and warm ocean swells breaking over coral sands.',
    moods: ['Solo Reset', 'Romance', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 110000
  },
  {
    id: 'thailand',
    title: 'Thailand',
    subtitle: 'Golden Temples & Islands',
    description: 'Mist-shrouded northern peaks, ornate gilded temples, and white sand island bays lined with limestone cliffs.',
    moods: ['Culture Deep-Dive', 'Family Loop', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 95000
  },
  {
    id: 'vietnam',
    title: 'Vietnam',
    subtitle: 'Heritage Bay Trails',
    description: 'Emerald bay limestone towers, ancient Gilded Age avenues, and vibrant food pathways teeming with generational recipes.',
    moods: ['Culture Deep-Dive', 'Solo Reset', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 90000
  },
  {
    id: 'sri-lanka',
    title: 'Sri Lanka',
    subtitle: 'Tea Groves & Surf Havens',
    description: 'Historic colonial stone forts, rolling hillside tea estates, and wild palm-lined surfing coves.',
    moods: ['Wild & Wide', 'Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 85000
  },
  {
    id: 'singapore',
    title: 'Singapore',
    subtitle: 'Metropolis in a Garden',
    description: 'Spectacular biome domes, futuristic cloud towers, and rich multi-cultural districts boasting world-class dining.',
    moods: ['Soft Luxury', 'Family Loop', 'Culture Deep-Dive'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 135000
  },
  {
    id: 'greece',
    title: 'Greece',
    subtitle: 'Sun-Drenched Tavern Tables',
    description: 'Stark white cave architecture, volcanic black sand bays, and sunset dining looking over the deep blue Aegean.',
    moods: ['Romance', 'Soft Luxury', 'Culture Deep-Dive'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 220000
  },
  {
    id: 'malaysia',
    title: 'Malaysia',
    subtitle: 'Rainforests & Skylines',
    description: 'Towering architectural skylines, dense prehistoric rainforest trails, and coastal beaches rich with colonial history.',
    moods: ['Soft Luxury', 'Family Loop', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80',
    startingPrice: 105000
  }
];

export const mockRoutebooks: Routebook[] = [
  // MALDIVES PACKAGES (3)
  {
    id: 'maldives-honeymoon-overwater',
    title: 'Private Lagoon Overwater Sanctuary',
    destinationId: 'maldives',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 245000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Step straight from your private terrace into crystal waters. A romantic overwater suite escape featuring floating breakfasts and sunset dolphin yacht sails.',
    inclusions: [
      'Overwater villa lodging with private plunge pool',
      'Sunset cruise with champagne & local delicacies',
      'Floating pool breakfast for two',
      'Roundtrip seaplane transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Seaplane Arrival', description: 'Arrive at Malé Airport and fly by seaplane to your private island resort.', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Lagoon Sunbathing', description: 'Enjoy a lazy morning reading on your deck and swimming with baby reef sharks.', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Dolphin Sunset Yacht', description: 'Board the private luxury catamaran to watch dolphin pods surfing the warm ocean waves.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Private Sandbank Dinner', description: 'Dine on grilled lobster under lanterns on a secluded private beach sandbar.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'maldives-family-fun',
    title: 'Island Family Lagoon Loop',
    destinationId: 'maldives',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 195000,
    moods: ['Family Loop', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Perfect for groups seeking tropical bonding. Ocean view family residences, kid-friendly snorkeling safaris, and beach bonfire nights.',
    inclusions: [
      'Multi-room beachfront family residence',
      'Guided coral garden snorkeling safari',
      'Beachside family barbecue evening',
      'Daily curated kids club activities'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Speedboat Welcome', description: 'Speedboat check-in. Explore the white sand paths of the resort island.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Snorkeling Safari', description: 'Swim over colorful coral gardens with a resort marine biologist.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Island Treasure Hunt', description: 'Kids follow coordinates to find hidden prizes while parents relax at the spa.', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Beach Bonfire Night', description: 'Roast marshmallows and listen to traditional Boduberu drumming by the ocean.', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'maldives-snorkel-adventure',
    title: 'Wild Deep Snorkel Safari',
    destinationId: 'maldives',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 220000,
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Dive deep into the blue. A snorkeling-intensive itinerary designed to swim with whale sharks and manta rays in protected UNESCO biosphere channels.',
    inclusions: [
      'Sunrise beach studio lodging',
      'Whale shark swimming excursion',
      'Manta ray feeding snorkel safari',
      'Full premium scuba/snorkeling gear hire'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Ocean Arrival', description: 'Check in and get fitted for professional snorkeling gear.', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Whale Shark Crossing', description: 'Cruise South Ari Atoll to swim alongside massive gentle whale sharks.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Hanifaru Manta Swarm', description: 'Witness dozens of giant manta rays filter-feeding in Hanifaru Bay.', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Deep Channel Drift', description: 'Feel the ocean current drift you past colorful sea walls teeming with life.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // BALI PACKAGES (3)
  {
    id: 'bali-ubud-jungles',
    title: 'Ubud Jungle Canopy Retreat',
    destinationId: 'bali',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 110000,
    moods: ['Solo Reset', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Unwind in the spiritual heart of Bali. Treehouse pool villas, early morning temple trails, and forest yoga sessions.',
    inclusions: [
      'Bamboo treehouse lodging with river valley view',
      'Private sunset temple purification session',
      'Traditional hot stone Balinese massage',
      'Daily organic farm-to-table breakfast basket'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Checking into the Canopy', description: 'Arrive in Ubud and settle into your luxury treehouse above the river mist.', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Tegalalang Sunrises', description: 'Walk the terraced steps of Tegalalang as the sun light filters through palms.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Tirta Empul Springs', description: 'Join a temple guide for traditional water-cleansing rituals in sacred pools.', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Uluwatu Sunset Dance', description: 'Climb cliffside paths to Uluwatu temple to watch fire dances over the ocean.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'bali-seminyak-villas',
    title: 'Seminyak Boutique Villa & Spa',
    destinationId: 'bali',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 135000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Indulge in coastal luxury. Contemporary private villas, beach clubs, and premium seafood dinners on the sand.',
    inclusions: [
      'Boutique pool villa lodging close to beach',
      'VIP beds at Potato Head beach club',
      'Beachfront candlelit seafood dinner',
      'Dedicated local villa host'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Villa Welcome', description: 'Check into your private pool villa and settle in with tropical cocktails.', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Beach Club Sunsets', description: 'Sip cocktails from your reserved daybed as the sun sets over Seminyak beach.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Jimbaran Seafood Feast', description: 'Enjoy grilled prawns and fish cooked over coconut husks on Jimbaran beach.', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Sunset Spa Therapy', description: 'Indulge in a 3-hour signature couples massage and flower bath.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'bali-nusa-adventure',
    title: 'Nusa Penida Coastal Explorer',
    destinationId: 'bali',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 115000,
    moods: ['Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Discover the dramatic rock archways and beaches of Nusa Penida. An adventurous itinerary focused on island trekking and cliffside photography.',
    inclusions: [
      'Oceanfront boutique bungalow stays',
      'Private speedboat island crossings',
      'Full-day guided island 4x4 tour',
      'Snorkeling with manta rays excursion'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Speedboat to Penida', description: 'Cross the Badung strait to check into your cliffside bungalow.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Kelingking T-Rex Cliff', description: 'Hike down the steep spine of Kelingking beach, looking at the emerald bay.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Broken Beach Arch', description: 'Explore the spectacular circular rock basin and natural arch of Broken Beach.', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Manta Point Snorkeling', description: 'Swim with giant coastal manta rays in the deep ocean swells.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // THAILAND PACKAGES (4)
  {
    id: 'thailand-culture-bangkok-chiangmai',
    title: 'Bangkok Imperial & Chiang Mai Hills',
    destinationId: 'thailand',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 105000,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'From the canals of Bangkok to the mountain temples of the north. Experience Thailand’s royal history, monks, and food.',
    inclusions: [
      'Gilded Age boutique hotel stays',
      'Private sunset longtail boat canal tour',
      'VIP Chiang Mai food tasting walk',
      'All local flights and transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Bangkok Grand Palace', description: 'Explore the spectacular golden spires of the Royal Palace and Wat Phra Kaew.', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Klongs Longtail Tour', description: 'Ride a vintage boat through the old wooden houses of Bangkok’s back canals.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Chiang Mai Old Gates', description: 'Fly north to Chiang Mai and walk through historic brick town walls.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Doi Suthep Golden Sunset', description: 'Climb dragon-lined temple stairs to look over the valleys.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'thailand-beach-phuket-krabi',
    title: 'Phuket Lagoon & Krabi Limestone Cliffs',
    destinationId: 'thailand',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 95000,
    moods: ['Romance', 'Wild & Wide'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Soak in the Andaman sea. Cruise between the towering limestone needles of Phang Nga bay and relax in beach hideaways.',
    inclusions: [
      'Beachside resort bungalow lodging',
      'Private longtail boat excursion to Phi Phi',
      'Guided sea kayaking in Krabi mangrove caves',
      'Daily local tropical breakfast buffet'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Phuket Welcome', description: 'Check into your beachside bungalow and swim in warm waters.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Phang Nga Bay Cruise', description: 'Sail past James Bond island and canoe inside dark mangrove sea caves.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Railay Beach Krabi', description: 'Transfer to Krabi and walk the car-free sands of Railay beach.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Phi Phi Snorkeling', description: 'Snorkel with schools of colored fish in the calm turquoise bays of Phi Phi.', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'thailand-krabi-cliffs',
    title: 'Krabi Rock climbing & Jungle Reset',
    destinationId: 'thailand',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 98000,
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'For active travelers. Rock climbing guides on iconic Railay cliffs, jungle hot spring treks, and deep forest waterfalls.',
    inclusions: [
      'Clifftop eco-lodge bungalow stay',
      'Private half-day rock climbing session',
      'Guided Emerald Pool hot springs hike',
      'Complimentary airport transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Clifftop Check-in', description: 'Arrive at your clifftop villa and enjoy sunset views over the bay.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Railay Rock Climbing', description: 'Learn to scale vertical limestone routes looking over the blue sea.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Jungle Emerald Pools', description: 'Hike through rain forest trails to soak in natural warm mineral pools.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Tiger Cave Peak', description: 'Climb 1,237 steps to reach the mountain shrine of Tiger Cave Temple.', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'thailand-koh-samui-reset',
    title: 'Koh Samui Coconut Grove Escape',
    destinationId: 'thailand',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 120000,
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A slow-living sanctuary. Restored beachfront wooden villas, sunset yoga under coconut trees, and private yacht cruises.',
    inclusions: [
      'Gourmet pool villa nested in coconut grove',
      'Private sunset catamaran cruise with dining',
      'Daily morning Vinyasa yoga sessions',
      'Complimentary spa treatment vouchers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Coconut Grove Welcome', description: 'Check into your pool villa and relax to the sounds of soft waves.', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Catamaran Sunset Cruise', description: 'Sail past quiet fishing villages and watch the sun set over Angthong park.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Angthong Marine Park Snorkeling', description: 'Explore hidden sea caves and shallow lagoons in Angthong.', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Therapeutic Herbal Spa', description: 'Soak in traditional herbal steam rooms followed by a warm oil massage.', image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // VIETNAM PACKAGES (3)
  {
    id: 'vietnam-hanoi-halong',
    title: 'Hanoi Street Food & Halong Bay Cruise',
    destinationId: 'vietnam',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 90000,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Step into history. Cycle through Hanoi’s French quarters, taste local street recipes, and cruise overnight among the mist of Halong Bay.',
    inclusions: [
      'Boutique hotel stays in Hanoi Old Quarter',
      'Overnight heritage wood junk cruise in Halong Bay',
      'Private street food walk with food writer',
      'Complimentary airport transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Train Street Egg Coffee', description: 'Arrive in Hanoi. Sip warm egg coffee right next to the active tracks.', image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Boarding Heritage Cruise', description: 'Drive to Halong Bay. Board your wooden vessel and cruise the towers.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Lan Ha Lagoon Kayaking', description: 'Kayak through quiet water tunnels to enter secret rock basins.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Water Puppet Theater', description: 'Return to Hanoi for a private water puppet theater show.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'vietnam-saigon-mekong',
    title: 'Saigon History & Mekong River Delta',
    destinationId: 'vietnam',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 92000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'A deep dive into historical networks. Explore Cu Chi tunnels and float past floating fruit orchards on wooden longtail boats.',
    inclusions: [
      'Modern heritage hotel stay in Saigon',
      'Private speed boat trip to Cu Chi tunnels',
      'Curated Mekong Delta rowing boat ride',
      'Daily traditional Pho breakfasts'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Saigon Café Culture', description: 'Arrive in Ho Chi Minh City. Settle in with iced condensed milk coffee.', image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Cu Chi Tunnel History', description: 'Squeeze through the historic wartime underground bunkers of Cu Chi.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Mekong Delta Fruit Farms', description: 'Float down brown river canals in hand-rowed longtail wooden boats.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Ben Thanh Night Market', description: 'Sample crispy rice pancakes and hot noodle soup in bustling street alleys.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'vietnam-phu-quoc-beach',
    title: 'Phu Quoc Sunset Beach Retreat',
    destinationId: 'vietnam',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 110000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Slow down on the white sands of Phu Quoc. Five nights of tropical island luxury, private beach dinners, and pearl farm visits.',
    inclusions: [
      'Gourmet beachside villa stays',
      'Private snorkeling cruise around southern islets',
      'Exclusive pass to local organic pepper farm',
      'Daily sunset cocktails at resort bar'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Island Escape Welcome', description: 'Check into your beachside resort villa. Swim in warm ocean currents.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Islands Snorkel Cruise', description: 'Boat out to quiet coral points to swim with multicolored fish.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Pepper Farm & Pearl Workshop', description: 'Taste spicy local green peppers and see pearls extracted at a local farm.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Secluded Sand Dinner', description: 'Enjoy grilled snapper on the sand with waves lapping your feet.', image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // SRI LANKA PACKAGES (3)
  {
    id: 'sri-lanka-coast-galle',
    title: 'Galle Colonial Fort & Coast',
    destinationId: 'sri-lanka',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 85000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Step back in time. Explore the ramparts of Galle Fort, cycle through local village paddy fields, and dine on claypot fish curry.',
    inclusions: [
      'Converted Dutch colonial villa lodging',
      'Private Ceylon tea garden tasting tour',
      'Village cycle ride guided by local artist',
      'All local transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Galle Fort Ramparts walk', description: 'Check into your villa and walk stone walls as the sun dips into the ocean.', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Ceylon tea plantation trails', description: 'Walk tea estates and see picking methods inside a 100-year-old factory.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Weligama Sand Surf', description: 'Surf soft peeling beach break waves with a local Weligama instructor.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Stilt Fishermen Dawn', description: 'Photograph traditional stilt fishermen perched high above coastal waves.', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'sri-lanka-hills-ella',
    title: 'Ella Tea Estates & Scenic Rail Pass',
    destinationId: 'sri-lanka',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 92000,
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Hike through misty hills. Board the famous Kandy-to-Ella train route and hike to panoramic mountain viewpoints.',
    inclusions: [
      'Boutique mountain chalet lodging with balcony',
      'Reserved first-class scenic train tickets',
      'Guided trek to Ella Rock and Nine Arch Bridge',
      'Daily Sri Lankan hopper breakfast spreads'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Scenic Train Boarding', description: 'Board the slow blue train, chugging past waterfalls and tea hills.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Nine Arch Bridge Walk', description: 'Walk stone arches of the bridge and watch the train pass through forest.', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Ella Rock Summit Climb', description: 'Trek up Ella Rock through pine forests for views over the valley gap.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Ravana Falls swim', description: 'Swim in cold pools beneath the roaring cascade of Ravana Falls.', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'sri-lanka-yala-safari',
    title: 'Yala Elephant & Leopard Safari Loop',
    destinationId: 'sri-lanka',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 98000,
    moods: ['Wild & Wide', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Get closer to nature. Safari drives in open 4x4 vehicles to track wild leopards, elephants, and crocodiles.',
    inclusions: [
      'Eco-luxury glamping tent stays inside park',
      'Two private open-top 4x4 game safari drives',
      'Guided nature tracks with expert tracker',
      'Daily campfire dinners'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Glamping tent Check-in', description: 'Arrive at your luxury safari camp. Gather by the fire under stars.', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Dawn Leopard Track', description: 'Ride open jeeps in search of the elusive leopards of Yala.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Elephant Lake Watch', description: 'Watch families of wild elephants bathing in the national park lakes.', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Bird Lagoon Track', description: 'Spot hundreds of painted storks and peacocks in salt lagoons.', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // SINGAPORE PACKAGES (3)
  {
    id: 'singapore-modern-sky',
    title: 'Singapore Skyline Luxury Stay',
    destinationId: 'singapore',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 155000,
    moods: ['Soft Luxury', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Experience the city of the future. Skysuite lodging, private botanical dome entries, and dinner over Marina Bay.',
    inclusions: [
      'Five-star Marina Bay view sky suite',
      'Gardens by the Bay flower dome passes',
      'Private sunset Singapore Flyer capsule',
      'Daily curated breakfast buffet'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Sky Suite Welcome', description: 'Check into your suite and look out at the iconic bay architectures.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Gardens by the Bay Dome', description: 'Walk Cloud Forest mist paths and see massive indoor waterfalls.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Private Flyer Dinner', description: 'Enjoy champagne and chocolate dessert in a private capsule.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'singapore-sentosa-beach',
    title: 'Sentosa Island Family Fun Loop',
    destinationId: 'singapore',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 135000,
    moods: ['Family Loop', 'Romance'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'The ultimate island playground. Resorts inside Sentosa, Universal Studios passes, and private yacht swims.',
    inclusions: [
      'Sentosa beachside family villa stays',
      'Universal Studios Singapore VIP tickets',
      'Private catamaran cruise to Southern Islets',
      'Complimentary airport transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Sentosa Beach Arrival', description: 'Check into your beach resort and swim in private ocean pools.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Universal Studios VIP', description: 'Skip lines at all rides and enjoy cartoon mascot meetups.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Southern Islets Yacht', description: 'Sail to St. Johns island for swimming and a private barbecue.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'S.E.A. Aquarium tunnel', description: 'Walk underwater acrylic tunnels to see manta rays and sharks.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'singapore-heritage-foodie',
    title: 'Chinatown Heritage & Hawker Trails',
    destinationId: 'singapore',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 110000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Discover the rich heritage of Singapore. Walk historic Chinatown shophouse streets and taste Michelin hawker recipes.',
    inclusions: [
      'Converted colonial shop house lodging',
      'Private hawker center street food tour',
      'Guided walking map of heritage areas',
      'Daily local kaya toast breakfast'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Heritage Shop House', description: 'Check into your shophouse room in the heart of Chinatown.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Michelin Hawker Feast', description: 'Taste famous soya sauce chicken and Laksa at Maxwell market.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Katong Peranakan Trail', description: 'Explore colorful pastel terrace houses in Katong and taste kueh.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // GREECE PACKAGES (4)
  {
    id: 'greece-santorini-sunset',
    title: 'Santorini Caldera & Cave Living',
    destinationId: 'greece',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 220000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'The ultimate cliffside retreat. Sleep in luxury suites carved directly into the white cliffs of Oia, looking over the caldera.',
    inclusions: [
      'Oia caldera view cave suite with plunge pool',
      'Private sunset catamaran cruise through islands',
      'Private volcanic vineyard wine flight',
      'Complimentary Greek breakfast spreads'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Stark White Cave check-in', description: 'Arrive in Oia. Watch the sunset turn the cliffs a deep gold.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Caldera Catamaran Sail', description: 'Swim in the geothermal hot springs and anchor at Red Beach.', image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Volcanic Soil Vineyards', description: 'Visit a dome vineyard to taste Assyrtiko wines grown in volcanic ash.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Amoudi Bay Dinner', description: 'Dine on fresh grilled octopus at a local waterfront tavern.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'greece-mykonos-beaches',
    title: 'Mykonos Windmills & Beach Clubs',
    destinationId: 'greece',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 245000,
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Cozy coastal living. Spend your days in trendy beach lounges and walk under the famous whitewashed windmills.',
    inclusions: [
      'Luxury sea view design hotel stay',
      'Reserved double daybeds at Nammos beach',
      'Sunset cocktail table in Little Venice',
      'Private airport transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Little Venice check-in', description: 'Unpack in your hotel. Settle down with fresh Greek olives and wine.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Beach Club Sunbathing', description: 'Relax on double daybeds to ambient lounge music at Psarou.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Windmills Walk', description: 'Walk paths underneath iconic wooden-sail whitewashed windmills.', image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Little Venice sunset cocktail', description: 'Dine right where waves splash against stone tavern floors.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'greece-athens-monuments',
    title: 'Athens Ancient Acropolis & Culture',
    destinationId: 'greece',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 175000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Step into the cradle of Western civilization. Acropolis walks, ancient agora ruins, and dinners in Plaka.',
    inclusions: [
      'Plaka district historic boutique hotel stays',
      'Skip-the-line Acropolis and museum tickets',
      'Private guided history walk through ruins',
      'Daily local Greek yogurt breakfast'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Plaka Alleyways Walk', description: 'Arrive in Athens and settle into your neoclassical room in Plaka.', image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Acropolis Temple Dawn', description: 'Avoid the heat with an early climb to the Parthenon gates.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Ancient Agora walk', description: 'Walk through temple ruins and see where philosophers gathered.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Neoclassical Rooftop dinner', description: 'Dine on traditional moussaka looking at the lit Parthenon.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'greece-crete-culinary',
    title: 'Crete Traditional Olive & Wine Trail',
    destinationId: 'greece',
    durationDays: 6,
    durationNights: 5,
    startingPrice: 195000,
    moods: ['Culture Deep-Dive', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Taste the Cretan diet. Olive orchard walks, private cheese-making classes, and quiet harbor hotel stays.',
    inclusions: [
      'Historic Venetian harbor hotel lodging',
      'Private olive oil pressing and sommelier tour',
      'Traditional farmhouse cooking masterclass',
      'Private car rental for island exploration'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Venetian Harbor check-in', description: 'Check into your stone room in the old port of Chania.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Olive Farm harvest', description: 'Walk under 500-year-old olive trees and taste fresh oils.', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Farmhouse Culinary Masterclass', description: 'Roll grape leaves and bake bread in traditional stone ovens.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Elafonisi Pink Sands', description: 'Drive to the shallow crystal waters and pink shell sands of Elafonisi.', image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80' }
    ]
  },

  // MALAYSIA PACKAGES (3)
  {
    id: 'malaysia-kl-skylines',
    title: 'Kuala Lumpur Skyline & Rainforest Loop',
    destinationId: 'malaysia',
    durationDays: 4,
    durationNights: 3,
    startingPrice: 105000,
    moods: ['Soft Luxury', 'Family Loop'],
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Modernity meet nature. Tower suites looking at Petronas Towers, sky walks, and canopy forest canopy loops.',
    inclusions: [
      'Five-star skyline hotel suites stays',
      'Petronas Twin Towers sky bridge entry passes',
      'Guided rainforest canopy bridge walk',
      'All local airport transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Sky Suite check-in', description: 'Arrive in KL. Look out at the lit spires of Petronas towers.', image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Twin Towers Sky Bridge', description: 'Walk the steel bridge connecting towers high above the city.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'KL Eco Forest canopy Walk', description: 'Hike wooden suspension bridges inside the city’s rain forest pocket.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'malaysia-langkawi-lagoon',
    title: 'Langkawi Rainforest & Lagoon Retreat',
    destinationId: 'malaysia',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 125000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Cozy ocean luxury. Private overwater jungle villas, cable cars to mountain skies, and sunset beach picnics.',
    inclusions: [
      'Jungle-view private overwater villas stays',
      'Scenic Langkawi Sky Bridge cable car passes',
      'Private sunset cruise through islets with dinner',
      'Complimentary airport transfers'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'Overwater Villa check-in', description: 'Settle in your luxury villa where forest meets ocean waves.', image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Sky Bridge Cable Car', description: 'Ride glass cars to the mountaintop bridge looking out to Thailand.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Islets Sunset Catamaran', description: 'Sail between rocky cliffs, swim in nets, and enjoy BBQ.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Mangrove Kayak safari', description: 'Kayak past limestone rocks to spot eagles and crabs.', image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80' }
    ]
  },
  {
    id: 'malaysia-penang-heritage',
    title: 'Penang Shophouse Heritage & Food',
    destinationId: 'malaysia',
    durationDays: 5,
    durationNights: 4,
    startingPrice: 108000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    editorialBlurb: 'Walk historic Penang. Converted heritage shophouse rooms, street art walking maps, and Michelin food tastings.',
    inclusions: [
      'Boutique converted Peranakan shophouse lodging',
      'Private street food tasting walk with food guide',
      'Heritage wall art trishaw tour passes',
      'Daily local Nyonya pastries'
    ],
    dayByDayTimeline: [
      { day: 1, title: 'George Town Shophouse', description: 'Check into your beautifully restored shophouse room.', image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80' },
      { day: 2, title: 'Trishaw Street Art', description: 'Ride cycle trishaws past world-famous mural wall paintings.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80' },
      { day: 3, title: 'Hawker Food Tasting', description: 'Taste Char Kway Teow and Laksa in atmospheric night courts.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80' },
      { day: 4, title: 'Kek Lok Si Temple visit', description: 'Visit the majestic multi-tiered temple in the hills.', image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=1200&q=80' }
    ]
  }
];

export const mockSoulStops: SoulStop[] = [
  {
    id: 'maldives-sunset-cruise',
    title: 'Vintage Sunset Boat Sail',
    description: 'Sail Positano waters on a vintage wooden boat with prosecco and local figs under the terracotta skies.',
    price: 12500,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'maldives'
  },
  {
    id: 'maldives-coral-reef-snorkel',
    title: 'Coral Garden Snorkeling Safari',
    description: 'Swim with gentle sea turtles and manta rays in protected UNESCO biosphere channels.',
    price: 11000,
    moods: ['Wild & Wide', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'maldives'
  },
  {
    id: 'bali-ubud-swing',
    title: 'Jungle Canopy Swing & Coffee',
    description: 'Swing high over Ubud forest valley canopies, followed by local civet coffee tastings.',
    price: 4500,
    moods: ['Wild & Wide', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'bali'
  },
  {
    id: 'bali-tirta-empul-purification',
    title: 'Temple Water purification',
    description: 'Join a guide for traditional cleansing in the sacred springs of Tirta Empul temple.',
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
    description: 'Explore the narrow alleys of Hanoi with a food critic, tasting egg coffee and hot bun cha.',
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
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'vietnam'
  },
  {
    id: 'sri-lanka-tea-sommelier',
    title: 'Ceylon Tea estate Sommelier',
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
    id: 'singapore-hawker-feast',
    title: 'Michelin Hawker center Feast',
    description: 'Sip hot laksa and sample famous soya chicken at Chinatown food alleys.',
    price: 4500,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'singapore'
  },
  {
    id: 'greece-caldera-wine',
    title: 'Oia Volcanic Wine flight',
    description: 'Taste Assyrtiko white wines grown in dry volcanic ash soils at cliffside terraces.',
    price: 11000,
    moods: ['Romance', 'Soft Luxury'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'greece'
  },
  {
    id: 'greece-athens-acropolis-sunrise',
    title: 'Acropolis sunrise Guided Walk',
    description: 'Avoid all crowds to explore the Parthenon columns at first morning light.',
    price: 8000,
    moods: ['Culture Deep-Dive', 'Solo Reset'],
    image: 'https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'greece'
  },
  {
    id: 'malaysia-kl-heli-sunset',
    title: 'KL Heliport sunset lounge',
    description: 'Sip cocktails on an active helipad with 360 views of Petronas towers.',
    price: 9000,
    moods: ['Soft Luxury', 'Romance'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    destinationId: 'malaysia'
  },
  {
    id: 'malaysia-penang-cooking',
    title: 'Nyonya Shophouse Cooking class',
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
