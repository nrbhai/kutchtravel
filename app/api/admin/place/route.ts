import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { 
      slug, 
      title, 
      shortDescription,
      image, 
      location,
      distanceFromBhuj,
      significance,
      bestTimeToVisit,
      howToReach,
      parentDestination,
      sections, 
      facts, // Maps to 'facts' prop in DestinationTemplate, but Place interface usually lacks it. We'll add it to props.
      gallery, 
      mapUrl 
    } = data;

    if (!slug || !title) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const projectRoot = process.cwd();
    const placesDir = path.join(projectRoot, 'app', 'places');
    const dataDir = path.join(placesDir, 'data');
    const pageDir = path.join(placesDir, slug);

    // 1. Create Data File
    // We map 'facts' to the Place object only if we added it to interface, otherwise we just keep it in the page.
    // For Place data, we store the structured info. 
    // We'll store 'sections' in the data object too now that we updated the interface.
    
    // Convert 'slug' to camelCase for variable name logic
    const variableName = slug.replace(/-([a-z0-9])/g, (g: string) => g[1].toUpperCase()).replace(/^[a-z]/, (g: string) => g.toUpperCase()).replace(/-/g, '');
    // Ensure it starts with lowercase for data variable convention (e.g. 'vandeMataram') - actually current codebase uses mixed.
    // e.g. 'dhrangMekanDada' (camelCase).
    const camelSlug = slug.replace(/-([a-z0-9])/g, (g: string) => g[1].toUpperCase());
    
    const dataContent = `import type { Place } from "./index";

export const ${camelSlug}: Place = {
  slug: "${slug}",
  title: "${title}",
  shortDescription: "${shortDescription.replace(/"/g, '\\"')}",
  image: "${image}",
  location: "${location}",
  distanceFromBhuj: "${distanceFromBhuj}",
  significance: "${significance.replace(/"/g, '\\"')}",
  bestTimeToVisit: "${bestTimeToVisit.replace(/"/g, '\\"')}",
  howToReach: "${howToReach.replace(/"/g, '\\"')}",
  parentDestination: "${parentDestination}",
  mapUrl: "${mapUrl}",
  sections: ${JSON.stringify(sections, null, 2)},
  gallery: ${JSON.stringify(gallery, null, 2)}
};
`;

    const dataFilePath = path.join(dataDir, `${slug}.ts`);
    fs.writeFileSync(dataFilePath, dataContent);

    // 2. Create Page File
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const pageContent = `import DestinationTemplate from "@/app/components/DestinationTemplate";
import { ${camelSlug} } from "@/app/places/data/${slug}";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: \`\${${camelSlug}.title} - KutchTravel\`,
  description: ${camelSlug}.shortDescription,
  openGraph: {
    title: \`\${${camelSlug}.title} - KutchTravel\`,
    description: ${camelSlug}.shortDescription,
    images: [${camelSlug}.image],
  },
};

export default function Page() {
  const structuredData = generateDestinationStructuredData({
    title: ${camelSlug}.title,
    description: ${camelSlug}.significance,
    image: ${camelSlug}.image,
    slug: "places/${slug}",
    facts: ${JSON.stringify(facts)},
    mapUrl: ${camelSlug}.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Places", url: "/places" },
    { name: ${camelSlug}.title }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([structuredData, breadcrumbData]),
        }}
      />
      <DestinationTemplate
        title={${camelSlug}.title}
        image={${camelSlug}.image}
        description={${camelSlug}.significance} // Fallback
        sections={${camelSlug}.sections}
        facts={${JSON.stringify(facts)}}
        mapUrl={${camelSlug}.mapUrl || ""}
        gallery={${camelSlug}.gallery}
      />
    </>
  );
}
`;

    fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);

    // 3. Update Index File
    const indexFilePath = path.join(dataDir, 'index.ts');
    let indexContent = fs.readFileSync(indexFilePath, 'utf-8');

    // Add import
    if (!indexContent.includes(`import { ${camelSlug} }`)) {
        const importStatement = `import { ${camelSlug} } from "./${slug}";\n`;
        const lastImportIndex = indexContent.lastIndexOf('import ');
        const endOfLastImport = indexContent.indexOf('\n', lastImportIndex) + 1;
        indexContent = indexContent.slice(0, endOfLastImport) + importStatement + indexContent.slice(endOfLastImport);
    }

    // Add to array
    if (!indexContent.includes(camelSlug)) {
        const arrayEndIndex = indexContent.lastIndexOf('];');
        indexContent = indexContent.slice(0, arrayEndIndex) + `  ${camelSlug},\n` + indexContent.slice(arrayEndIndex);
    }

    fs.writeFileSync(indexFilePath, indexContent);

    return NextResponse.json({ success: true, message: 'Place created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
