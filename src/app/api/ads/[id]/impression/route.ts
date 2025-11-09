import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/ads/[id]/impression - Track an impression
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ad = await prisma.ad.update({
      where: { id: params.id },
      data: {
        impressions: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ impressions: ad.impressions });
  } catch (error) {
    console.error('Error tracking impression:', error);
    return NextResponse.json(
      { error: 'Failed to track impression' },
      { status: 500 }
    );
  }
}
