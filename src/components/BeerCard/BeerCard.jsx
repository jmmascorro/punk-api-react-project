import "./BeerCard.scss";
import { useState } from "react";

const BeerCard = ({ name, image, tagline, description, abv, ph, brewed }) => {
  
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  }

  if(showMoreInfo === false) {

    return (  
      <div className="beer-card">
        <h2 className="beer-card__name">{name}</h2>
        <img className="beer-card__image" src={image} alt={name} />
        <h2 className="beer-card__tagline">{tagline}</h2>
        <div>
          <button onClick={toggleMoreInfo}>More Info</button>
          </div>
      </div>
    )

  }else {
    return  (
      <div className="beer-card">
      <h2 className="beer-card__name">{name}</h2>
        <h2 className="more-info-description">{description}</h2>
        <h2 className="more-info-brewed">{brewed}</h2>
        <h2 className="more-info-abv">{abv}</h2>
        <h2 className="more-info-ph">{ph}</h2>
        <div>
          <button onClick={toggleMoreInfo}>Thank You</button>
          </div>
      </div>)
  }

    
};

export default BeerCard;