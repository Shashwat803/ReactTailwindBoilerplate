// Create a new file ProgressContext.js
import React, { createContext, useState } from "react";

const MultiStepContext = createContext();

export const MultiStepProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <MultiStepContext.Provider value={{ currentPage, nextPage, prevPage }}>
      {children}
    </MultiStepContext.Provider>
  );
};

export const useMultiStep = () => React.useContext(MultiStepContext);
