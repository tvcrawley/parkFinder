import React, { Component } from 'react';

class ParkList extends Component {
  render() {

    return (
      <div className="ParkList">
        <h5 onClick={() => this.props.onParkClick(0)}>{this.props.parks[0].name}</h5>
        <h5 onClick={() => this.props.onParkClick(1)}>{this.props.parks[1].name}</h5>
        <h5 onClick={() => this.props.onParkClick(2)}>{this.props.parks[2].name}</h5>
      </div>
    );
  }
}

export default ParkList;
