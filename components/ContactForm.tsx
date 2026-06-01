'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted && (
        <div className="bg-accent-100 border border-accent-300 text-accent-900 px-4 py-3 rounded-lg animate-slide-up">
          ✓ Thanks! We'll be in touch soon.
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-300 text-red-900 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all hover-lift"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all hover-lift"
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all hover-lift"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none hover-lift"
      />

      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-primary w-full text-lg hover-lift disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
