import React, { Component } from 'react';
import MyParkListItem from './MyParkListItem';

class MyParkList extends Component {
  render() {
    const parks = [
      {name:'State Park 1'},
      {name:'State Park 2'},
      {name:'State Park 3'}
    ]

    return (
      <div className="MyParkList">
        <ul>
          <MyParkListItem parks={parks}/>
        </ul>
      </div>
    );
  }
}

export default MyParkList;
