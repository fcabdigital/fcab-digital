import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function CRMPage() {
  const content = `
    <h2>CRM Services</h2>
    <p>Customer Relationship Management systems help you organize, track, and nurture customer interactions. We help implement and optimize CRM systems for growing businesses.</p>

    <h3>Our CRM Services</h3>
    <ul>
      <li>CRM Selection &amp; Implementation</li>
      <li>HubSpot Setup &amp; Configuration</li>
      <li>Sales Pipeline Optimization</li>
      <li>Marketing Automation</li>
      <li>Data Integration &amp; Migration</li>
      <li>Team Training &amp; Support</li>
    </ul>

    <h3>Why CRM Matters</h3>
    <p>A good CRM system keeps your team aligned, improves visibility into the sales process, and helps you close deals faster.</p>

    <h3>HubSpot Specialists</h3>
    <p>We're certified HubSpot partners. From basic setup to advanced automation, we help you leverage HubSpot to grow your business.</p>
  `;

  return (
    <PageTemplate title="CRM Services" content={content}>
      <div className="mt-12 p-8 bg-accent-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Implement Your CRM Today</h3>
        <p className="text-dark-600 mb-6">
          We'll guide you through setup and optimization to maximize your CRM's value.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Get Started
        </Link>
      </div>
    </PageTemplate>
  );
}
