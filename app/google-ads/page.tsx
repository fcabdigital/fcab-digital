import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function GoogleAdsPage() {
  const content = `
    <h2>Google Ads Services</h2>
    <p>Pay-per-click advertising delivers immediate results. We create and manage Google Ads campaigns that generate qualified leads and sales for your business.</p>

    <h3>Our Google Ads Expertise</h3>
    <ul>
      <li>Search Ads (Google Search Network)</li>
      <li>Display Ads (Remarketing)</li>
      <li>Shopping Ads (E-commerce)</li>
      <li>YouTube Ads</li>
      <li>Campaign Optimization &amp; A/B Testing</li>
      <li>ROI-Focused Management</li>
    </ul>

    <h3>Why Google Ads Work</h3>
    <p>Google Ads puts your business in front of people actively searching for what you offer. It's measurable, scalable, and delivers immediate visibility.</p>

    <h3>Our Approach</h3>
    <p>We focus on ROI first. Every campaign is built around your business goals, with continuous optimization to improve performance and reduce costs.</p>
  `;

  return (
    <PageTemplate title="Google Ads Services" content={content}>
      <div className="mt-12 p-8 bg-accent-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Let's Grow Your Ad Performance</h3>
        <p className="text-dark-600 mb-6">
          We'll audit your current campaigns and show you how to improve your ROI.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Schedule a Review
        </Link>
      </div>
    </PageTemplate>
  );
}
