export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Large abstract brand mark in background */}
      <div className="absolute -right-24 top-1/2 transform -translate-y-1/2 w-96 h-96 rounded-full border-[40px] border-[#0D8AFF]/5 z-0"></div>
      <div className="absolute -left-40 bottom-0 w-80 h-80 rounded-full bg-gradient-to-r from-[#0D8AFF]/3 to-transparent z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Bold top section with dramatic typography */}
          <div className="flex flex-col mb-20 relative">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-2/5 relative mb-10 md:mb-0">
                <div className="h-1 w-16 bg-[#0D8AFF] mb-6"></div>
                <h2 className="text-6xl md:text-7xl font-bold text-gray-900 leading-none">
                  About <span className="text-[#0D8AFF]">Us</span>
                </h2>
                <div className="absolute bottom-0 md:bottom-2 -right-4 md:right-0 w-12 h-12 bg-[#0D8AFF]/10 rounded-full"></div>
              </div>

              <div className="md:w-3/5 md:pl-16 md:mt-12 relative">
                <div className="absolute -top-6 -left-6 text-[#0D8AFF] opacity-20">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-2xl md:text-3xl font-light text-gray-600 leading-tight">
                  VegaText is a premier provider of SMS messaging services, offering seamless global communication solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Main content with dramatic visuals */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left column - Bold color box */}
            <div className="md:col-span-4 relative">
              <div className="relative h-full rounded-xl overflow-hidden">
                <div className="aspect-w-1 aspect-h-1 w-full bg-gradient-to-br from-[#0D8AFF] to-indigo-600"></div>
                <div className="absolute inset-0 overflow-hidden">
                  {/* Abstract pattern */}
                  <div className="absolute top-8 right-8 w-32 h-32 border-8 border-white/10 rounded-full"></div>
                  <div className="absolute bottom-12 -left-6 w-24 h-24 border-4 border-white/10 rounded-full"></div>
                </div>
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="text-white/90 text-sm uppercase tracking-widest font-medium">Est. 2013</div>
                  <div className="text-white">
                    <div className="font-bold text-5xl mb-2">10+</div>
                    <div className="uppercase tracking-wider text-sm">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle column - Company description */}
            <div className="md:col-span-4 flex flex-col">
              <div className="p-8 bg-white rounded-xl shadow-xl h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    Our Story
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our robust gateway bridges global connections, reaching over 800 mobile network operators worldwide.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Experience unparalleled messaging quality and reliability with VegaText, your trusted partner in global SMS communication.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="text-[#0D8AFF]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Enterprise Solutions</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="text-[#0D8AFF]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">Secure Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Stats grid with dramatic styling */}
            <div className="md:col-span-4 grid grid-cols-1 gap-6">
              {/* Uptime stat with distinctive design */}
              <div className="bg-gray-800 p-8 rounded-xl text-white relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#0D8AFF]/20 rounded-full"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl md:text-5xl font-bold">99.9<span className="text-[#0D8AFF]">%</span></div>
                    <div className="bg-[#0D8AFF]/20 p-2 rounded-lg">
                      <svg className="w-6 h-6 text-[#0D8AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white/70">Guaranteed Uptime</div>
                </div>
              </div>

              {/* Operators stat */}
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0D8AFF] relative">
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-tl-full"></div>
                <div className="relative">
                  <div className="text-[#0D8AFF] mb-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="text-4xl font-bold text-gray-800">800<span className="text-[#0D8AFF]">+</span></div>
                  <div className="text-gray-600 mt-1">Mobile Operators</div>
                </div>
              </div>

              {/* Bottom stat group in side-by-side layout */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-[#0D8AFF]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mt-2">24/7</div>
                  <div className="text-gray-500 text-sm">Support</div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-[#0D8AFF]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mt-2">Global</div>
                  <div className="text-gray-500 text-sm">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}