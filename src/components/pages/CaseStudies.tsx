import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  BarChart,
  TrendingUp,
  Users,
  Search,
} from "lucide-react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton";

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ComponentType;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    image?: string;
  };
  logo: string;
  image: string;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "juntoWealth",
    client: "Junto Wealth",
    industry: "Financial Services",
    service: "Video Marketing",
    challenge: "Junto Wealth needed a scalable way to build trust and drive inbound leads for its financial advisory services. They lacked consistent content that positioned them as a trustworthy authority in the high-trust world of financial planning.",
    solution: "We partnered with Junto to create a premium video series, branded and produced to align with their expertise, including scripting, editing, and multi-platform distribution.",
    results: [
      { metric: "Inbound Leads", value: "+40%", icon: TrendingUp },
      { metric: "Video Series", value: "6 Episodes", icon: Users },
      { metric: "Micro Content", value: "25+", icon: BarChart }
    ],
    testimonial: {
      quote: "The video series has transformed our ability to build trust with potential clients. The quality of conversations we're having has improved significantly, and we're seeing more qualified leads come through organically.",
      author: "Sarah Johnson",
      position: "Marketing Director, Junto Wealth",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    featured: true
  },
  {
    id: "manji",
    client: "Manji TV",
    industry: "Automotive",
    service: "YouTube Content",
    challenge:
      "Manji wanted to grow their presence on YouTube but lacked a clear strategy and consistent production workflow.",
    solution:
      "We partnered with Manji to build a content engine tailored for YouTube, handling everything from content ideation and video strategy to editing and publishing.",
    results: [
      { metric: "Videos Produced", value: "40+", icon: TrendingUp },
      { metric: "YouTube Views", value: "+300%", icon: Users },
      { metric: "Watch Time", value: "4x", icon: BarChart }
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
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    featured: true,
  },
  {
    id: "ggden",
    client: "GGDEN",
    industry: "Gaming & Fintech",
    service: "Full-Stack Marketing",
    challenge:
      "GGDEN needed full-stack marketing support to drive awareness, acquire users, and scale in a niche market of local payment solutions for YouTube streamers.",
    solution:
      "We became GGDEN's external growth team — responsible for creating all performance and brand marketing content, managing their Meta ad campaigns, and running a targeted outreach effort to onboard creators.",
    results: [
      { metric: "Ad Creatives", value: "25+", icon: TrendingUp },
      { metric: "Paid Signups", value: "3.2x", icon: Users },
      { metric: "Creator Partners", value: "20+", icon: BarChart },
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
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "pizzahut",
    client: "Pizza Hut UK",
    industry: "Food & Beverage",
    service: "Local Campaigns",
    challenge:
      "Pizza Hut's local UK franchises needed a way to increase both online orders and foot traffic in a competitive delivery market.",
    solution:
      "We took full ownership of their local paid media operations across select UK regions, designing hyper-targeted Google Ads campaigns that connected nearby customers to store offers and ordering platforms.",
    results: [
      { metric: "Online Orders", value: "+45%", icon: TrendingUp },
      { metric: "ROAS", value: "2.1x", icon: Users },
      { metric: "Foot Traffic", value: "Increased", icon: BarChart },
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
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: "drinkmyx",
    client: "Drink MYX",
    industry: "eCommerce",
    service: "Meta Ads",
    challenge:
      "Drink MYX was burning ad spend on boosted posts without a clear funnel, tracking, or real results.",
    solution:
      "We rebuilt their Meta ads system from scratch — installing proper conversion tracking, designing a full-funnel paid strategy, and optimizing creative around actual purchase behavior.",
    results: [
      { metric: "Ad Spend", value: "-60%", icon: TrendingUp },
      { metric: "ROAS", value: "2x", icon: Users },
      { metric: "Conversion Rate", value: "Increased", icon: BarChart },
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
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
  },
];

const industries = [
  "All Industries",
  "SaaS",
  "E-commerce",
  "Finance",
  "Healthcare",
  "Retail",
  "Education",
];
const services = [
  "All Services",
  "SEO",
  "PPC",
  "Social Media",
  "Content Marketing",
  "Email Marketing",
];
const sortOptions = ["Most Recent", "Highest ROI", "Most Lead Growth"];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedService, setSelectedService] = useState("All Services");
  const [sortBy, setSortBy] = useState("Most Recent");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudies, setFilteredStudies] =
    useState<CaseStudy[]>(caseStudies);

  useEffect(() => {
    let filtered = caseStudies;

    // Filter by industry
    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter(
        (study) => study.industry === selectedIndustry
      );
    }

    // Filter by service
    if (selectedService !== "All Services") {
      filtered = filtered.filter((study) => study.service === selectedService);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (study) =>
          study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
          study.solution.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort results
    if (sortBy === "Highest ROI") {
      filtered = [...filtered].sort((a, b) => {
        const aValue = parseInt(
          a.results[2]?.value.replace(/[^0-9-]/g, "") || "0"
        );
        const bValue = parseInt(
          b.results[2]?.value.replace(/[^0-9-]/g, "") || "0"
        );
        return bValue - aValue;
      });
    } else if (sortBy === "Most Lead Growth") {
      filtered = [...filtered].sort((a, b) => {
        const aValue = parseInt(
          a.results[1]?.value.replace(/[^0-9-]/g, "") || "0"
        );
        const bValue = parseInt(
          b.results[1]?.value.replace(/[^0-9-]/g, "") || "0"
        );
        return bValue - aValue;
      });
    }

    setFilteredStudies(filtered);
  }, [selectedIndustry, selectedService, sortBy, searchTerm]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-black_remote font-onest text-[54px] font-semibold leading-[60px]">
              How Our Clients Achieve{" "}
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
                Real Growth
              </span>
            </h1>

            <p className="mt-8 text-[#727986] text-center font-onest text-[22px] font-normal leading-[32px]">
              See how businesses across industries have scaled with our
              data-driven marketing solutions.
            </p>

            <div className="mt-8">
              <Link
                to="/register"
                className="inline-flex items-center px-[32px] py-[10px] rounded-[8px] bg-[#1F2223] text-white font-onest text-[16px] font-medium leading-[26px] transition-all shadow-lg hover:shadow-xl"
              >
                <AnimatedButton>
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="pt-16 bg-[#FBFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-black_remote font-onest text-[54px] font-semibold leading-[60px]">
                Featured Success Stories
              </h2>
            </div>
          </div>

          {/* Search and Filters */}
          {/* <div className="mt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <label
                  htmlFor="search"
                  className="block text-sm font-medium text-gray-700"
                >
                  Search
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Search case studies"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="industry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="sort"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sort By
                </label>
                <select
                  id="sort"
                  name="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl bg-[#FBFAFA] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredStudies.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white p-4 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-48 rounded-lg object-cover"
                  />
                  {/* <img
                    src={study.logo}
                    alt={`${study.client} logo`}
                    className="absolute bottom-0 left-0 h-16 bg-white p-2 m-4 rounded shadow"
                  /> */}
                  {study.featured && (
                    <div className="absolute top-0 right-0 bg-primary text-black_remote text-xs font-semibold px-3 py-1 m-4 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-black_remote">
                        {study.client}
                      </h3>
                      {/* <div className="flex space-x-2 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {study.industry}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {study.service}
                        </span>
                      </div> */}
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500 line-clamp-3">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    {study.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-start gap-3"
                      >
                        <result.icon className="h-8 w-8 bg-primary rounded-lg p-2" />

                        <p className="text-2xl font-bold text-black_remote">
                          {result.value}
                        </p>
                        <p className="text-md text-gray-500">{result.metric}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-7 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black_remote transition-colors"
                    >
                      <AnimatedButton>
                      Read Full Case Study
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No case studies found
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>

      {/* Featured Testimonial */}
      {/* <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <div className="relative lg:flex lg:items-center">
              <div className="hidden lg:block lg:flex-shrink-0">
                <img
                  className="h-64 w-64 rounded-full xl:h-80 xl:w-80 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah Johnson"
                />
              </div>
              <div className="relative lg:ml-10">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-600 opacity-20"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 144 144"
                  aria-hidden="true"
                >
                  <path
                    strokeWidth="2"
                    d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                  />
                </svg>
                <blockquote className="relative">
                  <div className="text-2xl leading-9 font-medium text-white">
                    <p>
                      "The MaaS team transformed our digital presence. Their
                      data-driven approach to SEO delivered results beyond our
                      expectations, and their transparent reporting made it easy
                      to see the ROI."
                    </p>
                  </div>
                  <footer className="mt-8">
                    <div className="flex items-center">
                      <div className="lg:hidden flex-shrink-0">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="Sarah Johnson"
                        />
                      </div>
                      <div className="ml-4 lg:ml-0">
                        <div className="text-base font-medium text-white">
                          Sarah Johnson
                        </div>
                        <div className="text-base font-medium text-indigo-200">
                          Marketing Director, TechCorp Solutions
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="bg-white">
  <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 lg:px-6">
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


      <Footer />
    </div>
  );
}
