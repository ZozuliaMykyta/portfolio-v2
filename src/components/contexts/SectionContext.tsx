import { createContext, useContext } from "react";

type SectionContextType = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};
export { SectionContext };
