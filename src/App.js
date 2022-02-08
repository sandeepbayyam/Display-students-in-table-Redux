import React from "react";
import "./style.css";
import Students from './students.js';
import {Provider} from 'react-redux';
import store from './store/store.js'

export default function App() {
  return (
    <Provider store= {store}>
    <div className='betterview'>
      <h3>Display student details in table</h3> 
      
      <Students></Students>
    </div>
    </Provider>
  );
}
