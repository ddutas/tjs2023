import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      
      <Button onButtonClick={(untruc) => { console.log('%c%s','color: #00F;', untruc)}} bgColor="#F00">
        <img src="https://cdn.pixabay.com/photo/2014/04/02/11/01/tick-305245_960_720.png"/>
        Texte de button
      </Button>
      <Button onButtonClick={(ok) => { console.log('%c%s','color: #0F0;', ok) }} type="reset">
        Bouton 2
      </Button>
    </div>
  );
}

export default App;
