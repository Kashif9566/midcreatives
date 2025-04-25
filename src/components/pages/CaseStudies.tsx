import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart, TrendingUp, Users, Search, Filter, ChevronDown, ExternalLink } from 'lucide-react';
import Footer from '../Footer';

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
    id: 'techcorp',
    client: 'TechCorp Solutions',
    industry: 'SaaS',
    service: 'SEO',
    challenge: 'TechCorp needed to increase qualified leads while reducing their cost per acquisition. Their organic traffic was stagnant despite having quality products.',
    solution: 'We implemented a comprehensive SEO strategy with technical optimization, content marketing, and backlink acquisition to drive organic traffic and targeted paid campaigns.',
    results: [
      { metric: 'Organic Traffic', value: '+312%', icon: TrendingUp },
      { metric: 'Lead Generation', value: '+156%', icon: Users },
      { metric: 'Cost Per Acquisition', value: '-45%', icon: BarChart }
    ],
    testimonial: {
      quote: "The MaaS team transformed our digital presence. Their data-driven approach to SEO delivered results beyond our expectations, and their transparent reporting made it easy to see the ROI.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    featured: true
  },
  {
    id: 'growthwave',
    client: 'GrowthWave',
    industry: 'E-commerce',
    service: 'Social Media',
    challenge: 'GrowthWave struggled with low conversion rates and inconsistent social media presence, leading to poor brand recognition and stagnant sales.',
    solution: 'We developed a social media content calendar and optimized their conversion funnel with A/B testing, while implementing targeted social media advertising.',
    results: [
      { metric: 'Conversion Rate', value: '+87%', icon: BarChart },
      { metric: 'Social Engagement', value: '+245%', icon: Users },
      { metric: 'Revenue Growth', value: '+112%', icon: TrendingUp }
    ],
    testimonial: {
      quote: "Working with MaaS has been transformative for our business. Their social media strategy not only increased our engagement but directly impacted our bottom line.",
      author: "Michael Chen",
      position: "CEO, GrowthWave",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    featured: true
  },
  {
    id: 'innovate-inc',
    client: 'Innovate Inc',
    industry: 'Finance',
    service: 'Content Marketing',
    challenge: 'Innovate Inc needed to establish thought leadership in a competitive financial services market while generating qualified leads.',
    solution: 'We created a comprehensive content marketing strategy with industry reports, webinars, and targeted blog content to position them as experts.',
    results: [
      { metric: 'Content Downloads', value: '+178%', icon: TrendingUp },
      { metric: 'Qualified Leads', value: '+94%', icon: Users },
      { metric: 'Organic Traffic', value: '+125%', icon: BarChart }
    ],
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
  },
  {
    id: 'healthplus',
    client: 'HealthPlus',
    industry: 'Healthcare',
    service: 'PPC',
    challenge: 'HealthPlus was struggling to reach their target audience efficiently and their ad spend was producing minimal results.',
    solution: 'We restructured their PPC campaigns with precise audience targeting, compelling ad copy, and optimized landing pages.',
    results: [
      { metric: 'Click-Through Rate', value: '+215%', icon: TrendingUp },
      { metric: 'Conversion Rate', value: '+76%', icon: BarChart },
      { metric: 'Cost Per Lead', value: '-38%', icon: Users }
    ],
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
  },
  {
    id: 'retail-co',
    client: 'RetailCo',
    industry: 'Retail',
    service: 'Email Marketing',
    challenge: 'RetailCo had a large email list but low engagement rates and poor conversion from their email campaigns.',
    solution: 'We implemented segmentation, personalization, and automated email sequences to nurture leads and drive conversions.',
    results: [
      { metric: 'Email Open Rate', value: '+68%', icon: TrendingUp },
      { metric: 'Click Rate', value: '+103%', icon: Users },
      { metric: 'Email Revenue', value: '+187%', icon: BarChart }
    ],
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
  },
  {
    id: 'edulearn',
    client: 'EduLearn',
    industry: 'Education',
    service: 'SEO',
    challenge: 'EduLearn needed to increase enrollment in their online courses through improved organic visibility.',
    solution: 'We developed an SEO strategy focused on educational content, keyword optimization, and technical SEO improvements.',
    results: [
      { metric: 'Organic Traffic', value: '+205%', icon: TrendingUp },
      { metric: 'Course Enrollments', value: '+87%', icon: Users },
      { metric: 'Keyword Rankings', value: '+143%', icon: BarChart }
    ],
    logo: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80'
  }
];

const industries = ['All Industries', 'SaaS', 'E-commerce', 'Finance', 'Healthcare', 'Retail', 'Education'];
const services = ['All Services', 'SEO', 'PPC', 'Social Media', 'Content Marketing', 'Email Marketing'];
const sortOptions = ['Most Recent', 'Highest ROI', 'Most Lead Growth'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedService, setSelectedService] = useState('All Services');
  const [sortBy, setSortBy] = useState('Most Recent');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(caseStudies);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = caseStudies;
    
    // Filter by industry
    if (selectedIndustry !== 'All Industries') {
      filtered = filtered.filter(study => study.industry === selectedIndustry);
    }
    
    // Filter by service
    if (selectedService !== 'All Services') {
      filtered = filtered.filter(study => study.service === selectedService);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(study => 
        study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.solution.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort results
    if (sortBy === 'Highest ROI') {
      filtered = [...filtered].sort((a, b) => {
        const aValue = parseInt(a.results[2]?.value.replace(/[^0-9-]/g, '') || '0');
        const bValue = parseInt(b.results[2]?.value.replace(/[^0-9-]/g, '') || '0');
        return bValue - aValue;
      });
    } else if (sortBy === 'Most Lead Growth') {
      filtered = [...filtered].sort((a, b) => {
        const aValue = parseInt(a.results[1]?.value.replace(/[^0-9-]/g, '') || '0');
        const bValue = parseInt(b.results[1]?.value.replace(/[^0-9-]/g, '') || '0');
        return bValue - aValue;
      });
    }
    
    setFilteredStudies(filtered);
  }, [selectedIndustry, selectedService, sortBy, searchTerm]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pb-24 bg-gradient-to-r from-indigo-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              How Our Clients Achieve Real Growth
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              See how businesses across industries have scaled with our data-driven marketing solutions.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all"
              >
                Talk to Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-800 to-indigo-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>

      {/* Filters Section */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Featured Success Stories
              </h2>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                <Filter className="h-5 w-5 mr-2 text-gray-500" />
                Filters
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className={`mt-6 transition-all duration-300 ease-in-out ${showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">
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
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700">
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
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredStudies.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => (
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
                  {study.featured && (
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 m-4 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
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
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 line-clamp-3"><strong>Challenge:</strong> {study.challenge}</p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {study.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <result.icon className="h-8 w-8 mx-auto text-indigo-600" />
                        <p className="mt-2 text-2xl font-bold text-indigo-600">{result.value}</p>
                        <p className="text-xs text-gray-500">{result.metric}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No case studies found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>

      {/* Featured Testimonial */}
      <div className="bg-indigo-700">
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
                      "The MaaS team transformed our digital presence. Their data-driven approach to SEO delivered results beyond our expectations, and their transparent reporting made it easy to see the ROI."
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
                        <div className="text-base font-medium text-white">Sarah Johnson</div>
                        <div className="text-base font-medium text-indigo-200">Marketing Director, TechCorp Solutions</div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-50 rounded-lg shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Your Business Could Be Our Next Success Story</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                  Join 100+ businesses that scaled with our full-service marketing solutions.
                </p>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}