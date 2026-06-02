'use client';

import Link from 'next/link';
import { useState } from 'react';
import SchemaScript from '@/components/SchemaScript';
import { serviceSchema } from '@/lib/schema';

export default function SEOPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      question: 'What can I expect from SEO agency?',
      answer: 'An SEO agency should cover all areas SEO requires, including on-page, technical, and local SEO optimisation. They should provide regular reporting, communicate transparently, and work towards your business goals.'
    },
    {
      question: 'Are SEO agencies worth it?',
      answer: 'We think so. The reality is that the average customer is now equipped with a powerful computer in their pocket. Search is how they find what they need. An SEO agency helps you get found by the right people at the right time.'
    },
    {
      question: 'How much does SEO cost for small business UK?',
      answer: 'SEO can cost anywhere in the high hundreds to the high thousands. It depends on the market in which you operate, the competition, and the scope of work required. We provide bespoke quotes based on your specific needs.'
    },
    {
      question: 'Does Google charge for SEO?',
      answer: 'No - Google\'s ethos behind search is that it is impartial and offers the best possible answer to a user\'s query. They don\'t charge for organic rankings, though they do offer paid advertising options.'
    },
    {
      question: 'How long does it take for SEO to pay off?',
      answer: '6-12 months is a solid estimate. The newer your domain (website) is, the longer it will take. There\'s no quick fix in SEO, but the results are worth the wait.'
    }
  ];

  const testimonials = [
    {
      quote: 'We came to FCAB to improve our online presence and Joe and the team have been outstanding. They provide a top class service with a great balance of friendliness and professionalism. I highly recommend Joe and the team.',
      author: 'IT MSP'
    },
    {
      quote: 'FCAB Digital really helped when we had lost hope in our website. FCAB helped us reconfigure the site and in the last 6 months, we\'ve seen a huge increase in enquiries from visitors.',
      author: 'Raquel',
      company: 'Property Management Firm'
    },
    {
      quote: 'I originally went to FCAB Digital for a website. Now we have an entire sales process in place!',
      author: 'Aaron',
      company: 'Electronics Manufacturer'
    }
  ];

  return (
    <div className="bg-white">
      <SchemaScript schema={serviceSchema('SEO Services', 'Specialist SEO agency providing technical SEO, content optimization, local SEO, and link building services to improve your online visibility and drive qualified traffic.')} />
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
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-2">500+</div>
              <p className="text-dark-600">Keywords Ranked</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-2">312%</div>
              <p className="text-dark-600">Avg. Traffic Increase</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-500 mb-2">3.2x</div>
              <p className="text-dark-600">Avg. Lead Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* About SEO Section */}
      <section className="py-24 bg-gradient-to-b from-white to-dark-50">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">About Our SEO Services</h2>
          <div className="space-y-6">
            <p className="text-xl text-dark-600 leading-relaxed">
              We are SEO specialists who strive to make our customers money. We do this by optimising your website to rank higher on Google and drive qualified organic traffic to your business.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500 p-8 rounded-r-lg shadow-sm">
              <p className="text-dark-700 font-bold mb-3 text-lg">Our SEO Approach</p>
              <p className="text-dark-600 leading-relaxed">We optimise your online presence in your local area through technical SEO, on-page optimisation, and strategic link building. We develop your site to improve its performance and create content that gives users what they're looking for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section - Numbered Steps */}
      <section className="py-28 bg-dark-100">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">SEO Services That Drive Results</h2>
          <p className="text-xl text-dark-600 text-center mb-20">Comprehensive SEO solutions covering all areas of search engine optimisation</p>

          <div className="space-y-6">
            {[
              {
                num: '1',
                title: 'Technical SEO',
                href: '/seo/technical-seo-services/',
                desc: 'We develop your site to improve its performance, fix site structure, speed, and indexing issues to ensure search engines can crawl and rank your site effectively.',
                points: ['Site audits & crawl analysis', 'Core Web Vitals optimisation', 'XML sitemaps & robots.txt']
              },
              {
                num: '2',
                title: 'On-Page & Content SEO',
                desc: 'We create content that gives users what they\'re looking for. Optimise your content, metadata, and page structure to improve rankings for your target keywords.',
                points: ['Keyword research & targeting', 'Content optimisation', 'Title & meta tag optimisation']
              },
              {
                num: '3',
                title: 'Local SEO',
                href: '/seo/local-seo-services/',
                desc: 'We optimise your online presence in your local area to help you dominate local search results and attract customers in your region.',
                points: ['Google Business Profile optimisation', 'Local citation building', 'Local keyword targeting']
              },
              {
                num: '4',
                title: 'Link Building & Authority',
                desc: 'Build authority through earned links and strategic partnerships to improve your domain authority and search rankings.',
                points: ['Backlink strategy & outreach', 'Authority building', 'Link profile analysis']
              }
            ].map((service, idx) => {
              const cardContent = (
                <div className={`flex flex-col items-center text-center p-8 rounded-xl bg-white border border-dark-100 hover:border-primary-300 transition-all duration-300 ${service.href ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : ''} group`}>
                  <div className="mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center">
                      <div className="text-5xl font-black">{service.num}</div>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 text-dark-900 transition-colors ${service.href ? 'group-hover:text-primary-600' : ''}`}>{service.title}</h3>
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
                  {service.href ? <Link href={service.href}>{cardContent}</Link> : cardContent}
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
            <Link href="/web-design/" className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover:border-primary-500 hover:shadow-lg transition-all hover:-translate-y-1 text-center group">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">Web Design</h3>
              <p className="text-sm text-dark-600 mb-4">Modern, fast, conversion-focused websites</p>
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

      {/* Why Choose FCAB */}
      <section className="py-28 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Why Choose FCAB?</h2>
          <p className="text-xl text-dark-600 text-center mb-20">Agencies. They're everywhere. Here's 4 reasons to trust us:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Cross-Industry Experience</h3>
              <p className="text-dark-600 leading-relaxed">We've got a range of clients from multiple sectors, from cybersecurity and IT, to construction and architecture. We understand different markets.</p>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Strategic Partnerships</h3>
              <p className="text-dark-600 leading-relaxed">We're trusted partners of global software brands. Like them, we share the mission of great value and unrivalled service.</p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Focused Expertise</h3>
              <p className="text-dark-600 leading-relaxed">We don't claim to know everything. We know SEO, websites, and CRM. In other words, we're experts in the sales process.</p>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Open Dialogue</h3>
              <p className="text-dark-600 leading-relaxed">We don't just send reports each month. We like to keep in touch and invest in your long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-dark-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">What Our Clients Say</h2>
          <p className="text-dark-600 text-center mb-12">Real feedback from businesses we've helped with SEO</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-dark-100 p-5 rounded-lg hover:shadow-lg transition hover:border-primary-300">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-dark-700 mb-5 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-dark-100 pt-3">
                  <p className="font-bold text-dark-900 text-sm">{testimonial.author}</p>
                  {testimonial.company && <p className="text-xs text-primary-600 font-medium">{testimonial.company}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Common SEO Questions</h2>
          <p className="text-lg text-dark-600 text-center mb-20">Answers to questions about SEO services and working with our agency</p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-dark-200 rounded-lg overflow-hidden hover:border-primary-300 transition">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-8 py-5 text-left font-semibold text-dark-900 hover:bg-primary-50 transition flex justify-between items-center"
                >
                  <span className="text-lg">{faq.question}</span>
                  <span className={`transform transition duration-300 text-primary-500 flex-shrink-0 ${expandedFAQ === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-8 py-6 bg-gradient-to-b from-dark-50 to-white border-t border-dark-200 text-dark-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
                { num: '3', title: 'Execution', desc: 'Optimise on-page, technical, and content factors for ranking improvement.' },
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
                { num: '3', title: 'Execution', desc: 'Optimise on-page, technical, and content factors for ranking improvement.' },
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
            If your website isn't making you money, it is costing you money. Let's discuss how SEO can drive more qualified traffic and grow your business.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            Get a Free SEO Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
