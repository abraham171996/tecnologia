import React from "react";
import Capture from "../../assets/images/Capture.png"
const SolutionCard = ({image,title,description}) => {
  return (
    <div className="solution-card">
      <figure className="solution-figure">
        <img src={image} alt="" />
      </figure>
      <div className="card-title">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        
      </div>
      <hr />
      <div className="card-link">
        <a href="#">Learn more</a>
      </div>
    </div>
  );
};

export default SolutionCard;
