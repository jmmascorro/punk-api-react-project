import BeerContainer from "../BeerContainer/BeerContainer";

const SearchBeers = (props) => {

    const { beers, searchTerm } = props;
    
    const filteredBeers = beers.filter((data) => {
        const beerNameLower = data.name.toLowerCase();

        return beerNameLower.includes(searchTerm);
       
    })

    return (
        <div>
            {searchTerm === undefined ? <BeerContainer beers={beers} /> : <BeerContainer beers={filteredBeers} />}
        </div>
    )
    
}

export default SearchBeers;