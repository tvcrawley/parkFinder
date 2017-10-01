import React, { Component } from 'react';

class MyParkListItem extends Component {
  render() {
    const parksList = this.props.parks.map((park) =>
      <li key={park.name}>{park.name}</li>
    )

    return (
      <div className="MyParkListItem">
        {parksList}
      </div>
    );
  }
}

export default MyParkListItem;
