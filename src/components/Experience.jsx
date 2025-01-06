import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-[calc(100vh-3rem)] bg-gradient-to-b from-primary to-secondary py-12 sm:py-8" // Reduce section height for mobile
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-3xl font-semibold mb-8 text-white animate__animated animate__fadeInDown">
          Experience
        </h2>
        <div className="bg-gray-700 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:translate-y-2 transition-all transform md:w-3/4 sm:w-full mx-auto">
          <h3 className="text-2xl sm:text-xl font-semibold mb-4 text-primary">
            Full Stack Developer Intern
          </h3>
          <p className="text-lg mb-2 text-white">Young Minds Technology Solutions</p>
          <p className="text-lg text-white mb-4">Jan 2024 - Mar 2024</p>
          <ul className="mt-4 list-disc list-inside text-white">
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