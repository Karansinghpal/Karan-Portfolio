import React from 'react';

function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      year: '2022-2026',
    },
    {
      degree: '12th Standard',
      institution: "Mahavir Inter Collage",
      location: 'Jalaun, Uttar Pradesh',
      year: '2020',
    },
    {
      degree: '10th Standard',
      institution: "Mahavir Inter Collage",
      location: 'Jalaun, Uttar Pradesh',
      year: '2018',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500">{edu.location}</p>
              <p className="text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;