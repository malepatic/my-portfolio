import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      description: "An employment portal with real-time updates built with React and Spring Boot.",
      link: "#",
    },
    {
      title: "Hotel Booking System",
      description: "A hotel reservation system with real-time booking using React and Node.js.",
      link: "#",
    },
    {
      title: "Event Management",
      description: "A web application to manage events, users, and bookings built with React and AWS.",
      link: "#",
    },
    {
      title: "Event Management",
      description: "A web application to manage events, users, and bookings built with React and AWS.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-primary to-secondary py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl font-semibold mb-12 text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 text-white p-8 rounded-2xl shadow-xl overflow-hidden group hover:bg-gray-700 transition-all transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary opacity-30 group-hover:opacity-50 transition-all"></div>
              <h3 className="text-3xl font-semibold mb-4 text-primary z-10">{project.title}</h3>
              <p className="text-lg mb-6 z-10">{project.description}</p>
              {/* Adding space between description and button */}
              <a
                href={project.link}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300 z-10"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;