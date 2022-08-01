import React from 'react';
import './App.css';
import { Routes, Route,  } from "react-router-dom";
import { Webside } from './components';
import { NavBar } from './components';
function App() {
  return (
    <div className="App">
      {/* <h1>Welcome to React Router!</h1>
<Link to='/Webside'><button>Webside</button></Link>
<Link to='/Navbar'><button>Navbar</button></Link> */}

      {/* Search Bar Using Html CSS & javascript | CSS Expandable Search Box  */}
      <Routes>
        <Route exact path="/" element={<Webside />} />
        <Route path="/Navbar" element={<NavBar />} />
      </Routes>


    </div>
  );
}

export default App;
