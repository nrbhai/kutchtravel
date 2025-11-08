const fs = require('fs');
const path = require('path');

const destinationsDir = path.join(__dirname, '..', 'app', 'destinations', 'data');

// Function to get image path based on section and destination
function getSectionImage(section, destination) {
  const heading = section.heading.toLowerCase();
  const slug = destination.slug;
  
  const imageMap = {
    overview: {
      src: `/images/${slug}/overview.jpg`,
      alt: `Overview of ${destination.title}`
    },
    history: {
      src: `/images/${slug}/history.jpg`,
      alt: `Historical view of ${destination.title}`
    },
    'places of interest': {
      src: `/images/${slug}/attractions.jpg`,
      alt: `Main attractions in ${destination.title}`
    },
    'food & crafts': {
      src: `/images/${slug}/crafts.jpg`,
      alt: `Traditional crafts and cuisine of ${destination.title}`
    },
    'nearby destinations': {
      src: `/images/${slug}/nearby.jpg`,
      alt: `Nearby attractions around ${destination.title}`
    },
    'how to reach': {
      src: `/images/${slug}/transport.jpg`,
      alt: `Transportation hub in ${destination.title}`
    },
    'travel information': {
      src: `/images/${slug}/info.jpg`,
      alt: `Travel information about ${destination.title}`
    },
    'best time to visit': {
      src: `/images/${slug}/season.jpg`,
      alt: `Best season to visit ${destination.title}`
    },
    'accommodation & local tips': {
      src: `/images/${slug}/accommodation.jpg`,
      alt: `Accommodation options in ${destination.title}`
    }
  };

  return imageMap[heading];
}

// Read all .ts files in the destinations/data directory
fs.readdir(destinationsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      const filePath = path.join(destinationsDir, file);
      
      // Read file content
      let content = fs.readFileSync(filePath, 'utf8');
      
      try {
        // Find sections array in the content
        const sectionsMatch = content.match(/sections:\s*\[([\s\S]*?)\s*\],\s*facts/);
        if (sectionsMatch) {
          const sectionsContent = sectionsMatch[1];
          
          // Get destination slug from content
          const slugMatch = content.match(/slug:\s*"([^"]+)"/);
          const titleMatch = content.match(/title:\s*"([^"]+)"/);
          
          if (slugMatch && titleMatch) {
            const destination = {
              slug: slugMatch[1],
              title: titleMatch[1]
            };
            
            // Process each section
            const updatedSections = sectionsContent.replace(
              /({[\s\S]*?heading:\s*"([^"]+)"[\s\S]*?)(\s*})/g,
              (match, start, heading, end) => {
                const section = { heading };
                const image = getSectionImage(section, destination);
                
                // Check if section already has an image
                if (image && !match.includes('image:')) {
                  // Add image before the closing brace
                  return `${start},
      image: {
        src: "${image.src}",
        alt: "${image.alt}"
      }${end}`;
                }
                return match;
              }
            );
            
            // Replace the old sections content with the updated one
            content = content.replace(sectionsContent, updatedSections);
            
            // Write updated content back to file
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated sections with images in ${file}`);
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  });
});