import React from 'react';
import logo from './logo.svg';
import './App.css';

const dataObj = {
  title: 'Super title',
  vote_average: 9.456,
  image: `https://images.pexels.com/photos/3757147/pexels-photo-3757147.jpeg?cs=srgb&dl=pexels-3757147.jpg&fm=jpg`,
  overview: 'this is overview',
};

function Image(props) {
  const { src, alt } = props;
  return <img src={src} alt={alt} style={{ width: '100%', height: 'auto' }} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      showOverview: false,
      like: false,
      showMustGoOn: true,
    };
  }
  render() {
    const {
      data: { title, vote_average, image: src, overview },
    } = this.props;
    return (
      <div style = {{width: '300px'}}>
        <p>{title}</p>
        <p>{vote_average}</p>
        <Image src={src} alt={title} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <button type='button' onClick={this.onClick}>
            {this.state.showOverview ? 'Hide' : 'Show'}
          </button>
          <button type='button' onClick={this.handleLike}
            className={this.state.like ? 'btn--like': ''}>
            Like
          </button>
        </div>

        {this.state.showOverview ? <div>{overview}</div> : null}
      </div>
    );
  }

  onClick = (event) => {
    console.log('event ', event);
    const newShowOverview = !this.state.showOverview;
    this.setState({
      showOverview: newShowOverview,
    });
  }
  handleLike = (event) => {
    const newLike = !this.state.like;
    this.setState({
      like: newLike,
    });
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
