import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function WebDesignPage() {
  const content = `
    <h2>Web Design Services</h2>
    <p>Your website is your digital storefront. We design and build modern, fast, and conversion-focused websites that represent your business.</p>

    <h3>Our Web Design Services</h3>
    <ul>
      <li>Responsive Website Design</li>
      <li>User Experience (UX) Optimization</li>
      <li>Website Performance &amp; Speed</li>
      <li>CMS Integration (WordPress, Next.js)</li>
      <li>E-commerce Solutions</li>
      <li>Website Maintenance &amp; Support</li>
    </ul>

    <h3>Design Philosophy</h3>
    <p>We believe in clean, minimal design that puts your message first. Every element serves a purpose—to engage visitors and drive conversions.</p>

    <h3>Built for Business</h3>
    <p>We don't design websites just to look pretty. We build them to convert visitors into customers. Speed, user experience, and SEO are built in from day one.</p>
  `;

  return (
    <PageTemplate title="Web Design Services" content={content}>
      <div className="mt-12 p-8 bg-primary-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Ready for a Website Redesign?</h3>
        <p className="text-dark-600 mb-6">
          Let's create a website that works as hard as you do.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Start Your Project
        </Link>
      </div>
    </PageTemplate>
  );
}
