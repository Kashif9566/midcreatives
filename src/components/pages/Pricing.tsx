import React, { useState } from "react";
import { Check, X, ArrowRight, Info, CheckCircle } from "lucide-react";
import Footer from "../Footer";
import type { PricingPlan } from "../../types";

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
  "Up to 3 marketing requests/month":
    "Submit up to 3 marketing requests per month, including blog writing, ad creative design, and social media content.",
  "Up to 6 marketing requests/month":
    "Submit up to 6 different marketing tasks each month with faster turnaround times.",
  "Up to 12 marketing requests":
    "Submit up to 12 comprehensive marketing requests with priority processing.",
  "Basic SEO optimization":
    "Includes technical SEO audit, on-page optimization, and keyword research.",
  "Advanced SEO strategy":
    "Comprehensive SEO plan including competitive analysis, content strategy, and link building.",
  "Full SEO management":
    "Complete management of your SEO including technical SEO, content creation, and off-page optimization.",
  "2 social media platforms":
    "Manage content for up to 2 platforms of your choice (Instagram, LinkedIn, Twitter, etc.).",
  "4 social media platforms":
    "Expanded social media management across 4 major platforms.",
  "All social media platforms":
    "Comprehensive management across all major social media platforms.",
  "Monthly content creation (8 posts)":
    "Includes blog posts, email newsletters, or social media content, up to 8 pieces per month.",
  "Weekly content creation (12 posts)":
    "Regular content creation with 12 high-quality posts delivered weekly.",
  "Daily content creation":
    "Continuous content creation with daily posts and updates.",
  "PPC campaign management":
    "Covers ad setup, monitoring, and optimization with up to $2,500 ad spend management.",
  "Advanced PPC optimization":
    "Advanced campaign optimization, A/B testing, and performance scaling.",
  "Custom reporting dashboard":
    "Access a personalized dashboard with campaign performance insights and analytics.",
  "Custom email campaigns":
    "Tailored email marketing campaigns with advanced segmentation and automation.",
  "Dedicated account manager":
    "A dedicated marketing professional who understands your business and manages your campaigns.",
  "Senior marketing manager":
    "An experienced senior marketing professional with expertise in your industry.",
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    description:
      "Perfect for small businesses and startups getting started with digital marketing.",
    price: "$999",
    features: [
      "Up to 3 marketing requests/month",
      "Basic SEO optimization",
      "2 social media platforms",
      "Monthly content creation (8 posts)",
      "Basic performance analytics",
      "Email support",
      "Response within 48 hours",
      "Monthly strategy call",
    ],
  },
  {
    name: "Growth",
    description:
      "Ideal for growing businesses ready to scale their marketing efforts.",
    price: "$1,999",
    features: [
      "Up to 6 marketing requests/month",
      "Advanced SEO strategy",
      "4 social media platforms",
      "Weekly content creation (12 posts)",
      "PPC campaign management",
      "Email marketing automation",
      "Priority support",
      "Bi-weekly strategy calls",
      "Dedicated account manager",
    ],
  },
  {
    name: "Growth+",
    description: "Full-stack marketing execution for high-growth brands.",
    price: "$2,499",
    highlighted: true,
    features: [
      "Up to 12 marketing requests",
      "Full SEO management",
      "All social media platforms",
      "Daily content creation",
      "Advanced PPC optimization",
      "Custom email campaigns",
      "24/7 priority support",
      "Weekly strategy calls",
      "Senior marketing manager",
      "Custom reporting dashboard",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced strategy & performance-based pricing for large-scale companies.",
    price: "Custom",
    features: [
      "Custom marketing strategy",
      "Multi-brand management",
      "Custom integrations",
      "Dedicated marketing team",
      "Performance-based pricing",
      "White-label services",
      "Quarterly business reviews",
      "API access",
      "Custom SLAs",
      "Enterprise support",
    ],
  },
];

const includedFeatures = [
  "Access to marketing platform",
  "Dedicated marketing manager",
  "Real-time performance tracking",
  "Monthly performance reports",
  "Unlimited revisions",
  "Brand asset storage",
  "Marketing calendar",
  "Campaign analytics",
];

const notIncludedFeatures = [
  "Ad spend budget",
  "Third-party software costs",
  "Stock photo licenses",
  "Custom development work",
  "Print materials",
  "Event sponsorships",
];

interface PricingCard {
  title: string;
  price: string;
  features: string[];
}

const pricingCards: PricingCard[] = [
  {
    title: "Pay-as-you-go",
    price: "$0",
    features: [
      "Expert Copywriters",
      "Dedicated Client Success",
      "Manager Up to 10 content requests/mo*",
      "48-hour delivery available",
      "Content strategy + planning tools",
    ],
  },
  {
    title: "Ad Management",
    price: "$0",
    features: [
      "Expert Copywriters",
      "Dedicated Client Success",
      "Manager Up to 10 content requests/mo*",
      "48-hour delivery available",
      "Content strategy + planning tools",
    ],
  },
  {
    title: "Social Management",
    price: "$0",
    features: [
      "Expert Copywriters",
      "Dedicated Client Success",
      "Manager Up to 10 content requests/mo*",
      "48-hour delivery available",
      "Content strategy + planning tools",
    ],
  },
];

const includedItems = [
  "Access to all marketing services (based on plan)",
  "Dedicated Marketing Manager",
  "Standard & Priority Marketing Requests (based on plan)",
  "Real-time performance insights",
  "Social media content creation",
  "SEO blog writing & strategy",
  "Email marketing automation",
  "Paid ad campaign setup & optimization (client pays for ad spend)",
  "Monthly performance reports",
  "Integration with Slack or Microsoft Teams (Growth+ & Enterprise)"
];

