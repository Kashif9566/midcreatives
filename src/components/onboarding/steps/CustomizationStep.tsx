import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { OnboardingData } from '../OnboardingQuestionnaire';

interface CustomizationStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const consultationOptions = [
  'Yes, schedule a strategy call',
  'No, I\'m ready to dive into the dashboard'
];

const aiOptions = [
  'Yes, optimize my campaigns with AI',
  'No, I prefer manual marketing requests'
];

export default function CustomizationStep({ 
  formData, 
  updateFormData, 
  nextStep, 
  prevStep 
}: CustomizationStepProps) {
  const canContinue = formData.expertConsultation && formData.aiInsights;

  const handleContinue = () => {
    if (canContinue) {
      nextStep();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Customization & Personalization</h2>
        <p className="mt-2 text-gray-500">Let's personalize your experience</p>
      </div>

      {/* Expert Consultation */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Would you like an expert consultation?
        </label>
        <div className="grid grid-cols-1 gap-3">
          {consultationOptions.map((option) => (
            <div key={option}>
              <button
                type="button"
                onClick={() => updateFormData({ expertConsultation: option })}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.expertConsultation === option
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{option}</span>
                <span className="block mt-1 text-xs text-gray-500">
                  {option === 'Yes, schedule a strategy call' && 'Our experts will contact you to discuss your marketing strategy'}
                  {option === 'No, I\'m ready to dive into the dashboard' && 'You can always schedule a call later from your dashboard'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Do you want AI-driven marketing insights?
        </label>
        <div className="grid grid-cols-1 gap-3">
          {aiOptions.map((option) => (
            <div key={option}>
              <button
                type="button"
                onClick={() => updateFormData({ aiInsights: option })}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.aiInsights === option
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{option}</span>
                <span className="block mt-1 text-xs text-gray-500">
                  {option === 'Yes, optimize my campaigns with AI' && 'Our AI will analyze your data and suggest optimizations'}
                  {option === 'No, I prefer manual marketing requests' && 'You\'ll have full control over all marketing decisions'}
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