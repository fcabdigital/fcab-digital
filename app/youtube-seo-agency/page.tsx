import PageTemplate from '@/components/PageTemplate';
import Link from 'next/link';

export default function YouTubeSEOPage() {
  const content = `
    <h2>YouTube SEO Services</h2>
    <p>YouTube is the second largest search engine. We help optimize your video content to be discovered and ranked.</p>

    <h3>Our YouTube SEO Services</h3>
    <ul>
      <li>Video Keyword Research</li>
      <li>Title &amp; Description Optimization</li>
      <li>Tag Strategy</li>
      <li>Thumbnail Optimization</li>
      <li>Playlist Management</li>
      <li>YouTube Channel SEO</li>
      <li>Video Promotion Strategy</li>
    </ul>

    <h3>Grow Your YouTube Presence</h3>
    <p>Video content is increasingly important for SEO and engagement. Let's optimize your videos for discovery and growth.</p>
  `;

  return (
    <PageTemplate title="YouTube SEO Services" content={content}>
      <div className="mt-12 p-8 bg-accent-50 rounded-lg hover-lift">
        <h3 className="text-2xl font-bold mb-4">Optimize Your Videos</h3>
        <p className="text-dark-600 mb-6">
          Get your videos discovered by more people searching on YouTube.
        </p>
        <Link href="/contact-us" className="btn btn-primary inline-block">
          Start Optimizing
        </Link>
      </div>
    </PageTemplate>
  );
}
