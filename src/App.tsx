import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Navigation from './components/Navigation';
import AuthHeader from './components/AuthHeader';
import Hero from './components/Hero';
import TrustedBrands from './components/TrustedBrands';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SEOServices from './components/services/SEOServices';
import PPCAdvertising from './components/services/PPCAdvertising';
import SocialMediaMarketing from './components/services/SocialMediaMarketing';
import ContentMarketing from './components/services/ContentMarketing';
import EmailMarketing from './components/services/EmailMarketing';
import ContentCreation from './components/services/ContentCreation';
import AboutPage from './components/pages/About';
import ContactPage from './components/pages/Contact';
import FeaturesPage from './components/pages/Features';
import PricingPage from './components/pages/Pricing';
import TestimonialsPage from './components/pages/Testimonials';
import CaseStudiesPage from './components/pages/CaseStudies';
import CaseStudyDetail from './components/pages/CaseStudyDetail';
import Chatbot from './components/Chatbot';
import ComparisonSection from './components/ComparisonSection';
import AIFeatures from './components/AIFeatures';
import ExitIntent from './components/ExitIntent';
import OnboardingQuestionnaire from './components/onboarding/OnboardingQuestionnaire';

export default function App() {
  const user = useAuthStore(state => state.user);
  const checkOnboardingStatus = useAuthStore(state => state.checkOnboardingStatus);
  const [isCheckingOnboarding, setIsCheckingOnboarding] = useState(true);
  const [needsOnboarding, setNeedsOnboarding] = useState(false);

  useEffect(() => {
    const checkUserOnboardingStatus = async () => {
      if (user && user.email) {
        const hasCompletedOnboarding = await checkOnboardingStatus(user.email);
        setNeedsOnboarding(!hasCompletedOnboarding);
      } else {
        setNeedsOnboarding(false);
      }
      setIsCheckingOnboarding(false);
    };

    checkUserOnboardingStatus();
  }, [user, checkOnboardingStatus]);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {user ? <AuthHeader /> : <Navigation />}
        <Routes>
          <Route path="/" element={
            user ? (
              <Navigate to="/dashboard" />
            ) : (
              <div className="pt-16">
                <Hero />
                <TrustedBrands />
                <Benefits />
                <HowItWorks />
                {/* <Services /> */}
                <ComparisonSection />
                <AIFeatures />
                {/* <Pricing /> */}
                <Testimonials />
                {/* <About /> */}
                {/* <Contact /> */}
                <Footer />
                <ExitIntent />
              </div>
            )
          } />
          <Route path="/services/seo" element={<SEOServices />} />
          <Route path="/services/ppc-advertising" element={<PPCAdvertising />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/content-creation" element={<ContentCreation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/onboarding" element={
            <ProtectedRoute>
              <OnboardingQuestionnaire />
            </ProtectedRoute>
          } />
          <Route path="/dashboard/*" element={
            <ProtectedRoute>
              {isCheckingOnboarding ? (
                <div className="flex items-center justify-center h-screen">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                </div>
              ) : (
                needsOnboarding ? <Navigate to="/onboarding" /> : <Dashboard />
              )}
            </ProtectedRoute>
          } />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}