import React, { Component } from 'react';
import ParkList from '../park/ParkList';
import MyParkList from '../park/MyParkList';
import * as firebase from 'firebase';
import * as reactfire from 'reactfire';

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
      myParks: []
    }
    this.handleParkClick = this.handleParkClick.bind(this)
    this.handleHasVisitedChange = this.handleHasVisitedChange.bind(this)
    this.handleParkItemClick = this.handleParkItemClick.bind(this)
    this.handleParkItemDelete = this.handleParkItemDelete.bind(this)
  }
  mixins: [ReactFireMixin]

  componentWillMount() {
    //sets the state of the parks array from the firebase api
    const ref = firebase.database().ref("parks");
    ref.on('value', ((snapshot) => {
      const parks = snapshot.val()
      this.setState({
        parks: parks
      });
     })).bind(this)
  }

  handleParkClick(index) {
    // search through the myParks array
    // find if the clicked park already exists in myParks
    if(!this.state.myParks.includes(this.state.parks[index])) {
      const myParksCopy = this.state.myParks.slice()
      myParksCopy.push(this.state.parks[index])
      this.setState({
        myParks: myParksCopy
      })
    }
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
    const myParksCopy = this.state.myParks.slice()
    myParksCopy[index] = Object.assign({}, myParksCopy[index])
    myParksCopy[index].showInfo = !myParksCopy[index].showInfo
    this.setState({myParks: myParksCopy})
  }

  handleParkItemDelete (index) {
    const myParksCopy = this.state.myParks.slice()
    myParksCopy.splice(index, 1)
    this.setState({myParks: myParksCopy})
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
