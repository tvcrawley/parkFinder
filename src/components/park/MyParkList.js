import React, { Component } from 'react';
import MyParkListItem from './MyParkListItem';

class MyParkList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: [
        {name:'State Park 1', hasVisited: false},
        {name:'State Park 2', hasVisited: false},
        {name:'State Park 3', hasVisited: false}
      ]
    }
    this.handleHasVisitedChange = this.handleHasVisitedChange.bind(this)
  }


  handleHasVisitedChange(index) {
    //creates a copy of parks array
    const parksCopy = this.state.parks.slice()
    //creates a copy of parksCopy at that index
    parksCopy[index] = Object.assign({}, parksCopy[index])
    //modifies the hasVisited value
    parksCopy[index].hasVisited = !parksCopy[index].hasVisited
    //updates the state of parks
    this.setState({parks: parksCopy})
  }

  render() {
    return (
      <div className="MyParkList">
        <h3>My Park List</h3>
        <ul>
          <MyParkListItem parks={this.state.parks} onHasVisitedChange={this.handleHasVisitedChange}/>
        </ul>
      </div>
    );
  }
}

export default MyParkList;
