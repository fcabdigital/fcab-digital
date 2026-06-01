import Link from 'next/link';

export default function YouTubeSEOPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">YouTube SEO</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Get your videos discovered and ranked on the world's second largest search engine
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">50M+</div>
              <p className="text-dark-600">Views Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">450K+</div>
              <p className="text-dark-600">Subscribers Grown</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">280%</div>
              <p className="text-dark-600">Avg. Click-Through Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">YouTube SEO Services</h2>
          <p className="text-dark-600 mb-12 max-w-2xl">YouTube is the second largest search engine. We optimise your video content to be discovered, ranked, and watched by your target audience.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Video Optimisation</h3>
              <p className="text-dark-600 mb-4">Optimise titles, descriptions, tags, and thumbnails so your videos show up when people search.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Keyword research & targeting</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Title & description optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Tag strategy</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Thumbnail & Engagement</h3>
              <p className="text-dark-600 mb-4">Eye-catching thumbnails and optimised content structure that increases click-through rates and watch time.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Thumbnail A/B testing</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Video structure optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Cards & end screen strategy</span></li>
              </ul>
            </div>

            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Channel Optimisation</h3>
              <p className="text-dark-600 mb-4">Build a complete YouTube presence with branded channel design, organised playlists, and consistent uploads.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Channel branding & design</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Playlist organisation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Upload strategy & consistency</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Growth & Promotion</h3>
              <p className="text-dark-600 mb-4">Grow your subscriber base and reach through strategic promotion and cross-channel integration.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>YouTube Ads strategy</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Cross-platform promotion</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Performance analytics</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Grow Your YouTube Presence</h2>
          <p className="text-xl text-white/90 mb-8">
            Get your videos discovered, ranked, and watched by more people. Let's optimise your channel for growth.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Start Optimizing
          </Link>
        </div>
      </section>
    </div>
  );
}
