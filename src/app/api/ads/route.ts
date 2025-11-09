import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/ads - Get all ads (only active by default)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const showAll = searchParams.get('all') === 'true';

    const ads = await prisma.ad.findMany({
      where: showAll ? {} : { isActive: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(ads);
  } catch (error) {
    console.error('Error fetching ads:', error);
    return NextResponse.json(
      { error: 'Failed to fetch ads' },
      { status: 500 }
    );
  }
}

// POST /api/ads - Create a new ad
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, imageUrl, targetUrl } = body;

    // Validation
    if (!title || !imageUrl || !targetUrl) {
      return NextResponse.json(
        { error: 'Title, imageUrl, and targetUrl are required' },
        { status: 400 }
      );
    }

    const ad = await prisma.ad.create({
      data: {
        title,
        description: description || null,
        imageUrl,
        targetUrl,
      },
    });

    return NextResponse.json(ad, { status: 201 });
  } catch (error) {
    console.error('Error creating ad:', error);
    return NextResponse.json(
      { error: 'Failed to create ad' },
      { status: 500 }
    );
  }
}
