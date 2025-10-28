import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'How AI is Changing Job Interviews', date: 'Oct 28, 2025', excerpt: 'Explore the rise of AI-powered interview tools and how you can prepare for them.' },
  { id: 2, title: 'Top 10 In-Demand Tech Skills for 2026', date: 'Oct 25, 2025', excerpt: 'Stay ahead of the curve. See what skills employers are looking for.' },
  { id: 3, title: 'From Intern to Team Lead in 2 Years', date: 'Oct 22, 2025', excerpt: 'A real-life story of rapid career progression and the steps to take.' },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, trends, and advice to help you on your career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{post.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-auto text-blue-600 font-bold hover:underline"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;