import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../screenshots/ProfileImage.jpeg';

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Full Stack Developer", "Web Developer", "Project Manager"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-5xl font-bold">Hi, I'm Mohamed Shafici</h1>
        <p className="text-xl mt-4">
          A <span className="text-teal-400">{titles[titleIndex]}</span> with 1 years of commercial experience creating successful websites.
        </p>
        <Link to="/projects">
          <button className="mt-6 px-6 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500">
            See my projects I built so far!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
