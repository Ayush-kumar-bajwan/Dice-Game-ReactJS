import React from 'react';

const StartGame = ({ toggle }) => {
  return (
    <div className="max-w-screen-xl h-screen mx-auto flex flex-col justify-center items-center">
      <div className="w-full text-center">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <img src="/images/dices.png" alt="dices" className="w-1/2 sm:w-auto mb-8" />
          <div className="mb-8 sm:mb-0">
            <h1 className="font-semibold text-4xl sm:text-6xl lg:text-8xl mb-4">Dice Game</h1>
            <button className="bg-black text-white w-36 px-6 py-4 rounded-2xl transition duration-300 ease-in-out hover:bg-white hover:text-black hover:border hover:border-black transform hover:scale-105" onClick={toggle}>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
