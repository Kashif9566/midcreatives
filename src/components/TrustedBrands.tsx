import React, { useEffect, useRef, useState } from 'react';
import PortalModal from './PortalModal';
import Testimonials from './Testimonials';
import { useNavigate } from 'react-router-dom';

const brands = [
  {
    name: 'Pizza Hut',
    logo: '/images/pizza-hut-seeklogo.png',
    caseStudy: true,
    caseStudyId: 'pizzahut',
    testimonial: 'Pizza Huts local UK franchises needed a way to increase both online orders and foot traffic in a competitive delivery market.'
  },
  {
    name: 'Manji Tv',
    logo: '/images/manji.jpeg',
    caseStudy: true,
    caseStudyId: 'manji',
    testimonial: 'Manji wanted to grow their presence on YouTube but lacked a clear strategy and consistent production workflow.',
  },


  {
    name: 'Memphis',
    logo: '/images/memphis-colored.svg',
    caseStudy: false,
  },
  {
    name: 'Springfield',
    logo: '/images/Springfield-colored.svg',
    caseStudy: false,
    testimonial: 'Springfield saw a 30% increase in engagement after working with us.',
  },
  {
    name: 'CGDEN',
    logo: '/images/cgden.jpeg',
    caseStudy: true,
    caseStudyId: 'ggden',
    testimonial: 'GGDEN is a fast-growing gaming and fintech startup based in Pakistan, focused on enabling local YouTube streamers to monetize their channels through a frictionless payment gateway.',
  },
  {
    name: 'Basel',
    logo: '/images/Basel-colored.svg',
    caseStudy: false,
  },
  {
    name: 'Junto Wealth',
    logo: '/images/JW-Logo-Gold-Black.svg',
    caseStudy: true,
    caseStudyId: 'juntoWealth',
    testimonial: 'Junto Wealth needed a scalable way to build trust and drive inbound leads for its financial advisory services.',
  },
  {
    name: 'Myx',
    logo: '/images/Drink Myx.webp',
    caseStudy: true,
    caseStudyId: 'drinkmyx',
    testimonial:' Drink MYX was burning ad spend on boosted posts without a clear funnel, tracking, or real results.'
  },
];

export default function TrustedBrands() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalPosition, setModalPosition] = useState<{ top: number; left: number } | null>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startScrolling = () => {
      if (scrollIntervalRef.current) return;
      
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current && !isHovered) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          const maxScroll = scrollWidth - clientWidth;
          
          if (scrollLeft >= maxScroll) {
            scrollRef.current.scrollLeft = 0;
          } else {
            scrollRef.current.scrollLeft += 1; // Increased scroll speed
          }
        }
      }, 30); // Adjusted interval timing
    };

    const stopScrolling = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    startScrolling();

    return () => {
      stopScrolling();
    };
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

  // Handle case study click
  const handleCaseStudyClick = (brand: typeof brands[0]) => {
    if (brand.caseStudy && brand.caseStudyId) {
      navigate(`/case-studies/${brand.caseStudyId}`);
    }
  };

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-black_remote text-center font-[500] text-[34px] leading-[40px] md:leading-[60px] font-[Onest]">
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
                    onClick={() => handleCaseStudyClick(brand)}
                  >
                    <span
                      className="relative flex items-center overflow-hidden"
                    >
                      <span
                        className="bg-primary text-black text-[9px] font-medium px-1 py-0 rounded-full transition-all duration-300 ease-in-out flex items-center"
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
                <div className="h-16 w-40 rounded-lg flex items-center justify-center bg-white">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className={`max-h-12 max-w-32 w-auto h-auto object-contain ${brand.name === 'CGDEN' ? 'max-h-20' : ''}`}
                    style={{ 
                      maxHeight: brand.name === 'CGDEN' ? '80px' : '48px',
                      maxWidth: '128px',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
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
              </div>
            </PortalModal>
          )}
        </div>
      </div>
    </div>
  );
}