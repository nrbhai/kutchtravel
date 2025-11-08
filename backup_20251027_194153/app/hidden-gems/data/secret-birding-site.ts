import type { HiddenGem } from "./index";

export const secretBirdingSite: HiddenGem = {
  slug: "secret-birding-site",
  title: "The Secret Birding Sanctuary", 
  image: "/images/hidden-gems/secret-birding-site/main.jpg",
  difficulty: "Moderate",
  type: "Wildlife",
  discoveryLevel: "Local Favorite",
  coordinates: { lat: 23.1245, lng: 69.8934 },
  bestTime: "November to February (Winter migration season)",
  warnings: [
    "🌅 EARLY ACCESS ONLY - Site accessible only 5AM-7AM for bird activity",
    "🔇 ABSOLUTE SILENCE - Any noise disturbs rare breeding pairs",
    "📵 NO FLASH PHOTOGRAPHY - Artificial light stresses wildlife", 
    "🚫 RESTRICTED AREA - Maximum 8 visitors per day (advance booking required)",
    "🐍 SNAKE HABITAT - Watch for Russell's vipers in marshy areas"
  ],
  sections: [
    {
      heading: "Ornithological Paradise",
      color: "text-green-800", 
      border: "border-green-200",
      content: "This hidden wetland sanctuary, known only to local guides and serious birders, hosts over 280 species including 15 globally threatened birds. The site remains pristine due to strict access controls and its remote location. During winter migration, the density of rare species here exceeds any other location in Gujarat, making it a pilgrimage site for ornithologists worldwide."
    },
    {
      heading: "Rare Species Sightings",
      color: "text-purple-300",
      border: "border-purple-400", 
      list: [
        "🦆 Dalmatian Pelican - Only reliable site in western India (3-5 individuals)",
        "🦅 Pallas's Fish Eagle - Extremely rare winter visitor",
        "🕊️ Sociable Lapwing - Critically endangered (less than 20 seen annually)",
        "🦢 Lesser White-fronted Goose - First Gujarat record here in 2019",
        "🐦 Siberian Crane - Unconfirmed sightings reported by local guides",
        "🦜 Indian Skimmer - Breeding colony of 40+ pairs (April-June)",
        "🦆 Red-breasted Merganser - Regular winter resident",
        "🦅 Imperial Eagle - Reliable sightings from observation hide"
      ]
    },
    {
      heading: "Conservation Importance", 
      color: "text-purple-800",
      border: "border-purple-200",
      content: "This site represents the last undisturbed wetland habitat in the region, serving as a critical stopover for Central Asian flyway migrants. The local community has voluntarily restricted access to preserve breeding habitats. Recent eBird data confirms this location has the highest species diversity per square kilometer in Gujarat during peak season."
    },
    {
      heading: "Access Protocol",
      color: "text-purple-300",
      border: "border-purple-400",
      content: "Access is strictly controlled through the local birding guide cooperative. Bookings must be made 1 week in advance through designated WhatsApp numbers only. Each group requires a certified local guide who knows individual bird territories and nesting sites. The 2-hour window (5-7 AM) maximizes bird activity while minimizing habitat disturbance."
    },
    {
      heading: "Equipment & Guidelines",
      color: "text-red-800", 
      border: "border-red-200",
      list: [
        "🔭 Binoculars minimum 8x42 recommended (10x50 preferred)",
        "📸 Camera with telephoto lens 300mm+ (no flash/sounds)",
        "👟 Waterproof boots essential for marsh walking",
        "🧥 Camouflage or earth-tone clothing mandatory",
        "📱 eBird app for real-time species documentation",
        "☕ Thermos with hot beverages (cold morning wait)", 
        "🪑 Portable camping chair for hide sessions",
        "📝 Field notebook for rare species documentation",
        "🤫 Hand signals communication only (no talking)"
      ]
    }
  ],
  facts: [
    "🦆 280+ species recorded, including 15 globally threatened birds",
    "📊 Highest species diversity per sq km in Gujarat (eBird data)",
    "🕐 Only accessible 5-7 AM daily (2-hour window)",
    "👥 Maximum 8 visitors per day (advance booking essential)",
    "🏆 Recognized by BirdLife International as Important Bird Area",
    "📅 Best season: November-February (winter migration)",
    "🌍 Critical stopover on Central Asian flyway",
    "🤝 Community-conserved area (local voluntary protection)"
  ],
  mapUrl: "https://maps.google.com/maps?q=23.1245,69.8934&hl=en&z=15&output=embed",
  gallery: [
    { src: "/images/hidden-gems/secret-birding-site/dalmatian-pelican.jpg", caption: "Dalmatian Pelican - only reliable site in western India" },
    { src: "/images/hidden-gems/secret-birding-site/observation-hide.jpg", caption: "Camouflaged observation hide for close wildlife viewing" },
    { src: "/images/hidden-gems/secret-birding-site/morning-mist.jpg", caption: "Dawn mist over the wetlands during peak birding hours" },
    { src: "/images/hidden-gems/secret-birding-site/flamingo-feeding.jpg", caption: "Greater Flamingos feeding in shallow waters" },
    { src: "/images/hidden-gems/secret-birding-site/imperial-eagle.jpg", caption: "Imperial Eagle spotted from the main observation point" },
    { src: "/images/hidden-gems/secret-birding-site/birders-group.jpg", caption: "Small group of serious birders with local guide" },
    { src: "/images/hidden-gems/secret-birding-site/species-board.jpg", caption: "Daily species count board maintained by guides" }
  ]
};