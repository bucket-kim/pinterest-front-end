import React from 'react';
import "./Mainboard.css"
import Pin from './Pin';

function Mainboard(props) {

  let { pins } = props;

  return (
    <div className="mainboard">
      {pins.map((pin) => {
        let { urls } = pin; 
        return <Pin urls = {urls}/>
      })}
    </div>
  )
}

export default Mainboard
