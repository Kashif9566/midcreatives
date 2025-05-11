import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  BarChart,
  TrendingUp,
  Users,
  CheckCircle,
  Target,
} from "lucide-react";
import Footer from "../Footer";
import AnimatedButton from "../AnimatedButton";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  approach: string[];
  implementation: {
    title: string;
    description: string;
    icon: React.ComponentType;
  }[];
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    image: string;
  };
  logo: string;
  image: string;
  timeline: string;
  nextSteps?: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  juntoWealth: {
    id: "techcorp",
    client: "Junto Wealth",
    industry: "Financial Services",
    service: "Video Marketing",
    challenge:
      "Junto Wealth is a modern financial advisory firm focused on serving founders and business owners with long-term wealth-building strategies. They needed a way to build trust at scale, elevate their brand presence, and attract high-quality leads organically through content. Junto had a solid service offering but lacked consistent content that positioned them as a trustworthy authority. Cold outreach had limited returns, and they needed a better way to warm up leads and nurture relationships over time — especially in the high-trust world of financial planning.",
    solution:
      "We partnered with Junto to create a premium video series, branded and produced to align with their expertise. From ideation to final post-production, our team handled everything — including scripting, editing, distribution planning, and repurposing clips for multi-platform use.",
    approach: [
      "Collaborated with the founders to map a content arc tailored to their B2B audience's questions and objections",
      "Handled scripting, video shoots, motion graphics, editing, and studio-grade final cuts",
      "Distributed content across LinkedIn, YouTube, email newsletters, and website embeds",
      "Embedded calls to action within each episode and created custom landing pages to capture interest",
    ],
    implementation: [
      {
        title: "Series Development",
        description:
          "Produced a 6-part branded video series titled 'Money Moves That Matter'",
        icon: CheckCircle,
      },
      {
        title: "Content Repurposing",
        description: "Repurposed 25+ micro-clips for LinkedIn + newsletter",
        icon: Users,
      },
      {
        title: "Lead Generation",
        description:
          "Created custom lead magnet opt-ins tied to the content topics",
        icon: Target,
      },
    ],
    results: [
      {
        metric: "Inbound Leads",
        value: "+40%",
        icon: TrendingUp,
        description: "Increase in inbound leads within 60 days",
      },
      {
        metric: "Client Accounts",
        value: "Multiple",
        icon: Users,
        description:
          "Closed multiple client accounts directly tied to the series launch",
      },
      {
        metric: "Content Assets",
        value: "6 Episodes",
        icon: BarChart,
        description:
          "Produced a complete branded video series for long-term use",
      },
      {
        metric: "Micro Content",
        value: "25+",
        icon: Target,
        description: "Repurposed clips for multi-platform distribution",
      },
    ],
    testimonial: {
      quote:
        "The video series has transformed our ability to build trust with potential clients. The quality of conversations we're having has improved significantly, and we're seeing more qualified leads come through organically.",
      author: "Sarah Johnson",
      position: "Marketing Director, Junto Wealth",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "60 days",
    nextSteps: [
      "Expand video series to cover additional financial topics",
      "Develop advanced analytics tracking for video performance",
      "Create additional lead magnets based on video content",
    ],
  },
  manji: {
    id: "manji",
    client: "Manji TV",
    industry: "Automotive",
    service: "YouTube Content",
    challenge:
      "Manji TV is an automotive lifestyle and performance brand based in the U.S., focused on building a loyal online community through engaging, high-quality video content. While they had a unique brand voice and audience potential, they lacked a system to grow on YouTube consistently and strategically. Manji had ambition but no framework. Their content was inconsistent, lacked optimization, and wasn't gaining traction. They needed a team that could handle end-to-end content operations — from idea to upload — and help them scale visibility without sacrificing quality or authenticity.",
    solution:
      "We partnered with Manji to build a content engine tailored for YouTube. From content ideation and video strategy to editing and publishing — we became their content marketing arm, focused on helping them build an engaged audience and grow viewership organically.",
    approach: [
      "We started with a competitor and audience deep dive, then mapped a 3-month content calendar focused on trending topics, search volume, and Manji's brand strengths",
      "Generated hooks, episode themes, and outlines that matched YouTube best practices and automotive viewer behavior",
      "Handled editing, cuts, transitions, B-roll sourcing, and optimized thumbnails + titles for performance",
      "Optimized metadata, tags, and upload timing to maximize reach and discoverability",
    ],
    implementation: [
      {
        title: "Content Production",
        description: "40+ long-form videos produced in 4 months",
        icon: CheckCircle,
      },
      {
        title: "Content Repurposing",
        description: "90+ YouTube Shorts repurposed from pillar content",
        icon: Users,
      },
      {
        title: "Channel Optimization",
        description: "SEO titles, thumbnails, and channel optimization",
        icon: Target,
      },
    ],
    results: [
      {
        metric: "Total Views",
        value: "+300%",
        icon: TrendingUp,
        description: "Increase in total views",
      },
      {
        metric: "Watch Time",
        value: "4x",
        icon: Users,
        description: "Increase in average watch time",
      },
      {
        metric: "Subscribers",
        value: "2x",
        icon: BarChart,
        description: "Growth in YouTube subscribers in under 90 days",
      },
      {
        metric: "SEO Rankings",
        value: "Top Results",
        icon: Target,
        description: "Ranked in top results for several niche auto topics",
      },
    ],
    testimonial: {
      quote:
        "The team's expertise in YouTube content strategy and production has transformed our channel. We've seen incredible growth in both views and engagement, and our community is growing stronger every day.",
      author: "Michael Chen",
      position: "CEO, Manji TV",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "4 months",
    nextSteps: [
      "Expand content strategy to cover more automotive niches",
      "Develop advanced analytics tracking for video performance",
      "Create additional content formats for different platforms",
    ],
  },
  ggden: {
    id: "ggden",
    client: "GGDEN",
    industry: "Gaming & Fintech",
    service: "Full-Stack Marketing",
    challenge:
      "GGDEN is a fast-growing gaming and fintech startup based in Pakistan, focused on enabling local YouTube streamers to monetize their channels through a frictionless payment gateway. While their product solved a clear market gap, they needed a full-stack marketing partner to accelerate user acquisition and brand awareness. As an early-stage startup, GGDEN lacked internal marketing capacity. They needed everything from brand-aligned ad creatives and campaign strategy to YouTube content production and outreach to the creator community — but without building a full team or hiring multiple freelancers.",
    solution:
      "We became GGDEN's external growth team — responsible for creating all performance and brand marketing content, managing their Meta ad campaigns, and running a targeted outreach effort to onboard creators in their target market.",
    approach: [
      "Designed a repeatable format for educational + product-led videos",
      "Produced static + video ad creatives tailored for Meta placements",
      "Setup and ran Meta campaigns targeting Pakistan's gaming and creator segments",
      "Identified 50+ relevant micro YouTubers and created outreach sequences",
    ],
    implementation: [
      {
        title: "Content Production",
        description: "15+ product-focused YouTube videos created",
        icon: CheckCircle,
      },
      {
        title: "Ad Creative",
        description: "25+ ad creatives shipped across Meta & YouTube",
        icon: Users,
      },
      {
        title: "Creator Partnerships",
        description: "20+ creator partnerships activated within 2 months",
        icon: Target,
      },
    ],
    results: [
      {
        metric: "Paid Signups",
        value: "3.2x",
        icon: TrendingUp,
        description: "Increase in paid creator signups",
      },
      {
        metric: "Video Views",
        value: "2.7x",
        icon: Users,
        description: "Boost in video views after launch",
      },
      {
        metric: "CAC Reduction",
        value: "-38%",
        icon: BarChart,
        description:
          "Lowered customer acquisition cost through tighter targeting",
      },
      {
        metric: "Creator Partnerships",
        value: "20+",
        icon: Target,
        description: "Creators onboarded through outreach",
      },
    ],
    testimonial: {
      quote:
        "The team's full-stack approach to marketing has been instrumental in our growth. From content creation to paid campaigns and creator partnerships, they've helped us scale efficiently and effectively.",
      author: "David Rodriguez",
      position: "CEO, GGDEN",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "2 months",
    nextSteps: [
      "Expand creator network to more regions",
      "Develop advanced analytics tracking",
      "Scale successful ad campaigns",
    ],
  },
  pizzahut: {
    id: "pizzahut",
    client: "Pizza Hut UK",
    industry: "Food & Beverage",
    service: "Local Campaigns",
    challenge:
      "Pizza Hut is one of the world's most recognized restaurant chains. In the UK, individual franchise locations face the challenge of driving traffic and orders — both online and offline — in a highly competitive food delivery landscape. With limited internal digital marketing support, they needed campaign specialists who understood local dynamics and could execute fast. Pizza Hut UK franchisees were struggling to make the most of their Google Ads budgets. They needed smarter regional targeting, a way to drive both online orders and in-store visits, and transparent reporting and hands-on optimization without large agency overhead.",
    solution:
      "We took full ownership of their local paid media operations across select UK regions. From campaign setup to ongoing optimization, we designed hyper-targeted Google Ads campaigns that connected nearby customers to store offers and ordering platforms — driving more volume across all channels.",
    approach: [
      "Created hyperlocal campaigns around store locations with radius targeting and ZIP/postcode segmentation",
      "Built custom campaign extensions and integrated conversion tracking",
      "Paused underperforming ad groups and shifted budget to top performers",
      "Provided weekly insights to regional marketing leads",
    ],
    implementation: [
      {
        title: "Regional Launch",
        description: "6 regions launched across the UK",
        icon: CheckCircle,
      },
      {
        title: "Tracking Setup",
        description: "Full conversion tracking setup with Google Tag Manager",
        icon: Users,
      },
      {
        title: "Performance Tracking",
        description: "Daily budget pacing and location-specific ROAS tracking",
        icon: Target,
      },
    ],
    results: [
      {
        metric: "Online Orders",
        value: "+45%",
        icon: TrendingUp,
        description: "Increase in online orders within 6 weeks",
      },
      {
        metric: "ROAS",
        value: "2.1x",
        icon: Users,
        description: "Improvement in return on ad spend",
      },
      {
        metric: "Foot Traffic",
        value: "Increased",
        icon: BarChart,
        description: "Higher in-store visits via optimized targeting",
      },
      {
        metric: "Transparency",
        value: "100%",
        icon: Target,
        description:
          "More transparent performance insights for franchise owners",
      },
    ],
    testimonial: {
      quote:
        "The team's local expertise and hands-on approach have transformed our digital marketing. We've seen significant growth in both online orders and foot traffic, with clear visibility into performance.",
      author: "Sarah Johnson",
      position: "Marketing Director, Pizza Hut UK",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "6 weeks",
    nextSteps: [
      "Expand to additional UK regions",
      "Implement advanced location-based targeting",
      "Develop franchise-specific reporting dashboards",
    ],
  },
  drinkmyx: {
    id: "drinkmyx",
    client: "Drink MYX",
    industry: "eCommerce",
    service: "Meta Ads",
    challenge:
      "Drink MYX is a vibrant, fast-growing beverage brand based in the UAE, known for its unique product positioning and premium packaging. While the brand had growing demand, it struggled to turn social media traction into real sales due to inefficient advertising practices. When we stepped in, Drink MYX had already spent over $20,000 boosting posts on Instagram — without a structured campaign, conversion tracking, or clear results. Their funnel wasn't optimized, events weren't tracked, and ads weren't aligned with customer behavior. They needed a serious performance reset.",
    solution:
      "We rebuilt their Meta ads system from scratch — installing proper conversion tracking, designing a full-funnel paid strategy, and optimizing creative around actual purchase behavior. Our focus: spend smarter, measure everything, and drive sales with real attribution.",
    approach: [
      "Created a 3-tier campaign structure: awareness → engagement → conversion",
      "Installed Meta Pixel, server-side events, and custom purchase tracking",
      "Replaced boosted posts with high-performing ad sets and custom audiences",
      "A/B tested visuals, hooks, and landing page flow",
    ],
    implementation: [
      {
        title: "Tracking Setup",
        description: "Meta Pixel + CAPI fully implemented",
        icon: CheckCircle,
      },
      {
        title: "Creative Production",
        description: "20+ custom creatives produced and tested",
        icon: Users,
      },
      {
        title: "Funnel Optimization",
        description: "Built post-click funnels with landing page optimization",
        icon: Target,
      },
    ],
    results: [
      {
        metric: "Ad Spend",
        value: "-60%",
        icon: TrendingUp,
        description: "Reduced wasted ad spend in first 30 days",
      },
      {
        metric: "ROAS",
        value: "2x",
        icon: Users,
        description: "Improved return on ad spend with structured campaigns",
      },
      {
        metric: "Conversion Rate",
        value: "Increased",
        icon: BarChart,
        description: "Higher add-to-cart and checkout completion rates",
      },
      {
        metric: "Visibility",
        value: "100%",
        icon: Target,
        description: "Real campaign performance visibility for internal team",
      },
    ],
    testimonial: {
      quote:
        "The team's expertise in Meta advertising has completely transformed our approach to digital marketing. We're now spending smarter, tracking everything, and seeing real results in our sales.",
      author: "Michael Chen",
      position: "CEO, Drink MYX",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "30 days",
    nextSteps: [
      "Scale successful ad campaigns",
      "Implement advanced retargeting strategies",
      "Develop additional creative variations",
    ],
  },
};

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Case Study Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            The case study you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/case-studies"
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div 
          className="text-center rounded-[16px] pt-[50px] pb-[90px] relative"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/images/Hero Section - 5.png') lightgray 50% / cover no-repeat`
          }}
        >
          <Link to="/case-studies" className="inline-flex items-center text-sm">
            <ArrowLeft className="mr-2 h-5 w-5 text-white hover:text-primary" />
            <p className="text-white hover:text-primary">Back to Case Studies</p>
          </Link>
          <h1 className="mt-[50px] text-5xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {caseStudy.client.split(' ').length > 1 ? (
              <>
                {caseStudy.client.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-primary">
                  {caseStudy.client.split(' ').pop()}
                </span>
              </>
            ) : (
              <span className="text-white">{caseStudy.client}</span>
            )}
          </h1>
        </div>
      </div>
      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col">
          <h2 className="mt-6 text-black_remote font-onest text-[54px] font-semibold leading-[60px]">
            Company Overview
          </h2>

          <p className="text-[#727986] mt-6 font-onest text-[18px] font-normal leading-[28px]">
            {caseStudy.challenge}
          </p>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <div className="flex items-center gap-4">
                <img
                  src="/images/Frame (14).svg"
                  className="bg-primary p-3 rounded-lg"
                  alt=""
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  The Challenge
                </h2>
              </div>
              <div className="mt-6 prose prose-indigo text-[18px] prose-lg text-[#727986]">
                <p>{caseStudy.challenge}</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="flex items-center gap-4">
                <img
                  src="/images/Frame (15).svg"
                  className="bg-primary p-3 rounded-lg"
                  alt=""
                />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Solution
                </h2>
              </div>
              <div className="mt-6 prose prose-indigo text-[18px] prose-lg text-[#727986]">
                <p>{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategy & Execution */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-5xl font-medium text-black_remote text-center mb-4">
          Strategy & Execution
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl text-center text-black_remote mb-8">
            Our Approach
          </h3>
          <div className="flex justify-center">
            <ul className="space-y-4">
              {caseStudy.approach.map((step, index) => (
                <li key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-black">
                      {index + 1}
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-gray-600 border border-[#D6D6D6] rounded-[8px] p-2">
                    {step}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-5xl font-medium text-black_remote mb-6">
            Implementation
          </h3>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {caseStudy.implementation.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-medium text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-[16px] text-[#727986]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results & Key Metrics */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-medium text-black_remote text-center mb-12">
            Result and key{" "}
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
              metrics
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="bg-white text-center">
                <p className="mt-4 text-5xl font-medium text-black_remote">
                  {result.value}
                </p>
                <p className="mt-2 text-[16px] text-black_remote">
                  {result.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-6">
          <div className="bg-primary rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center px-6 py-16 sm:px-8 lg:px-8">
              <h2 className="text-black_remote font-onest text-[36px] font-semibold leading-[48px]">
                <span className="block">
                  Your Business Could Be Our Next Success Story
                </span>
              </h2>

              <p className="mt-4 text-[#000] font-onest text-[22px] font-normal leading-[32px]">
                Join 100+ businesses that scaled with our full-service marketing
                solutions.
              </p>

              <Link
                to="/register"
                className="mt-8 inline-flex items-center px-8 py-3 rounded-[8px] shadow-sm text-white font-onest text-[16px] font-medium leading-[26px] bg-black_remote transition-all"
              >
                <AnimatedButton>
                Book a Free Consultation
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="lg:col-span-1 bg-indigo-50 p-12 flex items-center justify-center">
              <img
                className="h-32 w-32 rounded-full xl:h-48 xl:w-48 object-cover"
                src={caseStudy.testimonial.image}
                alt={caseStudy.testimonial.author}
              />
            </div>
            <div className="lg:col-span-1 p-12">
              <svg
                className="h-12 w-12 text-indigo-400 opacity-25"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="mt-6 text-xl text-gray-900 italic">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="text-base font-medium text-gray-900">
                  {caseStudy.testimonial.author}
                </p>
                <p className="text-base text-gray-500">
                  {caseStudy.testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Next Steps */}
      {/* {caseStudy.nextSteps && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              Next Steps
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-600 mb-6">
                Building on the success of this campaign, we've identified the
                following opportunities for continued growth:
              </p>
              <ul className="space-y-4">
                {caseStudy.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="ml-3 text-lg text-gray-600">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )} */}

      {/* Call to Action */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block">Want Similar Results?</span>
                <span className="block text-indigo-200">
                  Let's Talk About Your Business.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                Schedule a free consultation to see how we can help you achieve
                your marketing goals.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Related Case Studies */}
      {/* <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Related Case Studies
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {Object.values(caseStudies)
              .filter((study) => study.id !== caseStudy.id)
              .slice(0, 2)
              .map((study) => (
                <div
                  key={study.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-48 object-cover"
                    />
                    <img
                      src={study.logo}
                      alt={`${study.client} logo`}
                      className="absolute bottom-0 left-0 h-16 bg-white p-2 m-4 rounded shadow"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {study.client}
                        </h3>
                        <div className="flex space-x-2 mt-1">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {study.industry}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            {study.service}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                      >
                        Read Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
