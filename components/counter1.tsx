import React from 'react';


interface CounterProps {
    initialNumber?: number;
    //mozliwosc cofniecia
    onNumberChange?: (someNumber: number) => void;
    // funkcja void nic nie zwrac, lecz jesli zmienimy na numer, to ta funkcja musiala zwrocic.
    //onNumberChange?: (someNumber: number) => number;
}
//przekazywanie stanu miedzy jednym a drugim komponentem przez props - wlasciwosci

//FC - FunctionControler - dowolny typ
//aby za kazdym razem nie uzywac props mozna ({initiualNumber}) i wtedy w usestate robimy tylko initialNUmber
//const Counter:React.FC<CounterProps> = (props) => {
    const Counter:React.FC<CounterProps> = ({initialNumber, onNumberChange}) => {

    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0); //|| 0 nie trzeba podawac wartosci poczatkowej, wtedy domyslna bedzie wartosc 0

    const addNumber = () =>{
        //nalezy synchronizowac wartosc z state zeby dzialalo
        const number = counterNumber + 1;
        setCounterNumber(counterNumber +1 );
        //jesli chcemy uzyc onclick, mozemy rowniez uzyc opcjonalnie onnumberchange - dodajac znak zapytania i if
        if(onNumberChange)
            onNumberChange(counterNumber);
        //lub
        //onNumberChange && onNumberChange(number);
        
        
    }
    const decreaseNumber = () =>{
        const number = counterNumber + 1;
        setCounterNumber(counterNumber -1 );
        if(onNumberChange)
            onNumberChange(counterNumber);
    }
    return (
        <div>
            <button onClick={() => setCounterNumber(counterNumber + 1)}>+</button> <a>aby wartosc sie zmieniala nalezy dodac event</a>
            <button onClick={(decreaseNumber)}>+</button> <a>tak jest prosciej, aby stworzyc funkcje</a> 
            {Number}
            <button onClick={(decreaseNumber)}>+</button> <a></a>
            
            {Number}

        </div>
    );
}
export default Counter;