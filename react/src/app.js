import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header>
      <h1> React App</h1>
      <nav>
        <ul>
          <li>GET</li>
          <li>POST</li>
          <li>PUT</li>
          <li>DELETE</li>
        </ul>
      </nav>   
    </header>
  )
}


handleChange = e => {
  let words = e.target.value;
  this.setState({ words });
}