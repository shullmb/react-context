import React from 'react';
import { RootContext } from './RootContext';
import { ColorButton } from './ColorButton';
import './App.css'

export const ControlPanel = props => (
  <div className="container">
    <ColorButton />
  </div>
)