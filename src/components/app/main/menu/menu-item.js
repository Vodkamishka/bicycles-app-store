import React from 'react';

export default function MenuItem ({text, changeMainPage, onToggle, showDetailsFalse}) {

  return (
    <div>
      <li
      onClick = {
        () => {
          changeMainPage()
          onToggle()
          showDetailsFalse()
        }
      }
      >{text}</li>
    </div>
  )
}

