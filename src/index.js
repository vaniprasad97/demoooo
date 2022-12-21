import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from 'components/StateProvider';
import reducer,{initialState} from "components/reducer.js"



ReactDOM.render(
  <BrowserRouter>
  <StateProvider initialState ={initialState} reducer ={reducer}>
    <App /> 
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
