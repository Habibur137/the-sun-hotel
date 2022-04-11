import React from "react";
import "./service.css";

const Service = ({ service }) => {
  const { image, name, id, price } = service;
  return (
    <div className="single-service">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{price} Taka</p>
      <button>Check Out</button>
    </div>
  );
};

export default Service;
