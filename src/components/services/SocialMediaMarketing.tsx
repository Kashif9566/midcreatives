import React, { useState, useEffect, useRef } from 'react';
import { Share2, Users, MessageCircle, BarChart, ArrowRight, CheckCircle, Globe, Zap } from 'lucide-react';
import Footer from '../Footer';

interface StatCard {
  title: string;
  value: string;
  description: string;
  icon: React.ComponentType;
}

interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ComponentType;
  benefits: string[];
}

const stats: StatCard[] = [
  {
    title: 'Active Users',
    value: '4.7B',
    description: 'Global social media audience',
    icon: Users
  },
  {
    title: 'Purchase Decisions',
    value: '54%',
    description: 'Influenced by social media',
    icon: Share2
  },
  {
    title: 'Engagement Rate',
    value: '2.3x',
    description: 'Higher than traditional media',
    icon: MessageCircle
  },
  {
    title: 'Brand Awareness',
    value: '+156%',
    description: 'Average increase in visibility',
    icon: Globe
  }
];

const features: ServiceFeature[] = [
  {
    title: 'Strategy Development',
    description: 'Custom social media strategies aligned with your business goals.',
    icon: Share2,
    benefits: [
      'Platform selection',
      'Content calendar planning',
      'Audience analysis',
      'Goal setting & KPIs'
    ]
  },
  {
    title: 'Content Creation',
    description: 'Engaging posts, stories, and videos for all platforms.',
    icon: MessageCircle,
    benefits: [
      'Original graphics',
      'Video content',
      'Copywriting',
      'Brand voice development'
    ]
  },
  {
    title: 'Community Management',
    description: 'Active engagement and community building with your audience.',
    icon: Users,
    benefits: [
      'Comment moderation',
      'Message response',
      'Audience engagement',
      'Crisis management'
    ]
  },
  {
    title: 'Performance Analytics',
    description: 'Detailed tracking and optimization of social media ROI.',
    icon: BarChart,
    benefits: [
      'Engagement metrics',
      'Growth tracking',
      'ROI measurement',
      'Competitor analysis'
    ]
  },
  {
    title: 'Influencer Marketing',
    description: 'Strategic partnerships with relevant influencers.',
    icon: Users,
    benefits: [
      'Influencer research',
      'Campaign planning',
      'Performance tracking',
      'Relationship management'
    ]
  },
  {
    title: 'Paid Social Advertising',
    description: 'Targeted ad campaigns across social platforms.',
    icon: Share2,
    benefits: [
      'Ad strategy',
      'Audience targeting',
      'Creative development',
      'Budget optimization'
    ]
  }
];

export default function SocialMediaMarketing() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.2
    });

    if (statsRef.current) observer.observe(statsRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Build Your Brand's Presence</span>
              <span className="block text-indigo-600 mt-2">Across Social Media</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:max-w-3xl">
              Engage your audience and drive growth with strategic social media marketing that delivers measurable results.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary"
              >
                Start Your Social Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div 
        ref={statsRef}
        id="stats-section"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.title}
                  className={`relative bg-white p-6 rounded-xl shadow-lg overflow-hidden transition-all duration-1000 transform ${
                    isVisible['stats-section']
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <StatIcon className="h-8 w-8 text-indigo-600 mb-4" />
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-2 text-lg font-medium text-gray-900">{stat.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div 
        ref={featuresRef}
        id="features-section"
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Social Media Services</h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive social media solutions for every platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`relative bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    isVisible['features-section']
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  } ${activeFeature === index ? 'ring-2 ring-indigo-500' : ''}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveFeature(index)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                      <FeatureIcon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 mb-4">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className={`flex items-center transition-all duration-300 transform ${
                            activeFeature === index
                              ? 'translate-x-0 opacity-100'
                              : 'translate-x-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${benefitIndex * 100}ms` }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="ml-2 text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Social Media Process</h2>
            <p className="mt-4 text-lg text-gray-500">A proven process for social media success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy Development',
                description: 'Create a customized social media plan',
                icon: Share2
              },
              {
                step: '02',
                title: 'Content Creation',
                description: 'Develop engaging social media content',
                icon: MessageCircle
              },
              {
                step: '03',
                title: 'Community Management',
                description: 'Engage with your audience daily',
                icon: Users
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitor and improve performance',
                icon: BarChart
              }
            ].map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className={`relative bg-white rounded-xl shadow-lg p-6 transition-all duration-500 transform hover:scale-105 ${
                    isVisible['features-section']
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 text-white mb-4">
                      <StepIcon className="h-6 w-6" />
                    </div>
                    <div className="absolute top-0 right-0">
                      <span className="text-4xl font-bold text-indigo-100">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <div className="relative max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-extrabold text-white">Client Success Story</h3>
                <div className="mt-6 text-xl text-indigo-100">
                  "Our social media presence exploded after working with the team. We saw a 300% increase in engagement and a 150% growth in followers within just 3 months."
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Michael Chen"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-base font-medium text-white">Michael Chen</p>
                    <p className="text-sm text-indigo-200">Marketing Director at TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Ready to Transform Your Social Media Presence?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Start your social media journey with our expert team today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="btn-primary"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}