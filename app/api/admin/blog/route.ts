import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { title, slug, excerpt, content, author, date, readTime, category, tags, image, featured } = data;

    if (!slug || !title) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const projectRoot = process.cwd();
    const blogDataPath = path.join(projectRoot, 'app', 'blog', 'data', 'index.ts');
    
    // Construct new post object
    const newPost = {
      id: Date.now().toString(), // Simple ID generation
      title,
      slug,
      excerpt,
      content,
      author: {
        name: author?.name || 'Admin',
        role: author?.role || 'Editor'
      },
      date: date || new Date().toISOString().split('T')[0],
      readTime: readTime || '5 min read',
      category: category || 'General',
      tags: tags || [],
      image,
      featured: featured || false
    };

    let fileContent = fs.readFileSync(blogDataPath, 'utf-8');

    // We need to inject this object into the array.
    // Finding the start of the array
    const startMarker = 'export const blogPosts: BlogPost[] = [';
    const startIndex = fileContent.indexOf(startMarker);

    if (startIndex === -1) {
       return NextResponse.json({ success: false, message: 'Could not find blogPosts array' }, { status: 500 });
    }

    const insertIndex = startIndex + startMarker.length;
    
    // Format the new post as a string. 
    // We use JSON.stringify but then might want to fix generic formatting if needed, but strict JSON is valid TS.
    const newPostString = `\n  ${JSON.stringify(newPost, null, 2)},`;

    const newFileContent = fileContent.slice(0, insertIndex) + newPostString + fileContent.slice(insertIndex);

    fs.writeFileSync(blogDataPath, newFileContent);

    return NextResponse.json({ success: true, message: 'Blog post created successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
