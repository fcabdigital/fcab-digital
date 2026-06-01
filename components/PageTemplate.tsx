'use client';

interface PageTemplateProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export default function PageTemplate({ title, content, children }: PageTemplateProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-16">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold animate-slide-up">{title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="prose prose-lg max-w-4xl">
            {/* Parse HTML content safely */}
            <div
              className="space-y-6 text-dark-900"
              dangerouslySetInnerHTML={{
                __html: content
                  .replace(/href="\/\//g, 'href="')
                  .replace(/<img[^>]*src="([^"]*)"[^>]*>/g, '')
                  .replace(/class="[^"]*"/g, ''),
              }}
            />
          </div>
          {children}
        </div>
      </section>
    </div>
  );
}
