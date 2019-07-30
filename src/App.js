import React from 'react';
import './App.css';
import GiftsPage from './components/GiftsPage/GiftsPage';


function App(props) {
  
  return (
    <div className="App">
     <GiftsPage data= {props.data}/>
    </div>
  );
}

export default App;
