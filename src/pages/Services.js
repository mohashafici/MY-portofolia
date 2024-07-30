import React from 'react';
import { AcademicCapIcon, DeviceMobileIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/solid';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">What I Do</h2>
          <p className="mt-4">Here are some of the services I offer</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <BoltIcon className="h-12 w-12 text-teal-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Fast</h3>
              <p className="mt-2">Fast load times and lag free interaction, my highest priority.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <DeviceMobileIcon className="h-12 w-12 text-teal-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Responsive</h3>
              <p className="mt-2">My layouts will work on any device, big or small.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <LightBulbIcon className="h-12 w-12 text-teal-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Intuitive</h3>
              <p className="mt-2">My layouts will work on any device, big or small.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <AcademicCapIcon className="h-12 w-12 text-teal-400 mx-auto" />
              <h3 className="text-2xl font-bold mt-4">Dynamic</h3>
              <p className="mt-2">Websites don't have to be static, I love making pages come to life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
