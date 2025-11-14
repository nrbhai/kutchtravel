import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery');
    
    // Check if directory exists
    if (!fs.existsSync(galleryPath)) {
      return NextResponse.json({ images: [] });
    }

    // Read all files from the gallery directory
    const files = fs.readdirSync(galleryPath);
    
    // Filter for image files and create full paths
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      })
      .map(file => `/images/gallery/${file}`)
      .sort(); // Sort alphabetically

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ images: [], error: 'Failed to read gallery images' }, { status: 500 });
  }
}
