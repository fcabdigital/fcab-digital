import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function LocalSEOPage() {
  const content = `
    <h2>Local SEO Services</h2>
    <p>Local SEO helps your business show up when people search for services in your area. Perfect for businesses with physical locations.</p>

    <h3>Our Local SEO Services</h3>
    <ul>
      <li>Google Business Profile Optimization</li>
      <li>Local Citation Building</li>
      <li>Review Management</li>
      <li>Local Keyword Research</li>
      <li>Local Link Building</li>
      <li>Multi-Location SEO</li>
    </ul>

    <h3>Get Found Locally</h3>
    <p>When someone searches for your service + location, they should find you. Local SEO makes sure they do.</p>
  `;

  return (
    <PageTemplate title="Local SEO Services" content={content}>
      <div className="mt-12 p-8 bg-primary-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Dominate Local Search</h3>
        <p className="text-dark-600 mb-6">
          Get your business to the top of local search results.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Start Local SEO
        </Link>
      </div>
    </PageTemplate>
  );
}
