import { Metadata } from 'next';
import Link from 'next/link';

const services = [
  {
    id: 'two-way-messaging',
    title: 'Two-Way Messaging',
    description: 'Engage in real-time conversations with your customers through our advanced two-way messaging platform.',
    overview: 'Our two-way messaging service enables seamless communication between your business and customers, allowing for instant responses and improved customer engagement.',
    features: [
      'Real-time message delivery and receipt',
      'Automated response handling',
      'Message threading and conversation history',
      'Customizable response templates',
      'Multi-channel support'
    ],
    benefits: [
      'Improved customer satisfaction',
      'Faster response times',
      'Reduced operational costs',
      'Better customer insights',
      'Increased engagement rates'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$49/month',
        features: [
          '500 messages included',
          'Basic response templates',
          'Email support',
          'Standard delivery speed'
        ]
      },
      {
        name: 'Professional',
        price: '$99/month',
        features: [
          '2000 messages included',
          'Advanced response templates',
          'Priority support',
          'Faster delivery speed',
          'Analytics dashboard'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited messages',
          'Custom templates',
          '24/7 support',
          'Maximum delivery speed',
          'Advanced analytics',
          'API access'
        ]
      }
    ],
    faq: [
      {
        question: 'How fast is message delivery?',
        answer: 'Messages are typically delivered within seconds, with a 99.9% delivery success rate.'
      },
      {
        question: 'Can I integrate with my existing systems?',
        answer: 'Yes, we provide comprehensive API documentation and support for seamless integration.'
      },
      {
        question: 'Is there a limit to message length?',
        answer: 'Standard SMS messages are limited to 160 characters, but we support concatenated messages for longer content.'
      }
    ]
  },
  {
    id: 'automated-scheduling',
    title: 'Automated Scheduling',
    description: 'Schedule and automate your messages to reach customers at the perfect time.',
    overview: 'Our automated scheduling service helps you plan and execute your messaging campaigns efficiently, ensuring messages are delivered at optimal times.',
    features: [
      'Flexible scheduling options',
      'Time zone management',
      'Recurring message setup',
      'Delivery optimization',
      'Performance tracking'
    ],
    benefits: [
      'Increased message open rates',
      'Better timing for customer engagement',
      'Reduced manual work',
      'Improved campaign effectiveness',
      'Time zone compliance'
    ],
    pricing: [
      {
        name: 'Basic',
        price: '$29/month',
        features: [
          '100 scheduled messages',
          'Basic scheduling options',
          'Single time zone',
          'Email support'
        ]
      },
      {
        name: 'Advanced',
        price: '$79/month',
        features: [
          '1000 scheduled messages',
          'Advanced scheduling options',
          'Multiple time zones',
          'Priority support',
          'Analytics dashboard'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited scheduled messages',
          'Custom scheduling rules',
          'Global time zone support',
          '24/7 support',
          'Advanced analytics',
          'API access'
        ]
      }
    ],
    faq: [
      {
        question: 'How far in advance can I schedule messages?',
        answer: 'You can schedule messages up to one year in advance.'
      },
      {
        question: 'Can I modify scheduled messages?',
        answer: 'Yes, you can edit or cancel scheduled messages at any time before they are sent.'
      },
      {
        question: 'Do you support recurring messages?',
        answer: 'Yes, we support daily, weekly, monthly, and custom recurring message schedules.'
      }
    ]
  },
  {
    id: 'personalized-messages',
    title: 'Personalized Messages',
    description: 'Create meaningful connections with personalized messaging tailored to each customer.',
    overview: 'Our personalized messaging service allows you to create unique, targeted messages that resonate with individual customers, improving engagement and response rates.',
    features: [
      'Dynamic content insertion',
      'Customer segmentation',
      'Personalized templates',
      'A/B testing',
      'Performance analytics'
    ],
    benefits: [
      'Higher engagement rates',
      'Improved customer relationships',
      'Better conversion rates',
      'Enhanced brand loyalty',
      'Data-driven insights'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$39/month',
        features: [
          'Basic personalization',
          'Up to 3 templates',
          'Email support',
          'Basic analytics'
        ]
      },
      {
        name: 'Professional',
        price: '$89/month',
        features: [
          'Advanced personalization',
          'Unlimited templates',
          'Priority support',
          'Advanced analytics',
          'A/B testing'
        ]
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Full personalization suite',
          'Custom templates',
          '24/7 support',
          'Comprehensive analytics',
          'API access',
          'Custom integrations'
        ]
      }
    ],
    faq: [
      {
        question: 'What types of personalization are supported?',
        answer: 'We support name, location, purchase history, and custom field personalization.'
      },
      {
        question: 'Can I import customer data?',
        answer: 'Yes, you can import customer data through CSV files or API integration.'
      },
      {
        question: 'How do you ensure data privacy?',
        answer: 'We follow strict data protection protocols and comply with relevant privacy regulations.'
      }
    ]
  }
];

interface ServiceDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = services.find(s => s.id === params.id);
  return {
    title: service ? `${service.title} - VegaText` : 'Service Not Found',
    description: service ? service.description : 'The requested service could not be found.',
  };
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find(s => s.id === params.id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <Link
            href="/services"
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
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600">The requested service could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Link
          href="/services"
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

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{service.description}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600">{service.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.pricing.map((plan, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold text-[#0D8AFF] mb-4">{plan.price}</p>
                    <ul className="space-y-2 text-gray-600">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">FAQ</h2>
              <div className="space-y-4">
                {service.faq.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}