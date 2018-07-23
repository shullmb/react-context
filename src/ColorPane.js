import React from 'react';
import { RootContext } from './RootContext';

// uses color from RootContext as Consumer
export const ColorPane = props => (
  <RootContext.Consumer>
    {
      ({color}) => {
        let style = {
          background: color,
          height: "200px", 
          width: "200px"
        }
        return (
          <div style={style}></div>
        )
      }
    }
  </RootContext.Consumer>
  
)
