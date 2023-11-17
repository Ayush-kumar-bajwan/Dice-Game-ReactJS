import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div>
        <h1 className=" w-16 h-28 text-8xl font-medium">{score}</h1>
        <p className="w-36 h-9 text-2xl font-semibold">Total Score</p>
    </div>
  )
}

export default TotalScore