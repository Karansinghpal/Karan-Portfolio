import React, { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Predefined list of projects to display
  const selectedProjects = [
    {
      name: 'Tic Tac Toe Game',
      description: 'Developed game using DSA and Python',
      technologies: 'Python, DSA',
       // Add GitHub link if available
    },
    {
      name: 'Ecommerce Website',
      description: 'Developed and implemented Grocery selling website',
      technologies: 'HTML, CSS, JavaScript, Bootstrap, Node.js',
      githubLink: 'https://github.com/Karansinghpal/E-commerce-using-MERN-Stack'
    },
    {
      name: 'Music Player Website',
      description: 'Developed and implemented music player using Spotify API',
      technologies: 'HTML, CSS, JavaScript, React.js',
      githubLink: 'https://github.com/Karansinghpal'
    },
    {
      name: 'Income Tax Calculator',
      description: 'Worked in group to develop Income tax calculator',
      technologies: 'C++',
      
    },
    {
      name: 'Sports Website',
      description: 'Developed and implemented Sports Website',
      technologies: 'HTML, CSS, Bootstrap',
      githubLink: 'https://github.com/Karansinghpal '
    },
    {
      name: 'Water Irrigation System',
      description: 'Prepared a hardware named Water Irrigation system using Arduino',
      technologies: 'Arduino',
       // Add GitHub link if available
    },
   
  ];

  useEffect(() => {
    // Simulate loading completion
    setLoading(false);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        {loading ? (
          <p className="text-center">Loading projects...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View on GitHub
                    </a>
                  ) : (
                    <span className="text-gray-500">No GitHub link available</span>
                  )}
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500">
                      {project.technologies}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;