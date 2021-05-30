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
        
    }
    return y;
}


const Board = (props) =>{
    const n = parseInt(props.spaces);
    const [selections, setSelections] = useState(generateRandomNumbers(n));
    
    const [score, setScore] = useState(0);

    

    useEffect( ()=>{
        setSelections(scrambleArray(selections));
    },
    [score]
    )

    const [clicked, setClicked] = useState([]);

    const handleClick = (e) =>{

        

        var a = clicked;
        const b = selections[e.target.id];

        if (clicked.indexOf(b) < 0  ){
            a.push(selections[e.target.id]);
            setClicked(a);
            setScore(score+1);
            props.getScore(score);
        }else{
            console.log("you lose!!!");
            setScore(0);
            setSelections(generateRandomNumbers(n));
            const w = [];
            setClicked(w);
        }

        
       

        
        

        
        console.log(clicked);
    }

    const cards = [];
    var i = 0;
    for(i = 0; i < n; i++){
        cards.push( <button id={i} onClick={handleClick}> {parseInt(selections[i])} </button>  );
    }



    return(
        <div>
            <h1>
               Difficulty:  {n}
               
               
            </h1>
            <h1>
                Score: {score}
            </h1>
            {cards}
        </div>

    )

}

export default Board;