import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

let isLoading = false //True qiladigan bolsak App ga malumotlarimiz chiqadi)) 

ReactDOM.render(
  <React.StrictMode>
    <App isLoading={isLoading}/>
  </React.StrictMode>,
  document.getElementById('root')
);