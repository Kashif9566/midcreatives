import React from 'react';
import { Rocket, Users, Target, BarChart, ArrowRight } from 'lucide-react';
import Footer from '../Footer';
import AnimatedButton from '../AnimatedButton';

const values = [
  {
    title: 'Innovation',
    description: 'We leverage cutting-edge technology to revolutionize marketing execution.',
    icon: Rocket,
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to achieve exceptional results.',
    icon: Users,
  },
  {
    title: 'Customer-Centricity',
    description: "Our clients' success is at the heart of everything we do.",
    icon: Target,
  },
  {
    title: 'Results-Driven',
    description: 'We measure our success by the results we deliver to our clients.',
    icon: BarChart,
  },
];

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'With over 15 years of marketing experience, Sarah leads our vision for revolutionizing marketing execution.',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: "Michael brings 12 years of tech expertise, driving our platform's innovation and development.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Marketing',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Emily leads our marketing strategy with a focus on delivering exceptional client results.',
  },
  {
    name: 'David Wilson',
    role: 'Client Success Director',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'David ensures our clients receive the highest level of service and support.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <div className="relative px-4 pt-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <span className="block">Redefining Marketing</span>
                  <span className="block text-indigo-600">with Technology</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We're a tech-driven marketing platform built to help businesses scale with on-demand marketing services. Our mission is to empower businesses with fast, scalable marketing execution through a seamless platform.
                </p>
                <div className="mt-8">
                  <AnimatedButton
                    onClick={() => window.location.href = "/register"} 
                    className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team collaboration"
          />
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="relative bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">{value.title}</h3>
                <p className="mt-2 text-base text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              The experts behind our success
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="space-y-4">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                    src={member.image}
                    alt={member.name}
                  />
                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-indigo-600">{member.name}</h3>
                      <p className="text-gray-500">{member.role}</p>
                    </div>
                    <p className="text-gray-500">{member.bio}</p>
                  </div>
                </div>
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
          <AnimatedButton
            onClick={() => window.location.href = "/contact"}
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </AnimatedButton>
        </div>
      </div>

      <Footer />
    </div>
  );
}