
import BeerContainer from "../BeerContainer/BeerContainer";

const HighABV = (props) => {
    
    const { beers, abvChecked } = props;

    if(abvChecked === true) {

        const abvFilteredBeers = beers.filter((data) => {

            return data.abv > 6;   
    })

    return <BeerContainer beers={abvFilteredBeers} />
}
 
}

export default HighABV;