import React from 'react';

const stories = [
  { id: 1, name: 'Priya Sharma', newRole: 'Software Engineer @ Google', quote: '"SkillSync gave me the confidence and the exact roadmap I needed. The AI interview practice was a game-changer!"', image: 'https://images.unsplash.com/photo-1701096374092-bb70915fdc5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' },
  { id: 2, name: 'Rohan Mehta', newRole: 'UX Designer @ Microsoft', quote: '"I always had the passion, but SkillSync helped me build a portfolio that got me noticed. The counsellor sessions were invaluable."', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' },
  { id: 3, name: 'Ananya Iyer', newRole: 'Data Analyst @ Amazon', quote: '"The personality test was scarily accurate! It pointed me to data analysis, a field I now love. Thank you, SkillSync!"', image: 'https://images.unsplash.com/photo-1740153204804-200310378f2f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' },
];

const SuccessStoriesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how SkillSync has helped others like you find their dream career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
              <img src={story.image} alt={story.name} className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500" />
              <p className="text-gray-700 italic text-lg mb-4">&ldquo;{story.quote}&rdquo;</p>
              <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
              <p className="text-blue-600 font-medium">{story.newRole}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;