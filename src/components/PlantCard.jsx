import React, { useState } from "react";

function PlantCard({ plant }) {
  const [stock, setStock] = useState(true)

  function handleToggle(){
    setStock(!stock)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>

      <button 
          className="primary"
          onClick={handleToggle}
      >
        {stock ? "In Stock" : "Out of Stock"}
      </button>
      
    </li>
  );
}

export default PlantCard;
