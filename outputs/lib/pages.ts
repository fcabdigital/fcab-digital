// This file will load page data from the extracted WordPress JSON
// In production, you would load from a database or CMS

export interface Page {
  title: string;
  slug: string;
  url: string;
  content: string;
}

// Simulated page data loaded from WordPress export
// In a real app, import from JSON or database
const pages: Record<string, Page> = {
  home: {
    title: 'Home',
    slug: '',
    url: '/',
    content: 'Homepage content',
  },
  'contact-us': {
    title: 'Contact Us',
    slug: 'contact-us',
    url: '/contact-us/',
    content: 'Contact page content',
  },
};

export function getPageBySlug(slug: string): Page | null {
  return pages[slug] || null;
}

export function getAllPages(): Page[] {
  return Object.values(pages);
}
