import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.scss";

const BeerContainer = (props) => {

    const { beers } = props;

        const mappedBeers = beers.map((data) => {
        
            return (
                <BeerCard name={data.name} image={data.image_url} brewed={data.first_brewed}
                tagline={data.tagline} description={data.description} abv={data.abv} ph={data.ph}/> 
            )
            })
    
        return (
            <div className="beers">
                {mappedBeers}
            </div>
        )

    }

export default BeerContainer;