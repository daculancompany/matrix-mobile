import React, { createContext, useReducer, useEffect } from 'react';
//import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const AuthContextProvider = (props) => {
 
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default AuthContextProvider;