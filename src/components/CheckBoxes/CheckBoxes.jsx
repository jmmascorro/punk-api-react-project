import "./CheckBoxes.scss";

const CheckBoxes = (props) => {

    const {  abvChecked, handleABVCheckBox, classicChecked, handleClassicCheckBox,
    acidityChecked, handleAcidityCheckBox } = props;

    return (
        <div className="check-boxes">
            <div className="high-abv">
                <label>High ABV (greater than 6%)</label>
                <input className="check-box" value={abvChecked} onInput={handleABVCheckBox} type="checkbox"/>
            </div>
            <div className="classic-range">
                <label>Classic (brewed before 2010)</label>
                <input className="check-box" value={classicChecked} onInput={handleClassicCheckBox} type="checkbox"/>
            </div>
            <div className="high-acidity">
                <label>High Acidity (pH lower than 4)</label>
                <input className="check-box" value={acidityChecked} onInput={handleAcidityCheckBox} type="checkbox"/>
            </div>

        </div>
    )
}

export  default CheckBoxes;