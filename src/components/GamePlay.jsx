import React from 'react'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RollDice from './RollDice'
import { useState } from 'react'

const GamePlay = () => {
  const [score ,setScore] = useState(0);
  const [error, setError] = useState("");
  const[selectedNumber, setSelectedNumber] = useState();
  const [currentDiceNumber , setDiceNumber] =useState(1);

  const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}
const roleDice = ()=> {
  if(!selectedNumber){
    setError("You have not selected any number")
    return;
  }
    const randomNumber = generateRandomNumber(1,7);
    setDiceNumber(randomNumber);
    if(selectedNumber === randomNumber){
      setScore((prev)=> prev+randomNumber);
    }
    else{
      setScore((prev)=> prev-2);
    }
    setSelectedNumber(null);
}

  return (
    <div >
      <div className="flex justify-between items-center max-w-screen-xl mx-auto mb-28">
        <TotalScore score ={score}/>
        <SelectNumber error ={error} setError = {setError} selectedNumber ={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RollDice currentDiceNumber= {currentDiceNumber} roleDice={roleDice} setScore={setScore}/>
    </div>
    
  )
}

export default GamePlay