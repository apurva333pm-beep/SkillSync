import React from 'react';

// We'll create some "mock" counsellor data here.
// Later, this data will come from your backend.
const counsellors = [
  {
    id: 1,
    name: 'Apurva',
    specialty: 'Career Coach & Tech Industry Expert',
    bio: 'With over 15 years in tech, Apurva helps you navigate the complexities of the IT world and land your dream job.',
    price: '₹3,500',
    // --- Generated Professional image 1 ---
    imageUrl: 'https://image.pollinations.ai/prompt/professional%20woman%20in%20blazer%20holding%20tablet%2C%20studio%20lighting%2C%20dark%20hair%2C%20confident%20pose?width=400&height=400&seed=1'
  },
  {
    id: 2,
    name: 'Disha',
    specialty: 'Startup & Entrepreneurship Guide',
    bio: 'Founder of two successful startups, Disha provides invaluable insights for aspiring entrepreneurs.',
    price: '₹4,000',
    // --- Generated Professional image 2 ---
    imageUrl: 'https://image.pollinations.ai/prompt/professional%20woman%20in%20blazer%20holding%20notebook%2C%20studio%20lighting%2C%20light%20brown%20hair%2C%20smiling?width=400&height=400&seed=2'
  },
  {
    id: 3,
    name: 'Suvanwita',
    specialty: 'Data Science & AI Careers',
    bio: 'A data scientist with FAANG experience, Suvanwita can guide you into the world of AI and machine learning.',
    price: '₹4,200',
    // --- Generated Professional image 3 ---
    imageUrl: 'https://image.pollinations.ai/prompt/professional%20woman%20in%20suit%20holding%20documents%2C%20office%20background%2C%20blonde%20hair%2C%20focused?width=400&height=400&seed=3'
  },
  {
    id: 4,
    name: 'Srujan',
    specialty: 'UI/UX & Product Design',
    bio: 'Passionate about user-centric design, Srujan helps you build beautiful and intuitive digital products.',
    price: '₹3,800',
    // --- Reusing image 1 for consistency ---
    imageUrl: 'https://image.pollinations.ai/prompt/professional%20woman%20in%20blazer%20holding%20tablet%2C%20studio%20lighting%2C%20dark%20hair%2C%20confident%20pose?width=400&height=400&seed=1'
  },
  {
    id: 5,
    name: 'Aayushi',
    specialty: 'Cloud Computing & DevOps',
    bio: 'Certified AWS and Azure expert, Aayushi provides a clear roadmap for a career in cloud infrastructure.',
    price: '₹4,500',
    // --- Reusing image 2 for consistency ---
    imageUrl: 'https://image.pollinations.ai/prompt/professional%20woman%20in%20blazer%20holding%20notebook%2C%20studio%20lighting%2C%20light%20brown%20hair%2C%20smiling?width=400&height=400&seed=2'
  },
  {
    id: 6,
    name: 'Aditi',
    specialty: 'Cybersecurity & Networking',
    bio: 'A certified ethical hacker, Aditi guides you through the high-demand field of cybersecurity.',
    price: '₹4,300',
    // --- Reusing image 3 for consistency ---
    imageUrl: 'https://image.pollinations.ai/prompt/professional%20woman%20in%20suit%20holding%20documents%2C%20office%20background%2C%20blonde%20hair%2C%20focused?width=400&height=400&seed=3'
  },
];

function CounsellorPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-20"> {/* Added pt-20 for navbar offset */}
            <div className="container mx-auto px-4 py-16">

                {/* --- Header --- */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Meet Our Expert Counsellors
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get personalized, one-on-one guidance from industry professionals dedicated to your success.
                    </p>
                </div>

                {/* --- Counsellor Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* We loop over the 'counsellors' array here */}
                    {counsellors.map((counsellor) => (
                        <div
                            key={counsellor.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            <img
                                src={counsellor.imageUrl}
                                alt={counsellor.name}
                                className="w-full h-64 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{counsellor.name}</h3>
                                <p className="text-blue-600 font-medium mb-4">{counsellor.specialty}</p>
                                <p className="text-gray-700 mb-6 flex-grow">{counsellor.bio}</p>

                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-2xl font-bold text-gray-800">{counsellor.price}</span>
                                    <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default CounsellorPage;