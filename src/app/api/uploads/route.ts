import { existsSync } from 'fs';
import { readdir, stat } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');

    // Create directory if it doesn't exist
    if (!existsSync(uploadsDir)) {
      return NextResponse.json([]);
    }

    // Read all files in uploads directory
    const files = await readdir(uploadsDir);
    
    // Get file stats
    const fileStats = await Promise.all(
      files.map(async (filename) => {
        const filepath = path.join(uploadsDir, filename);
        const stats = await stat(filepath);
        return {
          filename,
          url: `/uploads/${filename}`,
          size: stats.size,
          createdAt: stats.birthtime,
          modifiedAt: stats.mtime,
        };
      })
    );

    // Sort by creation date (newest first)
    fileStats.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return NextResponse.json(fileStats);
  } catch (error) {
    console.error('Error listing uploads:', error);
    return NextResponse.json(
      { error: 'Failed to list uploads' },
      { status: 500 }
    );
  }
}
