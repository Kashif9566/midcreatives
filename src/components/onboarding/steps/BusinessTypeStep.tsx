import React from 'react';
import { ArrowRight } from 'lucide-react';
import { OnboardingData } from '../OnboardingQuestionnaire';

interface BusinessTypeStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
}

const businessTypes = [
  'E-commerce',
  'SaaS / Tech Startup',
  'Local Business',
  'Service-Based Business',
  'Other'
];

const marketingGoals = [
  'Increase Website Traffic',
  'Generate More Leads',
  'Improve Social Media Engagement',
  'Run Paid Ads',
  'Automate Marketing & Analytics'
];

export default function BusinessTypeStep({ formData, updateFormData, nextStep }: BusinessTypeStepProps) {
  const canContinue = formData.businessType && formData.marketingGoal;

  const handleContinue = () => {
    if (canContinue) {
      nextStep();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Tell us about your business</h2>
        <p className="mt-2 text-gray-500">This helps us tailor our services to your specific needs</p>
      </div>

      {/* Business Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What best describes your business?
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {businessTypes.map((type) => (
            <div key={type}>
              <button
                type="button"
                onClick={() => updateFormData({ businessType: type })}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.businessType === type
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{type}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Goal */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What is your primary marketing goal?
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {marketingGoals.map((goal) => (
            <div key={goal}>
              <button
                type="button"
                onClick={() => updateFormData({ marketingGoal: goal })}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.marketingGoal === goal
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{goal}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end">
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