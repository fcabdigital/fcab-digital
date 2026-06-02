'use client';

import Link from 'next/link';
import CountyHero from '@/components/CountyHero';
import { useState } from 'react';
import SchemaScript from '@/components/SchemaScript';
import { localBusinessSchema } from '@/lib/schema';

export default function SurreyPage() {
  const county = 'Surrey';
  const lat = 51.2500;
  const lng = -0.5000;
  const towns = ['Chertsey', 'Dorking', 'Epsom', 'Esher', 'Farnborough', 'Guildford', 'Leatherhead', 'Shepperton', 'Walton-on-Thames', 'Weybridge', 'Woking'];
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

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

  return (
    <div>
      <SchemaScript schema={localBusinessSchema('Surrey', '+441234567890', 'Surrey, UK')} />
      <CountyHero county={county} lat={lat} lng={lng} />

      {/* About Surrey Section */}
      <section className="py-24 bg-gradient-to-b from-white to-dark-50">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Digital Marketing in Surrey</h2>
          <div className="space-y-6">
            <p className="text-xl text-dark-600 leading-relaxed">
              FCAB Digital is the home of digital marketing services in Surrey. We create digital marketing strategies tailored to your business, not generic templates.
            </p>
            <p className="text-lg text-dark-600 leading-relaxed">
              At FCAB Digital, we work with our clients to create bespoke digital marketing solutions. Different businesses have different audiences and different marketing goals. For some, it's essential to be forward thinking and focus on social media platforms. For others, customers are most likely to be reached via Google, whether that's Google ads, search engine optimisation, or beautiful websites.
            </p>
            <p className="text-lg text-dark-600 leading-relaxed">
              As a Surrey digital marketing agency, we are well-placed to spearhead your marketing efforts and focus on creating digital campaigns to reach potential customers.
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500 p-8 rounded-r-lg shadow-sm mt-8">
              <p className="text-dark-700 font-bold mb-3 text-lg">Our Approach</p>
              <p className="text-dark-600 leading-relaxed">Unlike other digital marketing companies and agencies, we prioritise what is absolutely essential for your business. If it won't help grow online sales or reach your target audience, we won't recommend it—and we certainly won't charge for it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-2">150+</div>
              <p className="text-dark-600">{county} Businesses Served</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-500 mb-2">£10M+</div>
              <p className="text-dark-600">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-2">156%</div>
              <p className="text-dark-600">Avg. ROI Increase</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-500 mb-2">98%</div>
              <p className="text-dark-600">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-4">What We Do For {county} Businesses</h2>
          <p className="text-center text-dark-600 mb-16 max-w-2xl mx-auto">
            Complete digital marketing solutions to help you reach more customers and grow your bottom line.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 hover-lift">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">SEO & Organic Search</h3>
              <p className="text-dark-600 mb-4">Rank higher in Google and get discovered by customers actively searching for your services in {county}.</p>
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
              <p className="text-dark-600 mb-4">Modern, fast, conversion-focused websites that represent your {county} business and drive sales.</p>
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

      {/* Detailed Services Section */}
      <section className="py-28 bg-gradient-to-b from-white to-dark-50">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Our Digital Marketing Services in Detail</h2>
          <p className="text-xl text-dark-600 text-center mb-20">Complete solutions across all digital channels</p>

          <div className="space-y-6">
            <Link href="/web-design/" className="block bg-white border border-dark-100 rounded-xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-dark-900 group-hover:text-primary-600 transition-colors">Web Design & Your Website</h3>
                  <p className="text-dark-600 mb-4 leading-relaxed">
                    Engaging websites lead to increased website traffic. Whilst the equation isn't as simple as that, it's important that your website works for your business. As a high street business, a website can act as a key part of your marketing strategy, giving your business credence. If you're an eCommerce business, the website is your business.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    With humble beginnings in web design, FCAB Digital is there to support you in setting and achieving your business goals. We can plan, create, and maintain your website to help your business build relationships with the world.
                  </p>
                </div>
                <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-2xl">→</span>
              </div>
            </Link>

            <Link href="/seo/" className="block bg-white border border-dark-100 rounded-xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-dark-900 group-hover:text-primary-600 transition-colors">SEO Strategy</h3>
                  <p className="text-dark-600 mb-4 leading-relaxed">
                    A key skill in digital marketing is optimising a website's placement in search engines such as Google. Working by using digital marketing tools such as Google Analytics and other services, we are a digital marketing agency that can be trusted.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    As a part of our service, we will give you insight into how you are currently performing, what other companies are doing, and deliver SEO services that function properly.
                  </p>
                </div>
                <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-2xl">→</span>
              </div>
            </Link>

            <Link href="/google-ads/" className="block bg-white border border-dark-100 rounded-xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-dark-900 group-hover:text-primary-600 transition-colors">PPC and Paid Advertising</h3>
                  <p className="text-dark-600 mb-4 leading-relaxed">
                    The sure way to make yourself visible to potential customers is through the use of pay-per-click advertising and paid advertising. The benefit of PPC advertising is that you can place yourself at the top of Google search results immediately.
                  </p>
                  <p className="text-dark-600 leading-relaxed">
                    PPC places you above websites that have good presence organically in the search engine results. Paid advertising varies slightly in so far as it is used to advertise across other channels, such as social media. This type of advertising is brilliant if your target market is the consumer.
                  </p>
                </div>
                <span className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-2xl">→</span>
              </div>
            </Link>

            <div className="bg-white border border-dark-100 rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Logo Design & Branding</h3>
              <p className="text-dark-600 mb-4 leading-relaxed">
                Potential customers do certain things when it comes to your business. Maybe they look at your website, or enter your shop. Regardless of what they do, the first thing they will notice is your branding.
              </p>
              <p className="text-dark-600 leading-relaxed">
                Logos and branding are an integral part of digital marketing. At FCAB Digital, agency knowledge, experience, and skill ensures basic functionalities of your marketing work.
              </p>
            </div>

            <div className="bg-white border border-dark-100 rounded-xl p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Social Media Marketing</h3>
              <p className="text-dark-600 mb-4 leading-relaxed">
                Social media platforms are a great way of increasing your online presence. Increasingly the online world is restricting itself to platforms such as Facebook, Instagram, and TikTok. Depending on your target audience, some, all, or none of these platforms could be right for your business.
              </p>
              <p className="text-dark-600 leading-relaxed">
                Your digital strategy should always consider the use of these platforms. With FCAB Digital, our years of experience working across the digital landscape means we are able to best advise on and execute social media campaigns for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations in Surrey */}
      <section className="py-20 bg-dark-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">We Serve All of {county}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {towns.map((town) => (
              <Link
                key={town}
                href={`/digital-marketing-agency-${county.toLowerCase()}/${town.toLowerCase()}/`}
                className="p-3 sm:p-4 bg-white rounded-lg border border-dark-200 hover:border-primary-500 hover:bg-primary-50 text-center hover-lift transition-all min-h-[80px] flex flex-col justify-center"
              >
                <h3 className="font-bold text-dark-900 hover:text-primary-600 text-sm sm:text-base break-words">{town}</h3>
                <p className="text-xs text-dark-500">{county}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Why {county} Businesses Choose FCAB</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-4 border-primary-500 hover-lift">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Local Market Expertise</h3>
              <p className="text-dark-200">We understand {county}'s market, your competition, and what drives customers in your area. We're not a generic agency applying cookie-cutter solutions.</p>
            </div>
            <div className="p-8 border-l-4 border-accent-500 hover-lift">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-dark-200">Dozens of {county} businesses have grown with our help. We focus on ROI first—every strategy is measured against your business goals.</p>
            </div>
            <div className="p-8 border-l-4 border-primary-500 hover-lift">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">True Partnership</h3>
              <p className="text-dark-200">We don't just send monthly reports. We're invested in your success. You'll work directly with our team and get honest, strategic advice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets FCAB Apart */}
      <section className="py-28 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">What Sets FCAB Apart</h2>
          <p className="text-xl text-dark-600 text-center mb-20">Our core strengths that drive your success</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Cross-Industry Experience</h3>
              <p className="text-dark-600 leading-relaxed">We've got a range of clients from multiple sectors, from cybersecurity and IT, to construction and architecture. This diverse experience means we understand different markets and can apply proven strategies across industries.</p>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Strategic Partnerships</h3>
              <p className="text-dark-600 leading-relaxed">We're trusted partners of global software brands. Like them, we share the mission of great value and unrivalled service. These partnerships give us access to cutting-edge tools and insights.</p>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Focused Expertise</h3>
              <p className="text-dark-600 leading-relaxed">We don't claim to know everything. We know SEO, websites, and CRM. In other words, we're experts in the sales process—the things that actually drive revenue for your business.</p>
            </div>

            <div className="bg-accent-50 border-l-4 border-accent-500 p-8 rounded-r-xl hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3 text-dark-900">Open Dialogue</h3>
              <p className="text-dark-600 leading-relaxed">We don't just send reports each month. We like to keep in touch. We're invested in your success and believe in transparent, ongoing communication with our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-dark-50 to-white">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold mb-3 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">What Our Clients Say</h2>
          <p className="text-dark-600 text-center mb-12">Real feedback from Surrey businesses we've helped</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-dark-100 p-5 rounded-lg hover:shadow-lg transition hover:border-primary-300">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-dark-700 mb-5 italic text-sm leading-relaxed">"We came to FCAB to improve our online presence and Joe and the team have been outstanding. They provide a top class service with a great balance of friendliness and professionalism. I highly recommend Joe and the team."</p>
              <div className="border-t border-dark-100 pt-3">
                <p className="font-bold text-dark-900 text-sm">IT MSP</p>
              </div>
            </div>

            <div className="bg-white border border-dark-100 p-5 rounded-lg hover:shadow-lg transition hover:border-primary-300">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-dark-700 mb-5 italic text-sm leading-relaxed">"FCAB Digital really helped when we had lost hope in our website. FCAB helped us reconfigure the site and in the last 6 months, we've seen a huge increase in enquiries from visitors."</p>
              <div className="border-t border-dark-100 pt-3">
                <p className="font-bold text-dark-900 text-sm">Raquel</p>
                <p className="text-xs text-primary-600 font-medium">Property Management Firm</p>
              </div>
            </div>

            <div className="bg-white border border-dark-100 p-5 rounded-lg hover:shadow-lg transition hover:border-primary-300">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-dark-700 mb-5 italic text-sm leading-relaxed">"I originally went to FCAB Digital for a website. Now we have an entire sales process in place!"</p>
              <div className="border-t border-dark-100 pt-3">
                <p className="font-bold text-dark-900 text-sm">Aaron</p>
                <p className="text-xs text-primary-600 font-medium">Electronics Manufacturer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-28 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Common Questions</h2>
          <p className="text-lg text-dark-600 text-center mb-20">About digital marketing and working with an agency</p>

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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your {county} Business?</h2>
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
