import React, { Component } from 'react';
import './paralax.css';


export default class Paralax extends Component {

  state = {
    changeStyle: false,
    time: 0
  }
  componentDidMount() {
    let time = setInterval(() => {
      this.setState({
        changeStyle: !this.state.changeStyle,
      })
    }, 7000)
    this.setState({
      time: time
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.time)
  }
  render() {
    const { changeStyle } = this.state;
    const styleImage = { opacity: changeStyle ? '1' : '0' };
    const styleText = { color: changeStyle ? 'darkorange' : 'deepskyblue' };
    
    return (

      <div className="paralax">
        <div className="image image1"></div>
        <div className="image image2" style={styleImage}></div>
        <div className="text" style={styleText}>
          <div className='title'>Bicycles Store</div>
          <div className='ptext'><em>Хороший велосипед - что еще нужно человеку для счастья...</em></div>
         
           
        
        </div>

      </div>

    )
  }
}
