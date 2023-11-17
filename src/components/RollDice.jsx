import React, { useState } from 'react';
import Rules from './Rules';

const RollDice = ({currentDiceNumber , roleDice, setScore}) => {
    const resetBtn = ()=>{
        setScore(0);
    }
    const[showRules, setShowRules] = useState(false);
    const RulesHandler = () =>{
        setShowRules((prev)=> !prev);
    }
    console.log(showRules);

    
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mb-4 cursor-pointer " onClick = {roleDice}>
        <img src={`images/dice_${currentDiceNumber}.png`} alt="One" />
      </div>
      <p className="text-2xl font-normal mb-4">Click on Dice to Roll</p>
      <button className=" w-52 h-14 bg-white text-xl font-normal border-solid border-2 border-black mb-2 rounded-lg transition duration-500 ease-in hover:bg-black hover:text-white hover:border hover:border-black hover:transition hover:duration-300 hover:ease-in" onClick={resetBtn}>Reset Score</button>
      <button className="w-52 h-14 bg-black text-xl font-normal text-white rounded-lg transition duration-500 ease-in hover:bg-white hover:text-black hover:border hover:border-black hover:transition hover:duration-300 hover:ease-in" onClick={RulesHandler}>Show Rules</button>
      <div className=" mt-3">  {showRules? 
        <Rules /> : null
      }</div>
    </div>
  );
};

export default RollDice;
