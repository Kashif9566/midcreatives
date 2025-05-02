import React, { useEffect, useRef } from 'react';

const brands = [
  {
    name: 'Pizza Hut',
    logo: '/images/pizza-hut-seeklogo.png',
  },
  {
    name: 'Memphis',
    logo: '/images/memphis-colored.svg',
  },
  {
    name: 'Springfield',
    logo: '/images/Springfield-colored.svg',
  },
  {
    name: 'Basel',
    logo: '/images/Basel-colored.svg',
  },
  {
    name: 'JW',
    logo: '/images/JW-Logo-Gold-Black.svg',
  },
  {
    name: 'Myx',
    logo: '/images/Drink Myx.webp',
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
            {/* Duplicate the brands for continuous scrolling */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex flex-none items-center justify-center"
              >
                <div className="h-12 w-32  rounded-lg flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}