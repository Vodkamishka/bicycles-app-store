import React, { Component } from 'react';
import './details-slider.css';
import { Link } from 'react-router-dom';

export default class DetailsSlider extends Component {
  state = {
    selected: Math.floor(Math.random()*80) + 1,
    timer: 0
  }
  componentDidMount() {
    const timer = setInterval(this.changeImageSlider,5000);
    this.setState({
       timer: timer
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  changeImageSlider = () => {
    let { selected } = this.state;
    if (selected === this.props.lengthAllBicycles) selected = 1;
    this.setState({
      selected: selected + 1,
    })
  }
  moveRightImage = () => {
    clearInterval(this.state.timer);

    this.changeImageSlider();
  }
  moveLeftImage = () => {
    clearInterval(this.state.timer);

    let { selected } = this.state;
    if (selected === 1) selected = this.props.lengthAllBicycles;
    this.setState({
      selected: selected - 1,
    })
  }

  render() {
    const { 
      allBicycles,
      newBicycleDetails
       } = this.props;
    let { selected } = this.state;
    
    return (
      <div className="details-slider">
        
        <div className="details-slider-frame">
           <Link to="/pages">
          {allBicycles.map((el, index) =>
          
              <img className={selected === el.id ? " image" : "notactive image"}
                key={index + 45678 }src={el.path} alt={el.text}
                onClick={() => {
                  let promise = new Promise(resolve => {
                    newBicycleDetails(el.id);
                    resolve()
                  })
                  promise
                    .then(() => {  
                      this.props.changeDetailsTrue()
                      this.props.changeBicycleDetails() 
                    })
                }}
              />
          )}
           </Link>
          <div className="button-left"
            onClick={this.moveLeftImage}
          >{`<`}</div>
          <div className="button-right"
            onClick={this.moveRightImage}
          >></div>
          {allBicycles.map(el => {

            return (
              <div key={el.id + 5555} className={selected === el.id ? "title-bicycle" : "title-bicycle notactive"}>
                <div className="price-bicycle">{el.series}</div>
                <div className="name-bicycle">{el.name}</div>
                <div className="price-bicycle">{el.price} руб.</div>
              </div>
            )
          })}
         
        </div>
        
      </div>
    )
  }
}
