import React, { useState } from 'react';

interface ComparisonItem {
  name: string;
  description: string;
  metrics: {
    speed: boolean;
    flexibility: boolean;
    quality: boolean;
    scalability: boolean;
    costEffectiveness: boolean;
  };
}

const comparisonData: ComparisonItem[] = [
  {
    name: 'MaaS Platform',
    description: 'Work with our expert team of marketing professionals, powered by cutting-edge technology.',
    metrics: {
      speed: true,
      flexibility: true,
      quality: true,
      scalability: true,
      costEffectiveness: true
    }
  },
  {
    name: 'In-house team',
    description: 'In-house teams often lack specialized expertise and resources for diverse marketing needs.',
    metrics: {
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      costEffectiveness: false
    }
  },
  {
    name: 'Marketing agencies',
    description: 'Traditional agencies can be slow, expensive, and inflexible.',
    metrics: {
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      costEffectiveness: false
    }
  },
  {
    name: 'Freelancers',
    description: 'Freelancers can be unreliable and hard to scale, leading to inconsistent results.',
    metrics: {
      speed: false,
      flexibility: false,
      quality: true,
      scalability: true,
      costEffectiveness: true
    }
  }
];

export default function ComparisonSection() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <div className="bg-[#FFF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comparison Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-base font-normal text-black tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            MaaS vs Traditional Alternatives
            </h2>
            <p className="text-[54px] pt-5 font-semibold text-black text-center leading-[60px]">
              Hiring or traditional outsourcing?{' '}
            </p>
            <p className="text-[54px] font-semibold text-black text-center leading-[60px]">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#E0FF82] h-[50%] top-1/2 -translate-y-1/2 -z-10 rounded"></span>
                Neither.
              </span>
            </p>
          </div>

          <div className="relative overflow-x-auto">
            <div className="md:hidden">
              {/* Mobile Column Headers */}
              <div className="flex justify-end mb-2">
                <div className="grid grid-cols-5 gap-1">
                  {Object.keys(comparisonData[0].metrics).map((key) => (
                    <div key={key} className="w-12 flex items-center justify-center">
                      <span className="text-[12px] font-semibold text-black whitespace-nowrap">
                        {key === 'costEffectiveness' ? 'Cost' : key}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {comparisonData.map((option, index) => (
                <div
                  key={option.name}
                  className={`mb-4 overflow-hidden ${index === 0 ? 'bg-[#FFFDF7] border border-[#E0FF82] rounded-[16px] shadow-[0px_6px_12px_0px_rgba(252,241,206,0.40)]' : 'bg-white rounded-lg shadow-sm'} ${index !== comparisonData.length - 1 ? 'border-b border-gray-200' : ''}`}
                  onMouseEnter={() => setHoveredRow(option.name)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-[11px] font-semibold text-black">{option.name}</h3>
                      <div className={`mt-1 transition-all duration-300 ${
                        hoveredRow === option.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-[16px] font-semibold text-black">{option.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="grid grid-cols-5 gap-7">
                        {Object.entries(option.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-center">
                            {value ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                <g clipPath="url(#clip0_14_428)">
                                  <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#32BA7C"/>
                                  <path d="M8.93372 17.4132L15.1041 23.5835C20.2145 22.2208 24 17.5646 24 12C24 11.8864 24 11.7728 24 11.6593L19.1545 7.19238L8.93372 17.4132Z" fill="#0AA06E"/>
                                  <path d="M12.3028 14.6877C12.8328 15.2177 12.8328 16.1262 12.3028 16.6562L11.205 17.754C10.675 18.2839 9.76651 18.2839 9.23654 17.754L4.42897 12.9085C3.899 12.3786 3.899 11.4701 4.42897 10.9401L5.52676 9.8423C6.05673 9.31233 6.96525 9.31233 7.49522 9.8423L12.3028 14.6877Z" fill="white"/>
                                  <path d="M16.5047 6.32179C17.0347 5.79182 17.9432 5.79182 18.4732 6.32179L19.571 7.41958C20.1009 7.94955 20.1009 8.85807 19.571 9.38804L11.2429 17.6783C10.7129 18.2082 9.80441 18.2082 9.27444 17.6783L8.17665 16.5805C7.64668 16.0505 7.64668 15.142 8.17665 14.612L16.5047 6.32179Z" fill="white"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_14_428">
                                    <rect width="24" height="24" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                                <g clipPath="url(#clip0_14_416)">
                                  <path d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z" fill="#FF5A54"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M23.2472 12.2191C23.1318 18.2582 18.2582 23.1318 12.2191 23.2472C10.3081 21.3363 8.39194 19.4296 6.48122 17.5188C5.98126 17.0189 5.98121 16.2008 6.48118 15.7007L10.1819 12L6.48118 8.29927C5.98121 7.7993 5.98121 6.98119 6.48118 6.48122C6.98115 5.98126 7.79926 5.98121 8.29927 6.48118L12 10.1819L15.7007 6.48118C16.2007 5.98121 17.0188 5.98121 17.5188 6.48118C19.4296 8.3919 21.3362 10.3081 23.2472 12.2191Z" fill="#DB3A3C"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M6.48118 17.5188C6.98115 18.0188 7.7993 18.0188 8.29927 17.5188L12 13.8181L15.7007 17.5188C16.2007 18.0188 17.0188 18.0188 17.5188 17.5188C18.0188 17.0189 18.0188 16.2008 17.5188 15.7007L13.8181 12L17.5188 8.29927C18.0188 7.7993 18.0188 6.98119 17.5188 6.48122C17.0189 5.98126 16.2008 5.98126 15.7007 6.48122L12 10.1819L8.29927 6.48118C7.7993 5.98121 6.98119 5.98121 6.48122 6.48118C5.98126 6.98115 5.98126 7.79926 6.48122 8.29922L10.1819 12L6.48118 15.7007C5.98121 16.2007 5.98121 17.0189 6.48118 17.5188Z" fill="white"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_14_416">
                                    <rect width="24" height="24" fill="white"/>
                                  </clipPath>
                                </defs>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop table */}
            <table className="hidden md:table w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-8 w-1/3"></th>
                  <th className="pb-8 text-[16px] font-semibold text-black">Speed</th>
                  <th className="pb-8 text-[16px] font-semibold text-black">Flexibility</th>
                  <th className="pb-8 text-[16px] font-semibold text-black">Quality</th>
                  <th className="pb-8 text-[16px] font-semibold text-black">Scalability</th>
                  <th className="pb-8 text-[16px] font-semibold text-black">Cost-effectiveness</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((option, index) => (
                  <tr key={option.name} className={`${index === 0 ? 'bg-[#FFFDF7] border border-[#E0FF82] rounded-[16px] shadow-[0px_6px_12px_0px_rgba(252,241,206,0.40)]' : ''} ${index !== comparisonData.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <td className={`py-6 pl-4 ${index === 0 ? 'rounded-l-[16px]' : ''}`}>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[20px] font-semibold text-black">{option.name}</h3>
                        <span className="text-[14px] font-normal text-black">{option.description}</span>
                      </div>
                    </td>
                    {Object.values(option.metrics).map((value, i) => (
                      <td key={i} className={`py-6 pl-4 px-8 ${index === 0 && i === Object.values(option.metrics).length - 1 ? 'rounded-r-[16px]' : ''}`}>
                        {value ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_14_428)">
                              <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#32BA7C"/>
                              <path d="M8.93372 17.4132L15.1041 23.5835C20.2145 22.2208 24 17.5646 24 12C24 11.8864 24 11.7728 24 11.6593L19.1545 7.19238L8.93372 17.4132Z" fill="#0AA06E"/>
                              <path d="M12.3028 14.6877C12.8328 15.2177 12.8328 16.1262 12.3028 16.6562L11.205 17.754C10.675 18.2839 9.76651 18.2839 9.23654 17.754L4.42897 12.9085C3.899 12.3786 3.899 11.4701 4.42897 10.9401L5.52676 9.8423C6.05673 9.31233 6.96525 9.31233 7.49522 9.8423L12.3028 14.6877Z" fill="white"/>
                              <path d="M16.5047 6.32179C17.0347 5.79182 17.9432 5.79182 18.4732 6.32179L19.571 7.41958C20.1009 7.94955 20.1009 8.85807 19.571 9.38804L11.2429 17.6783C10.7129 18.2082 9.80441 18.2082 9.27444 17.6783L8.17665 16.5805C7.64668 16.0505 7.64668 15.142 8.17665 14.612L16.5047 6.32179Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_14_428">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clipPath="url(#clip0_14_416)">
                              <path d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z" fill="#FF5A54"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M23.2472 12.2191C23.1318 18.2582 18.2582 23.1318 12.2191 23.2472C10.3081 21.3363 8.39194 19.4296 6.48122 17.5188C5.98126 17.0189 5.98121 16.2008 6.48118 15.7007L10.1819 12L6.48118 8.29927C5.98121 7.7993 5.98121 6.98119 6.48118 6.48122C6.98115 5.98126 7.79926 5.98121 8.29927 6.48118L12 10.1819L15.7007 6.48118C16.2007 5.98121 17.0188 5.98121 17.5188 6.48118C19.4296 8.3919 21.3362 10.3081 23.2472 12.2191Z" fill="#DB3A3C"/>
                              <path fillRule="evenodd" clipRule="evenodd" d="M6.48118 17.5188C6.98115 18.0188 7.7993 18.0188 8.29927 17.5188L12 13.8181L15.7007 17.5188C16.2007 18.0188 17.0188 18.0188 17.5188 17.5188C18.0188 17.0189 18.0188 16.2008 17.5188 15.7007L13.8181 12L17.5188 8.29927C18.0188 7.7993 18.0188 6.98119 17.5188 6.48122C17.0189 5.98126 16.2008 5.98126 15.7007 6.48122L12 10.1819L8.29927 6.48118C7.7993 5.98121 6.98119 5.98121 6.48122 6.48118C5.98126 6.98115 5.98126 7.79926 6.48122 8.29922L10.1819 12L6.48118 15.7007C5.98121 16.2007 5.98121 17.0189 6.48118 17.5188Z" fill="white"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_14_416">
                                <rect width="24" height="24" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}