import './App.scss';
import { useState } from "react";
import BeerContainer from './components/BeerContainer/BeerContainer';

function App() {

  const [beers, setBeers] = useState();

  const getBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setBeers(data);
      
    })
  }

 getBeers();

  return (
    <div className="App">
      <header className="App-header">
        BrewDog
      </header>
      <nav className="nav-bar">
        NavBar
      </nav>
      <main className="main-section">
        {beers && <BeerContainer beers={beers}/>}
      </main>
    </div>
  );
}

export default App;
