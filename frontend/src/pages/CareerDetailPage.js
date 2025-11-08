import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import { BookText, DollarSign, Brain, CheckSquare, ArrowLeft } from 'lucide-react';

// --- IMAGE MAP ---
// This "maps" your career titles to the images in your /public/roadmaps/ folder.
// The key (e.g., "Data Scientist") must EXACTLY match the title in your database.
const roadmapImageMap = {
  "Data Scientist": "/roadmaps/data-scientist.png",
  "Business Analyst": "/roadmaps/business-analyst.png",
  "Software Engineer": "/roadmaps/software-engineer.png",
  "Computer Programmer": "/roadmaps/computer-programmer.png",
  "Engineer": "/roadmaps/Engineer.png",
   "Medical": "/roadmaps/Medical.png",
    "Writer": "/roadmaps/Writer.png",
    "Lawyer": "/roadmaps/Lawyer.png",
    "Banking": "/roadmaps/Banking.png",
    "Social Worker": "/roadmaps/Social Worker.png",
    "Athlete": "/roadmaps/Athlete.jpg",
   "Computer analyst": "/roadmaps/Computer analyst.jpg",
   "Leader": "/roadmaps/Leader.jpg", 
    "Police Force": "/roadmaps/Police Force.jpg",
    "Poet": "/roadmaps/Poet.png",

  // Add all your other careers and their image paths here
};
const defaultRoadmapImage = "/roadmaps/default.png"; // A fallback image

// --- NEW Component to render the roadmap ---
function RoadmapDisplay({ career }) {
  // Find a matching image from our map. Case-insensitive check.
  const mappedImage = Object.keys(roadmapImageMap).find(
    (key) => key.toLowerCase() === career.title.toLowerCase()
  );

  const imageUrl = roadmapImageMap[mappedImage] || defaultRoadmapImage;

  return (
    <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
      <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
        <BookText size={24} className="mr-3 text-indigo-600 dark:text-indigo-400" />
        Your Learning Roadmap
      </h2>
      
      {/* --- This is the new part --- */}
      {/* We no longer use career.roadmap. We show the image instead. */}
      <div className="mt-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
        <img 
          src={imageUrl} 
          alt={`Roadmap for ${career.title}`} 
          className="w-full h-auto object-contain" 
        />
      </div>
    </div>
  );
}


function CareerDetailPage() {
  const { id } = useParams(); 
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await api.get(`/careers/${id}`);
        
        if (data.success) {
          setCareer(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching career details.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchCareer();
  }, [id]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error || !career) {
    return <div className="text-center text-red-500">{error || 'Career not found.'}</div>;
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Link
        to="/my-results"
        className="mb-6 inline-flex items-center text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to my results
      </Link>

      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        {/* ... (All the other details: title, description, skills) ... */}
        
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          {career.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          {career.jobDescription}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 dark:border-gray-700 md:grid-cols-2">
          {/* Qualifications */}
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              <CheckSquare size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Qualifications
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {career.qualifications}
            </p>
          </div>

          {/* Average Salary */}
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              <DollarSign size={20} className="mr-2 text-green-600 dark:text-green-400" />
              Average Salary
            </h3>
            <p className="mt-2 text-lg font-bold text-gray-700 dark:text-gray-300">
              {career.averageSalary}
            </p>
          </div>

          {/* Skills Required */}
          <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-700 md:col-span-2">
            <h3 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
              <Brain size={20} className="mr-2 text-purple-600 dark:text-purple-400" />
              Skills Required
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {career.skillsRequired.map((skill) => (
                <span key={skill} className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- ROADMAP SECTION --- */}
        {/* This now calls our new component */}
        <RoadmapDisplay career={career} />

      </div>
    </div>
  );
}

export default CareerDetailPage;