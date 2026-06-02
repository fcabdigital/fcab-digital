import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container max-w-2xl text-center py-20">
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-dark-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/" 
            className="btn btn-primary text-lg"
          >
            Back to Home
          </Link>
          <Link 
            href="/contact-us" 
            className="btn btn-outline text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
