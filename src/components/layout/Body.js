import React, { Component } from 'react';
import ParkList from '../park/ParkList';
import MyParkList from '../park/MyParkList';
import * as firebase from 'firebase';
import * as reactfire from 'reactfire';

// var firebase = require('firebase');
const config = {
  apiKey: "AIzaSyA428dlWWw9ExOTapCiN7jGAOlqPf4T-_s",
  authDomain: "parkfinderdatabase.firebaseapp.com",
  databaseURL: "https://parkfinderdatabase.firebaseio.com",
  projectId: "parkfinderdatabase",
  storageBucket: "",
  messagingSenderId: "720724333567"
};
firebase.initializeApp(config);

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parks: [],
      // parks: [
      //   {name:'State Park 1', hasVisited: false, location: 'Maryland', showInfo: false},
      //   {name:'State Park 2', hasVisited: false, location: 'Pennsylvania', showInfo: false},
      //   {name:'State Park 3', hasVisited: false, location: 'Massachusetts', showInfo: false}
      // ],
      myParks: []
    }
    this.handleParkClick = this.handleParkClick.bind(this)
    this.handleHasVisitedChange = this.handleHasVisitedChange.bind(this)
    this.handleParkItemClick = this.handleParkItemClick.bind(this)
    this.handleParkItemDelete = this.handleParkItemDelete.bind(this)
  }
  mixins: [ReactFireMixin]

  componentWillMount() {
    const ref = firebase.database().ref("parks");
    ref.on('value', ((snapshot) => {
      // const parks = []
      // console.log(snapshot.val())
      const parks = snapshot.val()
      // park['.key'] = snapshot.key;
      // parks.push(park)
      console.log(parks)
      this.setState({
        parks: parks
      });
      console.log(this.state.parks)
     })).bind(this)
     console.log(this.state.parks)
  }

  handleParkClick(index) {
    if(this.state.myParks.indexOf(this.state.myParks[index]) === -1) {
      this.setState({
        myParks: this.state.myParks.concat([this.state.parks[index]])
      })
    }
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
        {this.state.parks.length === 0 ? (<p>Loading</p>) : (
        <ParkList parks={this.state.parks} onParkClick={this.handleParkClick}/>
        )}
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
