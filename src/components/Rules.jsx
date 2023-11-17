import React from 'react'

const Rules = () => {
  return (
  
        <div className="bg-red-200 border-solid border-2 border-red-300 p-6">
            <h2 className="text-lg font-semibold mb-3">How To Play Dice Game</h2>
            <ul >
                <li>Select any number</li>
                <li>Click on the Dice to roll</li>
                <li>If selected number is equal to the number on the Dice, you will get the points equal to the dice number</li>
                <li>For every wrong guess 2 points will be deducted </li>
            </ul>
        </div>
    
  )
}

export default Rules