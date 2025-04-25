import React from 'react';
import { Search, Target, Share2, Mail, PenTool, ArrowRight, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ServiceCard } from '../types';

const services: ServiceCard[] = [
  {
    title: 'SEO',
    description: 'Boost your search visibility with data-driven SEO strategies that drive organic traffic and improve rankings.',
    icon: Search,
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Link Building & Outreach'
    ]
  },
  {
    title: 'PPC Advertising',
    description: 'Drive qualified traffic and maximize ROI with targeted paid campaigns across major platforms.',
    icon: Target,
    features: [
      'Google Ads Management',
      'Social Media Advertising',
      'Display & Remarketing',
      'Campaign Optimization'
    ]
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand presence across all major social media platforms.',
    icon: Share2,
    features: [
      'Content Strategy & Creation',
      'Community Management',
      'Social Media Analytics',
      'Influencer Partnerships'
    ]
  },
  {
    title: 'Email Marketing',
    description: 'Convert leads into customers with personalized email campaigns that nurture relationships.',
    icon: Mail,
    features: [
      'Email Campaign Strategy',
      'List Segmentation',
      'A/B Testing',
      'Automation Workflows'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Attract and convert your target audience with high-quality, strategic content that drives results.',
    icon: PenTool,
    features: [
      'Content Strategy',
      'Blog Writing',
      'Whitepapers & Ebooks',
      'Content Distribution'
    ]
  },
  {
    title: 'Content Creation',
    description: 'Produce high-quality, engaging content tailored to your brand\'s voice, audience, and objectives.',
    icon: Camera,
    features: [
      'Video Production & Editing',
      'Social Media Content & Reels',
      'Graphic Design & Motion Graphics',
      'Copywriting & Brand Storytelling'
    ]
  }
];

export default function Services() {
  const navigate = useNavigate();

  const getServicePath = (title: string) => {
    switch (title) {
      case 'SEO':
        return 'seo';
      case 'PPC Advertising':
        return 'ppc-advertising';
      case 'Social Media Marketing':
        return 'social-media-marketing';
      case 'Email Marketing':
        return 'email-marketing';
      case 'Content Marketing':
        return 'content-marketing';
      case 'Content Creation':
        return 'content-creation';
      default:
        return title.toLowerCase().replace(/\s+/g, '-');
    }
  };

  const handleServiceClick = (service: ServiceCard) => {
    const path = getServicePath(service.title);
    navigate(`/services/${path}`);
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Services</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Comprehensive Marketing Services
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            All your marketing needs covered in one place. Scale your marketing efforts with our expert team.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {services.map((service) => (
              <div
                key={service.title}
                onClick={() => handleServiceClick(service)}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}