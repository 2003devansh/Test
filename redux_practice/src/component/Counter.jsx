import React from 'react'

import { increment,decrement } from '../store/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
      <button 
      onClick={()=> dispatch(increment())}>
        inc
        </button>
      {count}
      <button aria-label='decrement value'
      onClick={()=> dispatch(decrement())}
      >
        dec
        </button>
    </div>
  )
}

export default Counter
