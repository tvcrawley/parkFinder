import React, { Component } from 'react';

function MyParkListItem(props) {
  const parksItemsLayout = ((park, index) =>
    <li key={index}>
      <input name={park.name} type="checkbox" checked={park.hasVisited}
        onChange={() => props.onHasVisitedChange(index)}/>
      <a href="#" onClick={() => props.onParkItemClick(index)}>{park.name}</a>
      <span onClick={() => props.onParkItemDelete(index)}>X</span>
      {info(park)}
    </li>
  )

  const info = ((park) => {
    if(!park.showInfo) {
      return null
    }
    else {
      return <p>Location: {park.location}</p>
    }
  })

  const parksList = props.myParks.map((park, index) => {
    return parksItemsLayout(park, index)
  })

  return (
    <div className="MyParkListItem">
      {parksList}
    </div>
  );
}

export default MyParkListItem;
