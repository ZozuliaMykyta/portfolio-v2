import React from "react";
import personalPhoto from "../assets/img/avatar-02-compressed.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Info: React.FC = () => {
  const socialIcons = [
    {
      component: <FaInstagram />,
      link: "https://www.instagram.com/mykyta635/",
    },
    {
      component: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mykyta-zozulia-89ba76308/",
    },
    { component: <FaGithub />, link: "https://github.com/ZozuliaMykyta" },
  ];

  const data = {
    gmail: "zozuliamykyta635@gmail.com",
    location: "Slovakia, Presov",
  };

  return (
    <div>
      <img
        src={personalPhoto}
        alt="personal photo"
        className="w-[190px] h-[190px] border-[5px] border-[#4B3D10] rounded-xl"
      />
      <h2>Mykyta Zozulia</h2>
      <h3>Fullstack dev.</h3>
      <div>
        {socialIcons.map((icon, index) => (
          <a
            href={icon.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.component}
          </a>
        ))}
      </div>
      <div>
        <ul>
          <li>{data.gmail}</li>
          <li>{data.location}</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
