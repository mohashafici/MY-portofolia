import React from 'react';
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid';

const ProjectCard = ({ name, description, language, html_url }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <CodeBracketSquareIcon className="h-12 w-12 text-teal-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <span className="text-teal-400 font-bold">{language}</span>
      <div className="mt-4">
        <a href={html_url} className="text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
