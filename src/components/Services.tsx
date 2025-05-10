import React from "react";
import { Search, Target, Share2, Mail, PenTool, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ServiceCard } from "../types";

const services: ServiceCard[] = [
  {
    title: "SEO",
    description:
      "Boost your search visibility with data-driven SEO strategies that drive organic traffic and improve rankings.",
    icon: Search,
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Link Building & Outreach",
    ],
  },
  {
    title: "PPC Advertising",
    description:
      "Drive qualified traffic and maximize ROI with targeted paid campaigns across major platforms.",
    icon: Target,
    features: [
      "Google Ads Management",
      "Social Media Advertising",
      "Display & Remarketing",
      "Campaign Optimization",
    ],
  },
  {
    title: "Social Media Marketing",
    description:
      "Engage your audience and build brand presence across all major social media platforms.",
    icon: Share2,
    features: [
      "Content Strategy & Creation",
      "Community Management",
      "Social Media Analytics",
      "Influencer Partnerships",
    ],
  },
  {
    title: "Email Marketing",
    description:
      "Convert leads into customers with personalized email campaigns that nurture relationships.",
    icon: Mail,
    features: [
      "Email Campaign Strategy",
      "List Segmentation",
      "A/B Testing",
      "Automation Workflows",
    ],
  },
  {
    title: "Content Marketing",
    description:
      "Attract and convert your target audience with high-quality, strategic content that drives results.",
    icon: PenTool,
    features: [
      "Content Strategy",
      "Blog Writing",
      "Whitepapers & Ebooks",
      "Content Distribution",
    ],
  },
  {
    title: "Content Creation",
    description:
      "Produce high-quality, engaging content tailored to your brand's voice, audience, and objectives.",
    icon: Camera,
    features: [
      "Video Production & Editing",
      "Social Media Content & Reels",
      "Graphic Design & Motion Graphics",
      "Copywriting & Brand Storytelling",
    ],
  },
];

