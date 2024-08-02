'use client';
const { createContext, useState } = require("react");


export const SectionContext = createContext();


export const SectionProvider = ({ children }) => {

  const [currentSection, setCurrentSection] = useState({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });

  const handleSectionChange = (current) => {
    console.log('Inn')
    setCurrentSection(() => {
      return {
        home: false,
        about: false,
        projects: false,
        contact: false,
        [current]: true,
      }
    });
  }

  return (
    <SectionContext.Provider value={{ currentSection, handleSectionChange }}>
      {children}
    </SectionContext.Provider>
  )
}

