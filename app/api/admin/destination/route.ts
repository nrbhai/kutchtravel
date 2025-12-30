import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { slug, title, image, sections, facts, gallery, mapUrl } = data;

    if (!slug || !title) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const projectRoot = process.cwd();
    const destinationsDir = path.join(projectRoot, 'app', 'destinations');
    const dataDir = path.join(destinationsDir, 'data');
    const pageDir = path.join(destinationsDir, slug);

    // 1. Create Data File
    const dataContent = `import type { Destination } from "./index";

export const ${slug.replace(/-/g, '')}: Destination = {
  slug: "${slug}",
  title: "${title}",
  image: "${image}",
  sections: ${JSON.stringify(sections, null, 2)},
  facts: ${JSON.stringify(facts, null, 2)},
  mapUrl: "${mapUrl}",
  gallery: ${JSON.stringify(gallery, null, 2)}
};
`;

    const dataFilePath = path.join(dataDir, `${slug}.ts`);
    fs.writeFileSync(dataFilePath, dataContent);

    // 2. Create Page File
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const variableName = slug.replace(/-/g, '');
    const pageContent = `import DestinationTemplate from "@/app/components/DestinationTemplate";
import { ${variableName} } from "@/app/destinations/data/${slug}";
import { generateDestinationStructuredData, generateBreadcrumbStructuredData } from "@/app/utils/seo";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: \`\${${variableName}.title} - KutchTravel\`,
  description: '${sections[0]?.content?.slice(0, 150) || title}',
  openGraph: {
    title: \`\${${variableName}.title} - KutchTravel\`,
    description: '${sections[0]?.content?.slice(0, 150) || title}',
    images: [${variableName}.image],
  },
};

export default function Page() {
  const structuredData = generateDestinationStructuredData({
    title: ${variableName}.title,
    description: "${sections[0]?.content?.slice(0, 150) || ''}",
    image: ${variableName}.image,
    slug: ${variableName}.slug,
    facts: ${variableName}.facts,
    mapUrl: ${variableName}.mapUrl
  });

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: ${variableName}.title }
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
        title={${variableName}.title}
        image={${variableName}.image}
        description={${variableName}.sections[0].content || ""}
        sections={${variableName}.sections}
        facts={${variableName}.facts}
        mapUrl={${variableName}.mapUrl}
        gallery={${variableName}.gallery}
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
    if (!indexContent.includes(`import { ${variableName} }`)) {
        const importStatement = `import { ${variableName} } from "./${slug}";\n`;
        // Insert before the last import or at the top of imports
        const lastImportIndex = indexContent.lastIndexOf('import ');
        const endOfLastImport = indexContent.indexOf('\n', lastImportIndex) + 1;
        indexContent = indexContent.slice(0, endOfLastImport) + importStatement + indexContent.slice(endOfLastImport);
    }

    // Add to array
    if (!indexContent.includes(variableName)) {
        const arrayEndIndex = indexContent.lastIndexOf('];');
        // Find the last item in the array to add a comma if needed, but easier to just append
        // Assuming strict formatting, we can just insert before ];
        indexContent = indexContent.slice(0, arrayEndIndex) + `  ${variableName},\n` + indexContent.slice(arrayEndIndex);
    }

    fs.writeFileSync(indexFilePath, indexContent);

    return NextResponse.json({ success: true, message: 'Destination created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
