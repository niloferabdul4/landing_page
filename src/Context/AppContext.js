import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

export const Context=createContext()

const AppContext = ({children}) => {
    const initialState={data:[],category:'general',videoDetails:'',headlines:[]}
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <Context.Provider value={{state,dispatch}}>
          {children}
      </Context.Provider>
      
    </>
  )
}

export default AppContext
