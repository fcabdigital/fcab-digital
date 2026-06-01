import PageTemplate from '@/components/PageTemplate';

export default function SEOPage() {
  const content = `
    <h2>Build Long-Term Organic Visibility</h2>
    <p>Search Engine Optimization is the foundation of sustainable digital growth. We help businesses improve their organic search rankings, drive qualified traffic, and establish authority in their industry.</p>

    <h3>Our Comprehensive SEO Services</h3>
    <ul>
      <li><strong>Technical SEO:</strong> Site speed, crawlability, indexing, Core Web Vitals optimization</li>
      <li><strong>On-Page Optimization:</strong> Title tags, meta descriptions, content optimization, schema markup</li>
      <li><strong>Content Strategy:</strong> Research-backed content creation targeting high-intent keywords</li>
      <li><strong>Authority Building:</strong> Strategic link building and partnership development</li>
      <li><strong>Local SEO:</strong> Google Business Profile optimization and local citations</li>
      <li><strong>SEO Analytics:</strong> Monthly reporting with actionable insights</li>
    </ul>

    <h3>Why SEO Is Different</h3>
    <p>Unlike paid advertising, SEO builds long-term organic visibility. Once you rank, you get consistent traffic without paying per click. It's the most cost-effective channel for sustainable growth.</p>

    <h3>Our SEO Process</h3>
    <p><strong>1. Audit:</strong> We conduct a comprehensive SEO audit covering technical health, on-page factors, and competitive landscape.</p>
    <p><strong>2. Strategy:</strong> Based on findings, we develop a tailored SEO strategy aligned with your business goals.</p>
    <p><strong>3. Implementation:</strong> We optimize your website, create content, and build authority through strategic partnerships.</p>
    <p><strong>4. Monitor:</strong> Monthly reporting with transparent metrics and continuous optimization.</p>

    <h3>Expected Timeline</h3>
    <p>SEO is not a quick fix. Most businesses see meaningful results within 3-6 months, with continued improvement over time. We focus on sustainable growth, not shortcuts.</p>
  `;

  const benefits = [
    {
      icon: '📈',
      title: 'Organic Growth',
      description: 'Sustainable traffic growth that compounds over time without ongoing ad spend.',
    },
    {
      icon: '🎯',
      title: 'Qualified Traffic',
      description: 'Attract visitors actively searching for what you offer—high-intent, ready-to-buy audience.',
    },
    {
      icon: '🏆',
      title: 'Authority Building',
      description: 'Establish your business as an industry leader through ranking and visibility.',
    },
  ];

  return (
    <PageTemplate
      title="SEO Services"
      description="Drive organic traffic, improve rankings, and build lasting authority with strategic SEO"
      content={content}
      benefits={benefits}
      ctaText="Schedule a Free SEO Audit"
      ctaHref="/contact-us"
    />
  );
}
