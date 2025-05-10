import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BarChart,
  TrendingUp,
  Users,
  Calendar,
  CheckCircle,
  Target,
} from "lucide-react";
import Footer from "../Footer";

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
  techcorp: {
    id: "techcorp",
    client: "TechCorp Solutions",
    industry: "SaaS",
    service: "SEO",
    challenge:
      "TechCorp Solutions, a growing SaaS company specializing in project management software, was struggling to generate qualified leads through organic search. Despite having a quality product, their website traffic was stagnant, and they were overly dependent on paid advertising, resulting in high customer acquisition costs. They needed a comprehensive SEO strategy to increase their organic visibility, attract more qualified leads, and reduce their reliance on paid channels.",
    solution:
      "We implemented a comprehensive SEO strategy with technical optimization, content marketing, and backlink acquisition to drive organic traffic and targeted paid campaigns.",
    approach: [
      "Conducted a thorough technical SEO audit to identify and fix on-site issues",
      "Performed extensive keyword research to identify high-value, low-competition keywords",
      "Developed a content strategy targeting key customer pain points and search intent",
      "Implemented on-page optimization for all key landing pages",
      "Created a backlink acquisition strategy focusing on industry publications",
      "Set up advanced analytics tracking to measure performance and ROI",
    ],
    implementation: [
      {
        title: "Technical SEO Overhaul",
        description:
          "Fixed site architecture, improved page speed, implemented schema markup, and resolved mobile usability issues.",
        icon: Target,
      },
      {
        title: "Content Strategy",
        description:
          "Created 24 high-quality blog posts, 4 comprehensive guides, and optimized 15 key landing pages.",
        icon: CheckCircle,
      },
      {
        title: "Link Building Campaign",
        description:
          "Secured 45+ high-quality backlinks from industry publications and relevant websites.",
        icon: TrendingUp,
      },
    ],
    results: [
      {
        metric: "Organic Traffic",
        value: "+312%",
        icon: TrendingUp,
        description: "Increase in monthly organic traffic over 6 months",
      },
      {
        metric: "Lead Generation",
        value: "+156%",
        icon: Users,
        description: "Growth in qualified leads from organic search",
      },
      {
        metric: "Cost Per Acquisition",
        value: "-45%",
        icon: BarChart,
        description: "Reduction in overall customer acquisition costs",
      },
      {
        metric: "Keyword Rankings",
        value: "78",
        icon: Target,
        description: "Top 10 positions for high-value keywords",
      },
    ],
    testimonial: {
      quote:
        "The MaaS team transformed our digital presence. Their data-driven approach to SEO delivered results beyond our expectations, and their transparent reporting made it easy to see the ROI. We've not only increased our organic traffic significantly but also improved the quality of leads coming through our website.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "6 months",
    nextSteps: [
      "Expand content strategy to target additional keyword clusters",
      "Implement advanced conversion rate optimization",
      "Develop international SEO strategy for global expansion",
    ],
  },
  growthwave: {
    id: "growthwave",
    client: "GrowthWave",
    industry: "E-commerce",
    service: "Social Media",
    challenge:
      "GrowthWave, an e-commerce brand selling sustainable home products, was struggling with low conversion rates and an inconsistent social media presence. Despite having quality products, they faced poor brand recognition, inconsistent engagement, and stagnant sales. Their previous social media efforts were ad-hoc and lacked strategic direction, resulting in minimal ROI from their social channels.",
    solution:
      "We developed a comprehensive social media strategy with consistent content calendar, community management, and targeted advertising to build brand awareness and drive conversions.",
    approach: [
      "Conducted a social media audit across all platforms to identify strengths and weaknesses",
      "Developed a brand voice guide and content pillars for consistent messaging",
      "Created a strategic content calendar with diverse content types",
      "Implemented a community management strategy to increase engagement",
      "Designed targeted social media advertising campaigns",
      "Set up conversion tracking and attribution modeling",
    ],
    implementation: [
      {
        title: "Content Strategy",
        description:
          "Developed 90-day content calendar with product features, user-generated content, educational posts, and lifestyle content.",
        icon: CheckCircle,
      },
      {
        title: "Community Building",
        description:
          "Implemented proactive engagement strategy, responding to all comments and messages within 2 hours.",
        icon: Users,
      },
      {
        title: "Paid Social Campaigns",
        description:
          "Created segmented ad campaigns targeting different audience segments with tailored messaging.",
        icon: Target,
      },
    ],
    results: [
      {
        metric: "Conversion Rate",
        value: "+87%",
        icon: BarChart,
        description: "Increase in website conversion rate from social traffic",
      },
      {
        metric: "Social Engagement",
        value: "+245%",
        icon: Users,
        description: "Growth in overall engagement across all platforms",
      },
      {
        metric: "Revenue Growth",
        value: "+112%",
        icon: TrendingUp,
        description: "Increase in revenue attributed to social media channels",
      },
      {
        metric: "Follower Growth",
        value: "+168%",
        icon: Users,
        description: "Increase in social media followers across platforms",
      },
    ],
    testimonial: {
      quote:
        "Working with MaaS has been transformative for our business. Their social media strategy not only increased our engagement but directly impacted our bottom line. The team's attention to detail and data-driven approach helped us connect with our audience in a meaningful way that translated to real sales.",
      author: "Michael Chen",
      position: "CEO, GrowthWave",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=630&q=80",
    timeline: "4 months",
    nextSteps: [
      "Expand influencer marketing program",
      "Implement user-generated content strategy",
      "Develop social commerce integration",
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
     

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center bg-primary rounded-lg pt-[50px] pb-[90px]">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              <p className="text-black">Back to Case Studies</p>
            </Link>
            <h1 className="mt-[50px] text-5xl font-semibold tracking-tight text-black_remote sm:text-5xl md:text-6xl">
              {caseStudy.client}
            </h1>
            {/* <div className="mt-3 flex justify-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-800 text-white">
                {caseStudy.industry}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-800 text-white">
                {caseStudy.service}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-800 text-white">
                <Calendar className="mr-1 h-4 w-4" />
                {caseStudy.timeline}
              </span>
            </div> */}
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
                <p className="mt-2 text-[16px] text-[#727986]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results & Key Metrics */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-medium text-black_remote text-center mb-12">
          Result and key {" "}<span
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
              <div
                key={index}
                className="bg-white text-center"
              >
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
          Join 100+ businesses that scaled with our full-service marketing solutions.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center px-8 py-3 rounded-[8px] shadow-sm text-white font-onest text-[16px] font-medium leading-[26px] bg-black_remote transition-all"
        >
          Book a Free Consultation
        </a>
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
