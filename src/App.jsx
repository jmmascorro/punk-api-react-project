import './App.scss';
import { useState } from "react";
import SearchBox from './components/SearchBox/SearchBox';
import SearchBeers from './components/SearchBeers/SearchBeers';

function App() {

  const [beers, setBeers] = useState();
  const [searchTerm, setSearchTerm] = useState();

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

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
        <section className="search-beers">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
        </section>
      </nav>
      <main className="main-section">
        {beers && <SearchBeers beers={beers} searchTerm={searchTerm}/>} 
      </main>
    </div>
  );
}

export default App;
