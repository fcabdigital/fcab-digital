import Link from 'next/link';
import TrajectoryChart from '@/components/TrajectoryChart';

const services = [
  {
    title: 'SEO',
    description: 'We work with your website to drive users to your business.',
    href: '/seo',
    icon: '📈',
  },
  {
    title: 'Paid Ads & PPC',
    description: 'We build and run campaigns that deliver sales.',
    href: '/google-ads',
    icon: '🎯',
  },
  {
    title: 'CRM',
    description: 'We help growing businesses keep track of their customer interactions and sales.',
    href: '/customer-relationship-management',
    icon: '👥',
  },
];

const reasons = [
  {
    title: 'Cross-Industry Experience',
    description: 'We\'ve got a range of clients from multiple sectors, from cybersecurity and IT, to construction and architecture.',
  },
  {
    title: 'Partnerships',
    description: 'We\'re trusted partners of global software brands. Like them, we share the mission of great value and unrivalled service.',
  },
  {
    title: 'Expertise',
    description: 'We don\'t claim to know everything. We know SEO, Paid Ads, and CRM. In other words, we\'re experts in the sales process.',
  },
  {
    title: 'Open Dialogue',
    description: 'We don\'t just send reports each month. We like to keep in touch.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="container py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            We are <span className="gradient-text">FCAB Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-200 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            A digital marketing agency that will help you make money from your online channels.
          </p>
          <Link
            href="/contact-us"
            className="btn btn-primary text-lg inline-block hover-lift animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            TALK TO US
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center hover-lift">
              <div className="text-5xl font-bold text-primary-500 mb-2">150+</div>
              <p className="text-dark-600">Businesses Served</p>
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
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="p-8 border-2 border-dark-100 rounded-lg hover-lift hover:border-primary-500"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-dark-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-20 bg-dark-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Results That Matter</h2>
            <p className="text-center text-dark-600 mb-12 text-lg">
              See how we help businesses grow their online presence and drive real conversions.
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <TrajectoryChart />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose FCAB?</h2>
          <p className="text-center text-dark-600 mb-16 text-lg max-w-2xl mx-auto">
            Agencies. They're everywhere. Here's 4 reasons to trust us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-6 border-l-4 border-primary-500 hover-lift">
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-dark-600">{reason.description}</p>
              </div>
            ))}
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
                { num: '2', title: 'Strategy', desc: 'Develop a custom plan tailored to your business.' },
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
                { num: '2', title: 'Strategy', desc: 'Develop a custom plan tailored to your business.' },
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
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">We Help You Make Money From Online Channels</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            SEO gets you found. Ads drive traffic. Design converts. CRM closes deals.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Let's Talk Strategy
          </Link>
        </div>
      </section>
    </div>
  );
}
