import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import profileImage from '../screenshots/ProfileImage.jpeg';

const Home = () => {
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
          A  <span className="text-teal-400">Full Stack Developer</span> with 10 years of commercial experience creating successful websites.
        </p>
        <Link to="/projects"> {/* Use Link to navigate to the Projects page */}
          <button className="mt-6 px-6 py-2 bg-teal-400 text-gray-900 rounded hover:bg-teal-500">
            See my projects I built so far!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
