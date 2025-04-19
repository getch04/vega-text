
'use client'
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0D8AFF] to-[#085CAA] text-white overflow-hidden py-24 md:py-32">
      {/* Enhanced subtle background elements */}
      <div className="absolute inset-0 bg-grid-pattern mix-blend-overlay opacity-5"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 25%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 20%)'
        }}
      ></div>

      {/* Refined decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Floating particles - very subtle */}
      <div className="particle absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-float-slow"></div>
      <div className="particle absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-float-medium"></div>
      <div className="particle absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-float-fast"></div>

      {/* Fine-tuned modern layout */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-5 items-center gap-8 md:gap-16">
          {/* Enhanced content area */}
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-6">
              {/* <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm py-1.5 px-4 rounded-full text-sm font-medium text-blue-50 border border-white/10 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-100 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-200"></span>
                </span>
                Enterprise Messaging Solutions
              </div> */}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="block mb-2 text-blue-100 text-2xl md:text-3xl font-light">Business Communication</span>
                Connect with your <span className="relative inline-block text-white">
                  audience
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 138 8" fill="none">
                    <path d="M1 5.5C67 -0.5 71 -0.5 137 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-light text-blue-100 max-w-xl leading-relaxed">
                The brightest way to connect with your customers through simple, powerful text messaging.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="#services"
                className="inline-flex items-center justify-center bg-white text-[#0D8AFF] hover:bg-blue-50 font-medium py-3.5 px-7 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                Explore Services
                <svg className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-transparent border border-white/80 text-white hover:bg-white/10 font-medium py-3.5 px-7 rounded-lg text-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Enhanced stats with hover effects */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-white/10">
              <div className="text-center md:text-left group cursor-default">
                <div className="text-3xl md:text-4xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:text-white">800+</div>
                <div className="text-blue-100 text-sm md:text-base font-medium">Mobile Operators</div>
              </div>
              <div className="text-center md:text-left group cursor-default">
                <div className="text-3xl md:text-4xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:text-white">99.9%</div>
                <div className="text-blue-100 text-sm md:text-base font-medium">Uptime</div>
              </div>
              <div className="text-center md:text-left group cursor-default">
                <div className="text-3xl md:text-4xl font-bold transition-transform duration-300 group-hover:scale-110 group-hover:text-white">24/7</div>
                <div className="text-blue-100 text-sm md:text-base font-medium">Support</div>
              </div>
            </div>
          </div>

          {/* Refined hero image area */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D8AFF]/20 to-white/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-all duration-500"></div>

              {/* Main card with refined styling */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-lg transform transition-all duration-500 hover:shadow-blue-500/10 group-hover:border-white/30">
                {/* Icon badge with subtle pulse effect */}
                <div className="absolute -right-3 -top-3 bg-white text-[#0D8AFF] p-3 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>

                {/* Feature list with hover effects */}
                <div className="flex flex-col space-y-6 text-left">
                  <div className="feature-item flex items-center gap-3 p-2 rounded-lg transition-colors duration-300 hover:bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/30">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">Bulk SMS</p>
                  </div>

                  <div className="feature-item flex items-center gap-3 p-2 rounded-lg transition-colors duration-300 hover:bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/30">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">Two-way communication</p>
                  </div>

                  <div className="feature-item flex items-center gap-3 p-2 rounded-lg transition-colors duration-300 hover:bg-white/5">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/30">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base">Scheduled automation</p>
                  </div>
                </div>

                {/* Social proof with enhanced styling */}
                <div className="mt-8 border-t border-white/10 pt-6 text-center">
                  <p className="text-xs uppercase tracking-widest text-blue-200 font-medium mb-3">Trusted by leading brands</p>
                  <div className="flex justify-center space-x-6 opacity-70">
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,144L40,138.7C80,133,160,123,240,128C320,133,400,155,480,149.3C560,144,640,112,720,112C800,112,880,144,960,149.3C1040,155,1120,133,1200,117.3C1280,101,1360,91,1400,85.3L1440,80L1440,200L1400,200C1360,200,1280,200,1200,200C1120,200,1040,200,960,200C880,200,800,200,720,200C640,200,560,200,480,200C400,200,320,200,240,200C160,200,80,200,40,200L0,200Z"></path>
        </svg>
      </div>

      {/* Add these animations to your global CSS */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(-10px); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(10px); }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}