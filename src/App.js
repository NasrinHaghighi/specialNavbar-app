import React from 'react';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Submenu from './Submenu';
import './App.css';

const App=()=> {
  return (
    <div className="App">
     
      <Navbar />
      < Hero />
      <Sidebar />
      <Submenu />
     
      
    </div>
  );
}

export default App;
