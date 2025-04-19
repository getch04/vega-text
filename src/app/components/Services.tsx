import Link from "next/link";

const services = [
  {
    id: "mass-text",
    title: "Bulk SMS",
    description:
      "Our bulk SMS service provides an efficient way to reach a vast audience instantly. Whether you are looking to drive your marketing campaigns, send out emergency alerts, or keep your customers informed, our platform is designed to meet your needs. Our service ensures high deliverability rates and a user-friendly interface that makes it easy to use.",
    features: [
      "High deliverability",
      "Real-time analytics",
      "Contact segmentation",
      "API integration",
    ],
    imageAlign: "right",
    ctaText: "Learn More",
    ctaLink: "#contact",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        ></path>
      </svg>
    ),
  },
  {
    id: "two-way",
    title: "Two-Way Messaging",
    description:
      "Foster real-time, interactive conversations with your customers. VegaText enables two-way SMS communication, allowing you to easily manage customer feedback, answer questions, and provide instant support.",
    features: [
      "Instant responses",
      "Customer engagement",
      "Support ticketing",
      "Conversation history",
    ],
    imageAlign: "left",
    ctaText: "Learn More",
    ctaLink: "#contact",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        ></path>
      </svg>
    ),
  },
  {
    id: "automated",
    title: "Automated Scheduling",
    description:
      "Plan and automate your messages for optimal delivery. Schedule your communications in advance and ensure that your message reaches your audience at the most effective times.",
    features: [
      "Time zone optimization",
      "Recurring schedules",
      "Calendar integration",
      "Trigger-based messaging",
    ],
    imageAlign: "right",
    ctaText: "Learn More",
    ctaLink: "#contact",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    id: "personalized",
    title: "Personalized Messages",
    description:
      "Enhance customer engagement with personalized text messages. Whether it&apos;s sending targeted promotions or updates, our platform allows you to tailor your messages based on customer preferences and behavior.",
    features: [
      "Custom variables",
      "Behavior-based targeting",
      "A/B testing",
      "Dynamic content",
    ],
    imageAlign: "left",
    ctaText: "Learn More",
    ctaLink: "#contact",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Add decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-32 -mt-32 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50 to-transparent rounded-full -ml-48 -mb-48 opacity-70"></div>

      {/* Floating shapes */}
      <div className="absolute top-40 left-10 w-8 h-8 bg-[#0D8AFF]/5 rounded-full animate-pulse"></div>
      <div
        className="absolute top-60 right-20 w-6 h-6 bg-[#0D8AFF]/10 rounded-sm animate-bounce"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/4 w-10 h-10 border-2 border-[#0D8AFF]/10 rounded-full animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20 relative">
          {/* Abstract message bubbles */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full max-w-sm mx-auto">
            <div className="flex justify-between">
              <div className="w-10 h-10 rounded-full border-2 border-[#0D8AFF]/20 opacity-40"></div>
              <div className="w-6 h-6 rounded-full bg-[#0D8AFF]/10 opacity-60"></div>
              <div className="w-8 h-8 rounded-full border border-[#0D8AFF]/30 opacity-30"></div>
            </div>
          </div>

          {/* Enhanced subtitle with gradient and animation */}
          <div className="inline-block relative mb-4">
            <span className="relative z-10 inline-block text-[#0D8AFF] text-sm font-semibold tracking-wider uppercase px-4 py-1">
              What we offer
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-50 via-[#0D8AFF]/10 to-blue-50 rounded-full animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>
          </div>

          {/* Enhanced title with animated underline */}
          <div className="relative inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#0D8AFF] to-blue-700 bg-clip-text text-transparent relative inline-block mb-3">
              Our Services
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-[#0D8AFF]/80 to-[#0D8AFF]/20 rounded-full"></div>
            <div
              className="absolute -bottom-2 left-0 w-12 h-1.5 bg-[#0D8AFF] rounded-full animate-pulse"
              style={{ animationDuration: "3s" }}
            ></div>

            {/* Decorative elements */}
            <div className="absolute -right-10 -top-6 w-8 h-8 text-[#0D8AFF]/40">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
            </div>
            <div className="absolute -left-10 -top-6 w-8 h-8 text-[#0D8AFF]/40">
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Enhanced description with animated highlight */}
          <div className="relative mt-6">
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our range of business messaging solutions designed to
              <span className="relative inline-block mx-1">
                <span className="relative z-10">
                  enhance your communication strategy
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#0D8AFF]/10 rounded"></span>
              </span>
            </p>

            {/* Decorative dots */}
            <div className="absolute -right-4 bottom-0 flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] opacity-30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] opacity-60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] opacity-90"></div>
            </div>
            <div className="absolute -left-4 bottom-0 flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] opacity-90"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] opacity-60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="space-y-32">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Enhanced illustration area */}
              <div
                className={`order-1 ${
                  service.imageAlign === "left" ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="relative">
                  {/* Main illustration container - enhanced visuals */}
                  <div className="relative aspect-video bg-white rounded-lg border border-gray-200 p-8 flex flex-col items-center justify-center overflow-hidden">
                    {/* Service icon - with decorative background */}
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-blue-50 rounded-full transform scale-[1.8] opacity-30"></div>
                      <div className="absolute inset-0 bg-blue-50 rounded-full transform scale-[1.4] opacity-50"></div>
                      <div className="relative z-10 bg-white p-3 rounded-full border border-blue-100">
                        <div className="text-[#0D8AFF]">{service.icon}</div>
                      </div>
                    </div>

                    {/* Service title */}
                    <div className="text-[#0D8AFF] font-semibold text-xl mb-5 text-center relative">
                      {service.title}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#0D8AFF]/40 rounded-full"></div>
                    </div>

                    {/* Mass Text Messaging enhanced illustration */}
                    {service.id === "mass-text" && (
                      <div className="w-full max-w-xs mt-4 relative">
                        {/* Phone device frame */}
                        <div className="absolute -top-8 -right-6 w-20 h-40 border-2 border-blue-200 rounded-xl bg-white transform rotate-6 opacity-40"></div>

                        {/* Main illustration */}
                        <div className="relative">
                          {/* Central phone */}
                          <div className="w-48 h-64 mx-auto bg-gray-50 border-2 border-gray-200 rounded-xl relative overflow-hidden">
                            {/* Phone header */}
                            <div className="h-6 w-full bg-[#0D8AFF] flex justify-center items-center">
                              <div className="w-8 h-1 bg-white rounded-full"></div>
                            </div>

                            {/* Screen content */}
                            <div className="p-2 flex flex-col h-[calc(100%-1.5rem)]">
                              <div className="text-xs text-center text-[#0D8AFF] font-semibold mb-1">
                                Bulk SMS
                              </div>
                              <div className="flex-1 overflow-y-auto space-y-1.5">
                                {[...Array(6)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center gap-1.5"
                                  >
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[#0D8AFF] text-[10px]">
                                      {i + 1}
                                    </div>
                                    <div className="flex-1 h-3 bg-blue-100 rounded-sm"></div>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-1 bg-[#0D8AFF]/10 rounded p-1.5 text-[10px] text-center">
                                <span className="text-[#0D8AFF] font-semibold">
                                  8
                                </span>{" "}
                                messages sent
                              </div>
                            </div>
                          </div>

                          {/* Recipients */}
                          <div className="absolute top-6 -left-4 flex flex-col items-center">
                            <div className="flex space-x-1 mb-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#0D8AFF] text-[10px] border border-blue-200"
                                >
                                  {i + 1}
                                </div>
                              ))}
                            </div>
                            <svg
                              className="w-16 h-5 text-blue-200"
                              viewBox="0 0 24 5"
                              fill="none"
                            >
                              <path
                                d="M0,2.5 Q8,0 12,2.5 Q16,5 24,2.5"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                              />
                            </svg>
                          </div>

                          <div className="absolute bottom-6 -right-4 flex flex-col items-center">
                            <svg
                              className="w-16 h-5 text-blue-200 mb-1"
                              viewBox="0 0 24 5"
                              fill="none"
                            >
                              <path
                                d="M24,2.5 Q16,0 12,2.5 Q8,5 0,2.5"
                                stroke="currentColor"
                                strokeWidth="1"
                                fill="none"
                              />
                            </svg>
                            <div className="flex space-x-1">
                              {[...Array(3)].map((_, i) => (
                                <div
                                  key={i}
                                  className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#0D8AFF] text-[10px] border border-blue-200"
                                >
                                  {i + 4}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Two-Way Messaging enhanced illustration */}
                    {service.id === "two-way" && (
                      <div className="w-full max-w-xs mt-4 relative">
                        {/* Decorative elements */}
                        <div className="absolute top-1/2 left-0 w-4 h-4 bg-blue-100 transform rotate-45 -translate-y-1/2 -translate-x-1/2 opacity-70"></div>
                        <div className="absolute bottom-0 right-6 w-3 h-3 bg-blue-200 rounded-full opacity-50"></div>

                        {/* Main illustration */}
                        <div className="flex justify-center">
                          {/* First phone */}
                          <div className="w-32 h-56 bg-gray-50 border-2 border-gray-200 rounded-xl relative overflow-hidden mr-12 z-10">
                            <div className="h-5 w-full bg-[#0D8AFF] flex justify-center items-center">
                              <div className="w-6 h-1 bg-white rounded-full"></div>
                            </div>
                            <div className="p-2 space-y-2">
                              <div className="self-start bg-blue-100 text-[#0D8AFF] rounded-lg rounded-bl-none px-2 py-1 text-[10px] max-w-[90%]">
                                Hello! How can I help you today?
                              </div>
                              <div className="flex justify-end">
                                <div className="self-end bg-[#0D8AFF] text-white rounded-lg rounded-br-none px-2 py-1 text-[10px] max-w-[90%]">
                                  I need info about bulk SMS pricing
                                </div>
                              </div>
                              <div className="self-start bg-blue-100 text-[#0D8AFF] rounded-lg rounded-bl-none px-2 py-1 text-[10px] max-w-[90%]">
                                I&apos;d be happy to help! Our plans start at...
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-100 flex items-center justify-between px-2">
                              <div className="w-20 h-3 bg-gray-200 rounded-full"></div>
                              <div className="w-3 h-3 bg-[#0D8AFF] rounded-full"></div>
                            </div>
                          </div>

                          {/* Connection line */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0">
                            <svg
                              width="80"
                              height="40"
                              viewBox="0 0 80 40"
                              fill="none"
                            >
                              <path
                                d="M0,20 C20,5 60,35 80,20"
                                stroke="#0D8AFF"
                                strokeWidth="1.5"
                                strokeDasharray="3 2"
                              />
                              <path
                                d="M80,20 C60,5 20,35 0,20"
                                stroke="#0D8AFF"
                                strokeWidth="1.5"
                                strokeDasharray="3 2"
                              />
                            </svg>
                          </div>

                          {/* Second phone */}
                          <div className="w-32 h-56 bg-gray-50 border-2 border-gray-200 rounded-xl relative overflow-hidden z-10">
                            <div className="h-5 w-full bg-gray-300 flex justify-center items-center">
                              <div className="w-6 h-1 bg-white rounded-full"></div>
                            </div>
                            <div className="p-2 space-y-2">
                              <div className="self-start bg-gray-200 text-gray-700 rounded-lg rounded-bl-none px-2 py-1 text-[10px] max-w-[90%]">
                                Hello! How can I help you today?
                              </div>
                              <div className="flex justify-end">
                                <div className="self-end bg-gray-300 text-white rounded-lg rounded-br-none px-2 py-1 text-[10px] max-w-[90%]">
                                  I need info about bulk SMS pricing
                                </div>
                              </div>
                              <div className="self-start bg-gray-200 text-gray-700 rounded-lg rounded-bl-none px-2 py-1 text-[10px] max-w-[90%]">
                                I&apos;d be happy to help! Our plans start at...
                              </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-200 flex items-center justify-between px-2">
                              <div className="w-20 h-3 bg-gray-300 rounded-full"></div>
                              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Automated Scheduling enhanced illustration */}
                    {service.id === "automated" && (
                      <div className="w-full max-w-xs mt-4 relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-blue-100 opacity-50"></div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-2 border-blue-200 opacity-40"></div>

                        {/* Main illustration - Calendar with automation */}
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                          {/* Calendar header */}
                          <div className="bg-[#0D8AFF] text-white p-2 flex justify-between items-center">
                            <div className="text-sm font-semibold">
                              Automated Schedule
                            </div>
                            <div className="text-xs">August 2023</div>
                          </div>

                          {/* Calendar grid */}
                          <div className="grid grid-cols-7 text-center border-b border-gray-200">
                            {["S", "M", "T", "W", "T", "F", "S"].map(
                              (day, i) => (
                                <div
                                  key={i}
                                  className="text-[10px] text-gray-500 py-1 border-r last:border-r-0 border-gray-200"
                                >
                                  {day}
                                </div>
                              )
                            )}
                          </div>

                          <div className="grid grid-cols-7 text-center">
                            {[...Array(35)].map((_, i) => {
                              const day = i - 1;
                              const hasEvent = [3, 8, 15, 22, 27].includes(day);
                              return (
                                <div
                                  key={i}
                                  className={`text-[10px] py-2 border-r border-b last:border-r-0 relative
                                  ${
                                    day <= 0 || day > 31
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }
                                  ${day === 15 ? "bg-blue-50" : ""}
                                `}
                                >
                                  {day > 0 && day <= 31 ? day : ""}
                                  {hasEvent && (
                                    <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#0D8AFF] rounded-full"></div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Scheduled messages */}
                          <div className="p-2 space-y-1 bg-gray-50">
                            <div className="text-[10px] font-medium text-gray-600">
                              Scheduled Messages:
                            </div>
                            {[9, 12, 15].map((hour, i) => (
                              <div
                                key={i}
                                className="flex items-center py-1 bg-white rounded px-1.5 border border-gray-100"
                              >
                                <div className="text-[10px] text-[#0D8AFF] font-semibold w-10">
                                  {hour}:00
                                </div>
                                <div className="flex-1 ml-2 h-2 bg-blue-100 rounded-sm"></div>
                                <div className="ml-2 w-3 h-3 rounded-full bg-blue-100 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF]"></div>
                                </div>
                              </div>
                            ))}
                            <div className="flex justify-end">
                              <div className="text-[8px] text-[#0D8AFF]">
                                Auto-repeat weekly →
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Personalized Messages enhanced illustration */}
                    {service.id === "personalized" && (
                      <div className="w-full max-w-xs mt-4 relative">
                        {/* Decorative elements */}
                        <div className="absolute top-1/3 -left-3 w-2 h-6 bg-blue-100 rounded-full opacity-60"></div>
                        <div className="absolute bottom-1/4 -right-3 w-2 h-10 bg-blue-100 rounded-full opacity-60"></div>

                        {/* Main illustration - Personalization flow */}
                        <div className="relative">
                          {/* Template message */}
                          <div className="mb-8 rounded-lg border border-blue-200 p-3 bg-blue-50/30 relative">
                            <div className="absolute -top-3 left-3 bg-white px-2 text-[10px] text-[#0D8AFF] font-semibold">
                              Template Message
                            </div>
                            <div className="text-sm text-gray-600">
                              Hello{" "}
                              <span className="text-[#0D8AFF] font-medium bg-blue-100 px-1 rounded">
                                %NAME%
                              </span>
                              , we have a special{" "}
                              <span className="text-[#0D8AFF] font-medium bg-blue-100 px-1 rounded">
                                %OFFER%
                              </span>{" "}
                              just for you! Use code{" "}
                              <span className="text-[#0D8AFF] font-medium bg-blue-100 px-1 rounded">
                                %CODE%
                              </span>{" "}
                              to get
                              <span className="text-[#0D8AFF] font-medium bg-blue-100 px-1 rounded">
                                %DISCOUNT%
                              </span>{" "}
                              off.
                            </div>
                          </div>

                          {/* Database/CRM visualization */}
                          <div className="mb-4 mx-auto w-20 h-16 border border-gray-200 rounded flex flex-col items-center justify-center bg-gray-50">
                            <svg
                              className="w-6 h-6 text-[#0D8AFF]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M4 7v10c0 2 1.5 3 5 3s5-1 5-3V7c0-2-1.5-3-5-3S4 5 4 7zm10 0c0 2 1.5 3 5 3s5-1 5-3-1.5-3-5-3-5 1-5 3zm0 10c0 2 1.5 3 5 3s5-1 5-3V7"
                              />
                            </svg>
                            <div className="text-[8px] text-gray-500 mt-1">
                              CRM Data
                            </div>
                          </div>

                          {/* Arrow down */}
                          <div className="flex justify-center mb-4">
                            <svg
                              className="w-6 h-6 text-blue-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          </div>

                          {/* Personalized messages */}
                          <div className="rounded-lg border border-gray-200 p-3 bg-white">
                            <div className="absolute -top-3 right-3 bg-white px-2 text-[10px] text-[#0D8AFF] font-semibold">
                              Personalized Results
                            </div>
                            <div className="space-y-2">
                              <div className="p-2 text-[11px] text-gray-600 border border-blue-100 rounded-lg">
                                Hello{" "}
                                <span className="text-[#0D8AFF] font-medium">
                                  John
                                </span>
                                , we have a special{" "}
                                <span className="text-[#0D8AFF] font-medium">
                                  summer discount
                                </span>{" "}
                                just for you! Use code{" "}
                                <span className="text-[#0D8AFF] font-medium">
                                  SUMMER23
                                </span>{" "}
                                to get
                                <span className="text-[#0D8AFF] font-medium">
                                  {" "}
                                  15%
                                </span>{" "}
                                off.
                              </div>
                              <div className="p-2 text-[11px] text-gray-600 border border-blue-100 rounded-lg">
                                Hello{" "}
                                <span className="text-[#0D8AFF] font-medium">
                                  Sarah
                                </span>
                                , we have a special{" "}
                                <span className="text-[#0D8AFF] font-medium">
                                  weekend deal
                                </span>{" "}
                                just for you! Use code{" "}
                                <span className="text-[#0D8AFF] font-medium">
                                  WKND50
                                </span>{" "}
                                to get
                                <span className="text-[#0D8AFF] font-medium">
                                  {" "}
                                  20%
                                </span>{" "}
                                off.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Service details - clean white theme */}
              <div
                className={`order-2 ${
                  service.imageAlign === "left" ? "md:order-2" : "md:order-1"
                }`}
              >
                <span className="text-sm text-[#0D8AFF]/80 font-medium">
                  {service.id.replace("-", " ").toUpperCase()}
                </span>
                <h3 className="text-3xl font-bold mb-4 text-[#0D8AFF]">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="inline-block w-6 h-0.5 bg-[#0D8AFF] mr-2"></span>
                  Key Features
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-gray-600 group"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-[#0D8AFF] flex items-center justify-center mr-3 mt-0.5 group-hover:bg-[#0D8AFF] group-hover:text-white transition-colors duration-300">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </span>
                      <span className="group-hover:text-gray-800 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/service-detail?serviceId=${service.id}`}
                  className="inline-flex items-center bg-white text-[#0D8AFF] hover:bg-[#0D8AFF] hover:text-white font-medium py-3 px-6 rounded-full transition-all duration-300 border border-[#0D8AFF] group"
                >
                  {service.ctaText}
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
