import React from 'react';

const CollectionsDisplay = (props) => (
  <div className="collectionsBoxes">
    {/* <button onClick={event => window.location.href='./collections.html'}>My Collection</button> */}
    <button onClick={console.log("CLICKED")}>My Collection</button>
  </div>
);

export default CollectionsDisplay;