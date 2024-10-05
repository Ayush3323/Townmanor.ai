import React from 'react';
import "./Propnav.css";

function Propnav() {
  return (
    <>
      <div className="prop-container">
        <div className="prop-card">
          <div className="prop-header">
            <ul>
              <li className="active-tab">Property Information</li>
              <li>Overview</li>
              <li>Amenities</li>
              <li>Description</li>
              <li>Location</li>
              <li>Floor Plan</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Propnav
