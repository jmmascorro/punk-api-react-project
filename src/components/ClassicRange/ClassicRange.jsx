import BeerContainer from "../BeerContainer/BeerContainer";

const ClassicRange = (props) => {

    const { beers, classicChecked } = props;

    if(classicChecked === true) {
        
        const classicFilteredBeers = beers.filter((data) => {
            
            const date = Number(data.first_brewed.slice(3, 7));

            return date < 2010;
            
        })

        return <BeerContainer beers={classicFilteredBeers} />

    }

}

export default ClassicRange;