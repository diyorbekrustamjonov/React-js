import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const Book = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.title} width="300" />
      <h1>Book: {(props.title) ? <span>{props.title}</span> : "default book"}</h1>
      <p>Year: {props.year}</p>
      <p>Price: {props.price}</p>
      <b>{props.children}</b>
    </div>
  )
}

const App = () => {
  return (
    <Book 
      img="https://bestprogrammer.ru/wp-content/uploads/2021/01/Luchshie-proekty-JavaScript-dlya-nachinayushhih.jpg" 
      title="JavaScript developer" 
      year="2021" 
      price="50$"
    >
      Extra file
    </Book>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);