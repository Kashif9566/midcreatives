import React, { useEffect, useRef } from 'react';

const brands = [
  {
    name: 'Brand 1',
    logo: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=50&q=80',
  },
  {
    name: 'Brand 2',
    logo: 'https://images.unsplash.com/photo-1614680376408-16ec389d3662?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=50&q=80',
  },
  {
    name: 'Brand 3',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=50&q=80',
  },
  {
    name: 'Brand 4',
    logo: 'https://images.unsplash.com/photo-1614680376739-8568f7989bab?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=50&q=80',
  },
  {
    name: 'Brand 5',
    logo: 'https://images.unsplash.com/photo-1614680376458-0e8092b2f177?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=50&q=80',
  },
  {
    name: 'Brand 6',
    logo: 'https://images.unsplash.com/photo-1614680376512-3f539c434ac4?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&h=50&q=80',
  },
];

export default function TrustedBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by Leading Brands
        </h2>
        <div className="relative mt-10">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div
            ref={scrollRef}
            className="mx-auto flex space-x-16 overflow-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Duplicate the brands for continuous scrolling */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex flex-none items-center justify-center"
              >
                <div className="h-12 w-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-600 font-medium">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}