import React from 'react';
import './Pin.css';

function Pin(props) {
  let sizePin = "medium";
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container ${sizePin}`}>
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grogu-baby-yoda-the-child-1606497947.png?crop=0.679xw:0.809xh;0.218xw,0.164xh&resize=640:*"/>
        </div>
      </div>
    </div>
  )
}

export default Pin
