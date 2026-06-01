import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-900 to-dark-800 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-dark-200">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="hover-lift">
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <a href="tel:02034889116" className="text-primary-500 hover:text-primary-600 text-xl">
                    02034 889 116
                  </a>
                </div>

                <div className="hover-lift">
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a href="mailto:hello@fcabdigital.com" className="text-primary-500 hover:text-primary-600 text-xl">
                    hello@fcabdigital.com
                  </a>
                </div>

                <div className="hover-lift">
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-dark-600">
                    Castle House<br />
                    Castle Street<br />
                    Guildford, Surrey GU1 3UW<br />
                    United Kingdom
                  </p>
                </div>

                <div className="hover-lift">
                  <h3 className="text-lg font-bold mb-2">Hours</h3>
                  <p className="text-dark-600">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
