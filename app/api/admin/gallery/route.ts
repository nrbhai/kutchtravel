import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pump = promisify(pipeline);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ success: false, message: 'No files uploaded' }, { status: 400 });
    }

    const publicDir = path.join(process.cwd(), 'public', 'images', 'gallery');
    
    // Ensure directory exists
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const savedFiles = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      // Sanitize filename
      const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const filePath = path.join(publicDir, filename);
      
      fs.writeFileSync(filePath, buffer);
      savedFiles.push(`/images/gallery/${filename}`);
    }

    return NextResponse.json({ success: true, message: 'Files uploaded successfully', files: savedFiles });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
