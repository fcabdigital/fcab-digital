import Link from 'next/link';

export default function CRMPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 text-white py-20 flex items-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">CRM Implementation</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Organize customer relationships and automate sales with expert CRM setup
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">150+</div>
              <p className="text-dark-600">CRMs Implemented</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">45%</div>
              <p className="text-dark-600">Avg. Sales Growth</p>
            </div>
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-accent-500 mb-2">6h</div>
              <p className="text-dark-600">Avg. Time Saved/Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">CRM Services for Growing Businesses</h2>
          <p className="text-dark-600 mb-12 max-w-2xl">Customer Relationship Management systems help you organize, track, and nurture customer interactions. We help implement and optimize CRM systems to drive sales and customer retention.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">HubSpot Implementation</h3>
              <p className="text-dark-600 mb-4">We're certified HubSpot partners. From basic setup to advanced automation, we help you leverage HubSpot to grow your business.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Full HubSpot setup &amp; configuration</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Custom workflows &amp; automation</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Integration with existing tools</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Sales Automation</h3>
              <p className="text-dark-600 mb-4">Streamline your sales process with automated workflows that save time and improve conversion rates.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Pipeline optimization</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Automated lead nurturing</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Sales cycle visibility</span></li>
              </ul>
            </div>

            <div className="p-8 bg-primary-50 rounded-lg border border-primary-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Data Migration &amp; Integration</h3>
              <p className="text-dark-600 mb-4">Safely migrate your existing data and connect your CRM with the tools your team already uses.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Data import &amp; cleanup</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>API integrations</span></li>
                <li className="flex items-start gap-2"><span className="text-primary-500 font-bold">✓</span> <span>Third-party tool sync</span></li>
              </ul>
            </div>

            <div className="p-8 bg-accent-50 rounded-lg border border-accent-200 hover-lift">
              <h3 className="text-2xl font-bold mb-4">Training &amp; Support</h3>
              <p className="text-dark-600 mb-4">Get your team up to speed with comprehensive training and ongoing support to maximize CRM value.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Team training sessions</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Documentation &amp; guides</span></li>
                <li className="flex items-start gap-2"><span className="text-accent-500 font-bold">✓</span> <span>Ongoing optimization</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our CRM Implementation Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="hidden md:flex justify-between items-start mb-12">
              {[
                { num: '1', title: 'Assessment', desc: 'Evaluate your current processes and requirements to design the right CRM solution.' },
                { num: '2', title: 'Setup', desc: 'Configure your CRM with custom fields, workflows, and automation tailored to your business.' },
                { num: '3', title: 'Integration', desc: 'Connect your CRM with existing tools and migrate data from legacy systems.' },
                { num: '4', title: 'Training', desc: 'Train your team and provide ongoing support to maximize CRM adoption and value.' },
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
                { num: '1', title: 'Assessment', desc: 'Evaluate your current processes and requirements to design the right CRM solution.' },
                { num: '2', title: 'Setup', desc: 'Configure your CRM with custom fields, workflows, and automation tailored to your business.' },
                { num: '3', title: 'Integration', desc: 'Connect your CRM with existing tools and migrate data from legacy systems.' },
                { num: '4', title: 'Training', desc: 'Train your team and provide ongoing support to maximize CRM adoption and value.' },
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
          <h2 className="text-4xl font-bold mb-6">Implement Your CRM Today</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's guide you through setup and optimization to maximize your CRM's value and streamline your sales process.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Schedule a CRM Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
