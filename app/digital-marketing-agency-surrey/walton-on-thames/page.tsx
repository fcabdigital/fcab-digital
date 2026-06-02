'use client';

import Link from 'next/link';
import LocationHero from '@/components/LocationHero';
import { useState, useEffect } from 'react';
import SchemaScript from '@/components/SchemaScript';
import { localBusinessSchema } from '@/lib/schema';

export default function WaltonOnThamesPage() {
  const town = 'Walton-on-Thames';
  const lat = 51.3866;
  const lng = -0.4047;

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      question: 'How do I find the best digital marketing agency?',
      answer: 'Not all digital marketing agencies are right for every business. Some have key areas of focus such as B2B or B2C businesses. Others are experts in e-commerce, whilst some focus purely on search elements such as SEO and PPC. It\'s worth having a conversation about what you\'re looking to achieve. An agency knows what they\'re best at providing. Have a look around their website and if you\'re still not sure, speak to them.'
    },
    {
      question: 'How much do digital marketing agencies charge UK?',
      answer: 'There are broad brushstrokes when it comes to digital marketing agencies and fees. It is usually dependent on the service required. At FCAB Digital, we only charge for the services we provide. There is no catch-all fee.'
    },
    {
      question: 'How much does it cost to market on social media?',
      answer: 'Your budget should reflect the demographic you are aiming to market to. The broader the audience, the bigger the budget. Most sites, such as Facebook/Instagram and LinkedIn, are good at indicating the likely reach of your marketing when you enter your budget. If you choose to use an agency, you will be expected to pay their management fee on top.'
    },
    {
      question: 'How do I choose an agency?',
      answer: 'An agency should take the time to meet with you and spend the majority of that first meeting listening. The plans offered further down the line should meet the requirements of your business. At FCAB Digital, we pride ourselves on working with clients across a number of verticals. We are able to do this by listening to our clients and learning more about their industry from their perspective.'
    },
    {
      question: 'Why are digital marketing agencies important?',
      answer: 'Digital marketing agencies are important as they\'re experts in reaching people where they spend a lot of their time - online. It can be hard when starting a business to find money to market yourself, however if you invest this money with a good agency, you will see a valuable return.'
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

  const stats = [
    { value: '0.78%', label: 'Click from page 2 of Google', highlight: true },
    { value: '68%', label: 'Sessions start with search engine', highlight: true }
  ];

  return (
    <div className="bg-white">
      <SchemaScript schema={localBusinessSchema('Walton-on-Thames', '+441234567890', 'Walton-on-Thames, Surrey, UK')} />
      <LocationHero town={town} lat={lat} lng={lng} />

      {/* About Section - Refined */}
      <section className="py-24 bg-gradient-to-b from-white to-dark-50">
        <div className="container max-w-3xl">
          <div className="mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Who We Are</h2>
            <p className="text-xl text-dark-600 mb-8 leading-relaxed">
              At FCAB Digital, we work with our clients to create bespoke digital marketing solutions. Different businesses have different audiences and different marketing goals. For some, it's essential to be forward thinking and focus on social media platforms. For others, customers are most likely to be reached via Google, whether that's Google ads, search engine optimisation, or beautiful websites.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500 p-8 mb-8 rounded-r-lg shadow-sm">
              <p className="text-dark-700 font-bold mb-3 text-lg">Our Approach</p>
              <p className="text-dark-600 leading-relaxed">Unlike other digital marketing companies and agencies, we prioritise what is absolutely essential for your business. If it won't help grow online sales or reach your target audience, we won't recommend it—and we certainly won't charge for it.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-dark-900">What We Do</h3>
              <p className="text-lg text-dark-600 mb-8 leading-relaxed">
                As a {town} digital marketing agency, we spearhead your marketing efforts and focus on creating digital campaigns to reach potential customers.
              </p>
              <div className="space-y-4">
                <Link href="/seo/" className="flex gap-4 items-start p-4 rounded-lg border border-transparent bg-transparent hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">Search Engine Optimisation</p>
                    <p className="text-sm text-dark-600">Rank higher in Google and reach customers actively searching</p>
                  </div>
                  <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">→</span>
                </Link>

                <Link href="/google-ads/" className="flex gap-4 items-start p-4 rounded-lg border border-transparent bg-transparent hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">Pay-Per-Click Advertising</p>
                    <p className="text-sm text-dark-600">Immediate visibility and qualified leads from Google Ads</p>
                  </div>
                  <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">→</span>
                </Link>

                <div className="flex gap-4 items-start p-4 rounded-lg border border-transparent">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="font-semibold text-dark-900 mb-1">Content & Email Marketing</p>
                    <p className="text-sm text-dark-600">Engage customers with strategic content and campaigns</p>
                  </div>
                </div>

                <Link href="/web-design/" className="flex gap-4 items-start p-4 rounded-lg border border-transparent bg-transparent hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">Web Design & Development</p>
                    <p className="text-sm text-dark-600">Modern websites that convert visitors into customers</p>
                  </div>
                  <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">→</span>
                </Link>

                <Link href="/customer-relationship-management/" className="flex gap-4 items-start p-4 rounded-lg border border-transparent bg-transparent hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 flex-shrink-0 mt-1"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">CRM Implementation</p>
                    <p className="text-sm text-dark-600">Organise and nurture customer relationships</p>
                  </div>
                  <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">→</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-dark-900">How We Do It</h3>
              <p className="text-lg text-dark-600 mb-8 leading-relaxed">
                We are a digital marketing agency that {town} can trust. Using tools like Google Analytics and industry expertise, we deliver services that function properly.
              </p>
              <div className="space-y-4">
                <div className={`p-6 rounded-lg transition-all duration-500 ${
                  activeStep === 0
                    ? 'bg-primary-50 border-2 border-primary-500 shadow-md'
                    : 'border-2 border-dark-200 opacity-50'
                }`}>
                  <p className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Step One</p>
                  <h4 className="text-xl font-bold text-dark-900 mb-2">Understand Your Situation</h4>
                  <p className={`transition-colors duration-500 ${activeStep === 0 ? 'text-dark-700' : 'text-dark-600'}`}>We audit how you're currently performing and what your goals are.</p>
                </div>
                <div className={`p-6 rounded-lg transition-all duration-500 ${
                  activeStep === 1
                    ? 'bg-accent-50 border-2 border-accent-500 shadow-md'
                    : 'border-2 border-dark-200 opacity-50'
                }`}>
                  <p className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-2">Step Two</p>
                  <h4 className="text-xl font-bold text-dark-900 mb-2">Analyse Your Competition</h4>
                  <p className={`transition-colors duration-500 ${activeStep === 1 ? 'text-dark-700' : 'text-dark-600'}`}>We identify what's working for your competitors and market opportunities.</p>
                </div>
                <div className={`p-6 rounded-lg transition-all duration-500 ${
                  activeStep === 2
                    ? 'bg-primary-50 border-2 border-primary-500 shadow-md'
                    : 'border-2 border-dark-200 opacity-50'
                }`}>
                  <p className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-2">Step Three</p>
                  <h4 className="text-xl font-bold text-dark-900 mb-2">Deliver Real Results</h4>
                  <p className={`transition-colors duration-500 ${activeStep === 2 ? 'text-dark-700' : 'text-dark-600'}`}>We execute strategies that generate leads, grow sales, and build your brand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Callout */}
      <section className="py-16 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-black mb-2 text-white drop-shadow-lg">{stat.value}</div>
                <p className="text-lg text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Styled */}
      <section className="py-28 bg-gradient-to-b from-dark-50 to-white">
        <div className="container max-w-5xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">What Our Clients Say</h2>
          <p className="text-lg text-dark-600 text-center mb-20">Real feedback from real businesses we've helped grow</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-dark-100 p-8 rounded-xl hover:shadow-lg transition hover:border-primary-300">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-dark-700 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-dark-100 pt-6">
                  <p className="font-bold text-dark-900 text-lg">{testimonial.author}</p>
                  {testimonial.company && <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Refined */}
      <section className="py-28 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-lg text-dark-600 text-center mb-20">Common questions about choosing and working with a digital marketing agency</p>

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

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Let's talk about how we can help {town} businesses succeed online.</p>
          <Link href="/contact-us/" className="btn btn-white text-lg px-8 py-4 inline-block hover:shadow-xl transition">
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
