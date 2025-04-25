import React, { useState } from 'react';
import { Check, X, ArrowRight, Info, CheckCircle } from 'lucide-react';
import Footer from '../Footer';
import type { PricingPlan } from '../../types';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="inline-flex items-center cursor-help"
      >
        {children}
        <Info className="h-4 w-4 ml-1 text-gray-400" />
      </div>
      {show && (
        <div className="absolute z-10 w-64 px-4 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-2 left-full ml-2 transform -translate-y-full">
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -left-1 top-1/2 -translate-y-1/2"></div>
        </div>
      )}
    </div>
  );
};

const tooltips = {
  'Up to 3 marketing requests/month': 'Submit up to 3 marketing requests per month, including blog writing, ad creative design, and social media content.',
  'Up to 6 marketing requests/month': 'Submit up to 6 different marketing tasks each month with faster turnaround times.',
  'Up to 12 marketing requests': 'Submit up to 12 comprehensive marketing requests with priority processing.',
  'Basic SEO optimization': 'Includes technical SEO audit, on-page optimization, and keyword research.',
  'Advanced SEO strategy': 'Comprehensive SEO plan including competitive analysis, content strategy, and link building.',
  'Full SEO management': 'Complete management of your SEO including technical SEO, content creation, and off-page optimization.',
  '2 social media platforms': 'Manage content for up to 2 platforms of your choice (Instagram, LinkedIn, Twitter, etc.).',
  '4 social media platforms': 'Expanded social media management across 4 major platforms.',
  'All social media platforms': 'Comprehensive management across all major social media platforms.',
  'Monthly content creation (8 posts)': 'Includes blog posts, email newsletters, or social media content, up to 8 pieces per month.',
  'Weekly content creation (12 posts)': 'Regular content creation with 12 high-quality posts delivered weekly.',
  'Daily content creation': 'Continuous content creation with daily posts and updates.',
  'PPC campaign management': 'Covers ad setup, monitoring, and optimization with up to $2,500 ad spend management.',
  'Advanced PPC optimization': 'Advanced campaign optimization, A/B testing, and performance scaling.',
  'Custom reporting dashboard': 'Access a personalized dashboard with campaign performance insights and analytics.',
  'Custom email campaigns': 'Tailored email marketing campaigns with advanced segmentation and automation.',
  'Dedicated account manager': 'A dedicated marketing professional who understands your business and manages your campaigns.',
  'Senior marketing manager': 'An experienced senior marketing professional with expertise in your industry.',
};

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups getting started with digital marketing.',
    price: '$999',
    features: [
      'Up to 3 marketing requests/month',
      'Basic SEO optimization',
      '2 social media platforms',
      'Monthly content creation (8 posts)',
      'Basic performance analytics',
      'Email support',
      'Response within 48 hours',
      'Monthly strategy call'
    ]
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their marketing efforts.',
    price: '$1,999',
    features: [
      'Up to 6 marketing requests/month',
      'Advanced SEO strategy',
      '4 social media platforms',
      'Weekly content creation (12 posts)',
      'PPC campaign management',
      'Email marketing automation',
      'Priority support',
      'Bi-weekly strategy calls',
      'Dedicated account manager'
    ]
  },
  {
    name: 'Growth+',
    description: 'Full-stack marketing execution for high-growth brands.',
    price: '$2,499',
    highlighted: true,
    features: [
      'Up to 12 marketing requests',
      'Full SEO management',
      'All social media platforms',
      'Daily content creation',
      'Advanced PPC optimization',
      'Custom email campaigns',
      '24/7 priority support',
      'Weekly strategy calls',
      'Senior marketing manager',
      'Custom reporting dashboard'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Advanced strategy & performance-based pricing for large-scale companies.',
    price: 'Custom',
    features: [
      'Custom marketing strategy',
      'Multi-brand management',
      'Custom integrations',
      'Dedicated marketing team',
      'Performance-based pricing',
      'White-label services',
      'Quarterly business reviews',
      'API access',
      'Custom SLAs',
      'Enterprise support'
    ]
  }
];

const includedFeatures = [
  'Access to marketing platform',
  'Dedicated marketing manager',
  'Real-time performance tracking',
  'Monthly performance reports',
  'Unlimited revisions',
  'Brand asset storage',
  'Marketing calendar',
  'Campaign analytics'
];

