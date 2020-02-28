import React from "react";

function Card({ clickHandler, id, image, name }) {
  return (
    <div className="col-4">
      <img
        src={image}
        alt={name}
        className="selected-card"
        onClick={() => clickHandler(id)}
      />
    </div>
  );
}

export default Card;