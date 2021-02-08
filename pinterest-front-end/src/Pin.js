import React from 'react';
import './Pin.css';

function Pin(props) {
  let sizePin = "medium";

  let {urls} = props;
  
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container ${sizePin}`}>
          <img 
          src={urls?.regular}
          alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Pin
