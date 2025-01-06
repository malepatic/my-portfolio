import React from "react";
import photo from "../photo.jpeg"; // Correct path to your image file

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(9vh-99rem)] bg-gradient-to-b from-primary to-secondary text-center text-white py-12 pt-32 sm:py-8 sm:pt-24" // Reduced height calculation and padding adjustments
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Photo Section */}
        <div className="mb-8">
          <div className="relative inline-block bg-pink-500 rounded-full p-2 shadow-lg">
            <img
              src={photo} // Use imported image
              alt="Chaitanya Malepati"
              className="w-40 h-40 sm:w-32 sm:h-32 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Name Section */}
        <h2 className="text-4xl sm:text-3xl font-bold mb-4 animate__animated animate__fadeInDown animate__delay-1s">
          Hello, I'm <span className="text-pink-300">Chaitanya Malepati</span>
        </h2>

        {/* Description */}
        <p className="text-xl max-w-3xl mx-auto mb-8 animate__animated animate__fadeInUp animate__delay-2s sm:text-lg sm:max-w-full">
          I'm a passionate full-stack developer with a focus on building modern,
          responsive, and scalable web applications. I specialize in React.js,
          Node.js, and cloud technologies like AWS. Currently pursuing a
          Master's in Computer Software Engineering at Northeastern University.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 animate__animated animate__fadeInUp animate__delay-3s">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-4xl sm:text-3xl transition-transform transform hover:scale-125 hover:shadow-lg"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-4xl sm:text-3xl transition-transform transform hover:scale-125 hover:shadow-lg"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-4xl sm:text-3xl transition-transform transform hover:scale-125 hover:shadow-lg"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-4xl sm:text-3xl transition-transform transform hover:scale-125 hover:shadow-lg"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;