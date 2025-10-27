import React from 'react';

function AiChatPage() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        AI Career Chatbot
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        This is where your AI-powered chatbot (like from OpenAI) will live.
      </p>
      
      {/* You can build your chat interface here */}
      <div className="mt-6 h-96 rounded-md border border-gray-300 bg-gray-100 p-4 dark:border-gray-700 dark:bg-gray-900">
        <p className="text-gray-500 dark:text-gray-400">Chatbot UI goes here...</p>
      </div>
    </div>
  );
}

export default AiChatPage;