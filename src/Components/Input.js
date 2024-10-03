import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { addToDisplay } from '../Slice/inputSlice';
import { Navigate, useNavigate } from 'react-router-dom';

const Input = () => {
    const [value,setValue] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit=() =>{
        if(typeof value === 'string' && value.trim()!== ''){
        dispatch(addToDisplay(value));
        navigate('/display');
        }
        else{
            alert("Please enter a string");
        }

    };
  return (
    <div className='main'>
        <h1>Input a String</h1>
        <div>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' onClick={handleSubmit} > Submit</button>
        </div>
    </div>
  )
}

export default Input