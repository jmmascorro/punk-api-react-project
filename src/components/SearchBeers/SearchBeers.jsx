import BeerContainer from "../BeerContainer/BeerContainer";

const SearchBeers = (props) => {

    const { beers, searchTerm, abvChecked, classicChecked, acidityChecked }  = props;

    if(searchTerm === undefined && abvChecked === false && classicChecked === false && acidityChecked === false) {
        
        return <BeerContainer beers={beers} />

    }else if (abvChecked === true && classicChecked === false && acidityChecked === false) {

        const abvFilteredBeers = beers.filter((data) => {
            return data.abv > 6;
        })

        return (
            <BeerContainer beers={abvFilteredBeers} />
        )
    
    }else if(classicChecked === true && abvChecked === false && acidityChecked === false) {
        
        const classicFilteredBeers = beers.filter((data) => {
            
            const date = Number(data.first_brewed.slice(3, 7));

            return date < 2010;
            
        })

        return <BeerContainer beers={classicFilteredBeers} />

    }else if(acidityChecked === true && abvChecked === false && classicChecked === false) {

        const acidityFilteredBeers = beers.filter((data) => {

            return data.ph < 4;
        })

        return <BeerContainer beers={acidityFilteredBeers}/>

    }else if(abvChecked === true && classicChecked === true && acidityChecked === false) {

        const classicFilteredBeers = beers.filter((data) => {
            
            const date = Number(data.first_brewed.slice(3, 7));

            return date < 2010;

    }) 
        const filteredClassicABVBeers = classicFilteredBeers.filter((data) => {
             
            return data.abv > 6;
    })

    return <BeerContainer beers={filteredClassicABVBeers} />

    }else if (abvChecked === true && classicChecked === false && acidityChecked === true) {

        const abvFilteredBeers = beers.filter((data) => {
            return data.abv > 6;
        })
        
        const filteredABVAcidityBeers = abvFilteredBeers.filter((data) => {
            return data.ph < 4;
        })

        return <BeerContainer beers={filteredABVAcidityBeers}/>
    
    }else if (abvChecked === false && classicChecked === true && acidityChecked === true) {

        const classicFilteredBeers = beers.filter((data) => {
            
            const date = Number(data.first_brewed.slice(3, 7));

            return date < 2010;
        })

        const filteredClassicAcidityBeers = classicFilteredBeers.filter((data) => {

            return data.ph < 4;
        })

        return <BeerContainer beers={filteredClassicAcidityBeers} />
        
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