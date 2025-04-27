import React from 'react';
import { FaDownload } from 'react-icons/fa';

import abhinav from '../assets/karan.jpg';

function Hero() {
  return (
    <section id="about" className="pt-20 min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm Karan Singh Pal
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Web Developer | B.Tech CSE Student at LPU
            </p>
            <p className="text-lg text-gray-700 mb-8">
            I am a passionate web developer currently pursuing a B.Tech in Computer Science at Lovely Professional University, Phagwara. I am a motivated and results-driven Computer Science and Engineering graduate seeking a challenging position as a Web Developer within a large organization. I offer a strong foundation in Java, C++, Data Structures and Algorithms, React.js, Node.js, PHP, MongoDB, data analysis, and project management. I have a proven ability to drive efficiency, deliver successful outcomes, and collaborate within cross-functional teams.
            </p>
            <a
              href="/KaranCV.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={abhinav}
              alt="Karan"
              className="w-64 h-64 rounded-full shadow-lg border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;