import './App.scss';
import { useEffect, useState } from "react";
import SearchBox from './components/SearchBox/SearchBox';
import SearchBeers from './components/SearchBeers/SearchBeers';
import CheckBoxes from './components/CheckBoxes/CheckBoxes';
import HighABV from './components/HighABV/HighABV';
import ClassicRange from './components/ClassicRange/ClassicRange';
import HighAcidity from './components/HighAcidity/HighAcidity';

function App() {

  const [beers, setBeers] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [abvChecked, setABVChecked] = useState(false);
  const [classicChecked, setClassicChecked] = useState(false);
  const [acidityChecked, setAcidityChecked] = useState(false);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  const handleABVCheckBox = () => {
    setABVChecked(!abvChecked);
  }

  const handleClassicCheckBox = () => {
    setClassicChecked(!classicChecked);
  }

  const handleAcidityCheckBox = () => {
    setAcidityChecked(!acidityChecked);
  }

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setBeers(data);
      
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        BrewDog
      </header>
      <nav className="nav-bar">
        NavBar
        <section className="search-beers">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
        </section>
        <section className="check-boxes">
          <CheckBoxes abvChecked={abvChecked} handleABVCheckBox={handleABVCheckBox} classicChecked={classicChecked} handleClassicCheckBox={handleClassicCheckBox} acidityChecked={acidityChecked} handleAcidityCheckBox={handleAcidityCheckBox}/>
        </section>
      </nav>
      <main className="main-section">
        {/* {beers && <HighABV beers={beers} abvChecked={abvChecked}/>}
        {beers && <ClassicRange beers={beers} classicChecked={classicChecked}/>}
        {beers && <HighAcidity beers={beers} acidityChecked={acidityChecked} />} */}
        {beers && <SearchBeers searchTerm={searchTerm} beers={beers} abvChecked={abvChecked}
        classicChecked={classicChecked} acidityChecked={acidityChecked} />}
      </main>
    </div>
  );
}

export default App;
