import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center text-[#0D8AFF] hover:text-blue-700 mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using VegaText's services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must use our services in compliance with all applicable laws and regulations</li>
                <li>You are responsible for maintaining the security of your account credentials</li>
                <li>You agree not to use our services for any unlawful or unauthorized purposes</li>
                <li>You must not transmit any malicious code or attempt to harm our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Service Availability</h2>
              <p>
                We strive to provide uninterrupted service, but we cannot guarantee that our services will be available 100% of the time. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Messaging Policies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must have proper consent from recipients before sending messages</li>
                <li>You must honor opt-out requests promptly</li>
                <li>You must not send spam or unsolicited messages</li>
                <li>Message content must comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment Terms</h2>
              <p>
                Payment terms are based on the service plan you choose. You agree to pay all fees associated with your use of our services. We reserve the right to modify our pricing with appropriate notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by VegaText and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p>
                VegaText shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>WhatsApp: <a href="https://wa.me/251906616636" className="text-[#0D8AFF] hover:text-blue-700">+251 906 616 636</a></li>
                <li>Email: <a href="mailto:info@vegatext.com" className="text-[#0D8AFF] hover:text-blue-700">info@vegatext.com</a></li>
              </ul>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}