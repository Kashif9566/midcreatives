import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Zap, BarChart, Target, MessageSquare, ArrowRight } from 'lucide-react';
import EarlyAccessForm from './EarlyAccessForm';

interface AIFeature {
  title: string;
  description: string;
  icon: React.ComponentType;
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
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">AI-Powered</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            AI-Powered Insights & Automation
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Harness the power of artificial intelligence to supercharge your marketing efforts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Dashboard Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-xl overflow-hidden">
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
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-all duration-300 ${
                          activeTab === index
                            ? 'bg-indigo-100 text-indigo-700 shadow-sm transform scale-105'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                        }`}
                        disabled={isAnimating}
                      >
                        <FeatureIcon className={`h-5 w-5 transition-colors duration-300 ${
                          activeTab === index ? 'text-indigo-600' : 'text-gray-400'
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
              return (
                <div 
                  key={feature.title} 
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform ${
                    activeTab === index ? 'ring-2 ring-indigo-500 scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => !isAnimating && handleTabChange(index)}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className={`flex items-center justify-center h-12 w-12 rounded-md ${
                        activeTab === index ? 'bg-indigo-500' : 'bg-indigo-100'
                      } text-white transition-colors duration-300`}>
                        <FeatureIcon className={`h-6 w-6 ${
                          activeTab === index ? 'text-white' : 'text-indigo-600'
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
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
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