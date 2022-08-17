import "./SearchBox.scss";

const SearchBox = (props) => {

    const { label, searchTerm, handleInput } = props;

    const capitalLabel = label[0].toUpperCase() + label.slice(1);

    return (
        <form className="search-box">
            <label htmlFor={label} className="search-box__label">{capitalLabel}</label>
            <input type="text" name={label} 
            value={searchTerm} onInput={handleInput} 
            className="search-box__input"/>
        </form>
    )

}

export default SearchBox;