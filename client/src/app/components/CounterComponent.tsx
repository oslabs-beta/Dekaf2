'use client';
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../slices/counterSlice';

export default function Counter() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  console.log('amount ', count);

  return (
    <div>
      <div >
        <button
          
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span> </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div >
        <input
          aria-label="Set increment amount"
          value={count}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
 
      </div>
    </div>
  );
}
