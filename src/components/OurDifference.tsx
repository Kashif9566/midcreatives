import React from 'react';
import { Cpu, Users, BarChart, Zap, Shield, MessageSquare } from 'lucide-react';

const differences = [
  {
    title: 'Tech-Enabled Platform',
    description: 'Our advanced platform streamlines marketing execution with automation and real-time collaboration tools.',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'On-Demand Marketing Experts',
    description: 'Access a dedicated team of experienced professionals ready to execute your marketing initiatives.',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Data-Driven Results',
    description: 'Make informed decisions with comprehensive analytics and performance tracking in real-time.',
    icon: BarChart,
    color: 'from-green-500 to-emerald-500'
  }
];

const benefits = [
  {
    title: 'Lightning Fast Execution',
    description: 'Get your marketing campaigns up and running in days, not weeks.',
    icon: Zap,
    stat: '24hr',
    label: 'Average Turnaround'
  },
  {
    title: 'Enterprise Security',
    description: 'Your data is protected with enterprise-grade security measures.',
    icon: Shield,
    stat: '99.9%',
    label: 'Uptime'
  },
  {
    title: 'Dedicated Support',
    description: '24/7 access to your marketing team for seamless communication.',
    icon: MessageSquare,
    stat: '15min',
    label: 'Response Time'
  }
];

export default function OurDifference() {
  return (
    <div className="relative overflow-hidden bg-white py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 h-full w-full bg-white">
        <div className="absolute h-full w-full opacity-30"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Difference</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Platform?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine technology, expertise, and data to deliver exceptional marketing results.
            </p>
          </div>

          {/* Main Features */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {differences.map((difference) => (
                <div key={difference.title} className="group relative">
                  <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${difference.color} opacity-0 group-hover:opacity-100 transition-opacity blur-lg`} />
                  <div className="relative bg-white rounded-lg shadow-lg p-10 hover:shadow-xl transition-shadow">
                    <div className={`bg-gradient-to-r ${difference.color} rounded-lg p-3 w-fit`}>
                      <difference.icon className="h-6 w-6 text-white" />
                    </div>
                    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                      {difference.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {difference.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Additional Benefits */}
          <div className="mx-auto mt-20 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center">
                    <benefit.icon className="h-8 w-8 text-indigo-600" />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tracking-tight text-indigo-600">{benefit.stat}</span>
                    <span className="text-sm text-gray-500">{benefit.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full px-8 py-3 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transition-all"
            >
              Experience the Difference
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}