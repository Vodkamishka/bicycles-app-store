import React, { Component } from 'react';
import './panel.css';
import ImagePanel from './image-panel';
import { Link } from 'react-router-dom';

export default class Panel extends Component {
  state = {
    active: false
  }
  movePanel = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    const { active } = this.state;
    const { gallery, changeMainPage, onToggle, ModalMenu, showDetailsFalse } = this.props;
   
    const styleSidePanel = { right: active ? '0' : '-320px' };
    const styleSideWheel = { right: active ? '337px' : '18px' }
    const styleSideFas = { transform: active ? 'rotate(0deg)' : 'rotate(360deg)' }
    return (

      <div className="side-panel" style={styleSidePanel}>

        <div className="wheel"
          onClick={this.movePanel}
          style={styleSideWheel}
        >
        
        <i className="fas fa-cog" style={styleSideFas}></i>
      
        </div>
        <div className="panel">
        <div className="panel-blocks mt-1">
          {gallery.map(el => 
          <Link 
          to={el.link} 
          key = {el.id+3456677}
          onClick = {
            () => {
              showDetailsFalse()
              if (ModalMenu) {
                changeMainPage()
                onToggle()
              }
            }
            }
          >
          <ImagePanel key={el.id + 222} text={el.text2} img={el.path} />
          </Link>
          )}
          </div>

        </div>
      </div>

    )
  }
}
