import React, { Component } from 'react';
import './ParkList.css';

function ParkList(props) {
  return (
    <div className="ParkList">
      <h4 onClick={() => props.onParkClick(0)}>{props.parks[0].name}</h4>
      <h4 onClick={() => props.onParkClick(1)}>{props.parks[1].name}</h4>
      <h4 onClick={() => props.onParkClick(2)}>{props.parks[2].name}</h4>
    </div>
  );
}

export default ParkList;
