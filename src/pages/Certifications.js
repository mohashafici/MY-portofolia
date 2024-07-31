// src/pages/Certifications.js
import React from 'react';
import BadgeImage from '../screenshots/introduction-to-data-science.png';

const Certifications = () => {
    return (
      <div className="bg-gray-900 text-white min-h-screen p-8"> {/* Applied background and text color */}
        <div className="container mx-auto my-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
          <div className="flex flex-col items-center">
            <div className="bg-white text-black shadow-md rounded-lg p-4 mb-4">
              <img src={BadgeImage} alt="Cisco Introduction to Data Science Badge" className="w-32 h-auto mb-2" />
              <p className="text-lg">Introduction to Data Science - Cisco Networking Academy</p>
            </div>
            {/* Add more certifications as needed */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Certifications;
