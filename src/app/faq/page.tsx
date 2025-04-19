import Link from 'next/link';

export default function FAQ() {
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h1>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">General Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">What is VegaText?</h3>
                  <p className="text-gray-600">
                    VegaText is a comprehensive SMS messaging platform that provides bulk SMS, two-way messaging, automated scheduling, and personalized messaging solutions for businesses.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">How do I get started with VegaText?</h3>
                  <p className="text-gray-600">
                    You can get started by contacting our sales team through WhatsApp or email. We&apos;ll help you choose the right plan and guide you through the setup process.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">What are your pricing plans?</h3>
                  <p className="text-gray-600">
                    We offer flexible pricing plans based on your messaging needs. Contact us for a customized quote that fits your business requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Technical Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">What is your message delivery success rate?</h3>
                  <p className="text-gray-600">
                    We maintain a 99.9% delivery success rate through direct connections with mobile operators and intelligent routing algorithms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Do you support API integration?</h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive API documentation and support for seamless integration with your existing systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">How do you handle message scheduling?</h3>
                  <p className="text-gray-600">
                    Our platform allows you to schedule messages in advance with support for different time zones and recurring schedules.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Support & Security</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">What kind of support do you offer?</h3>
                  <p className="text-gray-600">
                    We provide dedicated support through multiple channels including WhatsApp, email, and Telegram. Our team is available to help you with any questions or issues.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">How do you ensure message security?</h3>
                  <p className="text-gray-600">
                    We use industry-standard encryption and security measures to protect your messages and data. Our platform complies with relevant data protection regulations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">How do you handle opt-outs?</h3>
                  <p className="text-gray-600">
                    We automatically process opt-outs and maintain compliance with regulations by immediately removing opted-out numbers from your lists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <div className="space-x-4">
              <a href="https://wa.me/251906616636" className="text-[#0D8AFF] hover:text-blue-700">
                Contact us on WhatsApp
              </a>
              <span className="text-gray-400">|</span>
              <a href="mailto:info@vegatext.com" className="text-[#0D8AFF] hover:text-blue-700">
                Send us an email
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </div>
  );
}