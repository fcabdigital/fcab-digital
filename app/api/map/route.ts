import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  if (!lat || !lng) {
    return NextResponse.json(
      { error: 'Missing latitude or longitude' },
      { status: 400 }
    );
  }

  const token = process.env.MAPBOX_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: 'Mapbox token not configured' },
      { status: 500 }
    );
  }

  const zoom = 13;
  const width = 1200;
  const height = 600;
  const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/${lng},${lat},${zoom},0,0/${width}x${height}@2x?access_token=${token}`;

  return NextResponse.json({ mapUrl });
}
