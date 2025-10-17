import { useState, type ReactNode } from "react";
import { SectionContext } from "./SectionContext";

export const SectionProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<string>("about");

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
