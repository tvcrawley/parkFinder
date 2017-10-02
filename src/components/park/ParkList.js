import React, { Component } from 'react';
import './ParkList.css';

function ParkList(props) {
  return (
    <div className="ParkList">
      <h5 onClick={() => props.onParkClick(0)}>{props.parks[0].name}</h5>
      <h5 onClick={() => props.onParkClick(1)}>{props.parks[1].name}</h5>
      <h5 onClick={() => props.onParkClick(2)}>{props.parks[2].name}</h5>
    </div>
  );
}

export default ParkList;
