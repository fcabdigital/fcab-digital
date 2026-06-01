import Link from 'next/link';

export default function GoogleAdsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Google Ads & PPC</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Get immediate visibility and drive qualified leads with expertly managed campaigns
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">£2M+</div>
              <p className="text-dark-600">Ad Spend Managed</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">4.2x</div>
              <p className="text-dark-600">Avg. ROAS</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">68%</div>
              <p className="text-dark-600">Avg. Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Pay-Per-Click Services That Deliver</h2>
          <p className="text-dark-600 mb-12 max-w-2xl">Pay-per-click advertising delivers immediate results. We create and manage Google Ads campaigns that generate qualified leads and sales for your business.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Search Ads</h3>
              <p className="text-dark-600 mb-4">Target high-intent keywords and appear at the top of Google search results when people are actively searching for your services.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Keyword research &amp; bidding strategy</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Ad copy optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Landing page optimization</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Display &amp; Remarketing</h3>
              <p className="text-dark-600 mb-4">Stay visible across the web and re-engage people who have visited your site but haven't converted yet.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Audience targeting</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Custom audience creation</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Cross-device remarketing</span></li>
              </ul>
            </div>

            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Shopping Ads</h3>
              <p className="text-dark-600 mb-4">Showcase your products directly in Google search results with rich images, prices, and reviews.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Product feed optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Bid strategy optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Inventory sync management</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">YouTube &amp; Video Ads</h3>
              <p className="text-dark-600 mb-4">Reach your audience through engaging video content on YouTube and across the Google Display Network.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>In-stream &amp; discovery ads</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Video audience targeting</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Performance analytics</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our PPC Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="hidden md:flex justify-between items-start mb-12">
              {[
                { num: '1', title: 'Audit', desc: 'Review your current campaigns and identify gaps, wasted spend, and opportunities.' },
                { num: '2', title: 'Strategy', desc: 'Design a campaign roadmap focused on your business goals and target audience.' },
                { num: '3', title: 'Execution', desc: 'Build and launch optimized campaigns across search, display, and video channels.' },
                { num: '4', title: 'Optimization', desc: 'Continuously test, refine, and improve to maximize ROI and reduce cost per lead.' },
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
                { num: '1', title: 'Audit', desc: 'Review your current campaigns and identify gaps, wasted spend, and opportunities.' },
                { num: '2', title: 'Strategy', desc: 'Design a campaign roadmap focused on your business goals and target audience.' },
                { num: '3', title: 'Execution', desc: 'Build and launch optimized campaigns across search, display, and video channels.' },
                { num: '4', title: 'Optimization', desc: 'Continuously test, refine, and improve to maximize ROI and reduce cost per lead.' },
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
          <h2 className="text-4xl font-bold mb-6">Let's Grow Your Ad Performance</h2>
          <p className="text-xl text-white/90 mb-8">
            We'll audit your current campaigns and show you how to improve your ROI and drive more qualified leads.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Schedule a Campaign Review
          </Link>
        </div>
      </section>
    </div>
  );
}
