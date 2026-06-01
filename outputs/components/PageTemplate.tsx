'use client';

import Link from 'next/link';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface PageTemplateProps {
  title: string;
  description?: string;
  content: string;
  benefits?: Benefit[];
  ctaText?: string;
  ctaHref?: string;
  children?: React.ReactNode;
}

export default function PageTemplate({
  title,
  description,
  content,
  benefits,
  ctaText = 'Get Started',
  ctaHref = '/contact-us',
  children,
}: PageTemplateProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-20">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">{title}</h1>
          {description && (
            <p className="text-xl text-dark-200 max-w-2xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {description}
            </p>
          )}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg space-y-8 text-dark-900"
              dangerouslySetInnerHTML={{
                __html: content
                  .replace(/href="\/\//g, 'href="')
                  .replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '')
                  .replace(/class="[^"]*"/g, '')
                  .replace(/<h2>/g, '<h2 class="text-3xl font-bold mt-12 mb-6">')
                  .replace(/<h3>/g, '<h3 class="text-2xl font-bold mt-8 mb-4">')
                  .replace(/<ul>/g, '<ul class="space-y-3 ml-6">')
                  .replace(/<li>/g, '<li class="list-disc">')
                  .replace(/<p>/g, '<p class="text-dark-600 leading-relaxed">'),
              }}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section className="py-20 bg-dark-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-dark-100 hover-lift shadow-sm"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-dark-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Children Section */}
      {children}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-accent-500 text-white">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how we can help your business grow and succeed.
          </p>
          <Link href={ctaHref} className="btn bg-white text-primary-500 hover:bg-dark-100 text-lg inline-block hover-lift">
            {ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
}
