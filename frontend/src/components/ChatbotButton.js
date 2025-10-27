import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

function ChatbotButton() {
  return (
    <Link
      to="/ai-chat"
      // UPDATED: Black in light mode, White in dark mode
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center 
                 justify-center rounded-full bg-gray-900 text-white 
                 shadow-lg transition-transform hover:scale-110 
                 dark:bg-white dark:text-gray-900"
      aria-label="Open AI Chatbot"
    >
      <MessageCircle size={32} />
    </Link>
  );
}

export default ChatbotButton;