import React, { useState } from 'react';
import { Star, ArrowRight, Play, BarChart, Users, Clock } from 'lucide-react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

const featuredTestimonial = {
  name: 'Sarah Johnson',
  title: 'Director of Marketing',
  company: 'TechCorp Solutions',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  quote: "Our ad campaigns saw a 3x CTR increase within the first month of working with MaaS. Their data-driven approach and expert team have transformed our marketing performance.",
  logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80'
};

const testimonials = [
  {
    name: 'Michael Chen',
    title: 'CEO',
    company: 'GrowthWave',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: "The level of expertise and attention to detail is unmatched. Our marketing campaigns are now delivering consistent results, and the ROI has exceeded our expectations."
  },
  {
    name: 'Emily Rodriguez',
    title: 'Head of Digital',
    company: 'Innovate Inc',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: "Working with MaaS has streamlined our entire marketing process. Their platform makes it easy to manage campaigns, and the results speak for themselves."
  },
  {
    name: 'David Wilson',
    title: 'Marketing Director',
    company: 'Scale Solutions',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote: "The MaaS team has become an extension of our marketing department. Their strategic insights and execution capabilities have helped us achieve our growth targets."
  }
];

const caseStudies = [
  {
    name: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    problem: "Struggling to scale marketing efforts while maintaining quality and consistency across channels.",
    solution: "Implemented comprehensive marketing automation and content strategy using MaaS platform.",
    results: "50% increase in qualified leads within 3 months, 3x improvement in campaign execution speed.",
  },
  {
    name: 'GrowthWave',
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    problem: "Limited visibility into marketing performance and difficulty in optimizing campaigns.",
    solution: "Deployed advanced analytics and multi-channel campaign management.",
    results: "200% increase in ROI, 45% reduction in customer acquisition costs.",
  }
];

const metrics = [
  {
    title: '3x Higher CTR',
    description: 'Average improvement in click-through rates',
    icon: BarChart
  },
  {
    title: '50% Faster',
    description: 'Campaign turnaround time reduction',
    icon: Clock
  },
  {
    title: '97% Satisfaction',
    description: 'Client satisfaction rate',
    icon: Star
  },
  {
    title: '1,000+ Campaigns',
    description: 'Successfully launched and managed',
    icon: Users
  }
];

const videoTestimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director',
    company: 'TechCorp',
    thumbnail: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80',
    videoUrl: '#'
  },
  {
    name: 'Michael Chen',
    title: 'CEO',
    company: 'GrowthWave',
    thumbnail: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80',
    videoUrl: '#'
  }
];

export default function TestimonialsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              What Our Clients Say About Us
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Hear from businesses that have transformed their marketing with our platform
            </p>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We pride ourselves on delivering exceptional marketing services and results. Here's what our clients have to say about their experience working with us.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <img
                src={featuredTestimonial.logo}
                alt={featuredTestimonial.company}
                className="h-12 mx-auto mb-8"
              />
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote>
                <p className="text-xl font-medium text-white sm:text-2xl">
                  "{featuredTestimonial.quote}"
                </p>
              </blockquote>
              <div className="mt-8 flex items-center justify-center">
                <img
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4 text-left">
                  <p className="text-base font-medium text-white">{featuredTestimonial.name}</p>
                  <p className="text-sm text-indigo-200">{featuredTestimonial.title} at {featuredTestimonial.company}</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/register"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Launch Your Marketing Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Grid */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title} at {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-500">See how our platform has helped businesses achieve their marketing goals</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-white rounded-lg shadow-lg p-8">
                <img
                  src={study.logo}
                  alt={study.name}
                  className="h-12 mb-6"
                />
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">The Challenge</h3>
                    <p className="mt-2 text-gray-600">{study.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Our Solution</h3>
                    <p className="mt-2 text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">The Results</h3>
                    <p className="mt-2 text-gray-600">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black_remote bg-primary hover:bg-opacity-90"
            >
              See More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Impact in Numbers</h2>
            <p className="mt-4 text-lg text-gray-500">Delivering measurable results for our clients</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.title} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <metric.icon className="h-12 w-12 text-indigo-600 mx-auto" />
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{metric.title}</h3>
                <p className="mt-2 text-gray-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Hear It Directly from Our Clients</h2>
            <p className="mt-4 text-lg text-gray-500">Watch our clients share their experiences and results</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {videoTestimonials.map((video) => (
              <div key={video.name} className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} video thumbnail`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white bg-opacity-75 rounded-full p-4 hover:bg-opacity-100 transition-opacity">
                      <Play className="h-12 w-12 text-indigo-600" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-gray-900">{video.name}</p>
                  <p className="text-sm text-gray-500">{video.title} at {video.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Ready to Experience Marketing Success?</h2>
            <p className="mt-4 text-lg text-gray-500">Get started with our marketing platform today</p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started Today
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}