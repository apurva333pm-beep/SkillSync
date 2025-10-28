import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './utils/ProtectedRoute';
import IntroductoryFormPage from './pages/IntroductoryFormPage';

// --- THIS IS THE FIX ---
// Changed './pagesS/AiChatPage' to './pages/AiChatPage'
import AiChatPage from './pages/AiChatPage'; 
// --- END OF FIX ---

import CareerAssessmentPage from './pages/CareerAssessmentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'; 
import CounsellorPage from './pages/CounsellorPage';
import CareerGuidePage from './pages/CareerGuidePage.js';
import BlogPage from './pages/BlogPage.js';
import SuccessStoriesPage from './pages/SuccessStoriesPage.js';
import HelpCenterPage from './pages/HelpCenterPage.js';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import TermsOfServicePage from './pages/TermsOfServicePage.js';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/career-guide" element={<CareerGuidePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/intro-form" element={<IntroductoryFormPage />} />
            <Route path="/ai-chat" element={<AiChatPage />} />
            <Route path="/my-results" element={<div>My Results Page</div>} />
            <Route path="/counsellors" element={<CounsellorPage />} />
            <Route path="/career-assessment" element={<CareerAssessmentPage />} />
            
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;