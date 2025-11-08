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
      <h3 className="text-xl font-semibold mb-4">Nearby Destinations</h3>
      <ul className="space-y-3">
        {places.map((place, index) => {
          const parsed = parsePlace(place);
          return (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 bg-current rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <div>
                {parsed.hasLink ? (
                  <Link 
                    href={parsed.href}
                    className="font-semibold text-gray-300 hover:text-gray-300 hover:underline transition-colors"
                  >
                    {parsed.title}
                  </Link>
                ) : (
                  <span className="font-semibold">{parsed.title}</span>
                )}
                {parsed.description && (
                  <span className="text-gray-100 ml-2">- {parsed.description}</span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
