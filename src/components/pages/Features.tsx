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
            <h2 className="text-black_remote font-['Onest'] text-[32px] sm:text-[40px] md:text-[54px] font-[500] leading-[1.2] sm:leading-[1.1] md:leading-[60px]">
              A Powerful Platform for{" "}
              <span
                style={{
                  display: "inline",
                  backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
                  backgroundSize: "100% 60%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center 60%",
                  whiteSpace: "nowrap",
                  padding: 0,
                }}
              >
                Marketing Success
              </span>
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
      <div className="py-12 sm:py-24 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-black_remote text-center font-[500] text-[54px] leading-[60px] font-[Onest]">
              Key{" "}
              <span
                style={{
                  display: "inline",
                  backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
                  backgroundSize: "100% 60%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center 60%",
                  whiteSpace: "nowrap",
                  padding: 0,
                }}
              >
                Features
              </span>
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
                <div className="text-black bg-primary rounded-[12px] p-3 inline-flex items-center justify-center">
                  <feature.icon className="h-6 w-6" />
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
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-black_remote text-center font-semibold text-[54px] leading-[60px] font-[Onest]">
              How It <span style={{
              display: 'inline',
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
              backgroundSize: '100% 60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 60%',
              whiteSpace: 'nowrap',
              padding: 0
            }}>Works</span>
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
                  <div className="border-2 border-gray-200 rounded-lg p-6 flex flex-col items-start w-full h-full min-h-[230px]">
                    <span className="text-4xl font-bold text-gray-900">
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
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-black_remote text-center font-[500] text-[54px] leading-[60px] font-[Onest]">
              Integration <span style={{
              display: 'inline',
              backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
              backgroundSize: '100% 60%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center 60%',
              whiteSpace: 'nowrap',
              padding: 0
            }}>Capabilities</span> 
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
      <Footer />
    </div>
  );
}
