import React from "react";
import { Clock, Users, BarChart, Zap, ArrowRight } from "lucide-react";
import Footer from "../Footer";

const features = [
  {
    name: "24-Hour Turnaround",
    description:
      "Get your marketing requests delivered faster with our streamlined process and dedicated team.",
    icon: Clock,
  },
  {
    name: "Dedicated Marketing Manager",
    description:
      "Work directly with an experienced marketing professional who understands your business goals.",
    icon: Users,
  },
  {
    name: "Real-Time Performance Insights",
    description:
      "Track campaign performance and ROI with our comprehensive analytics dashboard.",
    icon: BarChart,
  },
  {
    name: "Access to Top Marketing Experts",
    description:
      "Leverage the expertise of our seasoned marketing professionals across all channels.",
    icon: Zap,
  },
];

const integrations = [
  {
    name: "Slack",
    description:
      "Seamless communication and project updates through Slack integration.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png",
  },
  {
    name: "Microsoft Teams",
    description:
      "Collaborate effectively with Teams integration for enterprise clients.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png",
  },
  {
    name: "Google Analytics",
    description: "Deep insights with direct Google Analytics integration.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Logo_Google_Analytics.svg/1200px-Logo_Google_Analytics.svg.png",
  },
  {
    name: "HubSpot",
    description:
      "Seamless CRM integration with HubSpot for better lead management.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[120px] md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left column */}
          <div className="col-span-1 md:col-span-6">

            <h2 className="text-[#000] font-['Onest'] text-[32px] sm:text-[40px] md:text-[54px] font-semibold leading-[1.2] sm:leading-[1.1] md:leading-[60px]">
              A Powerful Platform for Marketing Success
            </h2>
            <p className="mt-4 sm:mt-6 text-[#727986] font-['Onest'] text-[16px] sm:text-[18px] md:text-[22px] font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] max-w-xl">
              Discover how our tech-driven platform delivers fast, scalable
              marketing solutions.
            </p>
            <button className="mt-6 sm:mt-8 text-[#FFF] font-['Onest'] text-[14px] sm:text-[16px] font-medium leading-[22px] sm:leading-[26px] rounded-[8px] bg-[#1F2223] py-[10px] px-[24px] sm:px-[32px]">
              Get Started Now
            </button>
          </div>

          {/* Right column */}
          <div className="col-span-1 md:col-span-6 mt-8 md:mt-0">
            <img src="/images/Group 9.png" alt="Marketing Platform Dashboard" />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[#000] font-['Onest'] text-[28px] sm:text-[32px] md:text-[40px] font-semibold leading-[1.2]">
              Key Features
            </h2>
            <p className="mt-4 text-[#727986] font-['Onest'] text-[16px] sm:text-[18px] md:text-[22px] font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] max-w-2xl mx-auto">
              Everything you need to scale your marketing efforts
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-indigo-600">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Simple steps to marketing success
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Submit Your Marketing Request",
                  description:
                    "Tell us what you need through our intuitive platform",
                },
                {
                  step: "02",
                  title: "Our Team Gets to Work",
                  description: "Expert marketers begin executing your request",
                },
                {
                  step: "03",
                  title: "Review Results",
                  description: "Provide feedback and approve deliverables",
                },
                {
                  step: "04",
                  title: "Optimize for Success",
                  description: "Continuous improvement based on performance",
                },
              ].map((step) => (
                <div key={step.step} className="relative">
                  <div className="border-2 border-indigo-600 rounded-lg p-6">
                    <span className="text-4xl font-bold text-indigo-600">
                      {step.step}
                    </span>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Integration Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Connect with your favorite tools
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="h-12 w-auto mx-auto"
                />
                <h3 className="mt-4 text-lg font-medium text-center text-gray-900">
                  {integration.name}
                </h3>
                <p className="mt-2 text-center text-gray-500">
                  {integration.description}
                </p>
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
            <span className="block">See our platform in action.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Book a demo to experience our features firsthand.
          </p>
          <a
            href="/demo"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
