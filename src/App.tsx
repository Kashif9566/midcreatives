import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import ComparisonSection from './components/ComparisonSection';
import AIFeatures from './components/AIFeatures';
import ExitIntent from './components/ExitIntent';
import OnboardingQuestionnaire from './components/onboarding/OnboardingQuestionnaire';
import Pricing from './components/Pricing';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';

function AppContent() {
  const user = useAuthStore(state => state.user);
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen bg-white">
      {!isAuthPage && (
        <div className="fixed top-0 left-0 right-0 z-50">
          {user ? <AuthHeader /> : <Navigation />}
        </div>
      )}
      <div className={!isAuthPage ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={
            <div>
              <Hero />
              <TrustedBrands />
              <Benefits />
              <Services />
              <HowItWorks />
              <ComparisonSection />
              <AIFeatures />
              <Pricing />
              <Testimonials />
              <About/>                
              <Footer />
              <ExitIntent />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
          <Route path="/get-started" element={user ? <Navigate to="/dashboard" /> : <Register />} />
          <Route path="/onboarding" element={<OnboardingQuestionnaire />} />
          {/* <Route path="/dashboard/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
          <Route path='/dashboard/*' element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}