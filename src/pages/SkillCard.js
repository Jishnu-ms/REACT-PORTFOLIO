import React from "react";

const SkillCard = ({ name, image }) => {
  return (
    <div className="skill-card text-center shadow p-4 d-flex flex-column align-items-center justify-content-center">
      <h3 className="mb-3">{name}</h3>
      <img
        src={image}
        alt={`${name} logo`}
        className="img-fluid skill-image"
        style={{ maxWidth: "120px", marginBottom: "15px" }}
      />
    </div>
  );
};

export default SkillCard;
