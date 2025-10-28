import React from 'react';
import { Link } from 'react-router-dom';

const guides = [
  { id: 1, title: 'Roadmap to Software Developer', description: 'From zero to hero. Learn the path to becoming a successful software developer.', icon: '💻' },
  { id: 2, title: 'Breaking into Data Science', description: 'Master the skills, tools, and techniques to become a data scientist.', icon: '📊' },
  { id: 3, title: 'The Ultimate UI/UX Guide', description: 'A complete guide to user interface and user experience design.', icon: '🎨' },
];

const CareerGuidePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your comprehensive roadmaps to in-demand tech careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="text-6xl mb-4" role="img" aria-label="icon">{guide.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{guide.description}</p>
              <Link
                to={`/career-guide/${guide.id}`}
                className="w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                View Guide
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerGuidePage;