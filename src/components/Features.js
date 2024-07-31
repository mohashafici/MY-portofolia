import React from 'react';
import { BoltIcon, DevicePhoneMobileIcon, LightBulbIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid';

const features = [
  {
    icon: <BoltIcon className="h-12 w-12 text-teal-400" />,
    title: 'Fast',
    description: 'Fast load times and lag free interaction, my highest priority.',
  },
  {
    icon: <DevicePhoneMobileIcon className="h-12 w-12 text-teal-400" />,
    title: 'Responsive',
    description: 'My layouts will work on any device, big or small.',
  },
  {
    icon: <LightBulbIcon className="h-12 w-12 text-teal-400" />,
    title: 'Intuitive',
    description: 'Easy to use interfaces and intuitive UX/UI.',
  },
  {
    icon: <CodeBracketSquareIcon className="h-12 w-12 text-teal-400" />,
    title: 'Dynamic',
    description: 'Websites don\'t have to be static, I love making pages come to life.',
  },
];

const Features = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="Assets\Mohamed Shafici Abdirahman.pdf"
            className="text-teal-400 hover:underline"
            download
          >
            Download my resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
