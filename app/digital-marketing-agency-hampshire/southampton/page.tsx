import Link from 'next/link';

export default function CityPage() {
  const city = 'Southampton';
  const county = 'Hampshire';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">{city}</h1>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Digital Marketing Agency Serving {city}
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We help {city} businesses dominate their local market. Get found on Google, generate qualified leads, and grow your revenue with our proven digital marketing strategies.
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

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">50+</div>
              <p className="text-dark-600">Local Businesses Served</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">156%</div>
              <p className="text-dark-600">Avg. ROI Increase</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">98%</div>
              <p className="text-dark-600">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">What We Do For {city} Businesses</h2>
          <p className="text-center text-dark-600 mb-16 max-w-2xl mx-auto">
            Complete digital marketing solutions to help you reach more customers and grow your bottom line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover-lift">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">SEO & Organic Search</h3>
              <p className="text-dark-600 mb-4">Rank higher in Google and get discovered by customers actively searching for your services in {city}.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Local SEO optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Technical SEO fixes</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Content strategy</span></li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl border border-accent-200 hover-lift">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-3">Google Ads & PPC</h3>
              <p className="text-dark-600 mb-4">Get immediate visibility and drive qualified leads with expertly managed Google Ads campaigns.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Campaign setup & optimisation</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>ROI-focused management</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>A/B testing</span></li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover-lift">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-3">Web Design & Development</h3>
              <p className="text-dark-600 mb-4">Modern, fast, conversion-focused websites that represent your {city} business and drive sales.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Responsive design</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Lightning-fast performance</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Conversion optimisation</span></li>
              </ul>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl border border-accent-200 hover-lift">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3">CRM Implementation</h3>
              <p className="text-dark-600 mb-4">Organize customer relationships and automate your sales process to close more deals faster.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>HubSpot setup</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Sales automation</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Team training</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Why {city} Businesses Choose FCAB</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-primary-500 hover-lift">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Local Market Expertise</h3>
              <p className="text-dark-200">We understand {city}'s market, your competition, and what drives customers in your area. We're not a generic agency applying cookie-cutter solutions.</p>
            </div>
            <div className="p-8 border-l-4 border-accent-500 hover-lift">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-dark-200">Dozens of {city} businesses have grown with our help. We focus on ROI first—every strategy and tactic is measured against your business goals.</p>
            </div>
            <div className="p-8 border-l-4 border-primary-500 hover-lift">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">True Partnership</h3>
              <p className="text-dark-200">We don't just send monthly reports. We're invested in your success. You'll work directly with our team and get honest, strategic advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="hidden md:flex justify-between items-start mb-12">
              {[
                { num: '1', title: 'Discovery', desc: 'Audit your current situation and understand your goals.' },
                { num: '2', title: 'Strategy', desc: `Develop a custom plan tailored to your ${county} market.` },
                { num: '3', title: 'Execution', desc: 'Implement across all channels with expert management.' },
                { num: '4', title: 'Growth', desc: 'Monitor, optimise, and help you grow consistently.' },
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
                { num: '1', title: 'Discovery', desc: 'Audit your current situation and understand your goals.' },
                { num: '2', title: 'Strategy', desc: `Develop a custom plan tailored to your ${county} market.` },
                { num: '3', title: 'Execution', desc: 'Implement across all channels with expert management.' },
                { num: '4', title: 'Growth', desc: 'Monitor, optimise, and help you grow consistently.' },
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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your {city} Business?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's talk about how we can help you reach more customers, generate qualified leads, and grow your revenue.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Get Your Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
