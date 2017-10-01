import React, { Component } from 'react';

class MyParkListItem extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     location: false
  //   }
  // }



  render() {
    const parksItemsLayout = ((park, index) =>
      <li key={index}>
        <input name={park.name} type="checkbox" checked={park.hasVisited}
          onChange={() => this.props.onHasVisitedChange(index)}/>
        <a href="#" onClick={() => this.props.onParkItemClick(index)}>{park.name}</a>
        <span onClick={() => this.props.onParkItemDelete(index)}>X</span>
        {info(park)}
      </li>
    )

    const info = ((park) => {
      if(!park.showInfo) {
        console.log(park)
        return null
      }
      else {
        return <p>Location: {park.location}</p>
      }
    })

    const parksList = this.props.myParks.map((park, index) => {
      return parksItemsLayout(park, index)
    })

    return (
      <div className="MyParkListItem">
        {parksList}
      </div>
    );
  }
}

export default MyParkListItem;
