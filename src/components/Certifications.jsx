import React from 'react';
import { FaMedal, FaTrophy, FaCertificate } from 'react-icons/fa';

function Certifications() {
  const certifications = [
    {
      category: "Coursera",
      items: ["Hands on C++"],
      icon: <FaCertificate className="text-2xl text-green-600" />
    },
    {
      category: "NPTEL",
      items: ["Cloud Computing"],
      icon: <FaCertificate className="text-2xl text-green-600" />
    },
    {
      category: "Coursera",
      items: ["HTML, CSS, JAVASCRIPT"],
      icon: <FaCertificate className="text-2xl text-green-600" />
    },
    {
      category: "Coursera",
      items: [
        "Server side JavaScript with Nodejs",
        "Dynamic Programming, Greedy Algorithms",
        "Approximation Algorithms and Linear Programming",
        "Build AI Apps with ChatGPT, Dall-E, and GPT4"
      ],
      icon: <FaMedal className="text-2xl text-blue-600" />
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Certifications & Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {cert.icon}
                <h3 className="text-xl font-semibold ml-2">{cert.category}</h3>
              </div>
              <ul className="space-y-2">
                {cert.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;