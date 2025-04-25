import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Logo from '../Logo';

// Step components
import BusinessTypeStep from './steps/BusinessTypeStep';
import MarketingNeedsStep from './steps/MarketingNeedsStep';
import BudgetResourcesStep from './steps/BudgetResourcesStep';
import CustomizationStep from './steps/CustomizationStep';
import FinalStep from './steps/FinalStep';

export interface OnboardingData {
  businessType: string;
  marketingGoal: string;
  marketingServices: string[];
  involvement: string;
  budget: string;
  tools: string[];
  expertConsultation: string;
  aiInsights: string;
}

const initialData: OnboardingData = {
  businessType: '',
  marketingGoal: '',
  marketingServices: [],
  involvement: '',
  budget: '',
  tools: [],
  expertConsultation: '',
  aiInsights: ''
};

export default function OnboardingQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);
  const checkOnboardingStatus = useAuthStore(state => state.checkOnboardingStatus);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (user && user.email) {
        // Check if user has already completed onboarding
        const hasCompletedOnboarding = await checkOnboardingStatus(user.email);
        
        if (hasCompletedOnboarding) {
          // If user has completed onboarding, redirect to dashboard
          navigate('/dashboard');
        }
      }
      setIsLoading(false);
    };
    
    checkUserStatus();
  }, [user, navigate, checkOnboardingStatus]);

  const updateFormData = (data: Partial<OnboardingData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Here you would typically save the data to your backend
      // For now, we'll just simulate a delay and store in localStorage
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Save onboarding data to localStorage
      localStorage.setItem('onboardingData', JSON.stringify(formData));
      localStorage.setItem('onboardingCompleted', 'true');
      
      // Navigate to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BusinessTypeStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <MarketingNeedsStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 3:
        return (
          <BudgetResourcesStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 4:
        return (
          <CustomizationStep 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 5:
        return (
          <FinalStep 
            formData={formData} 
            handleSubmit={handleSubmit} 
            isSubmitting={isSubmitting} 
            prevStep={prevStep} 
          />
        );
      default:
        return null;
    }
  };

  // Show loading state while checking user status
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Logo />
            <button 
              onClick={() => {
                // Mark onboarding as completed even if skipped
                localStorage.setItem('onboardingCompleted', 'true');
                navigate('/dashboard');
              }}
              className="text-sm text-gray-500 hover:text-indigo-600"
            >
              Skip for now
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white shadow-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep > step 
                    ? 'bg-indigo-600' 
                    : currentStep === step 
                    ? 'bg-indigo-600' 
                    : 'bg-gray-200'
                }`}>
                  {currentStep > step ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <span className={`text-sm font-medium ${currentStep === step ? 'text-white' : 'text-gray-500'}`}>
                      {step}
                    </span>
                  )}
                </div>
                <span className="mt-2 text-xs text-gray-500">
                  {step === 1 && 'Business'}
                  {step === 2 && 'Needs'}
                  {step === 3 && 'Budget'}
                  {step === 4 && 'Customize'}
                  {step === 5 && 'Finish'}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full bg-indigo-600 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10">
          {renderStep()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-gray-500">
            Your answers help us personalize your dashboard experience. You can update these preferences later in your account settings.
          </p>
        </div>
      </footer>
    </div>
  );
}