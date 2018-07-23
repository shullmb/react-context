import React from 'react';
import { RootContext } from './RootContext';

// uses changeColor() from RootContext as Consumer
export const ColorButton = props => (
  <RootContext.Consumer>
    {
      ({changeColor}) => (
        <button onClick={changeColor}>CHANGE THE COLOR</button>
      )
    }
  </RootContext.Consumer>
)