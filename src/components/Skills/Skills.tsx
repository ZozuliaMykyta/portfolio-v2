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
    { name: "Next.js", icon: nextjs },
    { name: "Node.js", icon: nodejs },
    { name: "Express", icon: express },
    { name: "MongoDB", icon: mongodb },
    { name: "Tailwind CSS", icon: tailwindcss },
    { name: "Docker", icon: docker },
    { name: "GitHub", icon: github },
  ];
  return (
    <div>
      {skillsList.map((skill) => (
        <div key={skill.name}>
          <img src={skill.icon} alt={skill.name} className="w-[60px]" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
