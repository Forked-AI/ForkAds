import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// POST /api/ads/[id]/click - Track a click
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ad = await prisma.ad.update({
      where: { id: params.id },
      data: {
        clicks: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ clicks: ad.clicks });
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json(
      { error: 'Failed to track click' },
      { status: 500 }
    );
  }
}
