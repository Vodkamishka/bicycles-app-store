import React from 'react';
import './image.css';
import { Link } from 'react-router-dom';

export default function Image({ text, path, text2, link, showDetailsFalse }) {
 
  return (

    <div className="col-9  col-md-6 col-lg-3 pr-0 pl-0">

      <div className="frame">
        <Link to={link}
        onClick={showDetailsFalse}
        >
          <div className="frame-image">
            <div className="text-image">{text2}</div>

            <img src={path} alt={text} />

          </div>
          <div className="title">{text}</div>
        </Link>
      </div>

    </div>

  )
}
