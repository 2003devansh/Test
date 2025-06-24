import React from 'react'
import { fetchJokes } from '../features/jokesSlice'
import { useDispatch, useSelector } from 'react-redux'

const JokeApp = () => {
    const dispatch = useDispatch() ;
    const {data,status,error} = useSelector((state) => state.joke) ;

    const handleClick = () =>{
        dispatch(fetchJokes()) ;
    }
  return (
    <div>
      <h1>joke app</h1>
      <button onClick={handleClick}>Get Joke</button>
    {status === 'loading' && <p>Loading...</p>}
      {data && (
        <div>
          <p>{data.setup}</p>
          <p>{data.punchline}</p>
        </div>
      )}
    </div>

  )
}

export default JokeApp
