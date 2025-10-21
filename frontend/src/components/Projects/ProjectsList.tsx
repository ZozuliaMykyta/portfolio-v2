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
    <div className="dark-bg main-content">
      <h2 className="text-white text-[28px] sm:text-[30px] md:text-[32px] 2xl:text-[28px] font-bold">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-x-4 sm:gap-x-6 md:gap-x-8 2xl:gap-x-10 gap-y-3 sm:gap-y-4 md:gap-y-5 mt-4 sm:mt-5 md:mt-6">
        {projectsImages.map((project, index) => (
          <div
            key={index}
            className="border-[1.5px] border-solid border-custom-brown p-2.5 sm:p-2.5 md:p-3 2xl:p-3.5 bg-[#403D32] rounded-[9px]"
          >
            <img
              src={project.src}
              alt={project.alt}
              className="w-full h-27 sm:h-32 md:h-32 2xl:h-36 object-cover border-[1.5px] border-solid border-white rounded-[9px]"
            />
            <p className="text-white mt-2 font-bold text-[15px] md:text-[15.5px]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
