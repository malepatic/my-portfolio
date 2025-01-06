import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      description: "An employment portal with real-time updates built with React and Spring Boot.",
      link: "https://github.com/CSYE-6200-Concepts-of-OOD-Fall-2024-S3/final-project-group6.git",
    },
    {
      title: "Hotel Booking System",
      description: "A hotel reservation system with real-time booking using React and Node.js.",
      link: "https://github.com/malepatic/LivinBooking.git",
    },
    {
      title: "Event Management",
      description: "A web application to manage events, users, and bookings built with React and AWS.",
      link: "https://github.com/malepatic/AWS.git",
    },
    {
      title: "Speaker Recognition Using Neural Networks",
      description:
        "Identifies Speaker Based on the voice of person, this project is done with the help of deep learning and neural networks.",
      link: "#",
    },
    {
      title: "New York Taxi Fare Prediction",
      description:
        "Machine learning model to predict the fare for a taxi ride in New York City given information like pickup date & time, pickup location, drop location and no. of passengers.",
      link: "https://github.com/malepatic/Newyork-taxi-fare-prediction.git",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-primary to-secondary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-semibold mb-12 text-white text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:-translate-y-2 group"
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>
              <a
                href={project.link}
                className="mt-auto inline-block bg-primary text-white py-2 px-6 rounded-lg font-medium text-lg text-center hover:bg-secondary transition-colors"
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