const notIncludedItems = [
  "Paid ad spend for campaigns (client's responsibility)",
  "Third-party software costs (e.g., Mailchimp, HubSpot, Unbounce)",
  "Custom web development & app development",
  "Business intelligence software & advanced analytics (unless pre-integrated)",
  "Press releases & external PR outreach",
  "24/7 support for Starter plan users"
];

export default function PricingPage() {
  return (
    <div className="bg-white">
    
      {/* Pricing Plans */}
      <div className="bg-white pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[54px] font-semibold leading-[60px] text-black font-[Onest]">
              Transparent Pricing.
              <br />
              No added fees.
            </h2>
          </div>

          {/* OLD CARDS */}

          {/* <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
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
          </div> */}

          {/* NEW CARDS */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingCards.map((card, index) => (
                <div
                  key={index}
                  className="rounded-[12px] border border-[#CECECE] bg-white p-8"
                >
                  <h3 className="text-[31px] font-semibold font-['Onest'] text-left text-black leading-[44px] mb-4">
                    {card.title}
                  </h3>
                  <div className="text-left mb-6">
                    <span className="text-[40px] font-medium font-['Onest'] text-black">
                      {card.price}
                    </span>
                    <span className="text-[14px] font-normal font-['Plus_Jakarta_Sans'] text-black">
                      {" "}
                      per user/mo
                    </span>
                  </div>
                  <button
                    className={`w-full py-3 px-4 rounded-[8px] font-['Onest'] text-[16px] font-medium leading-[26px] mb-8 ${
                      index === 1
                        ? "bg-black text-white"
                        : index === 2
                          ? "bg-white text-black border border-black"
                          : "bg-[#E0FF82] text-black"
                    }`}
                  >
                    Get started for free
                  </button>
                  <h4 className="text-[18px] font-semibold font-['Onest'] text-black leading-[22px] mb-4">
                    Features
                  </h4>
                  <ul className="space-y-1">
                    {card.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-[14px] font-normal font-['Onest'] text-black leading-[32px] flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[88px]">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-[18px] font-normal leading-[26px] text-[#727986] text-center font-[Onest]">
            16,000+ businesses trust MaaS
          </h2>
          <img className="mt-3" src="/images/image 1.svg" alt="Trust MaaS" />
        </div>
      </div>

      {/* What's Included vs Not Included */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[54px] font-semibold leading-[60px] text-black text-center font-[Onest] mb-12">
            What's Included vs <br />What's Not
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-[12px] bg-[#F7F8F8] p-8">
              <h3 className="text-[24px] font-medium font-['Onest'] text-black mb-6">
                What's Included
              </h3>
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center justify-between ${
                      index !== includedItems.length - 1 ? 'border-b border-gray-200' : ''
                    } pb-4`}
                  >
                    <span className="text-[14px] font-normal font-['Onest'] text-black leading-[26px]">
                      {item}
                    </span>
                    <img src="/images/fi_190411.svg" alt="Check" className="h-5 w-5" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] bg-[#FFFDF7] p-8">
              <h3 className="text-[24px] font-medium font-['Onest'] text-black mb-6">
                What's Not Included
              </h3>
              <ul className="space-y-4">
                {notIncludedItems.map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center justify-between ${
                      index !== notIncludedItems.length - 1 ? 'border-b border-gray-200' : ''
                    } pb-4`}
                  >
                    <span className="text-[14px] font-normal font-['Onest'] text-black leading-[26px]">
                      {item}
                    </span>
                    <img src="/images/fi_6711656.svg" alt="Cross" className="h-5 w-5" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
          <h2 className="text-[54px] font-semibold leading-[60px] text-black text-center font-[Onest]">
  Frequently Asked Questions
</h2>

            <p className="mt-4 text-lg text-gray-500">
              Have questions about our pricing? Find answers to common questions
              below.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Are there any contracts or commitments?",
                  answer:
                    "No, all our plans are month-to-month with no long-term commitments. You can cancel or change your plan at any time without penalties.",
                },
                {
                  question: "What payment options do you offer?",
                  answer:
                    "We accept all major credit cards (Visa, MasterCard, American Express) and offer monthly invoicing for enterprise clients. All payments are processed securely through our payment gateway.",
                },
                {
                  question: "Can I change my plan later?",
                  answer:
                    "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle. There are no fees or penalties for changing plans.",
                },
                {
                  question: "What kind of support do you offer?",
                  answer:
                    "All plans include email support with 24-hour response time. Growth and Growth+ plans include priority support with 4-hour response time and dedicated account managers. Enterprise plans include 24/7 phone support.",
                },
                {
                  question: "Do unused marketing requests roll over?",
                  answer:
                    "No, marketing requests do not roll over to the next month. We encourage you to use your full allocation each month for maximum value.",
                },
                {
                  question: "Can I get a custom plan for my specific needs?",
                  answer:
                    "Absolutely! Contact our sales team to discuss your specific requirements and we'll create a custom plan tailored to your business.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#E0FF82] bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    onClick={(e) => {
                      const content = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      const isExpanded =
                        content.style.maxHeight !== "0px" &&
                        content.style.maxHeight !== "";

                      // Close all other FAQs
                      document
                        .querySelectorAll(".faq-content")
                        .forEach((el) => {
                          (el as HTMLElement).style.maxHeight = "0px";
                          el.classList.remove("border-t");
                        });

                      // Toggle current FAQ
                      if (!isExpanded) {
                        content.style.maxHeight = `${content.scrollHeight}px`;
                        content.classList.add("border-t");
                      } else {
                        content.style.maxHeight = "0px";
                        content.classList.remove("border-t");
                      }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
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
                    style={{ maxHeight: "0px" }}
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
