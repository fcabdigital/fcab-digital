import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function SEOPage() {
  const content = `
    <h2>SEO Services That Drive Results</h2>
    <p>Search Engine Optimization is the foundation of digital visibility. We help businesses improve their organic search rankings and drive qualified traffic to their websites.</p>

    <h3>Our SEO Services</h3>
    <ul>
      <li>Technical SEO Audits &amp; Implementation</li>
      <li>On-Page Optimization</li>
      <li>Content Strategy &amp; Creation</li>
      <li>Link Building &amp; Authority</li>
      <li>Local SEO</li>
      <li>SEO Reporting &amp; Analytics</li>
    </ul>

    <h3>Why SEO Matters</h3>
    <p>Organic search is the most cost-effective channel for sustainable growth. Unlike paid ads, SEO builds long-term authority and trust with your audience.</p>

    <h3>Our Process</h3>
    <p>We start with a comprehensive audit of your current SEO performance. Then we create a tailored strategy focused on your business goals and competition analysis.</p>
  `;

  return (
    <PageTemplate title="SEO Services" content={content}>
      <div className="mt-12 p-8 bg-primary-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Rankings?</h3>
        <p className="text-dark-600 mb-6">
          Let's discuss how SEO can drive more qualified traffic to your website.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Get a Free Consultation
        </Link>
      </div>
    </PageTemplate>
  );
}
