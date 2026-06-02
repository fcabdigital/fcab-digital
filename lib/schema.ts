export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FCAB Digital",
  "url": "https://fcabdigital.com",
  "logo": "https://fcabdigital.com/logo.png",
  "description": "Digital marketing agency specializing in SEO, Google Ads, Web Design, and CRM solutions",
  "sameAs": [
    "https://www.facebook.com/fcabdigital",
    "https://www.linkedin.com/company/fcab-digital",
    "https://twitter.com/fcabdigital"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "joe@fcabdigital.com",
    "url": "https://fcabdigital.com/contact-us"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "FCAB Digital",
    "addressCountry": "GB"
  }
}

export const serviceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "FCAB Digital",
    "url": "https://fcabdigital.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "GB"
  }
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const localBusinessSchema = (location: string, phone: string, address: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": `FCAB Digital - ${location}`,
  "description": `Digital marketing agency serving ${location}. Specialist in SEO, Google Ads, Web Design, and CRM.`,
  "url": "https://fcabdigital.com",
  "telephone": phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": address,
    "addressLocality": location,
    "addressCountry": "GB"
  },
  "priceRange": "$$",
  "serviceArea": {
    "@type": "Country",
    "name": "GB"
  }
})
