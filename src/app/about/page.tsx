import Link from 'next/link';

export default function AboutUs() {
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

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-900 to-[#0D8AFF] text-white rounded-lg shadow-xl overflow-hidden mb-16">
            <div className="flex flex-col md:flex-row">
              <div className="p-12 md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-300">Us</span></h1>
                <p className="text-xl font-light opacity-90 mb-6">
                  VegaText is leading the transformation of business communication through innovative messaging solutions.
                </p>
                <p className="text-sm opacity-80">Est. 2013</p>
              </div>
              <div className="bg-blue-800 p-12 md:w-1/2 flex items-center">
                <div className="space-y-6 w-full">
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-bold mb-2">10M+</div>
                    <div className="text-blue-200">Messages Delivered Daily</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-200">Delivery Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="bg-white rounded-lg shadow-md p-10 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-600 mb-6">
                  Founded in 2013, VegaText began with a simple mission: to make business communication more effective and accessible. We noticed a gap in the market for reliable, feature-rich messaging solutions that could serve businesses of all sizes.
                </p>
                <p className="text-gray-600">
                  What started as a small startup with a handful of clients has grown into a trusted messaging platform serving thousands of businesses across multiple industries. Our journey has been defined by constant innovation, reliability, and our unwavering commitment to customer success.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#0D8AFF] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-800">Reliability</span>
                      <p className="text-gray-600">We deliver what we promise, when we promise it.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#0D8AFF] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-800">Innovation</span>
                      <p className="text-gray-600">We continuously evolve our technology to meet changing needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#0D8AFF] mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <div>
                      <span className="font-medium text-gray-800">Customer Focus</span>
                      <p className="text-gray-600">We prioritize our customers&apos; success above all else.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-lg shadow-md p-10 mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Why Choose VegaText</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-[#0D8AFF]">
                <div className="w-12 h-12 bg-[#0D8AFF] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Lightning Fast Delivery</h3>
                <p className="text-gray-600">
                  Our messages are delivered within seconds through direct connections with mobile operators.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-[#0D8AFF]">
                <div className="w-12 h-12 bg-[#0D8AFF] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Compliant</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with full compliance with messaging and data protection regulations.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-[#0D8AFF]">
                <div className="w-12 h-12 bg-[#0D8AFF] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Scalable & Affordable</h3>
                <p className="text-gray-600">
                  Solutions that grow with your business without breaking your budget or compromising quality.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg shadow-xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your business communication?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that trust VegaText for their critical messaging needs.
            </p>
            <a
              href="https://wa.me/251906616636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0D8AFF] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors text-lg"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}