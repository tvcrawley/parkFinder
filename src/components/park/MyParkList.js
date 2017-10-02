import React, { Component } from 'react';
import MyParkListItem from './MyParkListItem';

class MyParkList extends Component {
  render() {
    return (
      <div className="MyParkList">
        <h3>My Park List</h3>
        <ul>
          <MyParkListItem
            myParks={this.props.myParks}
            onHasVisitedChange={this.props.onHasVisitedChange}
            onParkItemClick={this.props.onParkItemClick}
            onParkItemDelete={this.props.onParkItemDelete}
          />
        </ul>
      </div>
    );
  }
}

export default MyParkList;
