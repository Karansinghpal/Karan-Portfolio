import React from 'react';
import { FaCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

function Skills() {
  const skills = {
    technical: [
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'SQL',
      'HTML5/CSS3',
      'Git/GitHub',
      'C++',
      'Java',
      'Python',
      'PHP',
      'Data Structures & Algorithms',
    ],
    soft: [
      'Problem Solving',
      
      'Communication',
      'Time Management',
      'Adaptability',
      'Critical Thinking',
      'Leadership',
      'Attention to Detail',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaCode className="text-2xl text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaBrain className="text-2xl text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;