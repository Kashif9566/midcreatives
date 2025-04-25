import React from 'react';
import { Rocket, Target, Users, Globe, ArrowRight, Cpu, BarChart, Star, CheckCircle } from 'lucide-react';

const values = [
  {
    title: 'Innovation First',
    description: 'We leverage cutting-edge technology to revolutionize marketing execution and delivery.',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Results Driven',
    description: 'Our success is measured by the tangible results we deliver to our clients.',
    icon: Target,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Client Partnership',
    description: 'We work as an extension of your team, fully aligned with your business goals.',
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Global Reach',
    description: 'Our diverse team brings global perspective to local marketing challenges.',
    icon: Globe,
    color: 'from-orange-500 to-amber-500'
  }
];

const stats = [
  { label: 'Marketing Campaigns', value: '1000+' },
  { label: 'Client Success Rate', value: '97%' },
  { label: 'Team Members', value: '50+' },
  { label: 'Countries Served', value: '20+' }
];

const differences = [
  {
    title: 'Tech-Enabled Marketing Platform',
    description: 'Our advanced platform streamlines marketing execution with automation and real-time collaboration tools.',
    icon: Cpu,
    features: [
      'AI-powered insights',
      'Real-time analytics',
      'Automated reporting',
      'Seamless integrations'
    ]
  },
  {
    title: 'On-Demand Marketing Experts',
    description: 'Access a dedicated team of experienced professionals ready to execute your marketing initiatives.',
    icon: Users,
    features: [
      'Dedicated account manager',
      'Expert marketing team',
      'Fast turnaround times',
      '24/7 support'
    ]
  },
  {
    title: 'Data-Driven Results',
    description: 'Make informed decisions with comprehensive analytics and performance tracking in real-time.',
    icon: BarChart,
    features: [
      'Performance tracking',
      'ROI measurement',
      'A/B testing',
      'Conversion optimization'
    ]
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-indigo-600 mix-blend-multiply opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Redefining Marketing<br />with Technology
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-indigo-100">
            We're a tech-driven marketing platform built to help businesses scale with on-demand marketing services. Our mission is to empower businesses with fast, scalable marketing execution through a seamless platform.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="mt-2 text-base font-medium text-indigo-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="relative group">
                <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity blur-lg`} />
                <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`bg-gradient-to-r ${value.color} rounded-lg p-3 w-fit`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-gray-500">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">What Makes Us Different</h2>
            <p className="mt-4 text-lg text-gray-500">
              We combine technology, expertise, and data to deliver exceptional marketing results
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {differences.map((difference) => (
              <div key={difference.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <difference.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{difference.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">{difference.description}</p>
                <ul className="mt-6 space-y-3">
                  {difference.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your marketing?</span>
            <span className="block">Let's get started today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join the marketing revolution.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}