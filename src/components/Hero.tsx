import React, { useState } from 'react';
import { Check, Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  '24/7 Marketing Support',
  'Dedicated Account Manager',
  'We Work in Your Tools'
];

const testimonials = [
  {
    quote: 'Marketing requests have gone up 300%',
    name: 'SARAH JOHNSON',
    role: 'Director, Strategic Planning',
    bgColor: 'bg-gray-100'
  },
  {
    quote: 'Our campaigns see 3x higher CTR',
    name: 'MICHAEL CHEN',
    role: 'Director of Marketing',
    bgColor: 'bg-rose-100'
  },
  {
    quote: 'Perfect execution every time',
    name: 'EMILY RODRIGUEZ',
    role: 'Head of Marketing',
    bgColor: 'bg-orange-100'
  },
  {
    quote: 'Zero to full-scale marketing overnight',
    name: 'DAVID WILSON',
    role: 'Director, Product Marketing',
    bgColor: 'bg-yellow-100'
  }
];

export default function Hero() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  React.useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleStartRequest = () => {
    navigate('/pricing');
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="pt-16 sm:pt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                    <span className="block">Scalable Marketing,</span>
                    <span className="block text-indigo-600">On Demand.</span>
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl text-gray-500">
                    Access a dedicated team of marketing experts for SEO, PPC, social media, content, and more. No hiring, no hassle.
                  </p>
                  
                  <div className="mt-6 space-y-3">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="ml-2 text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button
                      onClick={handleStartRequest}
                      className="px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Get Started Now
                    </button>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="px-8 py-3 text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 inline-flex items-center transition-colors"
                    >
                      <Play className="h-5 w-5 mr-2" />
                      See How It Works
                    </button>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    Flat pricing. Cancel Anytime.
                  </p>
                </div>

                {/* Right Column - Testimonial Cards */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-3">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={testimonial.name}
                        className={`${testimonial.bgColor} p-5 rounded-lg relative ${
                          index % 2 === 0 ? 'transform translate-y-4' : ''
                        } transition-all duration-500 ease-in-out ${
                          index === currentTestimonial || index === (currentTestimonial + 1) % testimonials.length ? 
                          'opacity-100 scale-100' : 'opacity-40 scale-95'
                        }`}
                      >
                        <div className="text-xl font-bold mb-3">"</div>
                        <p className="font-semibold text-gray-800 mb-3 text-sm">
                          {testimonial.quote}
                        </p>
                        <div>
                          <p className="text-xs font-bold text-gray-900">{testimonial.name}</p>
                          <p className="text-xs text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center mt-4 space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`h-2 w-2 rounded-full ${
                          index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <button 
                      onClick={prevTestimonial}
                      className="text-gray-500 hover:text-indigo-600"
                    >
                      ← Prev
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="text-gray-500 hover:text-indigo-600"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                title="Marketing as a Service Explainer"
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