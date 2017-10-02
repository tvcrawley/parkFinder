import React, { Component } from 'react';
import MyParkListItem from './MyParkListItem';

function MyParkList(props) {
  return (
    <div className="MyParkList">
      <h3>My Park List</h3>
      <ul>
        <MyParkListItem
          myParks={props.myParks}
          onHasVisitedChange={props.onHasVisitedChange}
          onParkItemClick={props.onParkItemClick}
          onParkItemDelete={props.onParkItemDelete}
        />
      </ul>
    </div>
  );
}

export default MyParkList;
