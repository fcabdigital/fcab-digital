import PageTemplate from '@/components/PageTemplate';

export default function WebDesignPage() {
  const content = `
    <h2>Modern Websites That Convert</h2>
    <p>Your website is your digital storefront—your most important sales tool. We design and build fast, beautiful, conversion-focused websites that represent your brand and drive results.</p>

    <h3>Complete Web Design &amp; Development</h3>
    <ul>
      <li><strong>Responsive Design:</strong> Perfect appearance and functionality on all devices</li>
      <li><strong>User Experience:</strong> Intuitive navigation and clear calls-to-action</li>
      <li><strong>Performance:</strong> Lightning-fast load times that improve SEO and conversions</li>
      <li><strong>Modern Technology:</strong> Built with React, Next.js, and the latest web standards</li>
      <li><strong>Conversion Optimization:</strong> Strategic design choices that drive leads and sales</li>
      <li><strong>E-commerce Solutions:</strong> Complete shopping experiences with payment integration</li>
      <li><strong>Ongoing Support:</strong> Maintenance, updates, and continuous improvement</li>
    </ul>

    <h3>Our Design Philosophy</h3>
    <p>We believe in minimal, bold design that puts your message first. No unnecessary elements. No bloat. Every pixel serves a purpose—to engage visitors and drive conversions.</p>

    <h3>Built for Business Results</h3>
    <p>We don't design websites just to look pretty. We build them with your business goals in mind. Speed, SEO, user experience, and conversion optimization are built in from day one.</p>

    <h3>Our Web Design Process</h3>
    <p><strong>1. Discovery:</strong> We understand your business, goals, and audience.</p>
    <p><strong>2. Design:</strong> We create a modern, conversion-focused design in collaboration with you.</p>
    <p><strong>3. Development:</strong> We build a fast, SEO-friendly website using modern technology.</p>
    <p><strong>4. Launch &amp; Support:</strong> We deploy your site and provide ongoing maintenance and optimization.</p>

    <h3>Technology Stack</h3>
    <p>We build with modern, performant technologies: Next.js, React, Tailwind CSS, and serverless functions. This means blazing-fast sites that rank well in Google and convert visitors into customers.</p>
  `;

  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for speed—faster sites convert better and rank higher in Google.',
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Perfect experience on every device, from phones to desktops.',
    },
    {
      icon: '🎯',
      title: 'Conversion Focused',
      description: 'Strategic design that guides visitors to take action and become customers.',
    },
  ];

  return (
    <PageTemplate
      title="Web Design & Development"
      description="Modern websites that look great, perform fast, and convert visitors into customers"
      content={content}
      benefits={benefits}
      ctaText="Start Your Website Project"
      ctaHref="/contact-us"
    />
  );
}
