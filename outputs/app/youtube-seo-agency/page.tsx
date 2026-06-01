import PageTemplate from '@/components/PageTemplate';

export default function YouTubeSEOPage() {
  const content = `
    <h2>YouTube SEO: Get Your Videos Discovered</h2>
    <p>YouTube is the second-largest search engine with 2+ billion users. Video content is increasingly important for SEO, engagement, and traffic. We help optimize your videos for discovery and growth.</p>

    <h3>Complete YouTube SEO Services</h3>
    <ul>
      <li><strong>Video Keyword Research:</strong> Find high-volume keywords people search for on YouTube</li>
      <li><strong>Title Optimization:</strong> Create compelling titles that rank and convert</li>
      <li><strong>Description Optimization:</strong> Detailed descriptions with keywords and links</li>
      <li><strong>Tag Strategy:</strong> Strategic tagging to improve discoverability</li>
      <li><strong>Thumbnail Design:</strong> Eye-catching thumbnails that increase click-through rates</li>
      <li><strong>Playlist Management:</strong> Organize videos to increase watch time and engagement</li>
      <li><strong>Channel Optimization:</strong> Complete channel SEO for better visibility</li>
      <li><strong>Video Promotion:</strong> Strategies to increase views, subscribers, and engagement</li>
    </ul>

    <h3>Why Video Content Matters</h3>
    <p>Video content drives engagement and shares. Google loves video. And YouTube videos often rank in Google's top search results. If you're not using video, you're missing a huge opportunity.</p>

    <h3>YouTube Ranking Factors</h3>
    <p><strong>Watch Time:</strong> The longer people watch, the more YouTube recommends your video.</p>
    <p><strong>Engagement:</strong> Likes, comments, and shares signal quality to YouTube's algorithm.</p>
    <p><strong>CTR:</strong> Your video's click-through rate in search results matters.</p>
    <p><strong>Keywords:</strong> Optimize titles, descriptions, and tags with relevant keywords.</p>

    <h3>Our YouTube SEO Process</h3>
    <p><strong>1. Keyword Research:</strong> We find high-volume, achievable keywords for your niche.</p>
    <p><strong>2. Optimization:</strong> We optimize titles, descriptions, tags, and thumbnails for each video.</p>
    <p><strong>3. Channel Strategy:</strong> We build a cohesive channel strategy that promotes consistency and growth.</p>
    <p><strong>4. Promotion:</strong> We implement strategies to increase views, engagement, and subscribers.</p>

    <h3>Expected Results</h3>
    <p>More views from YouTube search. Higher engagement (likes, comments, shares). More subscribers. Better rankings in Google's video results. Increased traffic to your website.</p>
  `;

  const benefits = [
    {
      icon: '🎬',
      title: 'More Views',
      description: 'Get your videos discovered by people searching for what you offer.',
    },
    {
      icon: '📈',
      title: 'Build Authority',
      description: 'Video content establishes you as an expert in your industry.',
    },
    {
      icon: '🔗',
      title: 'Drive Traffic',
      description: 'Video content drives traffic to your website and generates leads.',
    },
  ];

  return (
    <PageTemplate
      title="YouTube SEO Services"
      description="Get your videos discovered and grow your YouTube channel"
      content={content}
      benefits={benefits}
      ctaText="Optimize Your Videos"
      ctaHref="/contact-us"
    />
  );
}
