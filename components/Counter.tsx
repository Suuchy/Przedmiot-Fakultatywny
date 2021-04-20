import React from 'react';

const Counter = () => {
    const liczb = 10;
    // aby nasza liczba mozna bylo obslugiwac zmiany z poziomu htmla nalezy uzyc hooka
    const [liczba, setLiczba] = React.useState(10) //bardzo wazny hook. wazne aby zdefiniowac wartosc poczatkowa

    const zwiekszLiczbe = () =>{
        setLiczba(liczba +1 );
    }
    const zmniejszLiczbe = () =>{
        setLiczba(liczba -1 );
    }
    return (
        <div>
            {liczb} <a> Tak mozna wyswietlic od tak liczbe, ktora jest w zmiennej</a>
            
            <button onClick={() => setLiczba(liczba + 1)}>+</button> <a>aby wartosc sie zmieniala nalezy dodac event</a>
            <button onClick={(zwiekszLiczbe)}>+</button> <a>tak jest prosciej, aby stworzyc funkcje</a> 
            <button onClick={(zmniejszLiczbe)}>+</button> <a></a>
            
            {liczba}

        </div>
    );
}
export default Counter;