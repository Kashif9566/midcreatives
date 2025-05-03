import React from "react";
import {
  Rocket,
  Target,
  Users,
  Globe,
  ArrowRight,
  Cpu,
  BarChart,
  Star,
  CheckCircle,
} from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const values = [
  {
    title: "Innovation First",
    description:
      "We leverage cutting-edge technology to revolutionize marketing execution and delivery.",
    icon: Rocket,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Results Driven",
    description:
      "Our success is measured by the tangible results we deliver to our clients.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Client Partnership",
    description:
      "We work as an extension of your team, fully aligned with your business goals.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Global Reach",
    description:
      "Our diverse team brings global perspective to local marketing challenges.",
    icon: Globe,
    color: "from-orange-500 to-amber-500",
  },
];

const stats = [
  { label: "Marketing Campaigns", value: "1000+" },
  { label: "Client Success Rate", value: "97%" },
  { label: "Team Members", value: "50+" },
  { label: "Countries Served", value: "20+" },
];

const differences = [
  {
    title: "Tech-Enabled Marketing Platform",
    description:
      "Our advanced platform streamlines marketing execution with automation and real-time collaboration tools.",
    icon: Cpu,
    features: [
      "AI-powered insights",
      "Real-time analytics",
      "Automated reporting",
      "Seamless integrations",
    ],
  },
  {
    title: "On-Demand Marketing Experts",
    description:
      "Access a dedicated team of experienced professionals ready to execute your marketing initiatives.",
    icon: Users,
    features: [
      "Dedicated account manager",
      "Expert marketing team",
      "Fast turnaround times",
      "24/7 support",
    ],
  },
  {
    title: "Data-Driven Results",
    description:
      "Make informed decisions with comprehensive analytics and performance tracking in real-time.",
    icon: BarChart,
    features: [
      "Performance tracking",
      "ROI measurement",
      "A/B testing",
      "Conversion optimization",
    ],
  },
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-18 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left side - Hero Section */}
          <div className="md:col-span-6">
            <span className="text-[#000] text-center font-['Onest'] text-[16px] sm:text-[18px] font-[500] leading-normal uppercase inline-block rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5">
              A NEW ERA OF CREATIVE WORK
            </span>
            <h2 className="text-black_remote font-['Onest'] text-[28px] sm:text-[32px] md:text-[40px] font-[500] leading-[1.2] mt-4 sm:mt-6 mb-3 sm:mb-4">
              Redefining Marketing<br className="hidden sm:block" />with <span style={{
                display: 'inline',
                backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
                backgroundSize: '100% 60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 60%',
                whiteSpace: 'nowrap',
                padding: 0
              }}>Technology</span>
            </h2>
            <p className="text-[#727986] font-['Onest'] text-[16px] sm:text-[18px] md:text-[22px] font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] max-w-3xl">
              We're a tech-driven marketing platform built to help businesses scale
              with on-demand marketing services. Our mission is to empower
              businesses with fast, scalable marketing execution through a seamless
              platform.
            </p>
            <AnimatedButton onClick={() => window.location.href = '/register'} className="mt-6 sm:mt-8 rounded-[8px] bg-[#1F2223] px-6 sm:px-8 py-[10px] text-[#FFF] font-['Onest'] text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[26px]">
              Get Started Now
            </AnimatedButton>
          </div>

          {/* Right side - Stats Section */}
          <div className="md:col-span-6 mt-8 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-4 sm:p-6 rounded-lg text-center border-b border-gray-200 pb-3 sm:pb-4">
                  <p className="text-[#000] text-center font-['Onest'] text-[36px] sm:text-[42px] md:text-[48px] font-normal leading-[48px] sm:leading-[56px] md:leading-[64px] tracking-[-2.4px]">
                    {stat.value}
                  </p>
                  <p className="mt-1 sm:mt-2 text-[#727986] text-center font-['Onest'] text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[22px] sm:leading-[24px] md:leading-[26px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      {/* <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="relative group">
                <div
                  className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 transition-opacity blur-lg`}
                />
                <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div
                    className={`bg-gradient-to-r ${value.color} rounded-lg p-3 w-fit`}
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* What Makes Us Different Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-black_remote text-center font-[500] text-[54px] leading-[60px] font-[Onest]">
              What Makes Us <span style={{
                display: 'inline',
                backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
                backgroundSize: '100% 60%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center 60%',
                whiteSpace: 'nowrap',
                padding: 0
              }}>Different</span>
            </h2>

            <p className="mt-4 text-lg text-gray-500">
              We combine technology, expertise, and data to deliver exceptional
              marketing results
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
            {differences.map((difference) => (
              <div
                key={difference.title}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                      <difference.icon className="h-6 w-6"  />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {difference.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">{difference.description}</p>
                <ul className="mt-6 space-y-3">
                  {difference.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600"
                    >
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
      {/* <div className="bg-indigo-700">
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
      </div> */}
    </div>
  );
}
