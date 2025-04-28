import React from 'react';
import { Zap, DollarSign, LineChart } from 'lucide-react';
import type { BenefitCard } from '../types';

const benefits: BenefitCard[] = [
  {
    title: 'Tech-driven platform',
    description: 'Our advanced platform enables fast, scalable marketing execution with real-time updates and automation.',
    icon: Zap,
  },
  {
    title: 'Predictable costs',
    description: 'Subscription-based plans ensure transparent pricing and predictable monthly costs for your marketing needs.',
    icon: DollarSign,
  },
  {
    title: 'Real-time insights',
    description: 'Track your marketing performance with detailed analytics and progress tracking in real-time.',
    icon: LineChart,
  },
];

export default function Benefits() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-centerlg:text-center">
          <img src="/images/wcu.png" alt="Benefits" height={59.861} width="auto"/>
          <h2 className="text_black_remote text-center font-[Onest] text-[54px] font-[500] leading-[60px] mt-5"> Everything you <br></br>need, all in <span style={{
            display: 'inline',
            backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
            backgroundSize: '100% 60%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 60%',
            whiteSpace: 'nowrap',
            padding: 0
          }}>one place</span></h2>
        </div>

        <div className="mt-[75px]">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text_black_remote">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}