
import DestinationTemplate from "@/app/components/DestinationTemplate";
import SectionCard from "@/app/components/SectionCard";

export default function ShyamjiKrishnavarma() {
  return (
    <DestinationTemplate
      title="Shyamji Krishna Varma Memorial - Kranti Tirth"
      image="/images/places/shyamji-krishnavarma/main.jpg"
      description={
        <div className="space-y-8">
          <SectionCard 
            title="Overview"
            color="bg-red-50"
            border="border-l-4 border-red-600 text-red-800"
            image={{
              src: "/images/places/shyamji-krishnavarma/memorial-exterior.jpg",
              alt: "Kranti Tirth memorial exterior"
            }}
          >
            <p className="leading-relaxed">
              The Kranti Tirth (Sacred Place of Revolution) is a magnificent memorial dedicated to Shyamji Krishna Varma, 
              a prominent Indian independence activist, lawyer, journalist, and scholar. This modern architectural marvel 
              serves as both a tribute to his life and a center for learning about India's independence movement. The memorial 
              complex includes a replica of India House from London and various galleries showcasing the freedom struggle, 
              making it an important educational and patriotic destination.
            </p>
          </SectionCard>

          <SectionCard 
            title="About Shyamji Krishna Varma"
            color="bg-amber-50"
            border="border-l-4 border-amber-600 text-amber-800"
            image={{
              src: "/images/places/shyamji-krishnavarma/biography.jpg",
              alt: "Life and works of Shyamji Krishna Varma"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Life Span:</b> Born in 1857 in Mandvi, passed away in 1930 in Geneva, Switzerland</li>
              <li><b>Scholar & Lawyer:</b> Studied Sanskrit and law, became a distinguished scholar and barrister</li>
              <li><b>Freedom Fighter:</b> Established India House in London as a hub for Indian revolutionaries</li>
              <li><b>Journalist:</b> Founded "The Indian Sociologist" to spread revolutionary ideas</li>
              <li><b>Scholarships:</b> Created scholarships for Indian students to study in England</li>
              <li><b>Legacy:</b> His ashes were brought back to India in 2003 and enshrined at this memorial</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Memorial Features"
            color="bg-blue-50"
            border="border-l-4 border-blue-600 text-blue-800"
            image={{
              src: "/images/places/shyamji-krishnavarma/india-house-replica.jpg",
              alt: "India House replica at the memorial"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>India House Replica:</b> Faithful recreation of the London building that served as revolutionary headquarters</li>
              <li><b>Modern Museum:</b> Interactive displays and multimedia presentations about the freedom struggle</li>
              <li><b>Memorial Gallery:</b> Historical photographs, documents, and artifacts from Shyamji's life</li>
              <li><b>Beautiful Gardens:</b> Well-maintained landscaping with patriotic themes and sculptures</li>
              <li><b>Educational Center:</b> Resources for students, researchers, and history enthusiasts</li>
              <li><b>Memorial Hall:</b> Space for cultural events and patriotic programs</li>
            </ul>
          </SectionCard>

          <SectionCard 
            title="Historical Significance"
            color="bg-green-50"
            border="border-l-4 border-green-600 text-green-800"
            image={{
              src: "/images/places/shyamji-krishnavarma/historical-exhibits.jpg",
              alt: "Historical exhibits and documents"
            }}
          >
            <p className="leading-relaxed">
              Shyamji Krishna Varma played a crucial role in India's independence movement from abroad. His India House 
              in London became a meeting place for revolutionary leaders including Vinayak Damodar Savarkar, Bhikaji Cama, 
              and Lala Hardayal. He provided scholarships to Indian students and used his publications to spread revolutionary 
              ideas. The memorial stands as a testament to his unwavering commitment to India's freedom and his significant 
              contributions to the independence movement.
            </p>
          </SectionCard>

          <SectionCard 
            title="Best Time to Visit"
            color="bg-purple-50"
            border="border-l-4 border-purple-600 text-purple-800"
            image={{
              src: "/images/places/shyamji-krishnavarma/seasonal.jpg",
              alt: "Memorial during the best visiting season"
            }}
          >
            <p className="leading-relaxed">
              October to March offers the most comfortable weather for visiting. The memorial is particularly meaningful 
              to visit on national holidays like Independence Day (August 15) and Republic Day (January 26) when special 
              programs and exhibitions are organized. Weekday mornings are generally less crowded, allowing for a more 
              contemplative experience.
            </p>
          </SectionCard>

          <SectionCard 
            title="Visitor Information"
            color="bg-cyan-50"
            border="border-l-4 border-cyan-600 text-cyan-800"
            image={{
              src: "/images/places/shyamji-krishnavarma/visitor-facilities.jpg",
              alt: "Visitor facilities and entrance"
            }}
          >
            <ul className="list-none space-y-4">
              <li><b>Location:</b> 3 km from Mandvi town center</li>
              <li><b>Opening Hours:</b> 9 AM to 6 PM (Tuesday to Sunday), Closed on Mondays</li>
              <li><b>Entry Fee:</b> Free admission for all visitors</li>
              <li><b>Guided Tours:</b> Available in Gujarati, Hindi, and English</li>
              <li><b>Photography:</b> Permitted without flash inside the museum</li>
              <li><b>Facilities:</b> Parking, restrooms, drinking water, and bookshop</li>
              <li><b>Duration:</b> Allow 1-2 hours for complete exploration</li>
              <li><b>Accessibility:</b> Wheelchair accessible throughout the complex</li>
            </ul>
          </SectionCard>
        </div>
      }
      facts={[
        "Dedicated to freedom fighter Shyamji Krishna Varma (1857-1930)",
        "Features a replica of India House from London",
        "Houses important historical documents and artifacts",
        "Popular educational destination for schools and colleges",
        "Free admission for all visitors",
        "Located 3km from Mandvi town center",
        "Ashes of Shyamji Krishna Varma enshrined here since 2003"
      ]}
      mapUrl="https://maps.google.com/?q=Shyamji+Krishna+Varma+Memorial,+Mandvi"
      gallery={[]}
    />
  );
}