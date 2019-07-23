import React, { Component } from 'react';
import './toggle.css';

export default class Toggle extends Component {
  render() {
    const { changeMainPage, onToggle, toggle } = this.props;
    
    const styleBar1 = {
      transform: toggle ? 'rotate(-45deg) translate(-9px, 6px)' : 'rotate(0deg) translate(0, 0)'
    }
    const styleBar2 = {
      opacity: toggle ? '0' : '1'
    }
    const styleBar3 = {
      transform: toggle ? 'rotate(45deg) translate(-8px, -8px)' : 'rotate(0deg) translate(0, 0)'
    }
    return (

      <div className="containerForBars"
        onClick={() => {
          onToggle();
          changeMainPage();
        }
        }>
        <div className="bar1" style={styleBar1}></div>
        <div className="bar2" style={styleBar2}></div>
        <div className="bar3" style={styleBar3}></div>
      </div>

    )
  }
}
