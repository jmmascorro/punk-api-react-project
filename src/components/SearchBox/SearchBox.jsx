import "./SearchBox.scss";

const SearchBox = (props) => {

    const { searchTerm, handleInput } = props;

    return (
        <form className="search-box">
            <label className="search-box__label"></label>
            <input type="text" placeHolder="SearchBeer"
            value={searchTerm} onInput={handleInput} 
            className="search-box__input"/>
        </form>
    )

}

export default SearchBox;