import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "Go"],
      icon: "💻"
    },
    {
      category: "Database Technologies",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      icon: "🗄️"
    },
    {
      category: "Web Technologies",
      skills: ["React.js", "Express.js", "Spring Boot", "Node.js", "Tailwind CSS"],
      icon: "🌐"
    },
    {
      category: "Platforms",
      skills: ["AWS", "Docker"],
      icon: "⚙️"
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "IDEs", "Linux", "Tmux"],
      icon: "🔧"
    }
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-primary to-secondary py-16 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 animate__animated animate__fadeInDown">
          Technical Skills
        </h2>
        <div>
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-white">
                {category.icon} {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;