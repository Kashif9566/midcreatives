import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonItem {
  name: string;
  description: string;
  metrics: {
    speed: { value: boolean; description: string };
    flexibility: { value: boolean; description: string };
    quality: { value: boolean; description: string };
    scalability: { value: boolean; description: string };
    costEffectiveness: { value: boolean; description: string };
  };
}

const comparisonData: ComparisonItem[] = [
  {
    name: 'Your Marketing Platform',
    description: 'On-demand talent + campaign execution powered by expert marketers',
    metrics: {
      speed: { value: true, description: '' },
      flexibility: { value: true, description: '' },
      quality: { value: true, description: '' },
      scalability: { value: true, description: '' },
      costEffectiveness: { value: true, description: '' }
    }
  },
  {
    name: 'In-house team',
    description: 'Slow onboarding, limited channel expertise',
    metrics: {
      speed: { value: false, description: '' },
      flexibility: { value: false, description: '' },
      quality: { value: true, description: '' },
      scalability: { value: true, description: '' },
      costEffectiveness: { value: false, description: '' }
    }
  },
  {
    name: 'Agencies',
    description: 'Expensive retainers, rigid processes',
    metrics: {
      speed: { value: false, description: '' },
      flexibility: { value: false, description: '' },
      quality: { value: true, description: '' },
      scalability: { value: true, description: '' },
      costEffectiveness: { value: false, description: '' }
    }
  },
  {
    name: 'Freelancers',
    description: 'Unpredictable and hard to manage at scale',
    metrics: {
      speed: { value: false, description: '' },
      flexibility: { value: false, description: '' },
      quality: { value: true, description: '' },
      scalability: { value: true, description: '' },
      costEffectiveness: { value: true, description: '' }
    }
  }
];

export default function ComparisonSection() {
  return (
    <div className="bg-[#FFF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-base font-normal text_black_remote tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Runrly vs Traditional Alternatives
          </h2>
          <p style={{ color: '#1F2223 !important' }} className="text-[48px] pt-5 font-[500] text_black_remote text-center leading-[60px]">
            Hiring or traditional outsourcing?{' '}
          </p>
          <p className="text-[54px] font-[500] text_black_remote text-center leading-[60px]">
            <span
              style={{
                display: 'inline',
                backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
                backgroundSize: '100% 60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 60%',
                padding: 0
              }}
            >
              Neither.
            </span>
          </p>
        </div>

        {/* Mobile View */}
       {/* Mobile View */}
<div className="md:hidden">
  {comparisonData.map((option, index) => (
    <div
      key={option.name}
      className={`mb-4 flex overflow-hidden ${
        index === 0
          ? 'bg-[#FFFDF7] border border-[#E0FF82] rounded-[16px] shadow-[0px_6px_12px_0px_rgba(252,241,206,0.40)]'
          : 'bg-white rounded-lg shadow-sm'
      }`}
    >
      {/* Left: Fixed label */}
      <div className="min-w-[140px] h-[100px] p-4 flex-shrink-0 bg-white flex flex-col justify-center sm:items-start sm:h-auto">
        <h3 className="text-[11px] font-semibold text_black_remote text-center sm:text-left">
          {option.name}
        </h3>
        <p className="hidden sm:block text-[14px] font-normal text_black_remote mt-1">
          {option.description}
        </p>
      </div>

      {/* Right: Scrollable metrics */}
      <div className="overflow-x-auto flex-1">
        <div className="min-w-[400px] grid grid-cols-5 gap-8 items-center p-4">
          {Object.entries(option.metrics).map(([key, metric]) => (
            <div key={key} className="flex flex-col items-center justify-center">
              <span className="text-[12px] font-semibold text_black_remote mb-3">
                {key === 'costEffectiveness' ? 'Cost' : key}
              </span>
              {metric.value ? (
                <Check className="h-6 w-6 text-green-500" />
              ) : (
                <X className="h-6 w-6 text-red-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-8 w-1/3"></th>
                <th className="pb-8 text-[16px] font-semibold text_black_remote text-center">Speed</th>
                <th className="pb-8 text-[16px] font-semibold text_black_remote text-center">Flexibility</th>
                <th className="pb-8 text-[16px] font-semibold text_black_remote text-center">Quality</th>
                <th className="pb-8 text-[16px] font-semibold text_black_remote text-center">Scalability</th>
                <th className="pb-8 text-[16px] font-semibold text_black_remote text-center">Cost-effectiveness</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((option, index) => (
                <tr
                  key={option.name}
                  className={`${index === 0 ? 'bg-[#FFFDF7] border border-[#E0FF82] rounded-[16px] shadow-[0px_6px_12px_0px_rgba(252,241,206,0.40)]' : ''} ${
                    index !== comparisonData.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <td className={`py-6 pl-4 ${index === 0 ? 'rounded-l-[16px]' : ''}`}>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[20px] font-semibold text_black_remote">{option.name}</h3>
                      <span className="text-[14px] font-normal text_black_remote">{option.description}</span>
                    </div>
                  </td>
                  {Object.values(option.metrics).map((metric, i) => (
                    <td
                      key={i}
                      className={`py-6 pl-4 px-8 ${
                        index === 0 && i === Object.values(option.metrics).length - 1
                          ? 'rounded-r-[16px]'
                          : ''
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        {metric.value ? (
                          <Check className="h-6 w-6 text-green-500" />
                        ) : (
                          <X className="h-6 w-6 text-red-500" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
