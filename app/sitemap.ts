import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fcabdigital.com';

  // Service pages
  const servicePages = [
    { url: '/', lastmod: new Date().toISOString().split('T')[0], priority: 1.0 },
    { url: '/seo', lastmod: new Date().toISOString().split('T')[0], priority: 0.9 },
    { url: '/seo/technical-seo-services', lastmod: new Date().toISOString().split('T')[0], priority: 0.8 },
    { url: '/seo/local-seo-services', lastmod: new Date().toISOString().split('T')[0], priority: 0.8 },
    { url: '/youtube-seo-agency', lastmod: new Date().toISOString().split('T')[0], priority: 0.8 },
    { url: '/google-ads', lastmod: new Date().toISOString().split('T')[0], priority: 0.9 },
    { url: '/web-design', lastmod: new Date().toISOString().split('T')[0], priority: 0.9 },
    { url: '/customer-relationship-management', lastmod: new Date().toISOString().split('T')[0], priority: 0.9 },
  ];

  // Surrey locations
  const surreyLocations = [
    '/digital-marketing-agency-surrey',
    '/digital-marketing-agency-surrey/chertsey',
    '/digital-marketing-agency-surrey/dorking',
    '/digital-marketing-agency-surrey/epsom',
    '/digital-marketing-agency-surrey/esher',
    '/digital-marketing-agency-surrey/farnborough',
    '/digital-marketing-agency-surrey/guildford',
    '/digital-marketing-agency-surrey/leatherhead',
    '/digital-marketing-agency-surrey/shepperton',
    '/digital-marketing-agency-surrey/weybridge',
    '/digital-marketing-agency-surrey/woking',
  ];

  // Hampshire locations
  const hampshireLocations = [
    '/digital-marketing-agency-hampshire',
    '/digital-marketing-agency-hampshire/aldershot',
    '/digital-marketing-agency-hampshire/andover',
    '/digital-marketing-agency-hampshire/basingstoke',
    '/digital-marketing-agency-hampshire/eastleigh',
    '/digital-marketing-agency-hampshire/fleet',
    '/digital-marketing-agency-hampshire/portsmouth',
    '/digital-marketing-agency-hampshire/southampton',
    '/digital-marketing-agency-hampshire/winchester',
    '/digital-marketing-agency-hampshire/yateley',
  ];

  const locationPages = [...surreyLocations, ...hampshireLocations].map((url) => ({
    url,
    lastmod: new Date().toISOString().split('T')[0],
    priority: 0.7,
  }));

  // Other pages
  const otherPages = [
    { url: '/contact-us', lastmod: new Date().toISOString().split('T')[0], priority: 0.8 },
    { url: '/privacy-policy', lastmod: new Date().toISOString().split('T')[0], priority: 0.3 },
    { url: '/thank-you', lastmod: new Date().toISOString().split('T')[0], priority: 0.3 },
  ];

  return [
    ...servicePages,
    ...locationPages,
    ...otherPages,
  ].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastmod,
    changeFrequency: 'weekly' as const,
    priority: page.priority,
  }));
}
