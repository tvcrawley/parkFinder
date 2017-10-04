import React from 'react';
import './MyParkListItem.css';

function MyParkListItem(props) {
  const parksItemsLayout = ((park, index) =>
    <li key={index}>

      <h4 onClick={() => props.onParkItemClick(index)}>{park.name}</h4>
      {info(park)}
      <p>Visited?
        <input name={park.name} type="checkbox" checked={park.hasVisited}
          onChange={() => props.onHasVisitedChange(index)}/>
      </p>
      <button onClick={() => props.onParkItemDelete(index)}>Remove</button>
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
