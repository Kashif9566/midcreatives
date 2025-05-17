import React, { useState } from "react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const features = [
  "No retainers or contracts.", 
"Dedicated Account Manager ",
"24/7 Marketing Support" 
];

const testimonials = [
  {
    quote: "3.4x ROAS on Google + Meta by week 5",
    name: "SARAH JOHNSON",
    role: "Director, Strategic Planning",
    bgColor: "bg-gray-100",
  },
  {
    quote: "End-to-end ad management, zero lift on my side",
    name: "MICHAEL CHEN",
    role: "Director of Marketing",
    bgColor: "bg-rose-100",
  },
  {
    quote: "Content publishing made effortless — and effective",
    name: "EMILY RODRIGUEZ",
    role: "Head of Marketing",
    bgColor: "bg-orange-100",
  },
  {
    quote: "Our campaigns see 3x higher CTR",
    name: "DAVID WILSON",
    role: "Director, Product Marketing",
    bgColor: "bg-yellow-100",
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  const handleStartRequest = () => {
    navigate("/register");
  };

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white">
          <div className="pt-16 sm:pt-20 pb-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                {/* Left Column */}
                <div className="lg:flex lg:space-x-12 items-center">
                  <div className="lg:w-[45.83%]">
                    <h1 className="font-[500] text-[36px] leading-[44px] sm:text-[42px] sm:leading-[50px] md:text-[48px] md:leading-[56px] lg:text-[54px] lg:leading-[60px] tracking-[0] text-black_remote">
                      <span className="block">Your <span className="font-['Instrument_Serif'] font-[400] italic">startup</span></span>
                      <span className="relative inline-block">
                        <span className="absolute inset-0 bg-[#E0FF82] h-[50%] top-1/2 -translate-y-1/2 -z-10 rounded"></span>
                        marketing team
                      </span>
                    </h1>
                    <p className="mt-4 text-[18px] leading-[26px] font-[300] text-[#727986]">
                    Access a dedicated team of marketing experts for paid acquisition, SEO, social media, content, and more. No hiring, no hassle. 
                    </p>
                    

                    <div className="mt-6 space-y-4">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-black bg-[#E0FF82] rounded-full p-1" />
                          <span className="ml-2 text-[#363C47] text-base font-normal leading-[26px]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4">
                      <AnimatedButton
                        onClick={handleStartRequest}
                        className="px-[32px] py-[10px] text-base rounded-[8px] text-white bg-[#1F2223] hover:bg-[#1F2223] transition-all duration-300 shadow-md hover:shadow-lg flex justify-center items-center font-[Onest] text-[16px] font-[500] leading-[26px]"
                      >
                        Get Started Now
                      </AnimatedButton>

                      <AnimatedButton
                        onClick={() => setShowVideo(true)}
                        className="px-[32px] py-[10px] text-[16px] font-[500] text-[#727986] font-[Onest] leading-[26px] rounded-[8px] bg-gray-100 hover:bg-gray-200 inline-flex items-center justify-center gap-[10px] transition-all duration-300"
                      >
                        See How It Works
                      </AnimatedButton>
                    </div>

                    <p className="mt-4 text-[14px] text-[#727986] font-[400] font-[Onest] leading-[26px]">
                      Flat pricing. Cancel Anytime.
                    </p>
                  </div>

                  {/* Right Column - Testimonial Cards */}
                  <div className="hidden lg:block lg:w-[54.17%] relative w-full min-h-[500px] lg:h-[500px]">
                    {/* Container for mobile view */}
                    {/* <div className="lg:hidden flex flex-col space-y-8 mb-12 mt-8">
                      
                      <div className="w-full px-4">
                        <div className="bg-[#A6D8FF] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2 copy.png"
                              alt="Emily Rodriguez"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[2].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[2].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[2].role}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <div className="bg-[#FFF8B3] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2 copy 2.png"
                              alt="Sarah Johnson"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[0].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[0].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[0].role}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <div className="bg-[#D0C6FF] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2.png"
                              alt="David Wilson"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[3].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[3].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[3].role}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="w-full px-4">
                        <div className="bg-[#E6FFDE] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2 copy 3.png"
                              alt="Michael Chen"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[1].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[1].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[1].role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div> */}

                    {/* Desktop layout - original cards */}
                    <div className="hidden lg:block">
                      {/* Top - Emily Rodriguez */}
                      <div 
                        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[280px] z-20"
                      >
                        <div className="bg-[#A6D8FF] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2 copy.png"
                              alt="Emily Rodriguez"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[2].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[2].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[2].role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Left middle - Sarah Johnson */}
                      <div 
                        className="absolute top-[30%] left-[0%] w-[280px] z-10"
                      >
                        <div className="bg-[#FFF8B3] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2 copy 2.png"
                              alt="Sarah Johnson"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[0].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[0].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[0].role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right middle - David Wilson */}
                      <div 
                        className="absolute top-[30%] right-[0%] w-[280px] z-30"
                      >
                        <div className="bg-[#D0C6FF] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2.png"
                              alt="David Wilson"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[3].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[3].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[3].role}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom - Michael Chen */}
                      <div 
                        className="absolute top-[60%] left-[20%] w-[280px] z-20"
                      >
                        <div className="bg-[#E6FFDE] px-8 pt-10 pb-8 rounded-xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] relative transition-all duration-300 ease-in-out hover:shadow-lg group">
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[40px] h-[40px] overflow-hidden transition-all duration-300 ease-in-out group-hover:w-[48px] group-hover:h-[48px] group-hover:-top-8 rounded-[4px]">
                            <img
                              src="/images/file cover - 2 copy 3.png"
                              alt="Michael Chen"
                              className="w-full h-full object-cover aspect-[1/1] transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <p className="font-[Onest] text-[14px] font-normal text-black leading-normal mb-3 transition-all duration-300 ease-in-out group-hover:text-[16px]">
                            {testimonials[1].quote}
                          </p>
                          <div>
                            <p className="font-[Onest] text-[14px] font-semibold text-black leading-normal">
                              {testimonials[1].name}
                            </p>
                            <p className="font-[Onest] text-[12px] font-normal text-black leading-normal">
                              - {testimonials[1].role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 -mt-12 text-white hover:text-indigo-200"
              onClick={() => setShowVideo(false)}
            >
              Close ×
            </button>
            <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Marketing as a Service Explainer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
