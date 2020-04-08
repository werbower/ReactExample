import React from 'react';
import logo from './logo.svg';
import './App.css';

const dataObj = {
  title: 'Super title',
  vote_average: 9.456,
  image: `https://images.pexels.com/photos/3757147/pexels-photo-3757147.jpeg?cs=srgb&dl=pexels-3757147.jpg&fm=jpg`,
}

function Image (props) {
  const {src, alt} = props;
  return (
    <img src={src} alt={alt} style={{width: '500px', height: 'auto'}}/>
  );
}

class MovieItem extends React.Component {
  render() {
    const {data: {title, vote_average, image: src}} = this.props;
    return (
      <div>
      <p>{title}</p>
      <p>{vote_average}</p>
      <Image src={src} alt={title}/>
    </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={dataObj} />
    </div>
  );
}

export default App;
