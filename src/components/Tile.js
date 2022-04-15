import React, { useState } from "react";

const Tile = ({ name, image, specialty, gr, highestMedalAchieved, weight }) => {
  const [isActive, setInactive] = useState(false);
  function clickHandler(){
    setInactive(!isActive)
  }
  return (
    <div className='pigTile pigTileSize' onClick={clickHandler}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className= {isActive ? "inactive" : "active"}>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight} </p>
        <p>Greased?: {gr ? "true" : "false"}</p>
        <p>Highest Medal: {highestMedalAchieved}</p>
      </div>
    </div>
  );
};

export default Tile;
