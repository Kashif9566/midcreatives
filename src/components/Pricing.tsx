import React, { useState } from 'react';
import { Check, X, ArrowRight, Info, Shield, Clock, Zap } from 'lucide-react';
import Footer from '../Footer';
import type { PricingPlan } from '../types';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="inline-flex items-center cursor-help"
      >
        {children}
        <Info className="h-4 w-4 ml-1 text-gray-400" />
      </div>
      {show && (
        <div className="absolute z-10 w-64 px-4 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg -top-2 left-full ml-2 transform -translate-y-full">
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 transform rotate-45 -left-1 top-1/2 -translate-y-1/2"></div>
        </div>
      )}
    </div>
  );
};

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups getting started with digital marketing.',
    price: '$999',
    features: [
      'Up to 3 marketing requests/month',
      'Basic SEO optimization',
      '2 social media platforms',
      'Monthly content creation (8 posts)',
      'Basic performance analytics',
      'Email support',
      'Response within 48 hours',
      'Monthly strategy call'
    ]
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their marketing efforts.',
    price: '$1,999',
    features: [
      'Up to 6 marketing requests/month',
      'Advanced SEO strategy',
      '4 social media platforms',
      'Weekly content creation (12 posts)',
      'PPC campaign management',
      'Email marketing automation',
      'Priority support',
      'Bi-weekly strategy calls',
      'Dedicated account manager'
    ]
  },
  {
    name: 'Growth+',
    description: 'Full-stack marketing execution for high-growth brands.',
    price: '$2,499',
    highlighted: true,
    features: [
      'Up to 12 marketing requests',
      'Full SEO management',
      'All social media platforms',
      'Daily content creation',
      'Advanced PPC optimization',
      'Custom email campaigns',
      '24/7 priority support',
      'Weekly strategy calls',
      'Senior marketing manager',
      'Custom reporting dashboard'
    ]
  }
];

const featureTooltips = {
  'Up to 3 marketing requests/month': 'Submit up to 3 different marketing tasks each month, such as creating social posts, optimizing SEO, or designing ads.',
  'Basic SEO optimization': 'Includes keyword research, on-page optimization, and basic technical SEO improvements.',
  'Advanced SEO strategy': 'Comprehensive SEO plan including competitive analysis, content strategy, and link building.',
  'Full SEO management': 'Complete management of your SEO including technical SEO, content creation, and off-page optimization.',
  'Up to 12 marketing requests': 'Submit up to 12 comprehensive marketing requests with priority processing.',
  'Weekly strategy calls': 'Regular calls with your marketing manager to discuss strategy and performance.',
  'Custom reporting dashboard': 'Access a personalized dashboard showing all your marketing metrics in one place.',
  'Dedicated account manager': 'A dedicated marketing professional who understands your business and manages your campaigns.',
  'Senior marketing manager': 'An experienced senior marketing professional with expertise in your industry.',
};

export default function Pricing() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    currentSpend: 5000,
    employees: 1,
    plan: 'growth'
  });

  const calculateSavings = () => {
    const { currentSpend, employees, plan } = calculatorData;
    const employeeCost = employees * 6000;
    const planCost = plan === 'starter' ? 999 : plan === 'growth' ? 1999 : 2499;
    const totalCurrentCost = currentSpend + employeeCost;
    const savings = totalCurrentCost - planCost;
    
    return {
      currentCost: totalCurrentCost,
      newCost: planCost,
      savings: savings,
      percentSavings: Math.round((savings / totalCurrentCost) * 100)
    };
  };

  const savings = calculateSavings();

  return (
    <div className="bg-white py-24" id="pricing">
      {/* Hero Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 overflow-hidden border border-indigo-100">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-50"></div>
              
              <div className="relative">
                <h2 className="text-3xl font-bold text-gray-900">
                  Flexible Marketing Plans for Every Business
                </h2>
                
                <p className="mt-4 text-lg text-gray-600">
                  Choose a plan that fits your needs—get expert marketing execution without hiring in-house teams.
                </p>

                <div className="mt-8 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  Starting at $999/month
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>No long-term contracts</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>24-hour turnaround time</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Zap className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>Cancel anytime</span>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center w-full px-6 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    View All Plans
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                What's Included in All Plans:
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-4">Marketing Services</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Dedicated Marketing Manager</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">SEO & Content Strategy</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Social Media Management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-4">Platform Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Performance Analytics Dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Marketing Request System</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Asset Management</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-medium text-gray-900 mb-4">Support & Training</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Priority Support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Strategy Consultations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">Training Resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:p-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">Calculate Your Marketing ROI</h3>
              <p className="mt-4 text-lg text-indigo-100">
                See how much you can save by switching to our marketing platform
              </p>
            </div>

            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="mt-8 mx-auto block px-6 py-3 bg-white text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors font-medium"
            >
              {showCalculator ? 'Hide Calculator' : 'Calculate Your Savings'}
            </button>

            {showCalculator && (
              <div className="mt-8 bg-white rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Current Monthly Marketing Spend ($)
                      </label>
                      <input
                        type="range"
                        min="1000"
                        max="20000"
                        step="500"
                        value={calculatorData.currentSpend}
                        onChange={(e) => setCalculatorData({...calculatorData, currentSpend: parseInt(e.target.value)})}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">$1,000</span>
                        <span className="text-sm font-medium">${calculatorData.currentSpend.toLocaleString()}</span>
                        <span className="text-sm text-gray-500">$20,000</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Number of Marketing Employees
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="1"
                        value={calculatorData.employees}
                        onChange={(e) => setCalculatorData({...calculatorData, employees: parseInt(e.target.value)})}
                        className="w-full mt-2"
                      />
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">0</span>
                        <span className="text-sm font-medium">{calculatorData.employees}</span>
                        <span className="text-sm text-gray-500">5</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Select MaaS Plan
                      </label>
                      <select
                        value={calculatorData.plan}
                        onChange={(e) => setCalculatorData({...calculatorData, plan: e.target.value})}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      >
                        <option value="starter">Starter ($999/mo)</option>
                        <option value="growth">Growth ($1,999/mo)</option>
                        <option value="growth+">Growth+ ($2,499/mo)</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Your Estimated Savings</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Current Monthly Cost</p>
                        <p className="text-xl font-bold text-gray-900">${savings.currentCost.toLocaleString()}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">New Monthly Cost with MaaS</p>
                        <p className="text-xl font-bold text-indigo-600">${savings.newCost.toLocaleString()}</p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">Monthly Savings</p>
                        <p className="text-2xl font-bold text-green-600">
                          ${savings.savings.toLocaleString()} ({savings.percentSavings}%)
                        </p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Annual Savings</p>
                        <p className="text-2xl font-bold text-green-600">
                          ${(savings.savings * 12).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="/get-started"
                        className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Get Started Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}