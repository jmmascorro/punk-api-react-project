import "./SearchBox.scss";

const SearchBox = (props) => {

    const { searchTerm, handleInput } = props;

    //use to render a searchbox that uses searchTerm useState and handleInput event to 
    //connect input search box to be able to search beers by name
    return (
        <form className="search-box" name="form">
            <label className="search-box__label"></label>
            <input type="text" placeholder="Search Beer"
            value={searchTerm} onInput={handleInput} 
            className="search-box__input"/>
        </form>
    )

}

export default SearchBox;