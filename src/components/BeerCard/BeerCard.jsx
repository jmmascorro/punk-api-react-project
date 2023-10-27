import "./BeerCard.scss";
import { useState } from "react";

const BeerCard = ({ name, image, tagline, description, abv, ph, brewed }) => {

  //useState for more info button
  const [showMoreInfo, setShowMoreInfo] = useState(false);

//handle function to toggle more info useState when button is clicked
  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  }

  //render two different beer cards when button is clicked using toggleMoreInfo on click
  if(showMoreInfo === false) {

    return (  
      <div className="beer-card">
        <h2 className="beer-card__name">{name}</h2>
        <img className="beer-card__image" src={image} alt={name} />
        <h2 className="beer-card__tagline">{tagline}</h2>
        <div>
          <button className="toggle-button" onClick={toggleMoreInfo}>More Info</button>
          </div>
      </div>
    )

  }else {
    return  (
      <div className="more-info-card">
        <h2 className="more-info-name">{name}</h2>
        <h2 className="more-info-description">{description}</h2>
        <h2 className="more-info-brewed">first-brewed: {brewed}</h2>
        <h2 className="more-info-abv">ABV: {abv}%</h2>
        <h2 className="more-info-ph">PH: {ph}</h2>
        <div>
          <button className="toggle-button" onClick={toggleMoreInfo}>Back To Beer</button>
          </div>
      </div>)
  }

    
};

export default BeerCard;