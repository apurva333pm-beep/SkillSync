import React from 'react';
// Import all the sections
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ChatbotButton from '../components/ChatbotButton';
// --- Import the two new sections ---
import CtaSection from '../components/CtaSection';
import ContactSection from '../components/ContactSection';

function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      
      {/* "Why Choose Us" Section */}
      <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700">
        <div className="h-px"></div>
      </div>
      <Features />
      
      {/* "How It Works" Section */}
      <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700">
        <div className="h-px"></div>
      </div>
      <HowItWorks />
      
      {/* --- ADDED: "Ready to Discover" Section --- */}
      <CtaSection />

      {/* --- ADDED: "Have Questions?" Section --- */}
      <ContactSection />
      
      {/* Floating Chatbot Button */}
      <ChatbotButton />
    </div>
  );
}

export default HomePage;