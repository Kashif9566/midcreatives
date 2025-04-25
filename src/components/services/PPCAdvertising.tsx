import React, { useState, useEffect, useRef } from 'react';
import { Target, DollarSign, BarChart, Users, ArrowRight, CheckCircle, Globe, Zap } from 'lucide-react';
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
    title: 'Instant Visibility',
    value: '24hr',
    description: 'Get immediate exposure to your target audience',
    icon: Zap
  },
  {
    title: 'ROI Average',
    value: '200%',
    description: 'Our campaigns deliver exceptional returns',
    icon: DollarSign
  },
  {
    title: 'Conversion Rate',
    value: '+45%',
    description: 'Higher conversion rates than organic',
    icon: Target
  },
  {
    title: 'Cost Reduction',
    value: '-38%',
    description: 'Average reduction in cost per acquisition',
    icon: BarChart
  }
];

const features: ServiceFeature[] = [
  {
    title: 'Google Ads',
    description: 'Strategic search, display, and video campaigns on Google\'s network.',
    icon: Target,
    benefits: [
      'Keyword research & strategy',
      'Ad copy optimization',
      'Landing page optimization',
      'Quality score improvement'
    ]
  },
  {
    title: 'Social Media Ads',
    description: 'Targeted advertising across all major social platforms.',
    icon: Users,
    benefits: [
      'Audience targeting',
      'Creative ad design',
      'A/B testing',
      'Performance tracking'
    ]
  },
  {
    title: 'Remarketing',
    description: 'Re-engage visitors and increase conversion rates.',
    icon: Globe,
    benefits: [
      'Custom audience creation',
      'Dynamic ad content',
      'Cross-platform retargeting',
      'Conversion optimization'
    ]
  },
  {
    title: 'Performance Analytics',
    description: 'Detailed tracking and campaign optimization.',
    icon: BarChart,
    benefits: [
      'Real-time monitoring',
      'ROI tracking',
      'Conversion analysis',
      'Custom reporting'
    ]
  },
  {
    title: 'Budget Management',
    description: 'Efficient allocation and optimization of ad spend.',
    icon: DollarSign,
    benefits: [
      'Budget planning',
      'Bid management',
      'Cost optimization',
      'Performance forecasting'
    ]
  },
  {
    title: 'A/B Testing',
    description: 'Continuous testing and improvement of campaigns.',
    icon: Target,
    benefits: [
      'Ad copy testing',
      'Landing page testing',
      'Audience testing',
      'Bid strategy testing'
    ]
  }
];

export default function PPCAdvertising() {
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
              <span className="block">Drive Instant Results with</span>
              <span className="block text-indigo-600 mt-2">High-Converting PPC Campaigns</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:max-w-3xl">
              Generate qualified leads and maximize ROI with our data-driven paid advertising strategies.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary"
              >
                Start Your PPC Campaign
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
            <h2 className="text-3xl font-extrabold text-gray-900">Our PPC Services</h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive paid advertising solutions for maximum impact
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
            <h2 className="text-3xl font-extrabold text-gray-900">Our PPC Process</h2>
            <p className="mt-4 text-lg text-gray-500">A proven methodology for PPC success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research & Planning',
                description: 'Analyze market and competition',
                icon: Target
              },
              {
                step: '02',
                title: 'Campaign Setup',
                description: 'Create optimized campaign structure',
                icon: DollarSign
              },
              {
                step: '03',
                title: 'Launch & Monitor',
                description: 'Active campaign management',
                icon: BarChart
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'Continuous performance improvement',
                icon: Zap
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
                  "Our cost per acquisition dropped by 45% while conversion rates increased by 80%. The ROI from our PPC campaigns has been exceptional, and the team's expertise is unmatched."
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Michael Chen"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-base font-medium text-white">Michael Chen</p>
                    <p className="text-sm text-indigo-200">Director of Marketing at TechCorp</p>
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
            <span className="block">Ready to boost your ad performance?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Start your PPC journey with our expert team today.
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