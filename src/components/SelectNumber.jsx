import React, { useState } from 'react'

const SelectNumber = ({selectedNumber, setSelectedNumber,error, setError}) => {
    const array = [1,2,3,4,5,6];
    const NumberHandler = (value)=>{
        setSelectedNumber(value);
        setError("");
    }
    

    
  return (
    <div>
        <p className=' text-red-600 text-lg'>{error}</p>
        <div className="flex gap-6">
     {array.map((value, index)=> <div key={index}
     className={`w-16 h-16 border-2 border-black border-solid text-2xl flex justify-center items-center font-semibold 
     ${ value === selectedNumber ? 'bg-black text-white' : 'bg-white'}`} 
     onClick={()=> NumberHandler(value)}>
        {value}
        </div>)
     }
    </div>
    <div className='flex justify-end'>
    <p className="text-2xl font-semibold mt-2">Select Number</p>
    </div>
    
    </div>
  )
}

export default SelectNumber