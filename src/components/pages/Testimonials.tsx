import React, { useState } from "react";
import { Star, ArrowRight, Play, BarChart, Users, Clock } from "lucide-react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const featuredTestimonial = {
  name: "Sarah Johnson",
  title: "Director of Marketing",
  company: "TechCorp Solutions",
  image:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  quote:
    "Our ad campaigns saw a 3x CTR increase within the first month of working with MaaS. Their data-driven approach and expert team have transformed our marketing performance.",
  logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
};

const testimonials = [
  {
    name: "Michael Chen",
    title: "CEO",
    company: "GrowthWave",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "The level of expertise and attention to detail is unmatched. Our marketing campaigns are now delivering consistent results, and the ROI has exceeded our expectations.",
  },
  {
    name: "Emily Rodriguez",
    title: "Head of Digital",
    company: "Innovate Inc",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "Working with MaaS has streamlined our entire marketing process. Their platform makes it easy to manage campaigns, and the results speak for themselves.",
  },
  {
    name: "David Wilson",
    title: "Marketing Director",
    company: "Scale Solutions",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    quote:
      "The MaaS team has become an extension of our marketing department. Their strategic insights and execution capabilities have helped us achieve our growth targets.",
  },
];

const caseStudies = [
  {
    name: "TechCorp Solutions",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    problem:
      "Struggling to scale marketing efforts while maintaining quality and consistency across channels.",
    solution:
      "Implemented comprehensive marketing automation and content strategy using MaaS platform.",
    results:
      "50% increase in qualified leads within 3 months, 3x improvement in campaign execution speed.",
  },
  {
    name: "GrowthWave",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=80&q=80",
    problem:
      "Limited visibility into marketing performance and difficulty in optimizing campaigns.",
    solution:
      "Deployed advanced analytics and multi-channel campaign management.",
    results:
      "200% increase in ROI, 45% reduction in customer acquisition costs.",
  },
];

const metrics = [
  {
    title: "3x Higher CTR",
    description: "Average improvement in click-through rates",
    icon: BarChart,
  },
  {
    title: "50% Faster",
    description: "Campaign turnaround time reduction",
    icon: Clock,
  },
  {
    title: "97% Satisfaction",
    description: "Client satisfaction rate",
    icon: Star,
  },
  {
    title: "1,000+ Campaigns",
    description: "Successfully launched and managed",
    icon: Users,
  },
];

const videoTestimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "TechCorp",
    thumbnail:
      "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
    videoUrl: "#",
  },
  {
    name: "Michael Chen",
    title: "CEO",
    company: "GrowthWave",
    thumbnail:
      "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80",
    videoUrl: "#",
  },
];

export default function TestimonialsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              What our clients say{" "}
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
                about us.
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Hear from businesses that have transformed their marketing with
              our platform
            </p>
            <p className="max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
              We pride ourselves on delivering exceptional marketing services
              and results. Here's what our clients have to say about their
              experience working with us.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Testimonial */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="bg-primary px-[100px] py-[40px] rounded-lg">
            <div className="bg-primary px-[100px] py-[60px] rounded-lg flex flex-col items-center text-center gap-6">
              {/* Image + Name/Title */}
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah Johnson"
                  className="w-[64px] h-[64px] rounded-lg object-cover"
                />
                <div className="flex flex-col flex-start">
                  <p className="text-[#0D0D0D] text-[30px] font-semibold font-[Onest] leading-[38px]">
                    Sarah Johnson
                  </p>

                  <p className="text-[#727986] text-[16px] font-normal font-[Onest] leading-[24px]">
                    Director of Marketing
                  </p>
                </div>
              </div>

              {/* Testimonial Text + Star + Button */}
              <div className="mt-5 flex flex-col items-center gap-4 max-w-3xl">
  <p className="text-[#5F5F5F] text-center text-[20px] font-normal font-[Onest] leading-[30px]">
    "Our ad campaigns saw a 3x CTR increase within the first month
    of working with MaaS. Their data-driven approach and expert
    team have transformed our marketing performance."
  </p>

  <div className="flex gap-1 mt-5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="text-[#FABE3A]" />
    ))}
  </div>


<Link to={"/register"}>
  <button className="mt-5 px-[32px] py-[10px] rounded-[8px] bg-black text-white font-[Onest] text-[16px] font-medium leading-[26px]">
    Launching your marketing campaign
  </button>
</Link>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials Grid */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.title} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[54px] font-semibold leading-[60px] text-black font-[Onest]">
              Success Stories
            </h2>

            <p className="mt-4 text-[22px] font-normal leading-[32px] text-[#727986] text-center font-[Onest]">
              See how our platform has helped businesses achieve their marketing
              goals
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.name}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <img
                  src={study.logo}
                  alt={study.name}
                  className="h-12 mb-7 rounded-lg"
                />
                <div className="space-y-9">
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        className="bg-primary p-3 rounded-lg"
                        src="/images/Frame (10).svg"
                        alt=""
                      />
                      <h3 className="text-lg font-medium text-gray-900">
                        The Challenge
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-600">{study.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        className="bg-primary p-3 rounded-lg"
                        src="/images/Frame (11).svg"
                        alt=""
                      />
                      <h3 className="text-lg font-medium text-gray-900">
                        Our Solution
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        className="bg-primary p-3 rounded-lg"
                        src="/images/Frame (12).svg"
                        alt=""
                      />
                      <h3 className="text-lg font-medium text-gray-900">
                        The Results
                      </h3>
                    </div>
                    <p className="mt-2 text-gray-600">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-[32px] py-[10px] rounded-[8px] text-[#000] bg-[#E0FF82] text-[16px] font-[500] leading-[26px] font-[Onest] hover:bg-opacity-90"
            >
              See More Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[54px] font-[500] leading-[60px] text-[#000] font-[Onest]">
              Our impact in{" "}
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
                numbers
              </span>
            </h2>

            <p className="mt-4 text-[#727986] text-center font-onest text-2xl font-normal leading-8">
              Delivering measurable results for our clients
            </p>
          </div>

          <div className="mt-[60px] grid grid-cols-1 gap-[60px] sm:grid-cols-4 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.title} className="text-center">
                <metric.icon className="h-12 w-12 text-black bg-primary rounded-lg p-3 mx-auto" />
                <h3 className="mt-6 text-[#000] text-center font-onest text-[40px] leading-[64px] tracking-[-0.4px]">
                  {metric.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Testimonials */}
      {/* <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Hear It Directly from Our Clients
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Watch our clients share their experiences and results
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {videoTestimonials.map((video) => (
              <div key={video.name} className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} video thumbnail`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white bg-opacity-75 rounded-full p-4 hover:bg-opacity-100 transition-opacity">
                      <Play className="h-12 w-12 text-indigo-600" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-medium text-gray-900">
                    {video.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {video.title} at {video.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Contact Form */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#000] text-center font-onest text-[40px] leading-[64px] tracking-[-0.4px] font-medium">
              Ready to experience marketing{" "}
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
                success?
              </span>
            </h2>

            <p className="mt-4 text-[#727986] text-center font-onest text-[22px] font-normal leading-[32px]">
              Get started with our marketing platform today
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm  text-[#8D8D8D]">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border-[#D6D6D6] rounded-md"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm  text-[#8D8D8D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full shadow-sm sm:text-sm border-[#D6D6D6] rounded-md"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm  text-[#8D8D8D]"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full shadow-sm sm:text-sm border-[#D6D6D6] rounded-md"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm  text-[#8D8D8D]"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-[#D6D6D6] rounded-md"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm text-white bg-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
