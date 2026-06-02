import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FCAB Digital | Digital Marketing Specialists',
  description: 'FCAB Digital are digital marketing specialists. We support businesses across the UK with SEO, PPC, website design, and CRM.',
  openGraph: {
    title: 'FCAB Digital | Digital Marketing Specialists',
    description: 'FCAB Digital are digital marketing specialists. We support businesses across the UK with SEO, PPC, website design, and CRM.',
    url: 'https://fcabdigital.com',
    type: 'website',
    locale: 'en_GB',
    siteName: 'FCAB Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FCAB Digital | Digital Marketing Specialists',
    description: 'FCAB Digital are digital marketing specialists. We support businesses across the UK with SEO, PPC, website design, and CRM.',
    creator: '@fcabdigital',
  },
  metadataBase: new URL('https://fcabdigital.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-M4RV5FQ`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-M4RV5FQ');
            `,
          }}
        />
      </head>
      <body className="bg-white text-dark-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
