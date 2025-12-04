
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function VijayVilasPalace() {
  return (
    <DestinationTemplate
      title="Vijay Vilas Palace"
      image="/images/places/vijay-vilas-palace/main.jpg"
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-indigo-50"
            border="border-l-4 border-indigo-600 text-indigo-800"
            image={{
              src: "/images/places/vijay-vilas-palace/palace-exterior.jpg",
              alt: "Majestic exterior of Vijay Vilas Palace"
            }}
          >
            <p className="leading-relaxed">
              The majestic Vijay Vilas Palace, built in 1920, stands as a stunning example of Rajput architecture by the Arabian Sea. 
              This summer retreat of the Kutch royal family combines elements from Rajput, Mughal, and European styles, creating a unique 
              architectural masterpiece. The palace, set amidst 450 acres of grounds, is not just a historical monument but also a popular 
              filming location for numerous Bollywood movies including the iconic "Hum Dil De Chuke Sanam".
            </p>
          </SectionCard>

          <SectionCard 
            title="Architecture & Design"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/vijay-vilas-palace/architecture.jpg",
              alt: "Intricate architectural details and jali work"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Intricate Jali Work:</b> Exquisite stone carvings and lattice work throughout the palace showcasing masterful craftsmanship</li>
              <li><b>Central Dome:</b> Magnificent high dome with intricate detailing and stunning architectural elements</li>
              <li><b>Courtyards & Balconies:</b> Beautiful open spaces offering panoramic views of the palace grounds and Arabian Sea</li>
              <li><b>Sandstone Construction:</b> Red and white sandstone with distinctive Rajput architectural features</li>
              <li><b>Ornate Details:</b> Elaborate windows, arches, and decorative elements displaying exceptional stonework</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Palace Attractions"
            color="bg-emerald-50"
            border="border-l-4 border-emerald-600 text-emerald-800"
            image={{
              src: "/images/places/vijay-vilas-palace/attractions.jpg",
              alt: "Palace gardens and private beach"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Royal Museum:</b> Display of royal artifacts, memorabilia, and historical treasures from the Kutch royal family</li>
              <li><b>Private Beach:</b> Exclusive beach access with stunning views of the Arabian Sea and pristine coastline</li>
              <li><b>Landscaped Gardens:</b> Beautifully maintained gardens perfect for photography and leisurely walks</li>
              <li><b>Film Location:</b> Famous shooting spot for Bollywood films like "Hum Dil De Chuke Sanam" and "Lagaan"</li>
              <li><b>Rooftop Views:</b> Spectacular sunset and panoramic vistas from the palace rooftop</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Historical Significance"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/vijay-vilas-palace/history.jpg",
              alt: "Historical photographs of the palace"
            }}
          >
            <p className="leading-relaxed">
              Built in 1920 by Maharao Sir Khengarji III as a summer retreat for the royal family, Vijay Vilas Palace represents 
              the grandeur and architectural vision of the Kutch royalty. The palace served as a cool coastal escape from the harsh 
              desert climate of inland Kutch. Today, it stands as a testament to the region's rich heritage and continues to be 
              maintained by the royal family while welcoming visitors from around the world.
            </p>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/vijay-vilas-palace/seasonal.jpg",
              alt: "Palace during the best visiting season"
            }}
          >
            <p className="leading-relaxed">
              October to March is the ideal time to visit when the weather is pleasant and comfortable for exploring the palace 
              and its grounds. Early morning visits (9-11 AM) or late afternoon (4-6 PM) offer the best lighting for photography 
              and cooler temperatures. The sunset views from the palace are particularly spectacular during winter months.
            </p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-rose-50"
            border="border-l-4 border-rose-600 text-rose-800"
            image={{
              src: "/images/places/vijay-vilas-palace/visitor-info.jpg",
              alt: "Visitor facilities and entrance"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Location:</b> 8 km west from Mandvi town center</li>
              <li><b>Opening Hours:</b> 9 AM to 6 PM daily</li>
              <li><b>Entry Fee:</b> Nominal fee for palace entry; additional charges for camera/video</li>
              <li><b>Guided Tours:</b> Available in multiple languages including English, Hindi, and Gujarati</li>
              <li><b>Facilities:</b> Parking, restrooms, and small refreshment area available</li>
              <li><b>Photography:</b> Allowed with camera fee; perfect for wedding and pre-wedding shoots</li>
              <li><b>Duration:</b> Allow 2-3 hours for complete palace and beach exploration</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Built in 1920 as a summer retreat for Maharao Sir Khengarji III",
        "Spread across 450 acres with a private beach",
        "Popular Bollywood filming location for movies like 'Hum Dil De Chuke Sanam'",
        "Combines Rajput, Mughal, and European architectural styles",
        "Features a museum section showcasing royal heritage",
        "Located 8km from Mandvi town center",
        "Offers stunning sunset views over the Arabian Sea"
      ]}
      mapUrl="https://maps.google.com/?q=Vijay+Vilas+Palace,+Mandvi"
      gallery={[]}
    />
  );
}