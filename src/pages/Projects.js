import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/mohashafici/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching the repositories:', error));
  }, []);

  return (
    <div className="bg-gray-900 text-white py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center">
          {repos.map(repo => (
            <div key={repo.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
              <ProjectCard
                name={repo.name}
                description={repo.description}
                language={repo.language}
                html_url={repo.html_url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
