import React from 'react';
import './App.css';


function App() {
  // const giply_secret_key = process.env.REACT_APP_GIPHY_KEY
  // console.log(giply_secret_key);
  return (
    <form className="App">
     <input type="search"/>
     <button>search</button>
     <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="gif"/>
    </form>
  );
}

export default App;
