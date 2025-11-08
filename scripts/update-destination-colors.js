const fs = require('fs');
const path = require('path');

const destinationsDir = path.join(__dirname, '..', 'app', 'destinations', 'data');

// Color mappings
const colorReplacements = [
  // Overview section
  {
    from: /color: "#f0f8ff",\s+border: "border-l-4 border-gray-500 text-gray-700"/g,
    to: 'color: "bg-blue-50",\n      border: "border-l-4 border-blue-600 text-blue-800"'
  },
  // History section
  {
    from: /color: "#f5f0ff",\s+border: "border-l-4 border-gray-500 text-gray-700"/g,
    to: 'color: "bg-purple-50",\n      border: "border-l-4 border-purple-600 text-purple-800"'
  },
  // Places of Interest section
  {
    from: /color: "#fff8f0",\s+border: "border-l-4 border-gray-500 text-gray-300"/g,
    to: 'color: "bg-amber-50",\n      border: "border-l-4 border-amber-600 text-amber-800"'
  },
  // Food & Crafts section
  {
    from: /color: "#f0fff4",\s+border: "border-l-4 border-gray-500 text-gray-700"/g,
    to: 'color: "bg-emerald-50",\n      border: "border-l-4 border-emerald-600 text-emerald-800"'
  },
  // Nearby Destinations section
  {
    from: /color: "bg-gradient-to-br from-blue-50 to-indigo-50",\s+border: "border-l-4 border-blue-400 text-gray-800"/g,
    to: 'color: "bg-indigo-50",\n      border: "border-l-4 border-indigo-600 text-indigo-800"'
  },
  // How to Reach section
  {
    from: /color: "#f0f5ff",\s+border: "border-l-4 border-gray-500 text-gray-300"/g,
    to: 'color: "bg-cyan-50",\n      border: "border-l-4 border-cyan-600 text-cyan-800"'
  },
  // Travel Information section
  {
    from: /color: "#fff5f0",\s+border: "border-l-4 border-gray-500 text-gray-700"/g,
    to: 'color: "bg-rose-50",\n      border: "border-l-4 border-rose-600 text-rose-800"'
  },
  // Best Time to Visit section
  {
    from: /color: "#f5fff0",\s+border: "border-l-4 border-gray-500 text-gray-700"/g,
    to: 'color: "bg-teal-50",\n      border: "border-l-4 border-teal-600 text-teal-800"'
  },
  // Accommodation section
  {
    from: /color: "#f0fff5",\s+border: "border-l-4 border-gray-500 text-gray-700"/g,
    to: 'color: "bg-lime-50",\n      border: "border-l-4 border-lime-600 text-lime-800"'
  }
];

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
      
      // Apply all color replacements
      colorReplacements.forEach(({ from, to }) => {
        content = content.replace(from, to);
      });
      
      // Write updated content back to file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated colors in ${file}`);
    }
  });
});