import React from 'react';
import logo from './logo.svg';
import './App.css';

import CustomHeader, {addNumber} from './components/CustomHeader'; 
import Counter from './components/Counter';
import Counter1 from './components/counter1';


// waze aby jeden komponent zwracal jeden div maksymalnie
const App = () =>{

  const addedNumber = addNumber(1,2);
  // aby 

  //const handleNumberChange = (newNumber: number) => {
    //return newNumber;

    //changednumber bedzie sie zmienial wedlug setchangednumber
  const[changedNumber, setChangedNumber] = React.useState(0);

  const handleNumberChange = (newNumber: number) => {
    setChangedNumber(newNumber);
  }

  const liczbaMniejszaOdZera = (liczba: number)=> {
    if(liczba<0){
      return (<div>liczba jest mniejsza od 0</div>)
    }
  }

  return (
    <div className="App">
      <CustomHeader />
      <Counter />
      <Counter1 initialNumber={10} />

      <Counter1 onNumberChange={handleNumberChange} />
      {/*conditional rendering* tak lub. przez utworzenie funkcji*/}
      {
        changedNumber > 0 && (<div> liczba jest wieksza od 0</div>)
      }
      
      {liczbaMniejszaOdZera(changedNumber)}

    </div>
  );
}
//<Counter1 onNumberChange={(newNumber)=> {console.log(newNumber)}} />
export default App;


