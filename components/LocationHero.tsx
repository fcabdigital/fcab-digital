import Link from 'next/link';
import { generateMapUrl } from '@/data/locations';

interface LocationHeroProps {
  town: string;
  lat: number;
  lng: number;
}

export default function LocationHero({ town, lat, lng }: LocationHeroProps) {
  const mapUrl = generateMapUrl(lat, lng);

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center overflow-hidden">
      {/* Mapbox Background */}
      <img
        src={mapUrl}
        alt={`Map of ${town}`}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-900/60"></div>

      <div className="container relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">Digital Marketing for {town}</h1>
        <p className="text-2xl text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Local SEO, Google Ads & Web Design
        </p>
        <p className="text-lg text-white/80 mb-12 max-w-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {town} businesses need marketing that works locally. We drive traffic, leads, and sales using SEO, paid ads, and conversion-focused design.
        </p>
        <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link href="/contact-us" className="btn bg-white text-primary-600 hover:bg-dark-100 text-lg">
            Get Your Free Audit
          </Link>
          <a href="#services" className="btn border-2 border-white text-white hover:bg-white/10 text-lg">
            See Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
