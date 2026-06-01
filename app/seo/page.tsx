import Link from 'next/link';

export default function SEOPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">SEO Services</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Rank higher on Google and drive qualified organic traffic to your website
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">500+</div>
              <p className="text-dark-600">Keywords Ranked</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">312%</div>
              <p className="text-dark-600">Avg. Traffic Increase</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">3.2x</div>
              <p className="text-dark-600">Avg. Lead Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">SEO Services That Drive Results</h2>
          <p className="text-dark-600 mb-12 max-w-2xl">Search Engine Optimization is the foundation of digital visibility. We help businesses improve their organic search rankings and drive qualified traffic to their websites.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Technical SEO</h3>
              <p className="text-dark-600 mb-4">Fix site structure, speed, indexing issues, and mobile optimization to ensure search engines can crawl and rank your site.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Site audits &amp; crawl analysis</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Core Web Vitals optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>XML sitemaps &amp; robots.txt</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">On-Page Optimization</h3>
              <p className="text-dark-600 mb-4">Optimize your content, metadata, and page structure to improve rankings for your target keywords.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Keyword research &amp; targeting</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Content optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Title &amp; meta tag optimization</span></li>
              </ul>
            </div>

            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Content Strategy</h3>
              <p className="text-dark-600 mb-4">Build a content roadmap that targets high-intent keywords and answers your audience's questions.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Content gap analysis</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Topic clustering</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Content creation</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Link Building &amp; Local SEO</h3>
              <p className="text-dark-600 mb-4">Build authority through earned links and dominate local search results with optimized local profiles.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Backlink strategy</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Google Business Profile optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Local citation building</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our SEO Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="hidden md:flex justify-between items-start mb-12">
              {[
                { num: '1', title: 'Audit', desc: 'Deep dive into your current SEO performance and identify opportunities.' },
                { num: '2', title: 'Strategy', desc: 'Build a roadmap focused on your most valuable keywords and opportunities.' },
                { num: '3', title: 'Execution', desc: 'Optimize on-page, technical, and content factors for ranking improvement.' },
                { num: '4', title: 'Growth', desc: 'Monitor rankings, track traffic, and continuously refine your strategy.' },
              ].map((step, i) => (
                <div key={i} className="flex-1 relative text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center text-3xl font-bold relative z-10">{step.num}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-dark-600 text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="absolute top-10 left-1/2 w-full h-1 bg-gradient-to-r from-primary-300 to-accent-300" style={{ left: 'calc(50% + 40px)', width: 'calc(100% - 80px)' }}></div>
                  )}
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-8">
              {[
                { num: '1', title: 'Audit', desc: 'Deep dive into your current SEO performance and identify opportunities.' },
                { num: '2', title: 'Strategy', desc: 'Build a roadmap focused on your most valuable keywords and opportunities.' },
                { num: '3', title: 'Execution', desc: 'Optimize on-page, technical, and content factors for ranking improvement.' },
                { num: '4', title: 'Growth', desc: 'Monitor rankings, track traffic, and continuously refine your strategy.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">{step.num}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-dark-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Rankings?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how SEO can drive more qualified traffic to your website and grow your business.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Get a Free SEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
