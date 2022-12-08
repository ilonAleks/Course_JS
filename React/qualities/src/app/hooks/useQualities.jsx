import React, { useContext, useState, useRef, useEffect } from "react";
import qualityService from "../services/qualityService";

const QualitiesContext = React.createContext();
export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const prevState = useRef();
  useEffect(() => {
    const getQualities = async () => {
      try {
        const { content } = await qualityService.fetchAll();
        setQualities(content);
        setIsLoading(false);
      } catch (error) {
        errorCather(error);
      }
    };
    getQualities();
  }, []);

  const getQuality = (id) => {
    return qualities.find((q) => q._id === id);
  };

  const updateQuality = async ({ _id: id, ...data }) => {
    try {
      const { content } = await qualityService.update(id, data);
      setQualities((prevState) =>
        prevState.map((item) => {
          if (item._id === content._id) {
            return content;
          }
          return item;
        })
      );
      return content;
    } catch (error) {
      errorCather(error);
    }
  };

  const addQuality = async (data) => {
    try {
      const { content } = await qualityService.create(data);
      setQualities((prevState) => [...prevState, content]);
      return content;
    } catch (error) {
      errorCather(error);
    }
  };

  const deleteQuality = async (id) => {
    prevState.current = qualities;
    try {
      const { content } = await qualityService.delete(id);
      setQualities((prevState) => {
        return prevState.filter((item) => item._id !== content._id);
      });
    } catch (error) {
      errorCather(error);
    }
  };

  useEffect(() => {
    if (error !== null) {
      console.error(error);
      setError(null);
    }
  }, [error]);

  function errorCather(error) {
    const { message } = error.response.data;
    setError(message);
  }
  return (
    <QualitiesContext.Provider
      value={{
        qualities,
        getQuality,
        updateQuality,
        addQuality,
        deleteQuality,
      }}
    >
      {!isLoading ? children : <h1>Qualities loading...</h1>}
    </QualitiesContext.Provider>
  );
};
