import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';

export default function Counter() {

  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  

  const handleIncrement = ()=>{
    dispatch(increment());
  }
  
   const handleDecrement = ()=>{
    dispatch(decrement());


  }

    const handleIncrementByAmount = ()=>{
    dispatch(incrementByAmount(5));


  }

    const handleReset = ()=>{
    dispatch(reset());


  }

  return (
    <div className='flex justify-center items-center w-screen h-screen '>
    <p>count: {count}</p>

    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleIncrementByAmount}>+5</button>
      
    </div>
  )
}
