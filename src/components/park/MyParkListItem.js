import React, { Component } from 'react';

class MyParkListItem extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     hasVisited: true
  //   }
  // }



  render() {
    const parksItemsLayout = ((park, index) =>
      <li key={index}>
        <input name={park.name} type="checkbox" checked={park.hasVisited}
          onChange={() => this.props.onHasVisitedChange(index)}/>
        {park.name}
      </li>
    )

    const parksList = this.props.parks.map((park, index) =>
      parksItemsLayout(park, index)
    )

    return (
      <div className="MyParkListItem">
        {parksList}
      </div>
    );
  }
}

export default MyParkListItem;
