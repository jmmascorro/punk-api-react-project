import "./HighABVBox.scss";

const HighABVBox = (props) => {
    const { abvChecked, handleABVCheckBox } = props;
    return (
        <div className="high-abv">
            <label>High Alcohol (ABV value greater than 6%)</label>
            <input value={abvChecked} onInput={handleABVCheckBox} type="checkbox"/>
        </div>
    )
}

export  default HighABVBox;