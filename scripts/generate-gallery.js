const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery');
const OUTPUT_FILE = path.join(process.cwd(), 'app', 'gallery', 'GalleryData.ts');

// Function to format caption from filename
// Example: "sunset-at-white-rann.webp" -> "Sunset At White Rann"
function formatCaption(filename) {
  const nameWithoutExt = path.parse(filename).name;
  
  // Remove numbers at end if they look like auto-increments (e.g., photo-1, photo-2)
  // But keep years (e.g., 2023)
  const cleanName = nameWithoutExt.replace(/[-_]\d{1,3}$/, ''); 

  return cleanName
    .replace(/[-_]/g, ' ') // Replace dashes/underscores with spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Title Case
}

// Function to guess category from filename keywords
function guessCategory(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('rann') || lower.includes('desert') || lower.includes('salt') || lower.includes('dhordo')) return 'White Rann';
  if (lower.includes('mandvi') || lower.includes('beach') || lower.includes('sea') || lower.includes('palace')) return 'Mandvi Beach';
  if (lower.includes('bhuj') || lower.includes('prag') || lower.includes('aina') || lower.includes('museum')) return 'Heritage';
  if (lower.includes('temple') || lower.includes('mata') || lower.includes('ashapura') || lower.includes('haji')) return 'Temples';
  if (lower.includes('wild') || lower.includes('bird') || lower.includes('flamingo')) return 'Wildlife';
  if (lower.includes('kalo') || lower.includes('dungar') || lower.includes('hill') || lower.includes('view')) return 'Scenic Views';
  return 'All'; // Default
}

function generateGalleryData() {
  console.log('🚀 Scanning gallery images...');
  
  const files = fs.readdirSync(GALLERY_DIR);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  const galleryItems = files
    .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
    .map(file => {
      const caption = formatCaption(file);
      const category = guessCategory(file);
      
      return {
        src: `/images/gallery/${file}`,
        category: category,
        caption: caption,
        location: category === 'All' ? 'Kutch' : category, // Fallback location
        alt: `${caption} in Kutch`,
        date: "2024" // Default date, user can mass update later if needed
      };
    });

  const fileContent = `export type GalleryItem = {
  src: string;
  category: string;
  caption: string;
  date?: string;
  location?: string;
  alt: string;
};

export const galleryCategories = [
  "All",
  "White Rann",
  "Mandvi Beach",
  "Heritage",
  "Scenic Views",
  "Wildlife",
  "Temples"
];

export const galleryImages: GalleryItem[] = ${JSON.stringify(galleryItems, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, fileContent);
  
  console.log(`✅ Generated GalleryData.ts with ${galleryItems.length} images.`);
  console.log(`   Location: ${OUTPUT_FILE}`);
}

generateGalleryData();
