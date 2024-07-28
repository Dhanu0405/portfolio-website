import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: HTML, level: 90 },
    { name: "CSS", icon: CSS, level: 80 },
    { name: "JavaScript", icon: JavaScript, level: 85 },
    { name: "React", icon: ReactImg, level: 75 },
    { name: "GitHub", icon: GitHub, level: 70 },
    { name: "Node JS", icon: Node, level: 60 },
    { name: "Mongo DB", icon: Mongo, level: 65 },
    { name: "Tailwind", icon: Tailwind, level: 70 },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4"
            >
              <img
                className="w-20 mx-auto"
                src={skill.icon}
                alt={`${skill.name} icon`}
              />
              <p className="my-4">{skill.name}</p>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#0a192f] bg-opacity-75">
                <div className="w-3/4">
                  <p className="mb-2">{skill.name} Mastery</p>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-pink-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="mt-2">{skill.level}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
