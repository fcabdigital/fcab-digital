'use client';

import Link from 'next/link';
import LocationHero from '@/components/LocationHero';
import { useState, useEffect } from 'react';

export default function GuildfordPage() {
  const town = 'Dorking';
  const lat = 51.2391;
  const lng = -0.3269;

  const [expandedFAQ, setExpandedFAQ] = useState(null);
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
      <LocationHero town={town} lat={lat} lng={lng} />

      {/* About Section - Refined */}
      <section className="py-24 bg-gradient-to-b from-white to-dark-50">
        <div className="container max-w-3xl">
          <div className="mb-20">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Who We Are</h2>
            <p className="text-xl text-dark-600 mb-8 leading-relaxed">
              FCAB Digital is the home of digital marketing services in Dorking, Surrey.
We create digital marketing strategies and executes digital marketing campaigns for SMEs.
We do this for owners and staff to support lead generation and to help owners watch their business grow.

              For some, it's essential to be forward thinking and focus on social media platforms. For others, customers are most likely to be reached via Google, whether that's Google ads, search engine optimisation, or beautiful websites.
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

                <div className="flex gap-4 items-start p-4 rounded-lg border border-transparent">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="font-semibold text-dark-900 mb-1">Social Media Marketing</p>
                    <p className="text-sm text-dark-600">Build your presence across Facebook, Instagram, LinkedIn</p>
                  </div>
                </div>
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

      {/* Services Section - Bold */}
      <section id="services" className="py-28 bg-dark-50">
        <div className="container max-w-5xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Our Digital Marketing Services</h2>
          <p className="text-xl text-dark-600 text-center mb-20 max-w-2xl mx-auto">Complete solutions to reach your customers and grow your business</p>

          <div className="space-y-6">
            {[
              { icon: '🌐', title: 'Web Design & Your Website', desc: 'Engaging websites lead to increased website traffic. Whilst the equation isn\'t as simple as that, it\'s important that your website works for your business. As a high street business, a website can act as a key part of your marketing strategy, giving your business credence. If you\'re an eCommerce business, the website is your business.\n\nWith humble beginnings in web design, FCAB Digital is there to support you in setting and achieving your business goals. We can plan, create, and maintain your website to help your business build relationships with the world.' },
              { icon: '🔍', title: 'SEO Strategy', desc: 'A key skill in digital marketing is optimising a website\'s placement in search engines such as Google.\n\nWorking by using digital marketing tools such as Google Analytics and other services, we are a digital marketing agency that can be trusted. As a part of our service, we will give you insight into how you are currently performing, what other companies are doing, and deliver SEO services that function properly.' },
              { icon: '💰', title: 'PPC and Paid Advertising', desc: 'The sure way to make yourself visible to potential customers is through the use of pay-per-click advertising and paid advertising. The benefit of PPC advertising is that you can place yourself at the top of Google search results immediately.\n\nPPC places you above websites that have good presence organically in the search engine results. This type of advertising is brilliant if your target market is the consumer.' },
              { icon: '✨', title: 'Logo Design & Branding', desc: 'Potential customers do certain things when it comes to your business. Maybe they look at your website, or enter your shop. Regardless of what they do, the first thing they will notice is your branding.\n\nLogos and branding are an integral part of digital marketing. At FCAB Digital, agency knowledge, experience, and skill ensures basic functionalities of your marketing work.' },
              { icon: '📱', title: 'Social Media Marketing', desc: 'Social media platforms are a great way of increasing your online presence. Increasingly the online world is restricting itself to platforms such as Facebook, Instagram, and TikTok.\n\nWith FCAB Digital, our years of experience working across the digital landscape means we are able to best advise on and execute social media campaigns for our clients.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white border border-dark-100 rounded-xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-6">
                  <div className="text-5xl flex-shrink-0">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-dark-900">{service.title}</h3>
                    <p className="text-dark-600 leading-relaxed whitespace-pre-line">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section - Bold */}
      <section className="py-28 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">Why Choose FCAB?</h2>
          <p className="text-xl text-dark-600 text-center mb-20">Agencies are everywhere. Here's why you should trust us:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { color: 'primary', title: 'Cross-Industry Experience', desc: 'We\'ve got a range of clients from multiple sectors, from cybersecurity and IT, to construction and architecture.' },
              { color: 'accent', title: 'Partnerships', desc: 'We\'re trusted partners of global software brands. Like them, we share the mission of great value and unrivalled service.' },
              { color: 'primary', title: 'Expertise', desc: 'We don\'t claim to know everything. We know SEO, websites, and CRM. In other words, we\'re experts in the sales process.' },
              { color: 'accent', title: 'Open Dialogue', desc: 'We don\'t just send reports each month. We like to keep in touch.' }
            ].map((item, idx) => {
              const isBg = item.color === 'primary' ? 'bg-primary-50' : 'bg-accent-50';
              const isBorder = item.color === 'primary' ? 'border-primary-500' : 'border-accent-500';
              return (
                <div key={idx} className={`${isBg} border-l-4 ${isBorder} p-8 rounded-r-xl hover:shadow-lg transition`}>
                  <h3 className="text-xl font-bold mb-3 text-dark-900">{item.title}</h3>
                  <p className="text-dark-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
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

      {/* CTA Section - Bold */}
      <section className="py-32 bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container text-center max-w-2xl relative z-10">
          <h2 className="text-5xl font-bold mb-8">So, How Can We Help?</h2>
          <p className="text-2xl text-white/95 mb-6 leading-relaxed">
            If your website isn't making you money, it is costing you money.
          </p>
          <p className="text-xl text-white/85 mb-12 leading-relaxed">
            By working with us, you partner with people who know how to boost website traffic, increase sales, and save time.
          </p>
          <Link href="/contact-us" className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
