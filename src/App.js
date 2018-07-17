import React, { Component } from 'react';
import {Slider} from './Slider.js';
import "./scss/main.css";

class App extends Component {
  render() {
    return (
     <div className='container'>
         Exaple of simple React JS automatic slider.
         <Slider/>
     </div>
    );
  }
}

export default App;
