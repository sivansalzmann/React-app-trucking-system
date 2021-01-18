import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import TruckingList from './Components/TruckingList';
import MyTruckings from './Components/MyTruckings';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MyTruckings />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
