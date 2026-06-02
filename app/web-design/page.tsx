import Link from 'next/link';

export default function WebDesignPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">Web Design & Development</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Modern, fast, conversion-focused websites built for business growth
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">200+</div>
              <p className="text-dark-600">Sites Built</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">2.5s</div>
              <p className="text-dark-600">Avg. Load Time</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">92+</div>
              <p className="text-dark-600">Avg. Lighthouse Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Numbered Steps */}
      <section className="py-28 bg-dark-100">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Web Design Services That Convert</h2>
          <p className="text-xl text-dark-600 text-center mb-20">Build a website that represents your business and drives real results</p>

          <div className="space-y-6">
            {[
              {
                num: '1',
                title: 'Responsive Design',
                desc: 'Beautiful sites that work perfectly on all devices—desktop, tablet, and mobile.',
                points: ['Mobile-first approach', 'Cross-browser testing', 'Fluid, flexible layouts']
              },
              {
                num: '2',
                title: 'Conversion Optimisation',
                desc: 'Every design element is strategically placed to guide visitors toward taking action.',
                points: ['UX/UI best practices', 'Clear CTAs & forms', 'A/B testing']
              },
              {
                num: '3',
                title: 'Performance & Speed',
                desc: 'Lightning-fast load times that keep visitors engaged and improve SEO rankings.',
                points: ['Code optimisation', 'Image compression', 'Core Web Vitals']
              },
              {
                num: '4',
                title: 'Modern Tech Stack',
                desc: 'Built with latest frameworks and tools for scalability, security, and maintainability.',
                points: ['React & Next.js', 'WordPress integration', 'E-commerce solutions']
              }
            ].map((service, idx) => {
              const cardContent = (
                <div className={`flex flex-col items-center text-center p-8 rounded-xl bg-white border border-dark-100 hover:border-primary-300 transition-all duration-300 group`}>
                  <div className="mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center">
                      <div className="text-5xl font-black">{service.num}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-dark-900">{service.title}</h3>
                  <p className="text-dark-600 mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2 w-full">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center justify-center gap-2 text-sm text-dark-600">
                        <span className="text-primary-500 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
              return (
                <div key={idx}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Explore Our Other Services</h2>
          <p className="text-center text-dark-600 mb-16">We offer comprehensive digital marketing solutions across multiple channels</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/seo/" className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover:border-primary-500 hover:shadow-lg transition-all hover:-translate-y-1 text-center group">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">SEO</h3>
              <p className="text-sm text-dark-600 mb-4">Rank higher and drive organic traffic</p>
              <span className="text-primary-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/google-ads/" className="p-8 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl border border-accent-200 hover:border-accent-500 hover:shadow-lg transition-all hover:-translate-y-1 text-center group">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-accent-600 transition-colors">Google Ads & PPC</h3>
              <p className="text-sm text-dark-600 mb-4">Immediate visibility and qualified leads</p>
              <span className="text-accent-600 font-semibold">Learn More →</span>
            </Link>

            <Link href="/customer-relationship-management/" className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover:border-primary-500 hover:shadow-lg transition-all hover:-translate-y-1 text-center group">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">CRM</h3>
              <p className="text-sm text-dark-600 mb-4">Organize relationships and automate sales</p>
              <span className="text-primary-600 font-semibold">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Design Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="hidden md:flex justify-between items-start mb-12">
              {[
                { num: '1', title: 'Discovery', desc: 'Understand your business, goals, and audience to inform the design.' },
                { num: '2', title: 'Design', desc: 'Create wireframes, mockups, and prototypes that showcase your vision.' },
                { num: '3', title: 'Development', desc: 'Build a fast, secure, SEO-optimised site using modern technology.' },
                { num: '4', title: 'Launch & Support', desc: 'Deploy your site and provide ongoing optimisation and support.' },
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
                { num: '1', title: 'Discovery', desc: 'Understand your business, goals, and audience to inform the design.' },
                { num: '2', title: 'Design', desc: 'Create wireframes, mockups, and prototypes that showcase your vision.' },
                { num: '3', title: 'Development', desc: 'Build a fast, secure, SEO-optimised site using modern technology.' },
                { num: '4', title: 'Launch & Support', desc: 'Deploy your site and provide ongoing optimisation and support.' },
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
          <h2 className="text-4xl font-bold mb-6">Ready for a Website That Works?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create a modern, fast, conversion-focused website that represents your business and drives growth.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
