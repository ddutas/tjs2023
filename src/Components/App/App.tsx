import React, { useState, useEffect} from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {

  const [counter, setcounter] = useState(0)
  useEffect(() => {
    console.log('Valeur étatique : ' + counter)
    // return () => {
      
    // };
  }, [counter])
  
  return (
    <div className="App">
      Valeur du compteur: { counter }
      <hr />
      <Button onButtonClick={(untruc: string) => { setcounter(counter - 1); console.log('Valeur In-line : ' + counter)}} bgColor="#FAA">
        -1
      </Button>
      <Button onButtonClick={(ok: string) => { setcounter(counter + 1); console.log('Valeur In-line : '+ counter)}} type="reset">
        +1
      </Button>
    </div>
  );
}

export default App;
