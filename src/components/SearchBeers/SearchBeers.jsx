import BeerContainer from "../BeerContainer/BeerContainer";
import HighABVBox from "../HighABVBox/HighABVBox";

const SearchBeers = (props) => {

    const { beers, searchTerm, abvChecked } = props;

    if(searchTerm === undefined && abvChecked === false) {

        return (
            <BeerContainer beers={beers} />
        )
    }else if (abvChecked === true) {

        const abvFilteredBeers = beers.filter((data) => {
            return data.abv > 6;
        })

        return (
            <BeerContainer beers={abvFilteredBeers} />
        )
    }else {

        const filteredBeers = beers.filter((data) => {
            const beerNameLower = data.name.toLowerCase();
    
            return beerNameLower.includes(searchTerm);
           
        })
    
        return (
            <div>
                <BeerContainer beers={filteredBeers} />
            </div>
        )
    }
    
}

export default SearchBeers;