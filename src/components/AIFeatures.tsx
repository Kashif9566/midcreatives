import React, { useState, useEffect, useRef } from 'react';
import { Zap, BarChart, Target, MessageSquare, ArrowRight } from 'lucide-react';
import EarlyAccessForm from './EarlyAccessForm';

interface AIFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const aiFeatures: AIFeature[] = [
  {
    title: 'Campaign Overview',
    description: 'Get a comprehensive view of all your marketing campaigns with real-time performance metrics and insights.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'AI Insights',
    description: 'Leverage machine learning to predict campaign performance and identify optimization opportunities.',
    icon: BarChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Content Generator',
    description: 'Create high-converting content instantly with our AI-powered content generation tools.',
    icon: MessageSquare,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Performance Analytics',
    description: 'Track and analyze your marketing performance with detailed analytics and custom reports.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export default function AIFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
  const [showEarlyAccessForm, setShowEarlyAccessForm] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Preload images
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = reject;
      });
    };

    Promise.all(aiFeatures.map(feature => preloadImage(feature.image)))
      .then(images => setPreloadedImages(images as string[]))
      .catch(error => console.error('Error preloading images:', error));
  }, []);

  const handleTabChange = (index: number) => {
    if (index === activeTab) return;
    
    setIsAnimating(true);
    setIsImageLoading(true);

    // Start fade out
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'scale(0.95)';
    }

    // Change image after fade out
    setTimeout(() => {
      setActiveTab(index);
      
      // Start fade in
      if (imageRef.current) {
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'scale(1)';
      }

      // Reset states after animation
      setTimeout(() => {
        setIsImageLoading(false);
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const ActiveFeatureIcon = aiFeatures[activeTab].icon;

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-base font-normal text_black_remote tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
        AI-Powered
        </h2>
          <p className="mt-3 text-4xl font-[500] text-gray-900 sm:text-5xl sm:tracking-tight">
            AI-Powered Insights & <span style={{
              display: 'inline',
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
              backgroundSize: '100% 60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 60%',
              whiteSpace: 'nowrap',
              padding: 0
            }}>Automation</span>
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Harness the power of artificial intelligence to supercharge your marketing efforts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Dashboard Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-r from-[#1F2223] to-[#2A2D2E] rounded-lg shadow-xl overflow-hidden">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  {preloadedImages.length > 0 && (
                    <img 
                      ref={imageRef}
                      src={aiFeatures[activeTab].image}
                      alt={aiFeatures[activeTab].title}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{
                        opacity: isImageLoading ? '0' : '1',
                        transform: isImageLoading ? 'scale(0.95)' : 'scale(1)'
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ActiveFeatureIcon className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{aiFeatures[activeTab].title}</h3>
                      <p className="mt-2 max-w-md mx-auto text-sm text-gray-200">
                        {aiFeatures[activeTab].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="bg-white p-4">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                  {aiFeatures.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <button
                        key={feature.title}
                        onClick={() => !isAnimating && handleTabChange(index)}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-300 hover:bg-gray-50 ${
                          activeTab === index
                            ? 'bg-[#E0FF82] text-[#1F2223] shadow-sm transform scale-105'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                        disabled={isAnimating}
                      >
                        <FeatureIcon className={`h-5 w-5 transition-colors duration-300 ${
                          activeTab === index ? 'text-[#1F2223]' : 'text-gray-400 hover:text-[#1F2223]'
                        }`} />
                        <span className="ml-2">{feature.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* AI Features List */}
          <div className="space-y-8 order-1 lg:order-2">
            {aiFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const isActive = activeTab === index;
              return (
                <div 
                  key={feature.title} 
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform group ${
                    isActive ? 'ring-2 ring-[#E0FF82] scale-105' : 'hover:scale-102 hover:ring-2 hover:ring-[#E0FF82]'
                  }`}
                  onClick={() => !isAnimating && handleTabChange(index)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-md ${
                        isActive ? 'bg-[#E0FF82]' : 'bg-gray-100 group-hover:bg-[#E0FF82]' 
                      } text-white transition-colors duration-300`}>
                        <FeatureIcon className={`h-6 w-6 ${
                          isActive ? 'text-[#1F2223]' : 'text-gray-600 group-hover:text-[#1F2223]'
                        }`} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            <div className="mt-8">
              <button
                onClick={() => setShowEarlyAccessForm(true)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1F2223] hover:bg-[#2A2D2E] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Get Early Access to AI Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Early Access Form Modal */}
      {showEarlyAccessForm && (
        <EarlyAccessForm onClose={() => setShowEarlyAccessForm(false)} />
      )}
    </div>
  );
}