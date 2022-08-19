import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.scss";

const BeerContainer = (props) => {

    const { beers } = props;

    //map through beers data and render a beer card for each beer based on information 
    //passed to rendered Beer Card component
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