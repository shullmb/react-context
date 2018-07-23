import React from 'react';

// global array of colors that we will use
export const colors = ['black', 'blue', 'green', 'rebeccapurple', 'red'];

export const RootContext = React.createContext({
  color: '',
  changeColor: () => {}
});