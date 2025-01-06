import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-[80vh] bg-gradient-to-b from-primary to-secondary py-8 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">
          Experience
        </h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-primary text-center mb-3">
            Full Stack Developer Intern
          </h3>
          <p className="text-base text-gray-300 text-center">
            Young Minds Technology Solutions
          </p>
          <p className="text-base text-gray-400 text-center mb-4">
            Jan 2024 - Mar 2024
          </p>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-300">
            <li>Developed user interfaces using React.js.</li>
            <li>Worked with Node.js for backend development and API integration.</li>
            <li>Improved application stability by fixing bugs and testing features.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;