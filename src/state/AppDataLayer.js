import React, { createContext, useContext, useReducer } from 'react'

export const AppContext = createContext();

export const AppDataLayer = ({ initialState, reducer, children }) => {
    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    )
}

export const useStateValue = () => useContext(AppContext)
