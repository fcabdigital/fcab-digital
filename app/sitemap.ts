import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fcabdigital.com'

  // Service pages
  const servicePages = [
    '',
    '/seo/',
    '/web-design/',
    '/google-ads/',
    '/customer-relationship-management/',
  ]

  // Location pages
  const surreyLocations = [
    '/digital-marketing-agency-surrey/',
    '/digital-marketing-agency-surrey/guildford/',
    '/digital-marketing-agency-surrey/chertsey/',
    '/digital-marketing-agency-surrey/dorking/',
    '/digital-marketing-agency-surrey/epsom/',
    '/digital-marketing-agency-surrey/esher/',
    '/digital-marketing-agency-surrey/leatherhead/',
    '/digital-marketing-agency-surrey/shepperton/',
    '/digital-marketing-agency-surrey/walton-on-thames/',
    '/digital-marketing-agency-surrey/weybridge/',
    '/digital-marketing-agency-surrey/woking/',
  ]

  const hampshireLocations = [
    '/digital-marketing-agency-hampshire/',
    '/digital-marketing-agency-hampshire/aldershot/',
    '/digital-marketing-agency-hampshire/andover/',
    '/digital-marketing-agency-hampshire/basingstoke/',
    '/digital-marketing-agency-hampshire/eastleigh/',
    '/digital-marketing-agency-hampshire/farnborough/',
    '/digital-marketing-agency-hampshire/fleet/',
    '/digital-marketing-agency-hampshire/portsmouth/',
    '/digital-marketing-agency-hampshire/southampton/',
    '/digital-marketing-agency-hampshire/winchester/',
    '/digital-marketing-agency-hampshire/yateley/',
  ]

  // SEO child pages
  const seoPages = [
    '/seo/technical-seo-services/',
    '/seo/local-seo-services/',
    '/youtube-seo-agency/',
  ]

  // Other pages
  const otherPages = [
    '/contact-us/',
    '/privacy-policy/',
  ]

  const allPages = [
    ...servicePages,
    ...surreyLocations,
    ...hampshireLocations,
    ...seoPages,
    ...otherPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : page.includes('/digital-marketing-agency-surrey/') || page.includes('/digital-marketing-agency-hampshire/') ? 0.8 : 0.9,
  }))
}
