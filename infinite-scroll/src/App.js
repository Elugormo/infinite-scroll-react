import React from 'react';
import logo from './logo.svg';
import './App.css';
import Album from './Album';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 10
    }

    this.handleScroll();
  }

  handleScroll() {
    document.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop,
      windowHeight = window.innerHeight,
      height = document.body.scrollHeight - windowHeight,
      scrollFactor = (scroll / height);

      if(scrollFactor > 0.9) {
        let newSize = this.state.size + 10;
        this.setState({
          size: newSize
        })

      }
    })
  }

  render() {
    return(
      <div className="container">
        <h1>Infinite Scroll</h1>
        <Album photos={this.props.photos} size={this.state.size}/>
        </div>
    )
  }
}


export default App;
