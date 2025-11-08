import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');
    
    // Check if directory exists
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json({ images: [] });
    }

    // Read all files from gallery directory
    const files = fs.readdirSync(galleryDir);
    
    // Filter for image files and create full paths
    const imageExtensions = /\.(jpe?g|png|webp|avif|gif)$/i;
    const images = files
      .filter(file => imageExtensions.test(file))
      .map(file => `/images/gallery/${file}`)
      .sort(); // Sort alphabetically

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}