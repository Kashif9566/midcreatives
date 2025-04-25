import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { OnboardingData } from '../OnboardingQuestionnaire';

interface MarketingNeedsStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const marketingServices = [
  'SEO',
  'Paid Ads',
  'Social Media Marketing',
  'Email & Automation',
  'Content Strategy'
];

const involvementOptions = [
  'Full automation',
  'Strategy guidance & execution',
  'Additional team support'
];

export default function MarketingNeedsStep({ 
  formData, 
  updateFormData, 
  nextStep, 
  prevStep 
}: MarketingNeedsStepProps) {
  const canContinue = formData.marketingServices.length > 0 && formData.involvement;

  const toggleService = (service: string) => {
    const currentServices = [...formData.marketingServices];
    if (currentServices.includes(service)) {
      updateFormData({ 
        marketingServices: currentServices.filter(s => s !== service) 
      });
    } else {
      updateFormData({ 
        marketingServices: [...currentServices, service] 
      });
    }
  };

  const handleContinue = () => {
    if (canContinue) {
      nextStep();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Marketing Needs & Priorities</h2>
        <p className="mt-2 text-gray-500">Help us understand what services are most important to you</p>
      </div>

      {/* Marketing Services */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Which marketing services are most important to you? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {marketingServices.map((service) => (
            <div key={service}>
              <button
                type="button"
                onClick={() => toggleService(service)}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.marketingServices.includes(service)
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{service}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Involvement Level */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          How hands-on do you want to be?
        </label>
        <div className="grid grid-cols-1 gap-3">
          {involvementOptions.map((option) => (
            <div key={option}>
              <button
                type="button"
                onClick={() => updateFormData({ involvement: option })}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.involvement === option
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{option}</span>
                <span className="block mt-1 text-xs text-gray-500">
                  {option === 'Full automation' && 'We handle everything for you with minimal input needed'}
                  {option === 'Strategy guidance & execution' && 'We execute based on your strategic direction'}
                  {option === 'Additional team support' && 'We work alongside your existing marketing team'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={!canContinue}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}