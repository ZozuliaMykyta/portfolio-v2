import React from "react";
import { IoPerson } from "react-icons/io5";
import { CiMug1 } from "react-icons/ci";
import { FaLaptopCode, FaCode } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { useSectionContext } from "../contexts/SectionContext";

const SectionNav: React.FC = () => {
  const { currentSection, setCurrentSection } = useSectionContext();

  const sections = [
    { label: "About", icon: <IoPerson /> },
    { label: "Experience", icon: <CiMug1 /> },
    { label: "Skills", icon: <FaLaptopCode /> },
    { label: "Projects", icon: <FaCode /> },
    { label: "Contact", icon: <RiContactsBook3Line /> },
  ];

  const handleSectionClick = (label: string) => {
    setCurrentSection(label.toLowerCase());
  };

  return (
    <div className="2xl:py-8 py-4 2xl:px-7 px-4 flex 2xl:flex-col flex-row 2xl:justify-between justify-center items-center 2xl:gap-6 gap-2 dark-bg 2xl:w-auto w-auto mx-auto flex-wrap">
      {sections.map((section, index) => {
        const isActive = currentSection === section.label.toLowerCase();

        return (
          <button
            key={index}
            className={`bg-[#3B3729] rounded-[6px] w-[90px] md:w-[116px] 2xl:w-[76px] 2xl:py-2.5 py-3 flex flex-col justify-center items-center 2xl:gap-[3px] gap-1 cursor-pointer flex-shrink-0 ${
              isActive ? "bg-[#B7A261]" : ""
            }`}
            onClick={() => handleSectionClick(section.label)}
          >
            <div className="text-[20px] md:text-4xl 2xl:text-[24px]">
              {section.icon}
            </div>
            <h6 className="text-black text-[13px] md:text-[18px] 2xl:text-[12px] font-bold text-center">
              {section.label}
            </h6>
          </button>
        );
      })}
    </div>
  );
};

export default SectionNav;
