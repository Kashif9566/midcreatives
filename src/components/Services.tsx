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
    <div className="bg-[#FFF] py-24 relative">
      {/* Gradient Background */}
      <div 
  className="hidden sm:block absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-0"
  style={{
    width: '535px',
    height: '535px',
    borderRadius: '535px',
    background: '#E0FF82',
    filter: 'blur(227px)',
    opacity: 0.7
  }}
/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base font-normal text_black_remote tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Product Marketing
          </h2>
          <h3 className="pt-5 text_black_remote text-center font-[500] text-[32px] sm:text-[42px] lg:text-[54px] leading-[40px] sm:leading-[50px] lg:leading-[60px] font-[Onest]">
          Your all-in-one marketing
          {" "}
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
              execution team
            </span>
          </h3>

          <p className="text-[#727986] mt-5 text-center font-normal text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] font-[Onest] px-4 sm:px-0">
          Runrly replaces slow hiring and scattered freelancers with an on-demand growth team — built to launch campaigns, grow your brand, and track performance from a single platform.
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
              <div className="col-span-12 lg:col-span-7 rounded-[16px] bg-[#F7F8F8] border border-[#DBFE70] px-4 sm:px-6 py-6 sm:py-7">
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
                Our team handles targeting, creatives, tracking, and optimization — so you can launch fast, grow smarter, and focus on what matters.
                </p>
              </div>

              {/* Right Column - 5 columns */}
              <div className="col-span-12 lg:col-span-5 rounded-[16px]">
                <img src="/images/Comparison Table - 4.png" alt="" className="border-t border-l border-r border-[#DBFE70] rounded-tr-[16px] rounded-tl-[16px]" />
                <div className="bg-[#F7F8F8] pt-5 pb-6 border border-t-0 border-[#DBFE70] rounded-br-[16px] rounded-bl-[16px] px-4">
                <h3 className="text-[#000] font-['Onest'] text-[24px] sm:text-[28px] font-[500] leading-normal">
                We handle the technical foundation 
                </h3>
                <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                From tracking to testing, our team sets up the infrastructure you need to measure, optimize, and grow with confidence.

                </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 sm:gap-6 mt-8">
          <div className="col-span-12 lg:col-span-7">
  <div className="relative overflow-hidden flex justify-center items-center rounded-[16px] bg-[#F7F8F899] border border-[#DBFE70] p-4 sm:p-6 lg:py-[40px] lg:px-6 w-full min-h-[340px]">
    
    {/* Center Diamond */}
    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10 hidden sm:block" style={{ width: 140, height: 140 }}>
      <div className="w-full h-full flex items-center justify-center rotate-45 rounded-3xl" style={{ background: '#E0FF82', position: 'relative', boxShadow: '0px -6px 24px 0px rgba(255, 255, 255, 0.25), 0px 6px 24px 0px #A6D90C' }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[65%] h-[65%] rounded-[8px]" style={{ boxShadow: '0px -6px 16px 0px #FCF1CE, 0px 6px 16px 0px #FCF1CE' }} />
      </div>
    </div>

    {/* Left Line and Diamond Logo */}
    <div className="absolute top-[70px] left-10 hidden md:block" style={{ width: 'calc(50% - 74px)', height: 2, background: '#D5D5D5' }} />
    <div className="absolute top-[50px] left-10 z-20 hidden md:block" style={{ width: 40, height: 40 }}>
      <div className="w-full h-full flex items-center justify-center rotate-45 bg-white border border-[#D5D5D5] rounded-md">
        <img src="/images/Ellipse 1.png" alt="Logo Left" className="w-6 h-6 object-contain -rotate-45" />
      </div>
    </div>

    {/* Right Line and Diamond Logo */}
    <div className="absolute top-[70px] left-[calc(50%+70px)] hidden md:block" style={{ width: 80, height: 2, background: '#D5D5D5' }} />
    <div className="absolute top-[50px] left-[calc(50%+150px)] z-20 hidden md:block" style={{ width: 40, height: 40 }}>
      <div className="w-full h-full flex items-center justify-center rotate-45 bg-white border border-[#D5D5D5] rounded-md">
        <img src="/images/Ellipse 1 (1).png" alt="Logo Right" className="w-6 h-6 object-contain -rotate-45" />
      </div>
    </div>

    {/* Second Right Line and Diamond Logo */}
    <div className="absolute top-[70px] left-[calc(50%+190px)] hidden md:block" style={{ width: 60, height: 2, background: '#D5D5D5' }} />
    <div className="absolute top-[50px] left-[calc(50%+260px)] z-20 hidden md:block" style={{ width: 40, height: 40 }}>
      <div className="w-full h-full flex items-center justify-center rotate-45 bg-white border border-[#D5D5D5] rounded-md">
        <img src="/images/Ellipse 1 (2).png" alt="Logo Right 2" className="w-6 h-6 object-contain -rotate-45" />
      </div>
    </div>

    {/* Connecting line between the two right diamonds */}
    <div className="absolute top-[70px] left-[calc(50%+230px)] hidden md:block" style={{ width: 30, height: 2, background: '#D5D5D5' }} />

    {/* Text Content */}
    <div className="relative z-30 flex flex-col items-start justify-start w-full pt-[120px] sm:pt-[160px] md:pt-[200px]">
      <h2 className="text-[#000] font-['Onest'] text-[18px] sm:text-[20px] lg:text-[25px] font-[500] leading-normal text-left">
      Data clarity in minutes
      </h2>
      <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4 text-left">
      Access real-time dashboards and attribution insights — built to track performance across every channel. No spreadsheets. No guesswork.
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
        <div className="mt-16">
          <h2 className="text_black_remote text-center font-normal text-[18px] uppercase font-['Onest'] leading-normal rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Grow your Audience
          </h2>
        </div>
        <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 lg:col-span-5">
              <h3 className="text-black_remote font-['Onest'] text-[32px] sm:text-[42px] lg:text-[50px] font-[500] leading-[40px] sm:leading-[50px] lg:leading-[60px]">
              Brand, Content, and community
              </h3>
            </div>
            <div className="col-span-1 hidden lg:block"></div>
            <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0">
              <p className="text-[#727986] font-['Onest'] text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[24px] sm:leading-[26px]">
              We plan, create, and publish content with speed and strategy — turning your LinkedIn, YouTube, TikTok, and Instagram into inbound growth channels.
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
