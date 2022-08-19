import './App.scss';
import { useEffect, useState } from "react";
import SearchBox from './components/SearchBox/SearchBox';
import SearchBeers from './components/SearchBeers/SearchBeers';
import CheckBoxes from './components/CheckBoxes/CheckBoxes';

function App() {

//useState for searchbox, checkboxes, and beer api
  const [beers, setBeers] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [abvChecked, setABVChecked] = useState(false);
  const [classicChecked, setClassicChecked] = useState(false);
  const [acidityChecked, setAcidityChecked] = useState(false);

  //handlevent for input into the searchbox
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  //handle function for high alcohol beer checkbox
  const handleABVCheckBox = () => {
    setABVChecked(!abvChecked);
  }

  //handle function for classic beer checkbox
  const handleClassicCheckBox = () => {
    setClassicChecked(!classicChecked);
  }

  //handle function for high acidity check box
  const handleAcidityCheckBox = () => {
    setAcidityChecked(!acidityChecked);
  }

  //get api using url and fecth method inside of useEffect to be able to display data from api that gets
  //set for beers using useState
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
        {beers && <SearchBeers searchTerm={searchTerm} beers={beers} abvChecked={abvChecked}
        classicChecked={classicChecked} acidityChecked={acidityChecked} />}
      </main>
    </div>
  );
}

export default App;
