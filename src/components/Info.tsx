import React from "react";
import personalPhoto from "../assets/img/avatar-02-compressed.webp";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Info: React.FC = () => {
  const socialIcons = [
    {
      component: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mykyta-zozulia-89ba76308/",
      color: "rgba(54,98,227,1)",
    },
    {
      component: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/ZozuliaMykyta",
      color: "rgba(204,192,192,1)",
    },
  ];

  const data = {
    gmail: "zozuliamykyta635@gmail.com",
    location: "Slovakia, Presov",
  };

  return (
    <div className="flex flex-col justify-center items-center text-center text-ash-rose font-family-inter px-4 sm:px-6 2xl:px-8 py-5 sm:py-7 dark-bg">
      <img
        src={personalPhoto}
        alt="personal photo"
        fetchPriority="high"
        className="w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] border-[4px] sm:border-[5px] border-solid border-custom-brown rounded-xl mt-[-80px] sm:mt-[-95px]"
      />
      <h2 className="mt-2.5 text-[22px] sm:text-[26px] font-bold">
        Mykyta Zozulia
      </h2>
      <h3 className="text-[14px] sm:text-[16px] font-medium py-2 sm:py-2.5 px-4 sm:px-5 border-[1px] border-custom-brown rounded-[6px] bg-[#272522] mt-[10px]">
        Fullstack dev.
      </h3>
      <div className="mt-[28px] sm:mt-[34px] flex justify-center items-center gap-3 sm:gap-4">
        {socialIcons.map((icon, index) => (
          <a
            href={icon.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
            className="text-[20px] sm:text-[24px] border-[1px] border-solid p-1 sm:p-1.5 rounded-[5px] 
                       transition-all duration-300 ease-in-out
                       hover:scale-110 hover:-translate-y-1
                       active:scale-95 active:translate-y-0"
            style={{ color: icon.color, borderColor: icon.color }}
          >
            {icon.component}
          </a>
        ))}
      </div>
      <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-xl bg-[#3B3729]">
        <ul className="text-[11px] sm:text-[13px] font-medium flex flex-col justify-center items-start gap-4 sm:gap-5">
          <li className="flex justify-between items-center gap-3 sm:gap-4 border-b border-b-[rgba(0,0,0,0.10)] pb-4 sm:pb-5">
            <div className="p-1.5 sm:p-2 bg-black rounded-[4px]">
              <MdEmail className="text-[16px] sm:text-[20px]" />
            </div>
            <span className="break-words text-[10px] sm:text-[13px]">
              {data.gmail}
            </span>
          </li>
          <li className="flex justify-between items-center gap-4 sm:gap-6">
            <div className="p-1.5 sm:p-2 bg-black rounded-[4px]">
              <FaLocationDot className="text-[16px] sm:text-[20px]" />
            </div>
            <span className="text-[11px] sm:text-[13px]">{data.location}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
