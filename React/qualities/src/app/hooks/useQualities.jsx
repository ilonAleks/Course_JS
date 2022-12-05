import React, { useContext } from "react";

const QualitiesContext = React.createContext();
export const useQualities = () => {
  return useContext(QualitiesContext);
};
const qualities = [{ id: 123, name: "NAME" }];
export const QualitiesProvider = ({ children }) => {
  return (
    <QualitiesContext.Provider value={qualities}>
      {children}
    </QualitiesContext.Provider>
  );
};
