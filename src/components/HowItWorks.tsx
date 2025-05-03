import React, { useEffect, useRef } from 'react';
import { ClipboardList, Rocket, BarChart3, UserCheck, ArrowRight } from 'lucide-react';
import AnimatedButton from "./AnimatedButton";

interface Step {
  title: string;
  description: string;
  icon: React.ComponentType;
  animation: string;
}

const steps: Step[] = [
  {
    title: 'Sign Up & Choose a Plan',
    description: 'Select the marketing plan that best fits your business needs and goals. Our flexible plans are designed to scale with your growth.',
    icon: ClipboardList,
    animation: 'fade-right'
  },
  {
    title: 'Submit Your Marketing Request',
    description: 'Use our intuitive platform to submit your marketing requests. Provide your goals, target audience, and preferences.',
    icon: UserCheck,
    animation: 'fade-up'
  },
  {
    title: 'Our Team Executes Your Campaign',
    description: 'Our expert marketing team springs into action, implementing your campaign with proven strategies and best practices.',
    icon: Rocket,
    animation: 'fade-up'
  },
  {
    title: 'Track Results in Real-Time',
    description: 'Monitor your campaign performance through our real-time dashboard. Get detailed insights and analytics on your marketing success.',
    icon: BarChart3,
    animation: 'fade-left'
  },
];

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const stepElements = document.querySelectorAll('.step-animation');
    stepElements.forEach((el) => observer.observe(el));

    return () => {
      stepElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-white py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
        <h2 className="text-base font-normal text_black_remote tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
        Process
        </h2>
          <p className="pt-5 text-4xl font-[500] text-gray-900 sm:text-5xl sm:tracking-tight">
            Seamless Marketing in 4 Steps
          </p>
          <p className="max-w-xl mt-5 mx-auto font-normal text-xl text-gray-500">
            Get your marketing campaigns up and running quickly with our streamlined process
          </p>
        </div>

        <div className="mt-20" ref={stepsRef}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative bg-white p-8 border border-gray-200 rounded-2xl shadow-sm flex flex-col step-animation opacity-0 transition-all duration-1000 ${step.animation}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-5">
                  <div className="flex-shrink-0">
                    <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-primary">
                      <step.icon className="h-8 w-8" aria-hidden="true" />
                      <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary flex items-center justify-center text_black_remote font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <AnimatedButton
              onClick={() => window.location.href = "/register"}
              className="inline-flex items-center justify-center px-8 py-2 border border-transparent text-base font-[500] rounded-md text_black_remote bg-primary hover:bg-primary/90 md:py-3 md:text-lg md:px-10 transition-colors"
            >
              <span className="flex items-center">
                Launch Your First Campaign
                <span className="ml-2">
                  <ArrowRight size={20} />
                </span>
              </span>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}