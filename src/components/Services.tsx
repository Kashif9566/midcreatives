import React from "react";
import {
  Search,
  Target,
  Share2,
  Mail,
  PenTool,
  Camera,
} from "lucide-react";
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
    <div className="bg-[#FFF] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-black text-center font-semibold text-[54px] leading-[60px] font-[Onest]">
            Your ready-made growth engine
          </h2>

          <p className="text-[#727986] mt-5 text-center font-normal text-[18px] leading-[26px] font-[Onest]">
            Building a full-stack marketing function takes years. Kaya delivers
            a seasoned team
            <br /> and marketing analytics from the get-go, saving you
            significant time and money.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-black text-center font-semibold text-[18px] uppercase font-['Onest'] leading-normal rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
            Grow your business
          </h2>
        </div>
        <div>
          <div className="max-w-7xl mx-auto mt-[40px]">
            <div className="grid grid-cols-12 gap-4 sm:gap-8">
              {/* Left Column - 7 columns */}
              <div className="col-span-12 lg:col-span-7 rounded-[16px] bg-[#FFF2FA] p-6 sm:p-[28.5px_27px_78px_28px]">
                <h3 className="text-[#000] font-['Onest'] text-[24px] sm:text-[28px] font-semibold leading-normal">
                  We manage your campaigns end-to-end
                </h3>
                <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                  Our elite team handles every aspect of your campaigns, from
                  strategy through to optimization. And we get them done fast.
                </p>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 sm:mt-[70px]">
                  {/* Logo Card 1 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1.png"
                      alt="Google"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Google Ads
                    </span>
                  </div>

                  {/* Logo Card 2 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (1).png"
                      alt="Meta"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Meta Ads
                    </span>
                  </div>

                  {/* Logo Card 3 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (2).png"
                      alt="LinkedIn"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      LinkedIn Ads
                    </span>
                  </div>

                  {/* Logo Card 4 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (3).png"
                      alt="Youtube"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Youtube Ads
                    </span>
                  </div>

                  {/* Logo Card 5 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (4).png"
                      alt="Tiktok"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Tiktok Ads
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - 5 columns */}
              <div className="col-span-12 lg:col-span-5 rounded-[16px] bg-[#EFF2FF] p-6 sm:p-[28.5px_27px_78px_28px]">
                <h3 className="text-[#000] font-['Onest'] text-[24px] sm:text-[28px] font-semibold leading-normal">
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
            <div className="rounded-[16px] bg-[#EBFFF8] p-6 sm:p-[28.5px_27px_17px_28px] max-w-[600px] mx-auto">
              <h2 className="text-[#000] font-['Onest'] text-[22px] sm:text-[25px] font-semibold leading-normal">
                Marketing analytics you don't need to build
              </h2>
              <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                Get access to dashboards and alerts that uncover insights you
                need to maximise growth and ROI.
              </p>
              <div className="px-4 sm:px-[110px]">
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
          <h2 className="text-black text-center font-semibold text-[18px] uppercase font-['Onest'] leading-normal rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
          Grow your Audience
          </h2>
        </div>
        <div>
          <div className="max-w-7xl mx-auto mt-[40px]">
            <div className="grid grid-cols-12 gap-4 sm:gap-8">
              {/* Left Column - 7 columns */}
              <div className="col-span-12 lg:col-span-7 rounded-[16px] bg-[#FFF2FA] p-6 sm:p-[28.5px_27px_78px_28px]">
                <h3 className="text-[#000] font-['Onest'] text-[24px] sm:text-[28px] font-semibold leading-normal">
                  We manage your campaigns end-to-end
                </h3>
                <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                  Our elite team handles every aspect of your campaigns, from
                  strategy through to optimization. And we get them done fast.
                </p>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 sm:mt-[70px]">
                  {/* Logo Card 1 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1.png"
                      alt="Google"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Google Ads
                    </span>
                  </div>

                  {/* Logo Card 2 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (1).png"
                      alt="Meta"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Meta Ads
                    </span>
                  </div>

                  {/* Logo Card 3 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (2).png"
                      alt="LinkedIn"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      LinkedIn Ads
                    </span>
                  </div>

                  {/* Logo Card 4 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (3).png"
                      alt="Youtube"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Youtube Ads
                    </span>
                  </div>

                  {/* Logo Card 5 */}
                  <div className="rounded-[12px] bg-white shadow-[0px_6px_12px_0px_rgba(216,216,216,0.40)] p-[14px_25px_14px_26px] flex flex-col items-center">
                    <img
                      src="/images/Ellipse 1 (4).png"
                      alt="Tiktok"
                      className="h-8 w-auto"
                    />
                    <span className="text-[#000] text-[10px] font-normal leading-normal mt-2">
                      Tiktok Ads
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - 5 columns */}
              <div className="col-span-12 lg:col-span-5 rounded-[16px] bg-[#EFF2FF] p-6 sm:p-[28.5px_27px_78px_28px]">
                <h3 className="text-[#000] font-['Onest'] text-[24px] sm:text-[28px] font-semibold leading-normal">
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
            <div className="rounded-[16px] bg-[#EBFFF8] p-6 sm:p-[28.5px_27px_17px_28px] max-w-[600px] mx-auto">
              <h2 className="text-[#000] font-['Onest'] text-[22px] sm:text-[25px] font-semibold leading-normal">
                Marketing analytics you don't need to build
              </h2>
              <p className="text-[#000] font-['Onest'] text-[14px] sm:text-[16px] font-normal leading-[22px] mt-4">
                Get access to dashboards and alerts that uncover insights you
                need to maximise growth and ROI.
              </p>
              <div className="px-4 sm:px-[110px]">
                <img
                  src="/images/home-analytics.DVfEhL-X 1.png"
                  alt="Analytics Dashboard"
                  className="w-full mt-3"
                />
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
