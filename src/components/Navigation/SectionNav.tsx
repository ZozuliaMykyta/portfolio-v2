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
    <div className="py-8 px-7 flex flex-col justify-between items-center gap-6 dark-bg">
      {sections.map((section, index) => {
        const isActive = currentSection === section.label.toLowerCase();

        return (
          <button
            key={index}
            className={`bg-[#3B3729] rounded-[6px] w-[76px] py-2.5 flex flex-col justify-center items-center gap-[3px] cursor-pointer ${
              isActive ? "bg-[#B7A261]" : ""
            }`}
            onClick={() => handleSectionClick(section.label)}
          >
            <div className="text-[24px]">{section.icon}</div>
            <h6 className="text-black text-[12px] font-bold">
              {section.label}
            </h6>
          </button>
        );
      })}
    </div>
  );
};

export default SectionNav;
