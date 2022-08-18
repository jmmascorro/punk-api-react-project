import BeerContainer from "../BeerContainer/BeerContainer";


const HighAcidity = (props) => {

    const { beers, acidityChecked } = props;

    if(acidityChecked === true) {

        const acidityFilteredBeers = beers.filter((data) => {

            return data.ph < 4;
        })

        return <BeerContainer beers={acidityFilteredBeers}/>

    }
}

export default HighAcidity;