export default function Services() {
  const navigate = useNavigate();

  const getServicePath = (title: string) => {
    switch (title) {
      case "SEO":
        return "seo";
      case "PPC Advertising":
        return "ppc-advertising";
      case "Social Media Marketing":
        return "social-media-marketing";
      case "Email Marketing":
        return "email-marketing";
      case "Content Marketing":
        return "content-marketing";
      case "Content Creation":
        return "content-creation";
      default:
        return title.toLowerCase().replace(/\s+/g, "-");
    }
  };

  const handleServiceClick = (service: ServiceCard) => {
    const path = getServicePath(service.title);
    navigate(`/services/${path}`);
  };

  return (
    <div className="bg-[#FFF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-normal text_black_remote tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Product Marketing
          </h2>
          <h3 className="text_black_remote text-center font-[500] text-[32px] sm:text-[42px] lg:text-[54px] leading-[40px] sm:leading-[50px] lg:leading-[60px] font-[Onest]">
            Your ready-made growth{" "}
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
              engine
            </span>
          </h3>

          <p className="text-[#727986] mt-5 text-center font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] font-[Onest] px-4 sm:px-0">
            Building a full-stack marketing function takes years. Kaya delivers
            a seasoned team
            <br className="hidden sm:block" /> and marketing analytics from the get-go, saving you
            significant time and money.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text_black_remote text-center font-normal text-[18px] uppercase font-['Onest'] leading-normal rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Grow your business
          </h2>
        </div>
        <div>
          <div className="max-w-7xl mx-auto mt-[40px]">
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              {/* Left Column - 7 columns */}
              <div className="col-span-12 lg:col-span-7 rounded-[16px] bg-[#F7F8F8] px-4 sm:px-6 py-6 sm:py-7">
                {/* Logo Grid */}
                <div className="mt-6 sm:mt-8 lg:mt-[70px] flex items-center justify-center relative">
                  {/* Gradient Circle */}
                  <div
                    className="absolute"
                    style={{
                      width: "194px",
                      height: "194px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(180deg, rgba(224, 255, 130, 0.25) 0%, rgba(248, 248, 247, 0.25) 48.08%, rgba(224, 255, 130, 0.25) 100%)",
                      border: "0.5px solid #D0E4E4",
                      boxShadow:
                        "0px -4px 12px 0px rgba(224, 255, 130, 0.40) inset, 0px 4px 12px 0px rgba(224, 255, 130, 0.40) inset",
                      zIndex: 0,
                    }}
                  />

                  {/* Logos Layer */}
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 z-10">
                    {/* Logo Cards */}
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#D0E4E4] bg-white flex items-center justify-center">
                      <img
                        src="/images/Ellipse 1.png"
                        alt="Google"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>

                    {/* Logo Card 2 */}
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#D0E4E4] bg-white flex items-center justify-center">
                      <img
                        src="/images/Ellipse 1 (1).png"
                        alt="Meta"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>

                    {/* Logo Card 3 */}
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#D0E4E4] bg-primary flex items-center justify-center">
                      <img
                        src="/images/Ellipse 1 (2).png"
                        alt="LinkedIn"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>

                    {/* Logo Card 4 */}
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#D0E4E4] bg-white flex items-center justify-center">
                      <img
                        src="/images/Ellipse 1 (3).png"
                        alt="Youtube"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>

                    {/* Logo Card 5 */}
                    <div className="p-3 sm:p-4 rounded-[8px] border border-[#D0E4E4] bg-white flex items-center justify-center">
                      <img
                        src="/images/Ellipse 1 (4).png"
                        alt="Tiktok"
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mt-[130px] text-[#000] font-['Onest'] text-[24px] sm:text-[28px] font-[500] leading-normal">
                  We manage your campaigns end-to-end
                </h3>
                <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                  Our elite team handles every aspect of your campaigns, from
                  strategy through to optimization. And we get them done fast.
                </p>
              </div>

              {/* Right Column - 5 columns */}
              <div className="col-span-12 lg:col-span-5 rounded-[16px] bg-[#EFF2FF] p-4 sm:p-6 lg:p-[28.5px_27px_78px_28px] mt-6 lg:mt-0">
                <h3 className="text-[#000] font-['Onest'] text-[20px] sm:text-[24px] lg:text-[28px] font-[500] leading-normal">
                  Expertise at your fingertips
                </h3>
                <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                  We're YC founders ourselves and our team has years of
                  experience working with the world's growing startups.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8">
            <div className="rounded-[16px] bg-[#EBFFF8] p-4 sm:p-6 lg:p-[28.5px_27px_17px_28px] max-w-[600px] mx-auto">
              <h2 className="text-[#000] font-['Onest'] text-[20px] sm:text-[22px] lg:text-[25px] font-[500] leading-normal">
                Marketing analytics you don't need to build
              </h2>
              <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                Get access to dashboards and alerts that uncover insights you
                need to maximise growth and ROI.
              </p>
              <div className="px-2 sm:px-4 lg:px-[110px]">
                <img
                  src="/images/home-analytics.DVfEhL-X 1.png"
                  alt="Analytics Dashboard"
                  className="w-full mt-3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text_black_remote text-center font-normal text-[18px] uppercase font-['Onest'] leading-normal rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Grow your Audience
          </h2>
        </div>
        <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 lg:col-span-5">
              <h3 className="text-black_remote font-['Onest'] text-[32px] sm:text-[42px] lg:text-[54px] font-[500] leading-[40px] sm:leading-[50px] lg:leading-[60px]">
                Powerful Platform Marketing Success
              </h3>
            </div>
            <div className="col-span-1 hidden lg:block"></div>
            <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0">
              <p className="text-[#727986] font-['Onest'] text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[24px] sm:leading-[26px]">
                Discover how our tech-driven platform delivers fast, scalable
                marketing solutions. Discover how our tech-driven platform
                delivers fast, scalable marketing solutions.
              </p>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-4 items-stretch">
            <div className="col-span-1 sm:col-span-1 lg:col-span-4">
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#A9E000] h-full">
                <img src="/images/Frame (16).svg" alt="" />
                <h3 className="mt-6 font-medium text-[22px]">
                  Content Marketing
                </h3>
                <ul>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Content Strategy Development
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Editorial Calendar Planning
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Blog post writing & optimization
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Lead magnet creation
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Content Performance analysis
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-4">
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#A9E000] h-full">
                <img src="/images/Frame (16).svg" alt="" />
                <h3 className="mt-6 font-medium text-[22px]">
                  Social & Community
                </h3>
                <ul>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Social media strategy
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Community Management
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Engagement campaigns
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Analytics & growth reporting
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Content creation & curation
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1 lg:col-span-4">
              <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#A9E000] h-full">
                <img src="/images/Frame (16).svg" alt="" />
                <h3 className="mt-6 font-medium text-[22px]">Email & SEO</h3>
                <ul>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      SEO Keyword Research
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      On-page optimization
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Newsletter strategy & setup
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Email sequence creation
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mt-[16px]">
                    <img src="/images/fi_190411.svg" alt="" />
                    <p className="text-[#53565A] text-[14px]">
                      Open & click-through optimization
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {services.map((service) => (
              <div
                key={service.title}
                onClick={() => handleServiceClick(service)}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
