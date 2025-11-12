export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Visiting the White Rann During Full Moon',
    slug: 'white-rann-full-moon-guide',
    excerpt: 'Experience the magical beauty of the White Rann under a full moon. Learn the best times to visit, what to expect, and insider tips for an unforgettable experience.',
    content: `The White Rann of Kutch transforms into a surreal moonscape during full moon nights, creating one of nature's most spectacular displays. This vast expanse of white salt desert stretches as far as the eye can see, and under the silvery glow of a full moon, it becomes nothing short of magical.

## Best Time to Visit

The ideal time to experience the White Rann during full moon is between November and February, when the weather is pleasant and the salt desert is at its pristine best. The Rann Utsav, a cultural festival celebrating the heritage of Kutch, runs during these months and adds an extra layer of excitement to your visit.

## What to Expect

During full moon nights, the white salt crystals reflect moonlight, creating an ethereal silver-blue glow across the landscape. The experience is so surreal that many visitors describe it as walking on the moon. The clear night sky is perfect for stargazing, and you can see the Milky Way stretching across the horizon.

## Photography Tips

- Bring a tripod for long-exposure shots
- Use manual mode on your camera
- Arrive before sunset to capture the transition from day to night
- The blue hour (just after sunset) offers stunning color contrasts

## What to Bring

- Warm clothing (nights can be cold in winter)
- Comfortable walking shoes
- Water and snacks
- Camera equipment
- Flashlight or headlamp

## Local Tip

Stay at one of the traditional tent accommodations near Dhordo to wake up to sunrise views over the Rann. The local hosts often organize cultural performances and traditional Gujarati meals that enhance the experience.`,
    author: {
      name: 'Priya Patel',
      role: 'Travel Writer'
    },
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Destinations',
    tags: ['White Rann', 'Full Moon', 'Photography', 'Rann Utsav'],
    image: '/images/dhordo-white-rann/rann-1.jpg',
    featured: true
  },
  {
    id: '2',
    title: 'Exploring the Ancient Crafts of Kutch: A Heritage Journey',
    slug: 'ancient-crafts-kutch-heritage',
    excerpt: 'Discover the rich artisan traditions of Kutch, from intricate Rogan art to vibrant Bandhani tie-dye. Meet the craftspeople keeping these centuries-old traditions alive.',
    content: `Kutch is not just a geographical wonder; it's a living museum of India's richest craft traditions. For centuries, the artisans of this region have perfected their skills, passing them down through generations, creating masterpieces that tell the story of their culture and heritage.

## Rogan Art: Painting with Oil

Rogan art is perhaps one of the most unique crafts you'll find in Kutch. Using thick, brightly colored castor oil paint, artisans create intricate designs on fabric. The paint is carefully heated and then applied using a metal rod, creating symmetrical patterns that are nothing short of mesmerizing.

The Abdul Gafur Khatri family in Nirona village are among the last practitioners of this 400-year-old art form. Visiting their workshop offers insight into the painstaking process and dedication required to keep this tradition alive.

## Bandhani: The Art of Tie-Dye

The vibrant Bandhani textiles of Kutch are instantly recognizable. This intricate tie-dye technique involves tying thousands of tiny knots in the fabric before dyeing, creating beautiful patterns of dots and shapes. A single sari can have over 100,000 knots, each tied by hand.

## Ajrakh Block Printing

This ancient craft uses natural dyes and hand-carved wooden blocks to create stunning geometric patterns. The process is labor-intensive, often taking several weeks to complete a single piece. The blue and red patterns are iconic to the region.

## Where to Visit

- **Bhujodi Village**: Famous for weaving
- **Nirona Village**: Rogan art and bell making
- **Ajrakhpur**: Ajrakh block printing
- **Bhuj**: Multiple craft villages and markets

## Supporting Local Artisans

When you purchase crafts directly from artisans, you're not just buying a souvenir; you're supporting families and helping preserve endangered art forms. Many villages now offer workshops where tourists can try their hand at these crafts.`,
    author: {
      name: 'Rajesh Kumar',
      role: 'Cultural Historian'
    },
    date: '2025-01-10',
    readTime: '10 min read',
    category: 'Culture',
    tags: ['Crafts', 'Heritage', 'Artisans', 'Culture'],
    image: '/images/bhuj/craft-1.jpg',
    featured: true
  },
  {
    id: '3',
    title: '5 Hidden Gems in Kutch You Must Visit',
    slug: 'hidden-gems-kutch',
    excerpt: 'Beyond the famous attractions, Kutch hides incredible treasures waiting to be discovered. Explore these lesser-known destinations for an authentic experience.',
    content: `While the White Rann and Bhuj attract most tourists, Kutch has numerous hidden gems that offer equally breathtaking experiences without the crowds.

## 1. Chhari Dhand Wetland

This seasonal wetland becomes a paradise for migratory birds during winter. Flamingos, pelicans, and countless other species make this their temporary home. The sight of thousands of flamingos against the backdrop of the desert is unforgettable.

## 2. Koteshwar Temple

Located at the westernmost point of India, this ancient Shiva temple sits right on the Arabian Sea coast. The dramatic coastline, the spiritual atmosphere, and the fact that you're standing at India's edge make this a profound experience.

## 3. Fulay Island

Accessible during low tide, this small island near Mandvi offers pristine beaches and complete tranquility. It's perfect for a peaceful day trip with swimming and beachcombing.

## 4. India Bridge (Pul of Bharat)

This 250-year-old engineering marvel was built using only locally available materials. The structure has withstood earthquakes and floods, a testament to traditional construction techniques.

## 5. Narayan Sarovar

One of Hinduism's five sacred lakes, Narayan Sarovar is a spiritual and scenic destination. The lake is surrounded by temples and offers a peaceful retreat from busy tourist spots.

## Planning Your Visit

- Rent a private vehicle to reach these remote locations
- Carry water, snacks, and sun protection
- Respect local customs at religious sites
- Best visited during October to March
- Consider hiring a local guide for cultural context`,
    author: {
      name: 'Anjali Desai',
      role: 'Adventure Traveler'
    },
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Travel Tips',
    tags: ['Hidden Gems', 'Off-beat', 'Adventure', 'Nature'],
    image: '/images/dhordo/landscape-2.jpg',
    featured: true
  },
  {
    id: '4',
    title: 'A Food Lover\'s Guide to Kutchi Cuisine',
    slug: 'kutchi-cuisine-food-guide',
    excerpt: 'From spicy Dabeli to sweet Mawa Kachori, explore the unique flavors of Kutchi cuisine that will tantalize your taste buds.',
    content: `Kutchi cuisine is a delightful blend of flavors, influenced by the region's desert climate, pastoral communities, and rich cultural heritage. The food here is designed to last in hot weather while providing maximum nutrition and energy.

## Must-Try Dishes

### Dabeli
This iconic street food consists of a spicy potato filling mixed with pomegranate, roasted peanuts, and special dabeli masala, served in a pav (bun). The sweet, spicy, and tangy flavors create an explosion of taste.

### Khichdi
The Kutchi version of this comfort food is different from what you'll find elsewhere in India. Made with rice, lentils, and vegetables, it's often served with kadhi (yogurt curry) and papad.

### Bajra Rotla with Ringan no Oro
Pearl millet flatbread served with roasted eggplant curry and buttermilk is a traditional meal that sustained the pastoral communities. It's simple, nutritious, and delicious.

### Kutchi Sweets

- **Mawa Kachori**: A sweet pastry filled with milk solids and dry fruits
- **Gulab Pak**: A unique sweet made from rose petals and milk
- **Mohanthal**: A gram flour fudge with nuts

## Where to Eat

- Local dhabas on the highway offer authentic flavors
- Bhuj city has several restaurants serving traditional thalis
- During Rann Utsav, the food stalls offer a variety of local dishes
- Many homestays provide home-cooked traditional meals

## Cultural Significance

Food in Kutch is deeply connected to the lifestyle of its people. The use of dry lentils, minimal water in cooking, and preservation techniques all reflect adaptations to the desert environment.

## Vegetarian Paradise

Due to cultural and religious practices, most Kutchi cuisine is vegetarian, making it a paradise for vegetarian food lovers seeking unique and flavorful dishes.`,
    author: {
      name: 'Meera Shah',
      role: 'Food Blogger'
    },
    date: '2024-12-28',
    readTime: '6 min read',
    category: 'Food',
    tags: ['Food', 'Cuisine', 'Culture', 'Local'],
    image: '/images/bhuj/market-1.jpg'
  },
  {
    id: '5',
    title: 'Photography Guide: Capturing the Colors of Kutch',
    slug: 'photography-guide-kutch',
    excerpt: 'Master the art of photographing Kutch\'s diverse landscapes, from the white desert to colorful markets and stunning sunsets.',
    content: `Kutch is a photographer's dream destination. The stark white desert, vibrant traditional attire, colorful crafts, and dramatic landscapes offer endless opportunities for stunning photography.

## Best Photography Locations

### The White Rann
- **Golden Hour**: Arrive before sunrise or during sunset
- **Blue Hour**: The time just after sunset creates magical blue tones
- **Full Moon Nights**: Ethereal silver landscapes

### Bhuj Markets
- Colorful textiles and crafts
- Street life and local people
- Traditional architecture

### Villages
- Authentic rural life
- Artisans at work
- Traditional homes (seek permission before photographing people)

## Technical Tips

### For Desert Photography
- Use polarizing filters to reduce glare
- Protect your gear from dust and sand
- Early morning and late afternoon offer the best light
- Use a tripod for long exposures

### For Cultural Photography
- Respect local customs and ask permission
- Capture candid moments during festivals
- Focus on details: hands working on crafts, colorful fabrics
- Use natural light in workshops

### For Wildlife Photography
- Bring telephoto lenses (minimum 200mm)
- Visit wetlands during early morning
- Patience is key for bird photography
- Maintain a safe distance from wildlife

## Drone Photography

Many areas allow drone photography, but check regulations, especially near borders and military zones. The White Rann looks spectacular from above.

## Ethical Photography

- Always ask permission before photographing people
- Don't disturb wildlife or nesting birds
- Respect religious sites and ceremonies
- Consider compensating artisans if photographing their work

## Best Season for Photography

October to February offers clear skies, good visibility, and cultural festivals. The light is softer, and the weather is pleasant for outdoor photography.`,
    author: {
      name: 'Vikram Singh',
      role: 'Professional Photographer'
    },
    date: '2024-12-20',
    readTime: '9 min read',
    category: 'Photography',
    tags: ['Photography', 'Travel Tips', 'Landscape', 'Culture'],
    image: '/images/kalo-dungar/view-1.jpg'
  },
  {
    id: '6',
    title: 'Rann Utsav 2025: Complete Festival Guide',
    slug: 'rann-utsav-2025-guide',
    excerpt: 'Everything you need to know about attending the spectacular Rann Utsav festival - accommodation, activities, and cultural experiences.',
    content: `The Rann Utsav is Gujarat's most spectacular cultural festival, celebrating the unique heritage of Kutch against the stunning backdrop of the White Rann.

## Festival Overview

Running from November to February, the Rann Utsav transforms the White Desert into a vibrant carnival of culture, crafts, music, and tradition. The government sets up a massive tent city with all modern amenities while maintaining the rustic charm.

## What to Experience

### Cultural Performances
- Traditional folk dances every evening
- Live music performances
- Fire dance demonstrations
- Puppetry shows

### Adventure Activities
- Camel rides across the Rann
- ATV rides
- Paramotoring (weather permitting)
- Hot air balloon rides

### Shopping
- Authentic handicrafts directly from artisans
- Traditional textiles and embroidery
- Jewelry and accessories
- Home decor items

### Food
- Traditional Gujarati thalis
- Street food stalls
- Regional specialties
- Modern cafes with local fusion

## Accommodation Options

### Premium Tents
- AC tents with attached bathrooms
- Modern amenities
- Higher rates but maximum comfort

### Standard Tents
- Clean and comfortable
- Shared facilities
- Budget-friendly option

### Luxury Resorts
- Outside the festival area
- Premium experience
- Private transport to festival

## Booking Tips

- Book at least 2-3 months in advance
- Weekends and full moon nights fill up fastest
- Consider weekday visits for better rates and fewer crowds
- Package deals often include transfers and meals

## Getting There

- Nearest airport: Bhuj (75 km)
- Well-connected by road
- Special buses during festival season
- Taxi services available

## What to Pack

- Warm clothing for evenings
- Comfortable walking shoes
- Sunscreen and sunglasses
- Camera equipment
- Power bank
- Flashlight

## Pro Tips

- Arrive before sunset to capture golden hour
- Visit artisan villages during the day
- Try local food at the festival
- Attend cultural performances
- Book full moon night well in advance
- Carry cash as card facilities may be limited`,
    author: {
      name: 'Karan Mehta',
      role: 'Festival Guide'
    },
    date: '2024-12-15',
    readTime: '11 min read',
    category: 'Events',
    tags: ['Rann Utsav', 'Festival', 'Events', 'Culture'],
    image: '/images/dhordo-white-rann/rann-2.jpg'
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export const categories = [
  'All',
  'Destinations',
  'Culture',
  'Travel Tips',
  'Food',
  'Photography',
  'Events'
];
