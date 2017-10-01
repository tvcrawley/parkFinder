import React, { Component } from 'react';
import ParkList from '../park/ParkList';
import MyParkList from '../park/MyParkList';

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: [
        {name:'State Park 1', hasVisited: false, location: 'Maryland', showInfo: false},
        {name:'State Park 2', hasVisited: false, location: 'Pennsylvania', showInfo: false},
        {name:'State Park 3', hasVisited: false, location: 'Massachusetts', showInfo: false}
      ],
      myParks: []
    }
    this.handleParkClick = this.handleParkClick.bind(this)
    this.handleHasVisitedChange = this.handleHasVisitedChange.bind(this)
    this.handleParkItemDelete = this.handleParkItemDelete.bind(this)
  }

  handleParkClick (index) {
    this.setState({
      myParks: this.state.myParks.concat([this.state.parks[index]])
    })
    console.log(this.state.myParks)
  }

  handleHasVisitedChange(index) {
    //creates a copy of parks array
    const myParksCopy = this.state.myParks.slice()
    //creates a copy of myParksCopy at that index
    myParksCopy[index] = Object.assign({}, myParksCopy[index])
    //modifies the hasVisited value
    myParksCopy[index].hasVisited = !myParksCopy[index].hasVisited
    //updates the state of myParks
    this.setState({myParks: myParksCopy})
  }

  handleParkItemClick(index) {
    console.log(this.state.myParks[index].location)
    const myParksCopy = this.state.myParks.slice()
    myParksCopy[index] = Object.assign({}, myParksCopy[index])
    myParksCopy[index].showInfo = !myParksCopy[index].showInfo
    this.setState({myParks: myParksCopy})
  }

  handleParkItemDelete (index) {
    const myParksCopy = this.state.myParks.slice()
    myParksCopy.splice(index, 1)
    this.setState({myParks: myParksCopy})
    console.log(this.state.myParks)
  }

  render() {

    return (
      <div className="Body">
        <ParkList parks={this.state.parks} onParkClick={this.handleParkClick}/>
        <MyParkList
          myParks={this.state.myParks}
          onHasVisitedChange={this.handleHasVisitedChange}
          onParkItemClick={this.handleParkItemClick}
          onParkItemDelete={this.handleParkItemDelete}
        />
      </div>
    );
  }
}

export default Body;
