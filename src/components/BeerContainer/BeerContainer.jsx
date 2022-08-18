import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.scss";

const BeerContainer = (props) => {

    const { beers } = props;

    const mappedBeers = beers.map((data) => {
        
        return <BeerCard name={data.name} image={data.image_url} tagline={data.tagline} brewed={data.first_brewed.slice(3, 7)}/>
    })

    return (
        <div className="beers">
            {mappedBeers}
        </div>
    )

}

export default BeerContainer;