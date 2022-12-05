import React, { useContext, useState, useEffect } from "react";
import qualityService from "../services/qualityService";

const QualitiesContext = React.createContext();
export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getQualities = async () => {
      try {
        const { content } = await qualityService.fetchAll();
        setQualities(content);
        setIsLoading(false);
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    };
    getQualities();
  }, []);
  return (
    <QualitiesContext.Provider value={{ qualities, isLoading }}>
      {!isLoading ? children : <h1>Qualities loading...</h1>}
    </QualitiesContext.Provider>
  );
};
