'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-dark-100">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold hover-scale">
          <span className="gradient-text">FCAB</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-primary-500">
            HOME
          </Link>
          <div className="relative group">
            <button className="hover:text-primary-500">SERVICES</button>
            <div className="absolute left-0 pt-2 w-48 bg-white border border-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/google-ads" className="block px-4 py-2 hover:bg-primary-50">
                Google Ads
              </Link>
              <Link href="/seo" className="block px-4 py-2 hover:bg-primary-50">
                SEO
              </Link>
              <Link href="/seo/technical-seo-services" className="block px-4 py-2 hover:bg-primary-50 text-sm">
                Technical SEO
              </Link>
              <Link href="/seo/local-seo-services" className="block px-4 py-2 hover:bg-primary-50 text-sm">
                Local SEO
              </Link>
              <Link href="/youtube-seo-agency" className="block px-4 py-2 hover:bg-primary-50 text-sm">
                YouTube SEO
              </Link>
              <Link href="/web-design" className="block px-4 py-2 hover:bg-primary-50">
                Web Design
              </Link>
              <Link href="/customer-relationship-management" className="block px-4 py-2 hover:bg-primary-50">
                CRM
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-primary-500">LOCATIONS</button>
            <div className="absolute left-0 pt-2 w-48 bg-white border border-dark-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all max-h-48 overflow-y-auto">
              <Link href="/digital-marketing-agency-surrey" className="block px-4 py-2 hover:bg-primary-50 text-sm">
                Surrey
              </Link>
              <Link href="/digital-marketing-agency-hampshire" className="block px-4 py-2 hover:bg-primary-50 text-sm">
                Hampshire
              </Link>
            </div>
          </div>
          <Link href="/contact-us" className="btn btn-primary">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-dark-100 p-4">
          <Link href="/" className="block py-2 hover:text-primary-500">
            Home
          </Link>
          <Link href="/google-ads" className="block py-2 hover:text-primary-500">
            Google Ads
          </Link>
          <Link href="/seo" className="block py-2 hover:text-primary-500">
            SEO
          </Link>
          <Link href="/web-design" className="block py-2 hover:text-primary-500">
            Web Design
          </Link>
          <Link href="/customer-relationship-management" className="block py-2 hover:text-primary-500">
            CRM
          </Link>
          <Link href="/contact-us" className="btn btn-primary block text-center mt-4">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