const notIncludedFeatures = [
  'Ad spend budget',
  'Third-party software costs',
  'Stock photo licenses',
  'Custom development work',
  'Print materials',
  'Event sponsorships'
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Flexible Plans That Grow With Your Business
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A fully managed marketing team, available on-demand. No hiring, no headaches.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Pricing</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose the Plan That's Right for You
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Scale your marketing efforts with confidence.
            </p>
          </div>

          <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'bg-white ring-2 ring-indigo-600 scale-105 z-10'
                    : 'bg-white hover:scale-105'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  <p className="mt-4 text-sm text-gray-500 h-12">{plan.description}</p>
                  <p className="mt-8 flex items-baseline justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                    {plan.name !== 'Enterprise' && (
                      <span className="ml-1 text-xl font-medium text-gray-500">/mo</span>
                    )}
                  </p>
                  <a
                    href={plan.name === 'Enterprise' ? '/contact' : '/get-started'}
                    className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium transition-colors ${
                      plan.highlighted
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? (
                      <span className="flex items-center justify-center">
                        Contact Sales
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    ) : (
                      'Get Started'
                    )}
                  </a>
                </div>
                <div className="flex-1 flex flex-col justify-between px-8 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                        </div>
                        <div className="ml-3">
                          {tooltips[feature as keyof typeof tooltips] ? (
                            <Tooltip content={tooltips[feature as keyof typeof tooltips]}>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </Tooltip>
                          ) : (
                            <span className="text-sm text-gray-700">{feature}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included vs Not Included */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            What's Included vs. What's Not
          </h2>
          <p className="text-center text-lg text-gray-500 mb-12">
            Transparency matters. Know exactly what you get with your plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-semibold text-indigo-600 mb-6">What's Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Access to all marketing services (based on plan)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Dedicated Marketing Manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Standard & Priority Marketing Requests (based on plan)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Real-time performance insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Social media content creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">SEO blog writing & strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Email marketing automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Paid ad campaign setup & optimization (client pays for ad spend)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Monthly performance reports</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Integration with Slack or Microsoft Teams (Growth+ & Enterprise)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-lg font-semibold text-red-600 mb-6">What's Not Included</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Paid ad spend for campaigns (client's responsibility)</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Third-party software costs (e.g., Mailchimp, HubSpot, Unbounce)</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Custom web development & app development</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Business intelligence software & advanced analytics (unless pre-integrated)</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">Press releases & external PR outreach</span>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="ml-3 text-gray-600">24/7 support for Starter plan users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions about our pricing? Find answers to common questions below.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Are there any contracts or commitments?",
                  answer: "No, all our plans are month-to-month with no long-term commitments. You can cancel or change your plan at any time without penalties."
                },
                {
                  question: "What payment options do you offer?",
                  answer: "We accept all major credit cards (Visa, MasterCard, American Express) and offer monthly invoicing for enterprise clients. All payments are processed securely through our payment gateway."
                },
                {
                  question: "Can I change my plan later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. There are no fees or penalties for changing plans."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "All plans include email support with 24-hour response time. Growth and Growth+ plans include priority support with 4-hour response time and dedicated account managers. Enterprise plans include 24/7 phone support."
                },
                {
                  question: "Do unused marketing requests roll over?",
                  answer: "No, marketing requests do not roll over to the next month. We encourage you to use your full allocation each month for maximum value."
                },
                {
                  question: "Can I get a custom plan for my specific needs?",
                  answer: "Absolutely! Contact our sales team to discuss your specific requirements and we'll create a custom plan tailored to your business."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling as HTMLElement;
                      const isExpanded = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';
                      
                      // Close all other FAQs
                      document.querySelectorAll('.faq-content').forEach((el) => {
                        (el as HTMLElement).style.maxHeight = '0px';
                        el.classList.remove('border-t');
                      });
                      
                      // Toggle current FAQ
                      if (!isExpanded) {
                        content.style.maxHeight = `${content.scrollHeight}px`;
                        content.classList.add('border-t');
                      } else {
                        content.style.maxHeight = '0px';
                        content.classList.remove('border-t');
                      }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <svg
                        className="h-5 w-5 text-gray-500 transform transition-transform duration-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className="faq-content overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: '0px' }}
                  >
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your marketing?</span>
            <span className="block">Get started today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join the marketing revolution.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Schedule a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}