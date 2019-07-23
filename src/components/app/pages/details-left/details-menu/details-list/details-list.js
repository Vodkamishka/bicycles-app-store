import React from 'react';


export default function Detailslist({text,showDetailsFalse}) {
  return (
    <div>
      <li 
      onClick = {
        () => {
          showDetailsFalse();
        }
        } 
      >
      {text}</li>
    </div>
  )
}
