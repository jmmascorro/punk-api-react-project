import "./BeerCard.scss";

const BeerCard = ({ name, image, tagline, brewed, abv }) => {
    return (
        <div className="beer-card">
          <h2 className="beer-card__name">{name}</h2>
          <img className="beer-card__image" src={image} alt={name} />
          <h2 className="beer-card__tagline">{tagline}</h2>
          <div>
            <button>More Info</button>
            </div>
        </div>
      );
};

export default BeerCard;