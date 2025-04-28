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
          <h2 className="text-black text-center font-[Onest] text-[54px] font-semibold leading-[60px] mt-5"> Everything you <br></br>need, all in <span className="relative inline-block">
            <span className="absolute w-full bg-primary h-[35px] top-[25px] -z-10 rounded"></span>
            one place
          </span></h2>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
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