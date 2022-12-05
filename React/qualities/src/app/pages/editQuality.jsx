import React from "react";
import { useParams } from "react-router-dom";
import QualityForm from "../components/ui/qualityForm";
import { useQualities } from "../hooks/useQualities";
import qualityService from "../services/qualityService";

const EditQualityPage = () => {
  const id = useParams().id;
  const { getQuality, updateQuality } = useQualities();
  const quality = getQuality(id);

  const handleSubmit = (data) => {
    updateQuality(data);
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      <QualityForm data={quality} onSubmit={handleSubmit} />
    </>
  );
};

export default EditQualityPage;
