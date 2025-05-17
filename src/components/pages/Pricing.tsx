import React, { useState } from "react";
import { Check, X, ArrowRight, Info, CheckCircle } from "lucide-react";
import Footer from "../Footer";
import type { PricingPlan } from "../../types";
import AnimatedButton from "../AnimatedButton";

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
      "Access to on-demand marketing team (paid media, social, design, copy)",
      "48–72 hour turnaround on most tasks",
      "Expert copywriters, strategists, and creatives",
      "Centralized dashboard for task submission & tracking",
      "Dedicated client success support",
      "Buy credits, use them however you need — across ad, social, design, or strategy.",
    ],
  },
  {
    title: "Ad Management",
    price: "$2500",
    features: [
      "Campaign setup end-to-end",
      "Weekly optimization & bid management",
      "Conversion tracking setup & testing",
      "Ad creative coordination (copy + design)",
      "Weekly performance dashboard (live client access)",
      "Weekly reporting + Slack/email summaries",
      "2x Monthly strategy calls",
      "Dedicated client manager",
      "Creative Support",
      "Static ad creatives",
      "Copy variations for A/B testing",
      "Up to 10 ad iterations/month",
      "Unlimited revisions (within reason)",
    ],
  },
  {
    title: "Social Management",
    price: "$1999",
    features: [
      "12 social media posts/month (graphics + copywriting)",
      "4 short-form video edits/month",
      "2 monthly content pillars/themes customized to your brand",
      "Content calendar planning & scheduling",
      "Hashtag strategy + trend research",
      "Monthly performance reporting",
      "Dedicated content manager + strategist",
      "Audience Growth & Engagement",
      "Community building",
      "Engagement strategy (outreach to niche accounts, audience interaction)",
      "Monthly social growth insights + recommendations",
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
            <h2 className="text-black_remote font-['Onest'] text-[32px] sm:text-[40px] md:text-[54px] font-[500] leading-[1.2] sm:leading-[1.1] md:leading-[60px]">
              Transparent <span style={{
              display: 'inline',
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
              backgroundSize: '100% 60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 60%',
              whiteSpace: 'nowrap',
              padding: 0
            }}>Pricing</span>.
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
                  <h3 className="text-[31px] font-[500] font-['Onest'] text-left text-black leading-[44px] mb-4">
                    {card.title}
                  </h3>
                  <div className="text-left mb-6">
                    <span className="text-[40px] font-medium font-['Onest'] text-black">
                      {card.price}
                    </span>
                    <span className="text-[14px] font-normal font-['Plus_Jakarta_Sans'] text-black">
                      {" "}
                      {card.title === "Pay-as-you-go" ? "No monthly retainers" : "Per/month"}
                    </span>
                  </div>
                  <AnimatedButton
                    onClick={() => window.location.href = '/register'}  
                    className={`w-full py-3 px-4 rounded-[8px] font-['Onest'] text-[16px] font-medium leading-[26px] mb-8 ${
                      index === 1
                        ? "bg-black text-white"
                        : index === 2
                          ? "bg-white text-black border border-black"
                          : "bg-[#E0FF82] text-black"
                    }`}
                  >
                    Get started
                  </AnimatedButton>
                  <h4 className="text-[18px] font-[500] font-['Onest'] text-black leading-[22px] mb-4">
                    Features
                  </h4>
                  <ul className="space-y-1">
                    {card.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`text-[14px] font-normal font-['Onest'] text-black leading-[32px] flex items-start ${
                          feature === "Creative Support" || feature === "Audience Growth & Engagement"
                            ? "text-[18px] font-[600] mt-4 mb-2 bg-primary border inline-flex border-black px-2 py-2 rounded-lg"
                            : ""
                        }`}
                      >
                        {feature === "Creative Support" || feature === "Audience Growth & Engagement" ? (
                          feature
                        ) : (
                          <>
                            <span className="mr-2 leading-[32px]">•</span>
                            <span className="flex-1">{feature}</span>
                          </>
                        )}
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
          <div className="mt-8 flex flex-col items-center gap-8">
            <div className="flex gap-12">
              <img src="/images/JW-Logo-Gold-Black.svg" alt="JW Logo" className="h-8" />
              <img src="/images/memphis-colored.svg" alt="Memphis Logo" className="h-8" />
              <img src="/images/Springfield-colored.svg" alt="Springfield Logo" className="h-8" />
            </div>
            <div className="flex gap-12">
              <img src="/images/Basel-colored.svg" alt="Basel Logo" className="h-8" />
              <img src="/images/Drink Myx.webp" alt="Drink Myx Logo" className="h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* What's Included vs Not Included */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-black_remote text-center font-[500] text-[54px] leading-[60px] font-[Onest] mb-12">
            What's Included vs <br /> 
            <span style={{
              display: 'inline',
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
              backgroundSize: '100% 60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 60%',
              whiteSpace: 'nowrap',
              padding: 0
            }}>What's Not</span>
            

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
          <h2 className="text-black_remote text-center font-[500] text-[54px] leading-[60px] font-[Onest]">
  Frequently Asked <span style={{
              display: 'inline',
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
              backgroundSize: '100% 60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 60%',
              whiteSpace: 'nowrap',
              padding: 0
            }}>Questions</span>
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
                  question: "How does Pay-as-you-go work?",
                  answer:
                    "You purchase credits and submit marketing tasks when you need them — no monthly fees, no long-term contracts. Each task has a transparent credit cost listed upfront."
                },
                {
                  question: "What is included in Ad Management plans?",
                  answer:
                    "We fully manage your ad campaigns across Google, Meta, LinkedIn, TikTok, and YouTube — from setup, optimization, tracking, reporting, and creative guidance",
                },
                {
                  question: "What is included in Social Media Management plans?",
                  answer:
                    "We help grow your brand across LinkedIn, YouTube, Instagram, TikTok, and X — including content planning, post creation, community building, and basic newsletters.",
                },
                {
                  question: "Can I combine Pay-as-you-go credits with my Ad/Social plan?",
                  answer:
                    "Yes, absolutely. Many clients use Pay-as-you-go credits for additional tasks like blogs, landing page builds, or extra creative support alongside their main plan.",
                },
                {
                  question: "What if I need custom deliverables or advanced services?",
                  answer:
                    "No problem. We offer flexible add-ons for advanced funnel building, landing page creation, influencer sourcing, and AI marketing integration.",
                },
                {
                  question: "Is there a minimum commitment?",
                  answer:
                    "No minimums. You can cancel, pause, or top-up credits anytime. We're built for maximum flexibility",
                },
                {
                  question: "How fast is delivery?",
                  answer:
                    "Most core deliverables are delivered within 48–72 hours depending on task complexity. Urgent tasks can be prioritized on request.",
                },
                {
                  question: "Do unused Pay-as-you-go credits expire?",
                  answer:
                    "Credits are valid for 6 months after purchase. We'll remind you if you're nearing expiry so you get full value.",
                },
                {
                  question: "What if I'm not satisfied with a deliverable?",
                  answer:
                    "We offer revisions to ensure you're happy. If something doesn't hit the mark, your dedicated success manager will make it right.",
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

      <Footer />
    </div>
  );
}
