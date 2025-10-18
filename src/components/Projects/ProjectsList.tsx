import React from "react";
import shopCo from "../../assets/img/projects/shop.co.jpg";
import weatherApp from "../../assets/img/projects/weather-app.jpg";
import podOfCast from "../../assets/img/projects/podofcast.jpg";

const ProjectsList: React.FC = () => {
  const projectsImages = [
    {
      src: shopCo,
      alt: "shop.co project screenshot",
      description: "Shop.co — MERN stack",
    },
    {
      src: shopCo,
      alt: "Eatly project screenshot",
      description: "Eatly — MERN stack",
    },
    {
      src: weatherApp,
      alt: "Weather App project screenshot",
      description: "Weather App — React + TypeScript",
    },
    {
      src: podOfCast,
      alt: "PodOfCast project screenshot",
      description: "Podofcast — React",
    },
  ];

  return (
    <div className="dark-bg pt-5 pb-8 px-9">
      <h2 className="text-white text-[28px] font-bold">Projects</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-6 mt-7">
        {projectsImages.map((project, index) => (
          <div
            key={index}
            className="border-[1.5px] border-solid border-custom-brown p-3.5 bg-[#403D32] rounded-[9px]"
          >
            <img
              src={project.src}
              alt={project.alt}
              className="max-w-[318px] border-[1.5px] border-solid border-white rounded-[9px]"
            />
            <p className="text-white mt-2 font-bold">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
