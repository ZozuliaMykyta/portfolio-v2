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
    <div className="dark-bg pt-5 pb-8 px-4 sm:px-6 md:px-8 2xl:px-9">
      <h2 className="text-white text-[28px] sm:text-[30px] md:text-[32px] 2xl:text-[28px] font-bold mb-2.5">
        About
      </h2>
      <p className="text-white text-[16px] sm:text-[20px] md:text-[22px] 2xl:text-[18px] leading-relaxed">
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
      <h3 className="mt-5 text-[24px] sm:text-[25px] md:text-[26px] 2xl:text-[24px] font-bold text-white">
        What I Do
      </h3>
      <div className="mt-4 flex flex-col 2xl:flex-row items-center justify-between gap-4 sm:gap-5 2xl:gap-7">
        {whatIDo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start justify-between gap-3 md:gap-3.5 rounded-[9px] border-[3px] border-solid border-[#625839] bg-[#60594B] p-3 md:pr-3.5 w-full 2xl:w-1/2 2xl:min-w-0"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-32 lg:w-36 2xl:w-auto h-32 md:h-auto object-cover md:object-contain rounded-md md:rounded-none flex-shrink-0"
            />
            <div className="pb-1.5 w-full">
              <h4 className="mt-2 md:mt-4 text-white text-[18px] 2xl:text-[16px] font-family-inter font-bold">
                {item.title}
              </h4>
              <p className="text-[#D1D1CD] font-bold text-[15px] md:text-[22px] 2xl:text-[13px] mt-2 md:mt-3 leading-relaxed">
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
