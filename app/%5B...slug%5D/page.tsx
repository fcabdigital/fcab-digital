import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

const locationContent: Record<string, { title: string; region: string; description: string }> = {
  'digital-marketing-agency-surrey': {
    title: 'Digital Marketing Agency Surrey',
    region: 'Surrey',
    description: 'Serving businesses across Surrey with expert digital marketing services.',
  },
  'digital-marketing-agency-hampshire': {
    title: 'Digital Marketing Agency Hampshire',
    region: 'Hampshire',
    description: 'Helping Hampshire businesses grow online with proven digital strategies.',
  },
  'digital-marketing-agency-aldershot': {
    title: 'Digital Marketing Agency Aldershot',
    region: 'Aldershot',
    description: 'Digital marketing solutions for Aldershot and surrounding areas.',
  },
  'digital-marketing-agency-andover': {
    title: 'Digital Marketing Agency Andover',
    region: 'Andover',
    description: 'Strategic digital marketing for Andover businesses.',
  },
  'digital-marketing-agency-basingstoke': {
    title: 'Digital Marketing Agency Basingstoke',
    region: 'Basingstoke',
    description: 'Digital marketing services serving Basingstoke and the local area.',
  },
  'digital-marketing-agency-chertsey': {
    title: 'Digital Marketing Agency Chertsey',
    region: 'Chertsey',
    description: 'Expert digital marketing support for Chertsey businesses.',
  },
  'digital-marketing-agency-dorking': {
    title: 'Digital Marketing Agency Dorking',
    region: 'Dorking',
    description: 'Comprehensive digital marketing solutions for Dorking.',
  },
  'digital-marketing-agency-eastleigh': {
    title: 'Digital Marketing Agency Eastleigh',
    region: 'Eastleigh',
    description: 'Digital marketing expertise for Eastleigh businesses.',
  },
  'digital-marketing-agency-epsom': {
    title: 'Digital Marketing Agency Epsom',
    region: 'Epsom',
    description: 'Driving business growth through digital marketing in Epsom.',
  },
  'digital-marketing-agency-esher': {
    title: 'Digital Marketing Agency Esher',
    region: 'Esher',
    description: 'Digital marketing services tailored for Esher businesses.',
  },
  'digital-marketing-agency-farnborough': {
    title: 'Digital Marketing Agency Farnborough',
    region: 'Farnborough',
    description: 'Expert digital marketing support in Farnborough.',
  },
  'digital-marketing-agency-fleet': {
    title: 'Digital Marketing Agency Fleet',
    region: 'Fleet',
    description: 'Digital marketing solutions for Fleet area businesses.',
  },
  'digital-marketing-agency-guildford': {
    title: 'Digital Marketing Agency Guildford',
    region: 'Guildford',
    description: 'Serving Guildford businesses with digital marketing excellence.',
  },
  'digital-marketing-agency-leatherhead': {
    title: 'Digital Marketing Agency Leatherhead',
    region: 'Leatherhead',
    description: 'Digital marketing services for Leatherhead and surrounding area.',
  },
  'digital-marketing-agency-portsmouth': {
    title: 'Digital Marketing Agency Portsmouth',
    region: 'Portsmouth',
    description: 'Comprehensive digital marketing for Portsmouth businesses.',
  },
  'digital-marketing-agency-shepperton': {
    title: 'Digital Marketing Agency Shepperton',
    region: 'Shepperton',
    description: 'Digital marketing support for Shepperton area.',
  },
  'digital-marketing-agency-southampton': {
    title: 'Digital Marketing Agency Southampton',
    region: 'Southampton',
    description: 'Expert digital marketing services for Southampton businesses.',
  },
  'digital-marketing-agency-walton-on-thames': {
    title: 'Digital Marketing Agency Walton-on-Thames',
    region: 'Walton-on-Thames',
    description: 'Digital marketing solutions for Walton-on-Thames.',
  },
  'digital-marketing-agency-weybridge': {
    title: 'Digital Marketing Agency Weybridge',
    region: 'Weybridge',
    description: 'Digital marketing expertise for Weybridge businesses.',
  },
  'digital-marketing-agency-winchester': {
    title: 'Digital Marketing Agency Winchester',
    region: 'Winchester',
    description: 'Driving growth through digital marketing in Winchester.',
  },
  'digital-marketing-agency-woking': {
    title: 'Digital Marketing Agency Woking',
    region: 'Woking',
    description: 'Digital marketing services for Woking and beyond.',
  },
  'digital-marketing-agency-yateley': {
    title: 'Digital Marketing Agency Yateley',
    region: 'Yateley',
    description: 'Expert digital marketing support for Yateley businesses.',
  },
};

