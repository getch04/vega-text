import Link from 'next/link';

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface Feature {
  name: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  messages: string;
  features: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  features: Feature[];
  pricing: PricingPlan[];
  faq: FAQ[];
}

interface ServiceDetails {
  [key: string]: ServiceData;
}

// Define the service details data structure
const serviceDetails: ServiceDetails = {
  "mass-text": {
    title: "Bulk SMS Service",
    subtitle: "Reach your audience instantly with our powerful mass messaging solution",
    description: "Our enterprise-grade bulk SMS platform enables businesses to send messages to thousands of recipients simultaneously. With advanced features like scheduling, personalization, and detailed analytics, you can optimize your messaging campaigns for maximum impact.",
    benefits: [
      {
        title: "High Deliverability",
        description: "Direct connections with mobile operators ensure your messages reach their destination quickly and reliably.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        )
      },
      {
        title: "Real-time Analytics",
        description: "Track delivery rates, engagement metrics, and campaign performance in real-time.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        )
      },
      {
        title: "Smart Segmentation",
        description: "Target specific audience segments based on demographics, behavior, or custom criteria.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        )
      },
      {
        title: "API Integration",
        description: "Seamlessly integrate SMS capabilities into your existing applications and workflows.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
        )
      }
    ],
    features: [
      {
        name: "Message Templates",
        description: "Create and save message templates for quick access and consistent communication."
      },
      {
        name: "Scheduling",
        description: "Plan your messages to be sent at optimal times for maximum engagement."
      },
      {
        name: "Contact Management",
        description: "Organize and manage your contact lists with easy import/export capabilities."
      },
      {
        name: "Delivery Reports",
        description: "Get detailed reports on message delivery status and campaign performance."
      }
    ],
    pricing: [
      {
        name: "Starter",
        price: "$49",
        period: "month",
        messages: "1,000 SMS",
        features: [
          "Basic analytics",
          "Single user account",
          "Standard support",
          "API access"
        ]
      },
      {
        name: "Professional",
        price: "$149",
        period: "month",
        messages: "5,000 SMS",
        features: [
          "Advanced analytics",
          "5 user accounts",
          "Priority support",
          "API access",
          "Custom templates"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "month",
        messages: "Unlimited",
        features: [
          "Full analytics suite",
          "Unlimited users",
          "24/7 support",
          "API access",
          "Custom templates",
          "Dedicated account manager"
        ]
      }
    ],
    faq: [
      {
        question: "What is the message delivery success rate?",
        answer: "We maintain a 99.9% delivery success rate through direct connections with mobile operators and intelligent routing algorithms."
      },
      {
        question: "Can I schedule messages in advance?",
        answer: "Yes, you can schedule messages to be sent at any future date and time, with support for different time zones."
      },
      {
        question: "How do you handle opt-outs?",
        answer: "We automatically process opt-outs and maintain compliance with regulations by immediately removing opted-out numbers from your lists."
      }
    ]
  },
  "two-way": {
    title: "Two-Way Messaging",
    subtitle: "Enable real-time conversations with your customers",
    description: "Foster real-time, interactive conversations with your customers. VegaText enables two-way SMS communication, allowing you to easily manage customer feedback, answer questions, and provide instant support.",
    benefits: [
      {
        title: "Instant Responses",
        description: "Enable real-time conversations with automated or manual responses to customer messages.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
        )
      },
      {
        title: "Customer Engagement",
        description: "Build stronger relationships through personalized, two-way conversations.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2V4l4 4zm-5 4v4"></path>
          </svg>
        )
      },
      {
        title: "Support Ticketing",
        description: "Automatically create and track support tickets from SMS conversations.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
        )
      },
      {
        title: "Conversation History",
        description: "Access complete message history and analytics for better customer service.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      }
    ],
    features: [
      {
        name: "Smart Routing",
        description: "Automatically route messages to the right team member or department."
      },
      {
        name: "Quick Replies",
        description: "Pre-defined responses for common questions to save time."
      },
      {
        name: "Message Threading",
        description: "Keep conversations organized with automatic message threading."
      },
      {
        name: "Integration Ready",
        description: "Connect with your existing CRM and support tools."
      }
    ],
    pricing: [
      {
        name: "Basic",
        price: "$79",
        period: "month",
        messages: "2,000 messages",
        features: [
          "Two-way messaging",
          "Basic routing",
          "Message history",
          "Email support"
        ]
      },
      {
        name: "Business",
        price: "$199",
        period: "month",
        messages: "10,000 messages",
        features: [
          "Advanced routing",
          "Quick replies",
          "API access",
          "Priority support",
          "Analytics dashboard"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "month",
        messages: "Unlimited",
        features: [
          "Custom routing rules",
          "Dedicated number",
          "24/7 support",
          "Custom integration",
          "Advanced analytics",
          "SLA guarantee"
        ]
      }
    ],
    faq: [
      {
        question: "How quickly can we respond to messages?",
        answer: "Our platform enables instant responses to incoming messages, with typical delivery times under 5 seconds."
      },
      {
        question: "Can we have multiple agents handling messages?",
        answer: "Yes, you can have unlimited agents with our Business and Enterprise plans, each with their own login and permissions."
      },
      {
        question: "Do you support automated responses?",
        answer: "Yes, you can set up automated responses based on keywords, time of day, or custom rules."
      }
    ]
  },
  "automated": {
    title: "Automated Scheduling",
    subtitle: "Schedule and automate your messaging campaigns",
    description: "Plan and automate your messages for optimal delivery. Schedule your communications in advance and ensure that your message reaches your audience at the most effective times.",
    benefits: [
      {
        title: "Time Zone Optimization",
        description: "Automatically adjust message delivery times for recipients in different time zones.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      },
      {
        title: "Recurring Schedules",
        description: "Set up recurring campaigns with custom frequencies and intervals.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        )
      },
      {
        title: "Calendar Integration",
        description: "Sync with popular calendar apps for seamless scheduling.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
          </svg>
        )
      },
      {
        title: "Smart Triggers",
        description: "Trigger messages based on events, user behavior, or custom conditions.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        )
      }
    ],
    features: [
      {
        name: "Visual Calendar",
        description: "Drag-and-drop interface for easy campaign scheduling."
      },
      {
        name: "Smart Queue",
        description: "Optimize delivery times based on recipient engagement patterns."
      },
      {
        name: "Campaign Rules",
        description: "Set complex rules and conditions for automated messaging."
      },
      {
        name: "Performance Analytics",
        description: "Track and optimize campaign timing and effectiveness."
      }
    ],
    pricing: [
      {
        name: "Starter",
        price: "$59",
        period: "month",
        messages: "1,500 scheduled messages",
        features: [
          "Basic scheduling",
          "Calendar view",
          "Email support",
          "Basic analytics"
        ]
      },
      {
        name: "Pro",
        price: "$169",
        period: "month",
        messages: "7,500 scheduled messages",
        features: [
          "Advanced scheduling",
          "Smart triggers",
          "API access",
          "Priority support",
          "Full analytics suite"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "month",
        messages: "Unlimited",
        features: [
          "Custom automation",
          "Dedicated support",
          "Custom integration",
          "Advanced analytics",
          "SLA guarantee",
          "Custom features"
        ]
      }
    ],
    faq: [
      {
        question: "How far in advance can we schedule messages?",
        answer: "You can schedule messages up to 12 months in advance with any of our plans."
      },
      {
        question: "Can we modify scheduled messages?",
        answer: "Yes, you can edit or cancel scheduled messages any time before they are sent."
      },
      {
        question: "Do you support recurring messages?",
        answer: "Yes, you can set up messages to recur daily, weekly, monthly, or at custom intervals."
      }
    ]
  },
  "personalized": {
    title: "Personalized Messages",
    subtitle: "Create tailored messages for each recipient",
    description: "Enhance customer engagement with personalized text messages. Whether it's sending targeted promotions or updates, our platform allows you to tailor your messages based on customer preferences and behavior.",
    benefits: [
      {
        title: "Dynamic Content",
        description: "Insert personalized content using customer data and variables.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
          </svg>
        )
      },
      {
        title: "Behavior Tracking",
        description: "Send messages based on customer actions and preferences.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        )
      },
      {
        title: "A/B Testing",
        description: "Test different message variations to optimize engagement.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        )
      },
      {
        title: "Smart Segments",
        description: "Create dynamic customer segments for targeted messaging.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        )
      }
    ],
    features: [
      {
        name: "Variable System",
        description: "Use dynamic variables to personalize message content."
      },
      {
        name: "Conditional Logic",
        description: "Create sophisticated message flows based on user data."
      },
      {
        name: "Template Library",
        description: "Save and reuse personalized message templates."
      },
      {
        name: "Data Integration",
        description: "Connect with your CRM and other data sources."
      }
    ],
    pricing: [
      {
        name: "Basic",
        price: "$69",
        period: "month",
        messages: "2,000 messages",
        features: [
          "Basic personalization",
          "Template library",
          "Email support",
          "Basic analytics"
        ]
      },
      {
        name: "Advanced",
        price: "$189",
        period: "month",
        messages: "8,000 messages",
        features: [
          "Advanced personalization",
          "A/B testing",
          "API access",
          "Priority support",
          "Full analytics suite"
        ]
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "month",
        messages: "Unlimited",
        features: [
          "Custom personalization",
          "Dedicated support",
          "Custom integration",
          "Advanced analytics",
          "SLA guarantee",
          "Custom features"
        ]
      }
    ],
    faq: [
      {
        question: "What types of personalization are supported?",
        answer: "We support various types including name, custom fields, dynamic content, and conditional logic based on user data."
      },
      {
        question: "Can we import customer data for personalization?",
        answer: "Yes, you can import data via CSV, API, or integrate directly with your CRM system."
      },
      {
        question: "How do you handle data privacy?",
        answer: "We follow strict data protection protocols and are fully compliant with GDPR and other privacy regulations."
      }
    ]
  }
};

interface ServiceDetailProps {
  serviceId: string;
}

export default function ServiceDetail({ serviceId = "mass-text" }: ServiceDetailProps) {
  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            href="/#services"
            className="inline-flex items-center text-[#0D8AFF] hover:text-blue-700 group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
          <div className="absolute -right-16 top-1/4 w-96 h-96 rounded-full border-[32px] border-blue-100/20"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <Link
            href="/#services"
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
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {service.subtitle}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0D8AFF] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              {/* <button className="border-2 border-[#0D8AFF] text-[#0D8AFF] px-8 py-3 rounded-full hover:bg-[#0D8AFF] hover:text-white transition-colors">
                View Demo
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-[#0D8AFF] flex items-center justify-center mr-4 group-hover:bg-[#0D8AFF] group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of businesses that trust our SMS platform for their communication needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <button className="bg-[#0D8AFF] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button> */}
              <button className="border-2 border-[#0D8AFF] text-[#0D8AFF] px-8 py-3 rounded-full hover:bg-[#0D8AFF] hover:text-white transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}