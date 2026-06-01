import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function TechnicalSEOPage() {
  const content = `
    <h2>Technical SEO Services</h2>
    <p>Technical SEO is the foundation that allows search engines to crawl, index, and rank your website effectively.</p>

    <h3>Our Technical SEO Services</h3>
    <ul>
      <li>Site Speed Optimization</li>
      <li>Core Web Vitals Optimization</li>
      <li>XML Sitemap &amp; Robots.txt</li>
      <li>Structured Data &amp; Schema Markup</li>
      <li>Mobile-Friendly Testing</li>
      <li>Crawl Error Resolution</li>
      <li>HTTPS &amp; Security</li>
    </ul>

    <h3>Why Technical SEO Matters</h3>
    <p>You can have great content, but if your site has technical issues, search engines won't rank it well. We fix the technical foundation so your content can shine.</p>
  `;

  return (
    <PageTemplate title="Technical SEO Services" content={content}>
      <div className="mt-12 p-8 bg-primary-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Audit Your Technical SEO</h3>
        <p className="text-dark-600 mb-6">
          Let's identify and fix technical issues holding back your rankings.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Get a Technical Audit
        </Link>
      </div>
    </PageTemplate>
  );
}