export default function DynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const locationData = locationContent[slug];

  if (!locationData) {
    return (
      <div>
        <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-20">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-4">Page Not Found</h1>
            <p className="text-xl text-dark-200 mb-8">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <Link href="/" className="btn btn-primary text-lg">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const content = `
    <h2>Digital Marketing Services in ${locationData.region}</h2>
    <p>${locationData.description}</p>

    <h3>Why Local Digital Marketing Matters</h3>
    <p>Businesses in ${locationData.region} face unique challenges and opportunities. Your customers are searching online. Your competitors are bidding on ads. The question is: are you visible when they search?</p>
    <p>We help ${locationData.region} businesses:</p>
    <ul>
      <li>Get found in Google search results and Google Maps</li>
      <li>Generate leads and sales through targeted ads</li>
      <li>Build modern, fast websites that convert</li>
      <li>Organize and nurture customer relationships</li>
    </ul>

    <h3>Our Complete Service Offering</h3>
    <ul>
      <li><strong>SEO &amp; Organic Search:</strong> Rank higher in Google and drive qualified traffic</li>
      <li><strong>Google Ads &amp; PPC:</strong> Generate immediate leads with targeted paid campaigns</li>
      <li><strong>Local SEO:</strong> Dominate local search and Google Maps in ${locationData.region}</li>
      <li><strong>Web Design:</strong> Modern, conversion-focused websites that represent your business</li>
      <li><strong>CRM Implementation:</strong> Organize customer relationships and automate sales processes</li>
    </ul>

    <h3>Local Expertise You Can Trust</h3>
    <p>We're not a massive agency with cookie-cutter solutions. We understand the ${locationData.region} market. We know your competition. We know what works locally because we've helped dozens of businesses in your area succeed.</p>

    <h3>Our Approach</h3>
    <p><strong>1. Discovery:</strong> We audit your current online presence and understand your business goals.</p>
    <p><strong>2. Strategy:</strong> We develop a custom digital marketing strategy tailored to your local market.</p>
    <p><strong>3. Execution:</strong> We implement across all channels—SEO, ads, website, CRM.</p>
    <p><strong>4. Growth:</strong> We monitor, optimise, and help you grow month after month.</p>

    <h3>Ready to Grow Your Business in ${locationData.region}?</h3>
    <p>We work with businesses of all sizes, from startups to established companies. Whether you need SEO, ads, a new website, or a complete digital marketing overhaul, we can help.</p>
  `;

  const benefits = [
    {
      icon: '📍',
      title: 'Local Expertise',
      description: `We know the ${locationData.region} market and what works for local businesses.`,
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: `Dozens of ${locationData.region} businesses have grown with our help.`,
    },
    {
      icon: '💡',
      title: 'Strategic Approach',
      description: 'We build custom strategies aligned with your business goals.',
    },
  ];

  return (
    <PageTemplate
      title={locationData.title}
      description={`Helping ${locationData.region} businesses grow online with proven digital marketing strategies`}
      content={content}
      benefits={benefits}
      ctaText={`Get Your Free ${locationData.region} Digital Marketing Audit`}
      ctaHref="/contact-us"
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(locationContent).map((slug) => ({
    slug: slug.split('/'),
  }));
}
