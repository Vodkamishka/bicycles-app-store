import React, {Component} from 'react';
import './menu.css';
import MenuItem from './menu-item';
import { Link } from 'react-router-dom';


export default class Menu extends Component {

  render () {
    const { gallery, changeMainPage, onToggle, showDetailsFalse } = this.props;
  return (
    <div className='bodyMenu'>
      <div className='menu'>
        <ul>
          <Link to='/bicycles-app-store'>
          <li
          onClick = {
            () => {
              changeMainPage()
              onToggle()
            }
          }
          >главная</li>
          </Link>
          {gallery.map(el =>
            <Link to={el.link} key = {el.id+134657}>
              <MenuItem 
              key={el.id} 
              text={el.text2} 
              changeMainPage={changeMainPage} 
              onToggle={onToggle}
              showDetailsFalse={showDetailsFalse}
              />
            </Link>
          )}
        </ul>
      </div>
    </div>
  )
}
}