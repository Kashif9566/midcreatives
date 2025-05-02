import React, { useState } from 'react';

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
      {/* Comparison Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-base font-normal text_black_remote tracking-wide uppercase text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
        Pricing Model
        </h2>
        <p style={{color: '#1F2223 !important'}} className="text-[54px] pt-5 font-[500] text_black_remote text-center leading-[60px]">
        A subscription built{' '}
        </p>
        <p className="text-[54px] font-[500] text_black_remote text-center leading-[60px]">
          to fuel your{' '}
          <span style={{
            display: 'inline',
            backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22249%22%20height%3D%2247%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M%200.114%2034.503%20C%200.114%2036.823%202.666%2038.391%207.51%2039.819%20C%2042.556%2047.704%20197.502%2049.003%20225.578%2044.171%20C%20259.493%2038.334%20246.849%2021.457%20245.997%2019.525%20C%20245.147%2017.591%20244.296%2017.591%20244.296%2015.176%20C%20244.296%2012.759%20246.458%206.966%20243.274%204.062%20C%20236.131%20-2.456%20220.974%20-0.128%20181.239%204.062%20C%20121.682%2010.343%2025.638%202.612%2012.024%202.612%20C%20-1.588%202.612%200.114%2014.209%200.964%2018.075%20C%201.815%2021.94%200.964%2022.907%200.113%2024.839%20C%20-0.738%2026.772%203.516%2028.222%202.666%2030.638%20C%201.814%2033.053%200.114%2031.604%200.114%2034.504%20Z%22%20fill%3D%22%23E0FF82%22/%3E%3C/svg%3E')`,
            backgroundSize: '100% 60%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 60%',
            whiteSpace: 'nowrap',
            padding: 0
          }}>growth</span>
        </p>
      </div>

      {/* Hero Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left Column */}
          <div className="bg-[#E0FF82] rounded-[12px] p-6 sm:p-8 lg:p-[40px_59px_40px_60px] overflow-hidden h-full">
            <div className="text-center">
              <h2 className="text-[14px] sm:text-[16px] font-normal text_black_remote tracking-wide text-center font-['Onest'] rounded-[100px] border border-[#727986] bg-[#E0FF82] px-4 py-1.5 inline-block">
                Starting at $0/month
              </h2>
              <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-['Onest'] font-medium text_black_remote text-center leading-[1.3] mt-4">
                Flexible Marketing Plans for Every Business
              </h2>
              
              <p className="mt-4 text-[18px] sm:text-[20px] lg:text-[22px] font-['Onest'] font-normal text_black_remote text-center leading-[1.4]">
              Choose a plan that fits your needs—get expert marketing execution without any upfront cost of high agency retainers
              </p>

              <div className="mt-8 space-y-1 flex flex-col items-center">
                <div className="flex items-center text-[14px] sm:text-[16px] font-['Onest'] font-normal text_black_remote text-center leading-[1.6]">
                  <span className="mr-2">•</span>
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center text-[14px] sm:text-[16px] font-['Onest'] font-normal text_black_remote text-center leading-[1.6]">
                  <span className="mr-2">•</span>
                  <span>24-hour turnaround time</span>
                </div>
                <div className="flex items-center text-[14px] sm:text-[16px] font-['Onest'] font-normal text_black_remote text-center leading-[1.6]">
                  <span className="mr-2">•</span>
                  <span>Cancel anytime</span>
                </div>
              </div>

              <div className="mt-12 sm:mt-16 lg:mt-[97px]">
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 sm:px-8 lg:px-[64px] py-[10px] rounded-[8px] bg-[#1F2223] text-white text-[14px] sm:text-[16px] font-medium leading-[1.6] sliding-text group"
                >
                  <span>Book a Call</span>
                  <span>Book a Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-0 w-full bg-[#F7F8F8] rounded-[12px]">
            <div className="p-6 sm:p-8 h-full">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4 sm:mb-6">
                Included in all plans:
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 sm:mb-4">Marketing Services</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Dedicated Marketing Manager</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">SEO & Content Strategy</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Social Media Management</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3 sm:mb-4">Platform Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Performance Analytics Dashboard</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Marketing Request System</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Asset Management</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3 sm:mb-4">Support & Training</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Priority Support</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between border-b border-gray-200 pb-1">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Strategy Consultations</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-[13px] sm:text-[14px] font-['Onest'] font-normal text_black_remote leading-[1.8]">Training Resources</span>
                      <img src="/images/fi_190411.png" alt="check" className="w-4 h-4" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      {/* <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
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
      </div> */}
    </div>
  );
}