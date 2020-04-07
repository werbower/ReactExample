import React from 'react';
import logo from './logo.svg';
import './App.css';

function MovieItem(props) {
  console.log('Movie Item, props ', props);
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.vote_average}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem title='Title new' vote_average={13.5} />
    </div>
  );
}

export default App;
