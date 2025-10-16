import React from "react";
import frontendImg from "../../assets/img/about/frontend.jpg";
import backendImg from "../../assets/img/about/backend.jpg";

const AboutMe: React.FC = () => {
  const whatIDo = [
    {
      title: "Web Development",
      description:
        "With a solid stack of React.js, Next.js, TypeScript, and Tailwind CSS, I transform designs into clean, user-friendly interfaces that scale.",
      img: frontendImg,
    },
    {
      title: "Backend Development",
      description:
        "Skilled in Node.js, Express.js, TypeScript, and MongoDB, I build scalable REST APIs and efficient server-side solutions with solid auth, validation, and Docker-based deployments.",
      img: backendImg,
    },
  ];

  return (
    <div className="dark-bg pt-7 pb-10 px-11">
      <h2 className="text-white text-[28px] font-bold mb-2.5">About</h2>
      <p className="text-white">
        I'm Mykyta — a Full-Stack MERN developer with almost 4 years of
        experience. I started with frontend and, driven by a desire to bring my
        own ideas to life on the web, I expanded into backend technologies to
        build end-to-end products. I took a short break to enroll in university,
        then returned to development and have been actively coding since.
        <br />
        <br /> I've had freelance experience, iterating quickly from concept to
        deployment. I've also built small websites for students as separate
        projects. I focus on clean, maintainable code, performance, and a
        thoughtful user experience.
      </p>
      <h3 className="mt-5 text-[24px] font-bold text-white">What I Do</h3>
      <div className="mt-4 flex items-center justify-between gap-7">
        {whatIDo.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-3.5 rounded-[9px] border-[3px] border-solid border-[#625839] bg-[#60594B] pr-3.5"
          >
            <img src={item.img} alt={item.title} />
            <div>
              <h4 className="mt-4 text-white text-[16px] font-family-inter font-bold">
                {item.title}
              </h4>
              <p className="text-[#D1D1CD] font-bold text-[13px] mt-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
