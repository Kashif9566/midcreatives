import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The MaaS platform has transformed how we execute our marketing campaigns. Their tech-driven approach and expert team have delivered exceptional results consistently.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'GrowthWave',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: "We've seen a 300% increase in our marketing ROI since partnering with MaaS. Their platform makes it incredibly easy to scale our marketing efforts.",
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Digital',
    company: 'Innovate Inc',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: "The level of expertise and dedication from the MaaS team is unmatched. They're not just a service provider; they're a true extension of our marketing team.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-base font-normal text-black tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
        Testimonials
        </h2>
        <p className="mt-7 text-black text-center font-[500] text-[54px] leading-[60px] font-[Onest]">
          What Our <span style={{
            display: 'inline',
            backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
            backgroundSize: '100% 60%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 60%',
            whiteSpace: 'nowrap',
            padding: 0
          }}>Clients</span> Say
        </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we've helped businesses transform their marketing performance and achieve remarkable growth.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="mt-6 text-lg leading-7 text-gray-600">"{testimonial.content}"</div>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full bg-gray-50"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-black"
          >
            View All Testimonials
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}