import React, { createContext, useContext } from 'react'

const Child1 = () => {
    const context = useContext(Context) ; 
  return (
    <div>
        {context.data}
    </div>
  )
}

const Child2 = () => {
    const context = useContext(Context) ; 
  return (
    <div>
        {context.data}
    </div>
  )
}



const Context = createContext()  ;
const App = () => {
  return (
    <>
     <Context.Provider value={{ data : "this is the value"}}>
      <Child1 />
      <Child2 />
     </Context.Provider>
    </>
  )
}

export default App
