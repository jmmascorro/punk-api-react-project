import './App.scss';
import { useEffect, useState } from "react";
import SearchBox from './components/SearchBox/SearchBox';
import SearchBeers from './components/SearchBeers/SearchBeers';
import CheckBoxes from './components/CheckBoxes/CheckBoxes';
import brewdog from "./images/brewdoglogo.jpg";
import NewBeerContainer from "./components/NewBeerContainer/NewBeerContainer";

function App() {

//useState for searchbox, checkboxes, and beer api
  const [beers, setBeers] = useState();
  const [newBeers, setNewBeers] = useState();
  const [showNewBeers, setShowNewBeers] = useState(false);
  const [searchTerm, setSearchTerm] = useState();
  const [inputs, setInputs] = useState({});
  const [abvChecked, setABVChecked] = useState(false);
  const [classicChecked, setClassicChecked] = useState(false);
  const [acidityChecked, setAcidityChecked] = useState(false);

  //handle button click event for new beers
  const toggleBeers = () => {
    setShowNewBeers(!showNewBeers);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  
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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jealous-stole-dog.cyclic.cloud/api/beers", {
      method: 'POST',
      headers: {'Content-Type':'application/json; charset=UTF-8'},
      body: JSON.stringify({
        name: inputs.name,
        abv: inputs.abv,
        image_url: inputs.image_url,
        tagline: inputs.tagline,
        first_brewed: inputs.first_brewed,
        ph: inputs.ph
      })
     })
     .then((data) => {
          getNewBeers(data)
    });
};

  //get api using url and fetch method inside of useEffect to be able to display data from api that gets
  //set for beers using useState
 useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setBeers(data);
      
    })
    .catch(err => {
      console.log(err)
    })
  }, []);

 const getNewBeers = () => {
  fetch("https://jealous-stole-dog.cyclic.cloud/api/beers")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    setNewBeers(data);
  })
  .catch(err => {
    console.log(err)
  })
 };

 useEffect(getNewBeers, []);
   
 

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={brewdog} alt="brewdog"/>
      </header>
      <nav className="nav-bar">
        <section className="search-beers">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
        </section>
        <section className="check-boxes">
          <CheckBoxes abvChecked={abvChecked} handleABVCheckBox={handleABVCheckBox} classicChecked={classicChecked} handleClassicCheckBox={handleClassicCheckBox} acidityChecked={acidityChecked} handleAcidityCheckBox={handleAcidityCheckBox}/>
        </section>
        <section className="new-beer-button">
        <button className="beer-button" onClick={toggleBeers}>Click For New Beers</button>
        </section>
        <h1 className="new-beer-heading">To add a new beer enter info below:</h1>
        <section className="new-beer-form">
        <form id="form" onSubmit={handleSubmit} method='POST'>
          <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" placeholder="name"/><br></br>
          <input type="text" value={inputs.abv || ""} onChange={handleChange} name="abv" placeholder="abv"/><br></br>
          <input type="text" value={inputs.image_url || ""} onChange={handleChange} name="image_url" placeholder="image url"/><br></br>
          <input type="text" value={inputs.tagline || ""} onChange={handleChange} name="tagline" placeholder="tagline"/><br></br>
          <input type="text" value={inputs.first_brewed || ""} onChange={handleChange} name="first_brewed" placeholder="first brewed date"/><br></br>
          <input type="text" value={inputs.ph || ""} onChange={handleChange} name="ph" placeholder="ph"/><br></br>
          <input className="new-beer-submit" type="submit" value="Add New Beer"/>
        </form> 
        </section>
      </nav>
      <main className="main-section">
        {showNewBeers === true ? beers && <NewBeerContainer newBeers={newBeers}/> : beers && <SearchBeers searchTerm={searchTerm} beers={beers} abvChecked={abvChecked}
        classicChecked={classicChecked} acidityChecked={acidityChecked} />}
      </main>
    </div>
  );
}

export default App;
