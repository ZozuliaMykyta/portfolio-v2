import React from "react";
import personalPhoto from "../assets/img/avatar-02-compressed.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Info: React.FC = () => {
  const socialIcons = [
    {
      component: <FaInstagram />,
      link: "https://www.instagram.com/mykyta635/",
      color: "rgba(231,121,117,1)",
    },
    {
      component: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mykyta-zozulia-89ba76308/",
      color: "rgba(54,98,227,1)",
    },
    {
      component: <FaGithub />,
      link: "https://github.com/ZozuliaMykyta",
      color: "rgba(204,192,192,1)",
    },
  ];

  const data = {
    gmail: "zozuliamykyta635@gmail.com",
    location: "Slovakia, Presov",
  };

  return (
    <div className="flex flex-col justify-center items-center text-center text-ash-rose font-family-inter bg-black px-[42px] py-9 border-[3px] border-solid border-custom-brown rounded-[13px]">
      <img
        src={personalPhoto}
        alt="personal photo"
        className="w-[190px] h-[190px] border-[5px] border-solid border-custom-brown rounded-xl mt-[-95px]"
      />
      <h2 className="mt-2.5 text-[26px] font-bold">Mykyta Zozulia</h2>
      <h3 className="text-[16px] font-medium py-2.5 px-5 border-[1px] border-custom-brown rounded-[6px] bg-[#272522] mt-[10px]">
        Fullstack dev.
      </h3>
      <div className="mt-[34px] flex justify-center items-center gap-4">
        {socialIcons.map((icon, index) => (
          <a
            href={icon.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[24px] border-[1px] border-solid p-1.5 rounded-[5px]"
            style={{ color: icon.color, borderColor: icon.color }}
          >
            {icon.component}
          </a>
        ))}
      </div>
      <div className="mt-10 p-5 rounded-xl bg-[#3B3729]">
        <ul className="text-[15px] font-medium flex flex-col justify-center items-start gap-5">
          <div className="flex justify-between items-center gap-6 border-b border-b-[rgba(0,0,0,0.10)] pb-5">
            <div className="p-2.5 bg-black rounded-[4px]">
              <MdEmail className="text-[20px]" />
            </div>
            <li>{data.gmail}</li>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="p-2.5 bg-black rounded-[4px]">
              <FaLocationDot className="text-[20px]" />
            </div>
            <li>{data.location}</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Info;
