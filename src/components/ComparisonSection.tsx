import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

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

const columnHeaders = ['Speed', 'Flexibility', 'Quality', 'Scalability', 'Cost'];

export default function ComparisonSection() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comparison Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              MAAS VS. TRADITIONAL ALTERNATIVES
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Hiring or traditional outsourcing?{' '}
              <span className="italic">Neither.</span>
            </p>
          </div>

          <div className="relative overflow-x-auto">
            <div className="md:hidden">
              {/* Mobile Column Headers */}
              <div className="flex justify-end mb-2 pr-4">
                {Object.keys(comparisonData[0].metrics).map((key) => (
                  <div key={key} className="w-8 text-center">
                    <span className="text-xs font-medium text-gray-500 capitalize">
                      {key === 'costEffectiveness' ? 'Cost' : key}
                    </span>
                  </div>
                ))}
              </div>

              {comparisonData.map((option) => (
                <div
                  key={option.name}
                  className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
                  onMouseEnter={() => setHoveredRow(option.name)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">{option.name}</h3>
                      <div className={`mt-1 transition-all duration-300 ${
                        hoveredRow === option.name ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-gray-500">{option.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {Object.entries(option.metrics).map(([key, value]) => (
                        <div key={key} className="w-8 flex justify-center">
                          {value ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      ))}
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
                  <th className="pb-8 text-sm font-medium text-gray-500">Speed</th>
                  <th className="pb-8 text-sm font-medium text-gray-500">Flexibility</th>
                  <th className="pb-8 text-sm font-medium text-gray-500">Quality</th>
                  <th className="pb-8 text-sm font-medium text-gray-500">Scalability</th>
                  <th className="pb-8 text-sm font-medium text-gray-500">Cost-effectiveness</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((option, index) => (
                  <tr key={option.name} className={index === 0 ? 'bg-indigo-50 rounded-lg' : ''}>
                    <td className="py-6 pr-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-gray-900">{option.name}</span>
                        <span className="text-sm text-gray-500">{option.description}</span>
                      </div>
                    </td>
                    {Object.values(option.metrics).map((value, i) => (
                      <td key={i} className="py-6">
                        {value ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-red-500" />
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