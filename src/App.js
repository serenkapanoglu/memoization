import './App.css';
import { useMemo, useState, useCallback } from 'react';
import Header from './components/Header';


function App() {

  const [number, setNumber] = useState(0)

  const increment = useCallback(()=>{
    setNumber((prevState) => prevState+1)
  },[]);
  

  return (
    <div className="App">
       <Header increment={increment}/>
       <hr />
    <h1>{number}</h1>
    
   
    </div>
  );
}

export default App;
