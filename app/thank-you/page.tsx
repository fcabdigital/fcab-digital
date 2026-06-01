import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="text-center text-white px-4">
        <div className="text-6xl mb-6">✓</div>
        <h1 className="text-5xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-dark-200 mb-8 max-w-2xl">
          We've received your message and will be in touch soon. If you need immediate assistance, feel free to call us at 02034 889 116.
        </p>
        <Link href="/" className="btn btn-primary text-lg hover-lift">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
