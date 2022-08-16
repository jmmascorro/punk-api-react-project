import "./BeerCard.scss";

const BeerCard = ({ name, image, }) => {
    return (
        <div className="beer-card">
          <img className="beer-card__image" src={image} alt={name} />
          <div className="beer-card__content">
            <h2 className="beer-card__heading">{name}</h2>
          </div>
        </div>
      );
};

export default BeerCard;