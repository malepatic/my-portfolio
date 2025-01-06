import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-primary to-secondary py-6 text-center text-white"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-3 animate__animated animate__fadeInDown">
          Contact Me
        </h2>
        <p className="text-lg mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Feel free to reach out for job opportunities, or any inquiries.
        </p>

        {/* Contact Buttons */}
        <div className="space-y-3">
          <a
            href="mailto:malepati.c@northeastern.edu"
            className="bg-white text-primary py-2 px-5 rounded-full font-semibold text-sm hover:bg-gray-200 transition transform hover:scale-105"
          >
            Email: malepati.c@northeastern.edu
          </a>
        </div>

        {/* Social Icons Section */}
        <div className="mt-6 flex justify-center space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
          <a
            href="https://linkedin.com/in/chaitanya-malepati"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-xl transition transform hover:scale-125"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/malepatic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-xl transition transform hover:scale-125"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://x.com/logan_wolf21/status/1845462473647812831?s=61"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-xl transition transform hover:scale-125"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/chaitanya.069"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 text-xl transition transform hover:scale-125"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;