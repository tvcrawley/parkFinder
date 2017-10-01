import React, { Component } from 'react';

class ParkList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }

  render() {

    return (
      <div className="ParkList">
        <h5>{this.props.parks[0].name}</h5>
        <h5>{this.props.parks[1].name}</h5>
        <h5>{this.props.parks[2].name}</h5>
      </div>
    );
  }
}

export default ParkList;
