import Link from 'next/link';

interface NearbyPlacesProps {
  places: string[];
  color: string;
  border: string;
}

export default function NearbyPlaces({ places, color, border }: NearbyPlacesProps) {
  const parsePlace = (placeString: string) => {
    // Extract link, title, and description from the HTML string
    const linkMatch = placeString.match(/<a href='([^']+)'[^>]*>([^<]+)<\/a>/);
    const titleMatch = placeString.match(/<b>([^<]+):<\/b>/);
    const description = placeString.replace(/<[^>]*>/g, '').split(' - ')[1] || '';
    
    if (linkMatch) {
      return {
        hasLink: true,
        href: linkMatch[1],
        title: linkMatch[2].replace(':', ''),
        description: description
      };
    } else if (titleMatch) {
      return {
        hasLink: false,
        href: '',
        title: titleMatch[1].replace(':', ''),
        description: description
      };
    }
    
    return {
      hasLink: false,
      href: '',
      title: placeString.replace(/<[^>]*>/g, '').split(':')[0],
      description: placeString.replace(/<[^>]*>/g, '').split(' - ')[1] || ''
    };
  };

  return (
    <div className={`${color} ${border} rounded-lg p-6`}>
      <h3 className="text-2xl font-sora font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Nearby Destinations</h3>
      <ul className="space-y-4">
        {places.map((place, index) => {
          const parsed = parsePlace(place);
          return (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                {parsed.hasLink ? (
                  <Link 
                    href={parsed.href}
                    className="font-semibold text-white hover:text-blue-200 transition-colors inline-flex items-center group"
                  >
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-400">
                      {parsed.title}
                    </span>
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
                  </Link>
                ) : (
                  <span className="font-semibold text-white">{parsed.title}</span>
                )}
                {parsed.description && (
                  <span className="text-blue-100 ml-2 font-medium">- {parsed.description}</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
