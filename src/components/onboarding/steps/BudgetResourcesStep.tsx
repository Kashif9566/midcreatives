import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { OnboardingData } from '../OnboardingQuestionnaire';

interface BudgetResourcesStepProps {
  formData: OnboardingData;
  updateFormData: (data: Partial<OnboardingData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const budgetOptions = [
  'Under $2,000',
  '$2,000 - $5,000',
  '$5,000 - $10,000',
  '$10,000+'
];

const toolOptions = [
  'Google Ads',
  'Facebook Ads',
  'HubSpot',
  'Shopify',
  'WordPress',
  'None'
];

export default function BudgetResourcesStep({ 
  formData, 
  updateFormData, 
  nextStep, 
  prevStep 
}: BudgetResourcesStepProps) {
  const canContinue = formData.budget;

  const toggleTool = (tool: string) => {
    // If "None" is selected, clear all other selections
    if (tool === 'None') {
      updateFormData({ tools: ['None'] });
      return;
    }
    
    // If selecting a tool and "None" was previously selected, remove "None"
    const currentTools = [...formData.tools];
    const updatedTools = currentTools.includes('None') 
      ? [tool] 
      : currentTools.includes(tool)
        ? currentTools.filter(t => t !== tool)
        : [...currentTools, tool];
    
    updateFormData({ tools: updatedTools });
  };

  const handleContinue = () => {
    if (canContinue) {
      nextStep();
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Budget & Resources</h2>
        <p className="mt-2 text-gray-500">Help us understand your marketing budget and current tools</p>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What's your current monthly marketing budget?
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {budgetOptions.map((option) => (
            <div key={option}>
              <button
                type="button"
                onClick={() => updateFormData({ budget: option })}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.budget === option
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{option}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What tools do you currently use? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {toolOptions.map((tool) => (
            <div key={tool}>
              <button
                type="button"
                onClick={() => toggleTool(tool)}
                className={`relative w-full p-4 border rounded-lg text-left focus:outline-none transition-colors ${
                  formData.tools.includes(tool)
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500'
                    : 'border-gray-300 hover:border-indigo-300'
                }`}
              >
                <span className="block text-sm font-medium">{tool}</span>
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