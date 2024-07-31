import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">My Portfolio</div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white mx-2">Projects</Link>
          <Link to="/certifications" className="text-gray-300 hover:text-white mx-2">Certifications</Link> {/* Added Certifications Link */}
          <Link to="/about" className="text-gray-300 hover:text-white mx-2">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
