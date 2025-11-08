import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const galleryPath = join(process.cwd(), 'public', 'images', 'hidden-gallery');
    
    // Read all files in the hidden-gallery directory
    const files = await readdir(galleryPath);
    
    // Filter for image files only
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    const images = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    );

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading hidden gallery directory:', error);
    return NextResponse.json({ images: [] });
  }
}