import PageTemplate from '@/components/PageTemplate';

export default function CRMPage() {
  const content = `
    <h2>CRM Systems That Drive Sales Growth</h2>
    <p>A good CRM system is the nervous system of your business. It keeps your team aligned, provides visibility into the sales pipeline, and helps you close deals faster. We specialize in HubSpot implementation and optimization.</p>

    <h3>Our CRM Services</h3>
    <ul>
      <li><strong>CRM Selection:</strong> Help you choose the right CRM for your business and budget</li>
      <li><strong>HubSpot Implementation:</strong> Complete setup and configuration by certified partners</li>
      <li><strong>Sales Pipeline Design:</strong> Customize your pipeline to match your sales process</li>
      <li><strong>Marketing Automation:</strong> Email workflows, lead nurturing, and customer journeys</li>
      <li><strong>Data Migration:</strong> Safe transfer of your existing data from spreadsheets or legacy systems</li>
      <li><strong>Team Training:</strong> Comprehensive training so your team uses the CRM effectively</li>
      <li><strong>Integration:</strong> Connect your CRM with your website, email, and other tools</li>
      <li><strong>Ongoing Support:</strong> Maintenance, optimization, and best practices guidance</li>
    </ul>

    <h3>Why We Specialize in HubSpot</h3>
    <p>HubSpot is the market-leading platform for growing businesses. It combines CRM, marketing automation, sales tools, and customer service in one platform. As certified HubSpot partners, we know how to leverage every feature.</p>

    <h3>The Problem With DIY CRM Setup</h3>
    <p>Most businesses set up their CRM incorrectly. This leads to poor adoption, inaccurate data, and wasted potential. We design your system for real-world usage and adoption from day one.</p>

    <h3>Our CRM Implementation Process</h3>
    <p><strong>1. Strategy:</strong> We audit your current sales process and design a CRM structure that matches your business.</p>
    <p><strong>2. Setup:</strong> We configure HubSpot, migrate your data, and integrate with your existing tools.</p>
    <p><strong>3. Workflows:</strong> We build automation that handles routine tasks and keeps leads moving.</p>
    <p><strong>4. Training:</strong> We train your team on best practices and day-to-day usage.</p>
    <p><strong>5. Optimization:</strong> We monitor adoption, identify bottlenecks, and continuously improve.</p>

    <h3>What You'll Get</h3>
    <p>A fully operational CRM that your team actually uses. Better visibility into your sales pipeline. Faster deal cycles. Improved customer relationships. And the data you need to make smart business decisions.</p>
  `;

  const benefits = [
    {
      icon: '👥',
      title: 'Team Alignment',
      description: 'Everyone sees the same customer data and sales pipeline—no silos, no miscommunication.',
    },
    {
      icon: '⚙️',
      title: 'Automated Workflows',
      description: 'Eliminate manual tasks with automated lead nurturing, follow-ups, and data entry.',
    },
    {
      icon: '📊',
      title: 'Actionable Insights',
      description: 'Real-time visibility into your sales process so you can make better decisions faster.',
    },
  ];

  return (
    <PageTemplate
      title="CRM Implementation & Optimization"
      description="HubSpot specialists helping growing businesses implement CRM systems that actually get used"
      content={content}
      benefits={benefits}
      ctaText="Discuss Your CRM Needs"
      ctaHref="/contact-us"
    />
  );
}
