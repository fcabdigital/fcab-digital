import PageTemplate from '@/components/PageTemplate';

export default function LocalSEOPage() {
  const content = `
    <h2>Local SEO: Dominate Your Area</h2>
    <p>Local SEO ensures that when someone searches for your service in your area, they find you. For any business with a physical location or local service area, local SEO is essential.</p>

    <h3>Complete Local SEO Services</h3>
    <ul>
      <li><strong>Google Business Profile:</strong> Optimize your GBP for local search visibility and customer actions</li>
      <li><strong>Local Citations:</strong> Build consistent business information across directories (Yelp, BBB, etc.)</li>
      <li><strong>Review Generation &amp; Management:</strong> Encourage reviews and respond to customer feedback</li>
      <li><strong>Local Keyword Research:</strong> Target location-specific keywords your customers use</li>
      <li><strong>Local Link Building:</strong> Build authority through local partnerships and directories</li>
      <li><strong>Multi-Location SEO:</strong> Manage SEO for multiple business locations</li>
    </ul>

    <h3>Why Local SEO Matters</h3>
    <p>"Plumber near me," "best restaurant in Surrey," "accountant Hampshire"—when someone searches locally, they're ready to take action. Local SEO gets your business in front of these high-intent searches.</p>

    <h3>Google Local Search Visibility</h3>
    <p>Google uses three main factors for local rankings: relevance, distance, and prominence. We optimize all three to get you at the top of local search results and Google Maps.</p>

    <h3>Our Local SEO Process</h3>
    <p><strong>1. Profile Optimization:</strong> We fully optimize your Google Business Profile with accurate information, photos, and posts.</p>
    <p><strong>2. Citation Building:</strong> We build consistent citations across the most important directories for your industry.</p>
    <p><strong>3. Review Strategy:</strong> We implement a review generation strategy that builds authority and social proof.</p>
    <p><strong>4. Monitoring:</strong> We track your local search visibility and respond to changes in the algorithm.</p>

    <h3>Expected Results</h3>
    <p>Increased visibility in local search and Google Maps. More phone calls and visits from local customers. Higher review counts and ratings. Better local authority and trust.</p>
  `;

  const benefits = [
    {
      icon: '📍',
      title: 'Local Visibility',
      description: 'Show up in local search and Google Maps when customers search in your area.',
    },
    {
      icon: '📞',
      title: 'More Leads',
      description: 'High-intent local searches convert at higher rates than generic searches.',
    },
    {
      icon: '⭐',
      title: 'Build Reviews',
      description: 'Reviews increase visibility and build trust with local customers.',
    },
  ];

  return (
    <PageTemplate
      title="Local SEO Services"
      description="Dominate local search and get more customers in your area"
      content={content}
      benefits={benefits}
      ctaText="Optimize Your Local Presence"
      ctaHref="/contact-us"
    />
  );
}
