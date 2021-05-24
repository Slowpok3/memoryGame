import { Component , useState, useEffect } from 'react';
import Card from './card';

function generateRandomNumbers(x){
    var a = [];
    var i = 0;
    
    for (i = 0; i<x*x; i++){
        a.push(parseInt(Math.random()*1000));
    }   
    
    return a;
}
function scrambleArray(x){
    const y = [];
    //var i = 0;
    while (y.length < x.length){
        const randomIndex = parseInt(Math.random()*(x.length));
        const numberToBeAdded = x[randomIndex];
        if(y.indexOf(numberToBeAdded) < 0){
            y.push(numberToBeAdded);
        }
        console.log("?" + y);
    }

    return y;
}


const Board = (props) =>{
    const n = parseInt(props.spaces);
    const [selections, setSelections] = useState(generateRandomNumbers(n));
    
    

    useEffect(() =>{
        // const a = generateRandomNumbers(n);
        // const b = scrambleArray(a);


        // console.log("arrray a " + a);
        // console.log("arrray b " + b);
        console.log(selections)
        const a = [0,0,0,0];
        setSelections(scrambleArray(selections));

        //setSelections(generateRandomNumbers(n));
        //console.log("selecstions before scramble: " + selections);
        //setSelections(scrambleArray(selections)); 
        console.log("selections after scramble: " + selections);
    },
    []
    
    )
    console.log("selections after effect: " + selections);

    return(
        <div>
            <h1>
                {n}
               
            </h1>
            <Card symbol = {parseInt(selections[0])}  />
            <Card symbol = {parseInt(selections[1])}  />
            <Card symbol = {parseInt(selections[2])}  />
            <Card symbol = {parseInt(selections[3])}  />
        </div>

    )

}

export default Board;