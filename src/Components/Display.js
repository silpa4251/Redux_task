import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Display = () => {
    const navigate = useNavigate();
    const name = useSelector((state) => state.input.name );
    const sorted = typeof name === 'string' ? 
    name.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('') :
    'Invalid input: Not a string';
  
  return (
    <div>
        <h1>Your String in Sorted Order.....</h1>
        <p>{sorted}</p>
        <button onClick={()=>navigate('/')}>Go Back</button>

        
    </div>
  )
}

export default Display
