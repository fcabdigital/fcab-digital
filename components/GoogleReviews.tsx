'use client';

import Image from 'next/image';

export default function GoogleReviews() {
  return (
    <a
      href="https://share.google/kMfzX08rUjQFSupxK"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all"
    >
      {/* Google Logo */}
      <Image
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google"
        width={80}
        height={27}
        className="h-6 w-auto"
      />

      {/* Rating and Reviews */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-white font-semibold">5.0</span>
        <span className="text-white/80 text-sm">(16 reviews)</span>
      </div>
    </a>
  );
}
