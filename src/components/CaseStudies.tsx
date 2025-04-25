import React, { useState } from 'react';
import { ArrowRight, BarChart, TrendingUp, Users } from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType;
  }[];
  logo: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'techcorp',
    client: 'TechCorp Solutions',
    industry: 'SaaS',
    challenge: 'TechCorp needed to increase qualified leads while reducing their cost per acquisition.',
    solution: 'We implemented a comprehensive SEO and PPC strategy with content marketing to drive organic traffic and targeted paid campaigns.',
    results: [
      { metric: 'Organic Traffic', value: '+312%', icon: TrendingUp },
      { metric: 'Lead Generation', value: '+156%', icon: Users },
      { metric: 'Cost Per Acquisition', value: '-45%', icon: BarChart }
    ],
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
  },
  {
    id: 'growthwave',
    client: 'GrowthWave',
    industry: 'E-commerce',
    challenge: 'GrowthWave struggled with low conversion rates and inconsistent social media presence.',
    solution: 'We developed a social media content calendar and optimized their conversion funnel with A/B testing.',
    results: [
      { metric: 'Conversion Rate', value: '+87%', icon: BarChart },
      { metric: 'Social Engagement', value: '+245%', icon: Users },
      { metric: 'Revenue Growth', value: '+112%', icon: TrendingUp }
    ],
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
  }
];

const clientLogos = [
  'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
  'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
  'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
  'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
  'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
  'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Success Stories</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Real Results from Real Businesses
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            See how our platform has helped brands grow faster & smarter
          </p>
        </div>

        {/* Client Logos */}
        <div className="mt-12">
          <p className="text-center text-gray-500 mb-6">Trusted by innovative companies</p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {clientLogos.map((logo, index) => (
              <div key={index} className="col-span-1 flex justify-center items-center">
                <img className="h-12 filter grayscale hover:grayscale-0 transition-all duration-300" src={logo} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setActiveCase(study.id)}
              onMouseLeave={() => setActiveCase(null)}
            >
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="w-full h-48 object-cover"
                />
                <img 
                  src={study.logo} 
                  alt={`${study.client} logo`} 
                  className="absolute bottom-0 left-0 h-16 bg-white p-2 m-4 rounded shadow"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
                    <p className="text-sm text-gray-500">{study.industry}</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Case Study
                  </span>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-500"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="mt-2 text-sm text-gray-500"><strong>Solution:</strong> {study.solution}</p>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <result.icon className="h-8 w-8 mx-auto text-indigo-600" />
                      <p className="mt-2 text-2xl font-bold text-indigo-600">{result.value}</p>
                      <p className="text-xs text-gray-500">{result.metric}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="text-indigo-600 hover:text-indigo-500 inline-flex items-center text-sm font-medium"
                  >
                    Watch Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                  
                  <a
                    href={`/case-studies/${study.id}`}
                    className={`text-indigo-600 hover:text-indigo-500 inline-flex items-center text-sm font-medium transition-opacity duration-300 ${
                      activeCase === study.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-4xl p-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-0 right-0 -mt-12 text-white hover:text-indigo-200"
              onClick={() => setShowVideo(false)}
            >
              Close ×
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Case Study Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}