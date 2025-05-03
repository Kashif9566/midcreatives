import React, { useEffect, useRef, useState } from 'react';
import PortalModal from './PortalModal';

const brands = [
  {
    name: 'Pizza Hut',
    logo: '/images/pizza-hut-seeklogo.png',
    caseStudy: true,
    testimonial: 'Pizza Hut trusts us to deliver fast, reliable service and creative campaigns.',
    author: 'Jane Doe',
    authorTitle: 'Marketing Lead',
    authorAvatar: '/images/jane-doe.jpg',
  },
  {
    name: 'Memphis',
    logo: '/images/memphis-colored.svg',
    caseStudy: false,
  },
  {
    name: 'Springfield',
    logo: '/images/Springfield-colored.svg',
    caseStudy: true,
    testimonial: 'Springfield saw a 30% increase in engagement after working with us.',
    author: 'John Smith',
    authorTitle: 'CEO',
    authorAvatar: '/images/john-smith.jpg',
  },
  {
    name: 'Basel',
    logo: '/images/Basel-colored.svg',
    caseStudy: false,
  },
  {
    name: 'JW',
    logo: '/images/JW-Logo-Gold-Black.svg',
    caseStudy: true,
    testimonial: 'JW relies on our insights for strategic growth and innovation.',
    author: 'Sarah Lee',
    authorTitle: 'Cofounder',
    authorAvatar: '/images/sarah-lee.jpg',
  },
  {
    name: 'Myx',
    logo: '/images/Drink Myx.webp',
    caseStudy: false,
  },
];

export default function TrustedBrands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number } | null>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && !isHovered) {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };
    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  // Helper to handle mouse leave for modal
  const handleModalMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(null);
    setModalPosition(null);
  };

  // When hovering a pill, calculate its position for the modal
  const handlePillMouseEnter = (index: number) => {
    setIsHovered(true);
    setHoveredIndex(index);
    const pill = pillRefs.current[index];
    if (pill) {
      const rect = pill.getBoundingClientRect();
      setModalPosition({
        top: rect.bottom + window.scrollY + 8, // 8px gap
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-black_remote text-center font-[500] text-[34px] leading-[60px] font-[Onest]">
          Trusted by Leading <span style={{
            display: 'inline',
            backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
            backgroundSize: '100% 60%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 60%',
            whiteSpace: 'nowrap',
            padding: 0
          }}>Brands</span>
        </h2>
        <div className="relative mt-10">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div
            ref={scrollRef}
            className="mx-auto flex space-x-16 overflow-hidden"
            style={{ scrollBehavior: 'smooth' }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex flex-none flex-col items-center justify-center relative"
              >
                {brand.caseStudy && (
                  <div
                    ref={el => pillRefs.current[index] = el}
                    className="mb-2 cursor-pointer group flex items-center"
                    onMouseEnter={() => handlePillMouseEnter(index)}
                    onMouseLeave={handleModalMouseLeave}
                  >
                    <span
                      className="relative flex items-center overflow-hidden"
                    >
                      <span
                        className="bg-primary text-black text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 ease-in-out flex items-center"
                        style={{
                          transitionProperty: 'padding, width, background-color',
                        }}
                      >
                        <span className="relative z-10">Case Study</span>
                        <span
                          className="inline-block ml-0 w-0 opacity-0 group-hover:ml-1 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 ease-out"
                          style={{ display: 'flex', alignItems: 'center' }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                )}
                <div className="h-12 w-32 rounded-lg flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
          {/* Portal Modal rendered outside overflow-hidden */}
          {isHovered && hoveredIndex !== null && modalPosition && (
            <PortalModal
              style={{
                position: 'absolute',
                top: modalPosition.top,
                left: modalPosition.left,
                transform: 'translate(-50%, 0)',
                zIndex: 50,
              }}
              onMouseLeave={handleModalMouseLeave}
              onMouseEnter={() => setIsHovered(true)}
            >
              <div className="w-80 rounded-2xl bg-white shadow-xl border border-gray-100 p-6 flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <img src={brands[hoveredIndex % brands.length].logo} alt={brands[hoveredIndex % brands.length].name} className="w-8 h-8 rounded-full bg-gray-100 mr-3" />
                  <span className="font-semibold text-black text-lg">{brands[hoveredIndex % brands.length].name}</span>
                </div>
                <div className="text-gray-700 mb-4 text-base">{brands[hoveredIndex % brands.length].testimonial}</div>
                <div className="flex items-center mt-2">
                  {brands[hoveredIndex % brands.length].authorAvatar && (
                    <img src={brands[hoveredIndex % brands.length].authorAvatar} alt={brands[hoveredIndex % brands.length].author} className="w-10 h-10 rounded-full mr-3" />
                  )}
                  <div>
                    <div className="font-semibold text-black text-sm">{brands[hoveredIndex % brands.length].author}</div>
                    <div className="text-gray-500 text-xs">{brands[hoveredIndex % brands.length].authorTitle}</div>
                  </div>
                </div>
              </div>
            </PortalModal>
          )}
        </div>
      </div>
    </div>
  );
}