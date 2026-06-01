import PageTemplate from '@/components/PageTemplate';

export default function GoogleAdsPage() {
  const content = `
    <h2>Generate Leads & Sales With Google Ads</h2>
    <p>Google Ads puts your business directly in front of customers actively searching for what you offer. We create, manage, and optimize campaigns for maximum ROI.</p>

    <h3>Complete Google Ads Services</h3>
    <ul>
      <li><strong>Search Ads:</strong> Capture high-intent keywords when customers are actively searching</li>
      <li><strong>Display Ads:</strong> Reach your audience across the web with targeted visual ads</li>
      <li><strong>Remarketing:</strong> Re-engage visitors who showed interest but didn't convert</li>
      <li><strong>Shopping Ads:</strong> Showcase products directly in search results (e-commerce)</li>
      <li><strong>YouTube Ads:</strong> Reach audiences on the world's second-largest search engine</li>
      <li><strong>Continuous Optimization:</strong> A/B testing, bid management, audience refinement</li>
    </ul>

    <h3>Why Google Ads Deliver Results</h3>
    <p>Google Ads is incredibly effective because you're bidding on intent. When someone searches for your product or service, your ad appears. It's not about luck—it's about reaching the right people at the right moment.</p>

    <h3>Our Google Ads Methodology</h3>
    <p><strong>1. Strategy:</strong> We audit your market, competition, and goals to build a comprehensive campaign strategy.</p>
    <p><strong>2. Setup:</strong> Expert campaign structure, keyword research, ad copy, and landing page optimization.</p>
    <p><strong>3. Management:</strong> Daily monitoring, bid adjustments, and continuous optimization for performance.</p>
    <p><strong>4. Reporting:</strong> Transparent reporting on ROI, cost per conversion, and campaign performance.</p>

    <h3>Immediate Results</h3>
    <p>Unlike SEO, Google Ads delivers visibility immediately. Your ads can go live and start generating leads within hours. We focus on maximizing ROI from day one.</p>
  `;

  const benefits = [
    {
      icon: '⚡',
      title: 'Immediate Visibility',
      description: 'Your ads go live and start generating leads within hours, not months.',
    },
    {
      icon: '💰',
      title: 'ROI Focused',
      description: 'We optimize every campaign around your cost per conversion and profitability goals.',
    },
    {
      icon: '🎯',
      title: 'Precision Targeting',
      description: 'Reach customers actively searching, at the exact moment they need you.',
    },
  ];

  return (
    <PageTemplate
      title="Google Ads Management"
      description="Generate immediate, measurable results with expert Google Ads campaigns"
      content={content}
      benefits={benefits}
      ctaText="Get Your Free Ads Audit"
      ctaHref="/contact-us"
    />
  );
}
