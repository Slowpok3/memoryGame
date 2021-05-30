import React, { useState } from "react";
import Board from './components/board.js'

const App = () => {
  
  const [highScore, setHighscore]  = useState(0);

  const callBackFunction = (score) =>{
    if (score > highScore){
      setHighscore(score);
    }
  }

  return (
    <div>
       
      <h1> Hello World </h1>
      <h1> High Score: {highScore}</h1>
      <Board spaces = "4" getScore = {callBackFunction} />
    </div>
  );
}

export default App;
