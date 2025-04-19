"use client";

import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "VegaText has transformed our customer communication strategy. We've seen a 40% increase in engagement since implementing their messaging platform.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Retail Solutions Inc."
  },
  {
    id: 2,
    quote: "The automated scheduling feature has saved our team countless hours. We can now focus on crafting quality messages rather than manually sending them.",
    name: "Michael Chen",
    title: "Operations Manager",
    company: "Global Logistics"
  },
  {
    id: 3,
    quote: "We've used several messaging platforms in the past, but VegaText offers the best combination of reliability, features, and customer support we've ever experienced.",
    name: "Jennifer Williams",
    title: "CTO",
    company: "Tech Innovations"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const changeTestimonial = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Modern split layout */}
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Left column - Header */}
          <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-16">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-[#0D8AFF]"></div>
              <span className="text-[#0D8AFF] uppercase text-sm font-medium tracking-wider">Testimonials</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              What Our <br className="hidden md:block"/> Clients Are Saying
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Discover why businesses choose VegaText for their critical messaging needs.
            </p>

            {/* Testimonial navigation */}
            <div className="flex items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeTestimonial(index)}
                  className={`w-10 h-10 mr-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#0D8AFF] text-white shadow-md scale-110'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right column - Testimonial card */}
          <div className="lg:w-2/3 lg:pl-6">
            <div
              className={`bg-white rounded-lg p-1 shadow-lg transform transition-all duration-300 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="relative bg-white overflow-hidden rounded-lg">
                {/* Colorful quote icon */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#0D8AFF] opacity-10 rounded-full"></div>
                <div className="absolute top-4 right-6 text-[#0D8AFF]">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="p-8">
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl font-medium text-gray-800 mb-8">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </blockquote>

                  {/* Client info with photo placeholder */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0D8AFF] to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{testimonials[activeIndex].title}</span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span>{testimonials[activeIndex].company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0D8AFF] via-blue-400 to-indigo-500"></div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-5 gap-2 mt-8 ml-8">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i % 3 === 0 ? 'bg-[#0D8AFF]/60' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}