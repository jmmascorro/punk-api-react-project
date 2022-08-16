import BeerCard from "../BeerCard/BeerCard";

const BeerContainer = (props) => {

    const { beers } = props;

    const mappedBeers = beers.map((data) => {
        return <BeerCard name={data.name} image={data.image_url} />
    })

    return (
        <div>
            {mappedBeers}
        </div>
    )

}

export default BeerContainer;