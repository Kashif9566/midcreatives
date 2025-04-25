import React from 'react';
import { ArrowLeft, CheckCircle, Rocket } from 'lucide-react';
import { OnboardingData } from '../OnboardingQuestionnaire';

interface FinalStepProps {
  formData: OnboardingData;
  handleSubmit: () => void;
  isSubmitting: boolean;
  prevStep: () => void;
}

export default function FinalStep({ 
  formData, 
  handleSubmit, 
  isSubmitting, 
  prevStep 
}: FinalStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Rocket className="h-16 w-16 text-indigo-600 mx-auto" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Ready to Create Your Dashboard</h2>
        <p className="mt-2 text-gray-500">
          We've gathered all the information we need to personalize your experience
        </p>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Your Preferences Summary</h3>
        
        <div className="space-y-4">
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Business Type</p>
              <p className="text-sm text-gray-500">{formData.businessType}</p>
            </div>
          </div>
          
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Primary Marketing Goal</p>
              <p className="text-sm text-gray-500">{formData.marketingGoal}</p>
            </div>
          </div>
          
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Marketing Services</p>
              <p className="text-sm text-gray-500">{formData.marketingServices.join(', ')}</p>
            </div>
          </div>
          
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Involvement Level</p>
              <p className="text-sm text-gray-500">{formData.involvement}</p>
            </div>
          </div>
          
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Monthly Budget</p>
              <p className="text-sm text-gray-500">{formData.budget}</p>
            </div>
          </div>
          
          {formData.tools.length > 0 && (
            <div className="flex">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Current Tools</p>
                <p className="text-sm text-gray-500">{formData.tools.join(', ')}</p>
              </div>
            </div>
          )}
          
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Expert Consultation</p>
              <p className="text-sm text-gray-500">{formData.expertConsultation}</p>
            </div>
          </div>
          
          <div className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">AI-Driven Insights</p>
              <p className="text-sm text-gray-500">{formData.aiInsights}</p>
            </div>
          </div>
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
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Creating Dashboard...' : 'Create My Dashboard →'}
        </button>
      </div>
    </div>
  );
}