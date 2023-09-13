//setup data layer
//we need to track the basket

import React, { useContext, createContext, useReducer } from "react";

//this is data layer
export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it inside the component

export const useStateValue = () => useContext(StateContext);
