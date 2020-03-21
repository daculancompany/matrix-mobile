import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', id: 1},
    {title: 'the way of kings', id: 2},
    {title: 'the final empire', id: 3},
    {title: 'the hero of ages', id: 4}
  ]);
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;


// import React, { Component, createContext } from 'react';

// export const BookContext = createContext();

// class BookContextProvider extends Component {
//   state = {
//     isLightTheme2: true,
//     light2: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//     dark2: { syntax: '#ddd', ui: '#333', bg: '#555'}
//   }
//   toggleTheme= () => {
//     this.setState({ isLightTheme: !this.state.isLightTheme });
//   }
//   render() { 
//     return (
//       <BookContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//         {this.props.children}
//       </BookContext.Provider>
//     );
//   }
// }
 
// export default BookContextProvider;
