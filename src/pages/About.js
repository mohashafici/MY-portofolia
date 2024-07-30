import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="max-w-2xl w-full text-center p-8">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          Hi, I'm mohamed shafici, a Full Stack Developer with over 1 years of  experience creating successful websites. I have a strong passion for coding and love to create dynamic and user-friendly web applications.
        </p>
        <p className="text-lg mb-4">
          My skills include front-end development with React, backend development with Node.js, and database management with postgresql,oracle  and MongoDB. I am also proficient in using tools like Git, Docker, and AWS for deployment and version control.
        </p>
        <p className="text-lg mb-6">
          In my spare time, I enjoy learning about new technologies, contributing to open source projects, and trends about web development.
        </p>
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center">
          {['HTML', 'CSS', 'JavaScript', 'React', 'Java','postgresql', 'Node.js', 'oracle','python', 'Git', 'Docker', 'c#'].map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 m-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
