import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.scss";

const BeerContainer = (props) => {

    const { beers } = props;

    const mappedBeers = beers.map((data) => {
        
        return <BeerCard name={data.name} image={data.image_url} tagline={data.tagline} />
    })

    return (
        <div className="beers">
            {mappedBeers}
        </div>
    )

}

export default BeerContainer;