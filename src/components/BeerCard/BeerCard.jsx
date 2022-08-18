import "./BeerCard.scss";

const BeerCard = ({ name, image, tagline, brewed }) => {
    return (
        <div className="beer-card">
          <h2 className="beer-card__name">{name}</h2>
          <img className="beer-card__image" src={image} alt={name} />
          <h2 className="beer-card__tagline">{tagline}</h2>
          <h2>{brewed}</h2>
        </div>
      );
};

export default BeerCard;