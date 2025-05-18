import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import Logo from './Logo';

export default function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the viewport height
      const viewportHeight = window.innerHeight;
      // Get the current scroll position
      const scrollPosition = window.scrollY;
      
      // Show popup when user has scrolled past 1.5 viewport heights
      if (scrollPosition > viewportHeight * 1.5 && !sessionStorage.getItem('exitPopupShown')) {
        setScrolledPast(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolledPast && !sessionStorage.getItem('exitPopupShown')) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [scrolledPast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black_remote bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-[12px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={() => setShowPopup(false)}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-[12px] bg-primary sm:mx-0 sm:h-10 sm:w-10">
                <Gift className="h-6 w-6 text-black_remote" aria-hidden="true" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <Logo className="mb-4" />
                <h3 className="text-[20px] sm:text-[24px] leading-6 font-medium text-black_remote font-['Onest']" id="modal-title">
                  Still Thinking?
                </h3>
                <div className="mt-2">
                  <p className="text-[14px] sm:text-[16px] text-[#727986] font-['Onest']">
                    Get 1 Free Marketing Request When You Subscribe Today!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="px-4 pb-5 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                <div className="flex-1">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-black_remote font-['Onest'] text-[14px] font-normal leading-[32px] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-primary focus:border-primary focus:placeholder-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center rounded-[8px] border border-transparent shadow-sm px-4 py-2 bg-primary text-[12px] sm:text-[14px] font-[400] text-black_remote hover:bg-[#c9e673] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary font-['Onest']"
                >
                  <span className="text-center">Claim Free Marketing Request</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="px-4 pb-5 sm:px-6">
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800 font-['Onest']">
                      Thanks! Your free marketing request has been claimed. We'll be in touch shortly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}