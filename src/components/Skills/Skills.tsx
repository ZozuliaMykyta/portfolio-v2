import React from "react";
import typeScript from "../../assets/img/icons/skills/typescript.svg";
import javaScript from "../../assets/img/icons/skills/javascript.svg";
import reactIcon from "../../assets/img/icons/skills/react.svg";
import nextjs from "../../assets/img/icons/skills/nextjs.svg";
import nodejs from "../../assets/img/icons/skills/node.svg";
import express from "../../assets/img/icons/skills/express.svg";
import mongodb from "../../assets/img/icons/skills/mongo.svg";
import tailwindcss from "../../assets/img/icons/skills/tailwind.svg";
import docker from "../../assets/img/icons/skills/docker.svg";
import github from "../../assets/img/icons/skills/github.svg";

const Skills: React.FC = () => {
  const skillsList = [
    { name: "TypeScript", icon: typeScript },
    { name: "JavaScript", icon: javaScript },
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextjs, bg: true },
    { name: "Node.js", icon: nodejs },
    { name: "Express", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Docker", icon: docker },
    { name: "GitHub", icon: github },
  ];
  return (
    <div className="dark-bg main-content">
      <h2 className="text-[28px] sm:text-[30px] md:text-[32px] 2xl:text-[28px] font-bold text-white">
        Skills
      </h2>
      <div className="flex justify-center items-center gap-4 sm:gap-5 md:gap-6 2xl:gap-7 flex-wrap text-center mt-6 sm:mt-7 md:mt-8">
        {skillsList.map((skill, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div
              key={skill.name}
              className="border-[1px] border-solid border-custom-brown rounded-[8px] p-2 sm:p-2.5 md:p-3 2xl:p-2.5 bg-white"
              style={{ boxShadow: "0 0 5.5px 1px #EFE0B2" }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-[48px] sm:w-[52px] md:w-[56px] 2xl:w-[60px]"
              />
            </div>
            <h6 className="mt-1.5 text-[16px] sm:text-[17px] md:text-[18px] 2xl:text-[19px] font-medium text-white">
              {skill.name}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
