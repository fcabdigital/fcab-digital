import Link from 'next/link';

export default function TechnicalSEOPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Technical SEO</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Fix the foundation so search engines can rank you higher
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">98%</div>
              <p className="text-dark-600">Core Web Vitals Pass Rate</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">2.1s</div>
              <p className="text-dark-600">Avg. Load Time</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">500+</div>
              <p className="text-dark-600">Audits Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Technical SEO Services</h2>
          <p className="text-dark-600 mb-12 max-w-2xl">Technical SEO is the foundation that allows search engines to crawl, index, and rank your website effectively. Without it, even great content won't rank.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Site Speed & Core Web Vitals</h3>
              <p className="text-dark-600 mb-4">Fast sites rank higher and convert better. We optimise for Google's Core Web Vitals metrics.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>LCP, FID, CLS optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Image & code optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Server & CDN configuration</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Crawlability & Indexing</h3>
              <p className="text-dark-600 mb-4">Ensure search engines can find and understand every important page on your site.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>XML sitemap & robots.txt</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Crawl error resolution</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Duplicate content fixes</span></li>
              </ul>
            </div>

            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Structured Data & Schema</h3>
              <p className="text-dark-600 mb-4">Use structured data to help search engines understand your content and show rich results.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Schema markup implementation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Rich snippet optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Validation & testing</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Mobile & Security</h3>
              <p className="text-dark-600 mb-4">Mobile-first indexing and HTTPS security are non-negotiable for modern SEO.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Mobile responsiveness</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>HTTPS & SSL setup</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Security & crawl protection</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Audit Your Technical SEO</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's identify and fix technical issues holding back your rankings. We'll show you exactly what's wrong and how to fix it.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Get a Technical Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
