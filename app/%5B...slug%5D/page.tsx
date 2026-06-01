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

    <h3>Local Expertise, Proven Results</h3>
    <p>We understand the unique challenges and opportunities facing businesses in ${locationData.region}. With years of experience serving the local market, we know what works.</p>

    <h3>Our Services</h3>
    <ul>
      <li>SEO & Organic Search</li>
      <li>Google Ads & PPC</li>
      <li>Web Design & Development</li>
      <li>CRM Implementation</li>
    </ul>

    <h3>Why Choose FCAB Digital?</h3>
    <p>We're not just another digital agency. We're local, we're experienced, and we're committed to delivering real results for your business.</p>
  `;

  return (
    <PageTemplate title={locationData.title} content={content}>
      <div className="mt-12 p-8 bg-primary-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Ready to Grow in ${locationData.region}?</h3>
        <p className="text-dark-600 mb-6">
          Let's discuss how we can help your business thrive.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Get in Touch
        </Link>
      </div>
    </PageTemplate>
  );
}

export async function generateStaticParams() {
  return Object.keys(locationContent).map((slug) => ({
    slug: slug.split('/'),
  }));
}
