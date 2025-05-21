import React, { useState, useEffect, useRef } from 'react';
import { Camera, Play, PenTool, Mic, Image as ImageIcon, FileText, ArrowRight, CheckCircle, Globe, Zap } from 'lucide-react';
import Footer from '../Footer';
import Testimonials from '../Testimonials';
import { Link } from 'react-router-dom';
import AnimatedButton from '../AnimatedButton';
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
    title: 'Engagement Rate',
    value: '3x',
    description: 'Higher with quality content',
    icon: Zap
  },
  {
    title: 'Lead Generation',
    value: '67%',
    description: 'More qualified leads',
    icon: Globe
  },
  {
    title: 'Information Retention',
    value: '90%',
    description: 'With visual content',
    icon: ImageIcon
  },
  {
    title: 'Brand Recognition',
    value: '156%',
    description: 'Increased brand recall',
    icon: PenTool
  }
];

const features: ServiceFeature[] = [
  {
    title: 'Video Production',
    description: 'High-quality brand videos, product demos, and engaging video ads.',
    icon: Camera,
    benefits: [
      'Professional filming',
      'Video editing',
      'Motion graphics',
      'Sound design'
    ]
  },
  {
    title: 'Social Media Content',
    description: 'Eye-catching posts, reels, and short-form videos for all platforms.',
    icon: Play,
    benefits: [
      'Platform optimization',
      'Trending formats',
      'Engagement focus',
      'Regular posting'
    ]
  },
  {
    title: 'Graphic Design',
    description: 'Custom illustrations, animations, and branding assets.',
    icon: PenTool,
    benefits: [
      'Brand guidelines',
      'Custom graphics',
      'Animation design',
      'Print materials'
    ]
  },
  {
    title: 'Audio Production',
    description: 'Professional podcast production, voiceovers, and sound editing.',
    icon: Mic,
    benefits: [
      'Podcast production',
      'Voice recording',
      'Audio editing',
      'Sound mixing'
    ]
  },
  {
    title: 'Photography',
    description: 'Professional product photography and lifestyle visuals.',
    icon: ImageIcon,
    benefits: [
      'Product shots',
      'Lifestyle photos',
      'Event coverage',
      'Photo editing'
    ]
  },
  {
    title: 'Copywriting',
    description: 'Persuasive website copy, blog articles, and brand messaging.',
    icon: FileText,
    benefits: [
      'Website content',
      'Blog articles',
      'Email copy',
      'Social captions'
    ]
  }
];

export default function ContentCreation() {
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
            <h1 className="text-4xl font-medium tracking-tight text-gray_remote sm:text-5xl md:text-6xl">
              <span className="block">Content that Captivates,</span>
              <span
                style={{
                  display: "inline",
                  backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
                  backgroundSize: "100% 60%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center 60%",
                  padding: 0,
                }}
              >
               Converts, and Grows Your Brand
              </span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-[#727986] sm:text-xl md:max-w-5xl">
              From high-quality videos to engaging social media content, we create the assets that bring your brand to life.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/register"
                className="bg-black text-white px-4 py-3 rounded-lg"
              >
                <AnimatedButton>
               Get Started
                </AnimatedButton>
              </Link>
              {/* <a
                href="/contact"
                className="btn-secondary"
              >
                Schedule a Free Audit
              </a> */}
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
                <StatIcon className="h-8 w-8 text-black bg-primary rounded-lg p-2 mb-5" />
                <p className="text-3xl font-[600] text-black_remote">{stat.value}</p>
                <p className="mt-2 text-lg font-[500] text-gray-900">{stat.title}</p>
                <p className="mt-2 text-sm text-[#727986]">{stat.description}</p>
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
            <h2 className="text-5xl font-medium text-gray_remote">Our Content Creation Services</h2>
            <p className="mt-4 text-lg text-[#727986]">
              Comprehensive content solutions for every channel and platform
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
                } ${activeFeature === index ? 'ring-2 ring-[#BEEA38]' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-black_remote mb-4">
                    <FeatureIcon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-black_remote mb-2">{feature.title}</h3>
                  <p className="text-[#727986] text-[16px] mb-4">{feature.description}</p>
                  
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
                        <img src='/images/fi_190411.svg' className="h-5 w-5 flex-shrink-0" />
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
            <h2 className="text-5xl font-medium text-gray_remote">How It Works</h2>
            <p className="mt-4 text-lg text-[#727986]">A streamlined process for exceptional content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Request',
                description: 'Choose the content type you need',
                icon: FileText
              },
              {
                step: '02',
                title: 'Creative Strategy',
                description: 'We develop content ideas aligned with your brand',
                icon: PenTool
              },
              {
                step: '03',
                title: 'Production',
                description: 'Our experts create high-quality assets',
                icon: Camera
              },
              {
                step: '04',
                title: 'Final Delivery',
                description: 'Receive content that is ready to publish',
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
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-black_remote mb-4">
                    <StepIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute top-0 right-0">
                    <span className="text-4xl font-bold text-[#F1F3EB]">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-[600] text-gray_remote mb-2">{step.title}</h3>
                  <p className="text-[#727986] text-[16px]">{step.description}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Success Story Section */}
      {/* <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <div className="relative max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-extrabold text-white">Client Success Story</h3>
                <div className="mt-6 text-xl text-indigo-100">
                  "Our content strategy helped TechCorp increase social media engagement by 250% within 3 months. The high-quality videos and graphics consistently outperformed industry benchmarks."
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Sarah Johnson"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-base font-medium text-white">Sarah Johnson</p>
                    <p className="text-sm text-indigo-200">Marketing Director at TechCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

  <Testimonials />


{/* Call to Action */}
<div className="bg-white">
  <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-6">
    <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center px-6 py-16 sm:px-8 lg:px-8">
        <h2 className="text-black_remote font-onest text-[36px] font-semibold leading-[48px]">
          <span className="block">
          Ready to improve your search rankings?
          </span>
        </h2>

        <p className="mt-4 text-[#000] font-onest text-[22px] font-normal leading-[32px]">
        Start your SEO journey with our expert team today.
        </p>

        <Link
          to="/register"
          className="mt-8 inline-flex items-center px-8 py-3 rounded-[8px] shadow-sm text-white font-onest text-[16px] font-medium leading-[26px] bg-black_remote transition-all"
        >
          <AnimatedButton>
          Book a Free Consultation
          </AnimatedButton>
        </Link>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
}