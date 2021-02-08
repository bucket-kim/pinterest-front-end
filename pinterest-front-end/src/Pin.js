import React from 'react';
import './Pin.css';

function Pin(props) {
  let sizePin = "medium";
  return (
    <div className="pin">
      <div className="pin__container">
        <div className={`pin__container ${sizePin}`}>
          <img src="https://i.guim.co.uk/img/media/7f461faef1a1f1601fca37eb6e865e248ca7f791/50_0_1133_680/master/1133.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=75e943e1cc536746aa58839c49175512" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Pin
