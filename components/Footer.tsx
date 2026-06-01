import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-16 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">FCAB</h3>
            <p className="text-dark-300 text-sm">
              Digital marketing specialists supporting businesses across the UK.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>
                <Link href="/google-ads" className="hover:text-primary-400">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-primary-400">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/web-design" className="hover:text-primary-400">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/customer-relationship-management" className="hover:text-primary-400">
                  CRM
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-dark-300">
              <li>
                <Link href="/digital-marketing-agency-surrey" className="hover:text-primary-400">
                  Surrey
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing-agency-hampshire" className="hover:text-primary-400">
                  Hampshire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-dark-300 mb-2">
              <a href="tel:02034889116" className="hover:text-primary-400">
                02034 889 116
              </a>
            </p>
            <p className="text-sm text-dark-300">
              <a href="mailto:hello@fcabdigital.com" className="hover:text-primary-400">
                hello@fcabdigital.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-dark-400">
            <p>
              FCAB SEO Ltd t/a FCAB Digital. Company number 12928100. Registered office: Castle House, Castle Street, Guildford, Surrey GU1 3UW.
            </p>
            <Link href="/privacy-policy" className="hover:text-primary-400 mt-4 md:mt-0">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
