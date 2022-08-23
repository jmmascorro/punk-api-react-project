import NewBeerCard from "../NewBeerCard/NewBeerCard";
import "./NewBeerContainer.scss";

const NewBeerContainer = (props) => {

    const { newBeers } = props;

    //map through beers data and render a beer card for each beer based on information 
    //passed to rendered Beer Card component
        const mappedBeers = newBeers.map((data) => {
        
            return (
                <NewBeerCard name={data.name} image={data.image_url} brewed={data.first_brewed}
                tagline={data.tagline} abv={data.abv} ph={data.ph}/> 
            )
            })
    
        return (
            <div className="beers">
                {mappedBeers}
            </div>
        )

    }

export default NewBeerContainer;