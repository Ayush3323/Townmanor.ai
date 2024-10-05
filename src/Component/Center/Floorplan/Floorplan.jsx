import React from "react";
import "./Floorplan.css";

function Floorplan() {
  return (
    <div>
      <div className="sub-floorplan">
        <div className="floor-heading">
          <h3>Floorplan</h3>
        </div>
        <div className="floor-content">
          <div className="floor-image">
            <img src="fpn.jpeg" alt="Main Floor Plan" />
          </div>
          <div className="divider"></div>
          <div className="thumbnail-section">
            <div className="thumbnails">
              <img src="fpn.jpeg" alt="Thumbnail 1" />
              <img src="fpn.jpeg" alt="Thumbnail 2" />
              <img src="maap.png" alt="Thumbnail 3" />
              <img src="fpn.jpeg" alt="Thumbnail 4" />
              {/* <img src="fpn.jpeg" alt="Thumbnail 5" /> */}
              {/* Add more images to test scrolling */}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Related Properties in Noida</h2>
        <div class="property-cards">
          <div class="property-card">
            <div class="tag-section">
              <span class="tag">Ready to Move</span>
            </div>
            <div class="image-container">
              <img src="fpn.jpeg" alt="Property Image" />
            </div>
            <div class="property-details">
              <h3>Gokul Homes Apartment</h3>
              <p>In Greater Noida</p>
              <p>3 BHK Flat</p>
              <p class="property-info">
                ₹ 50 L - 60 L &nbsp; | &nbsp; EMI - ₹ 2.53 L/M
              </p>
              <p>Agent</p>
            </div>
          </div>

          <div class="property-card">
            <div class="tag-section">
              <span class="tag">Ready to Move</span>
            </div>
            <div class="image-container">
              <img src="fpn.jpeg" alt="Property Image" />
            </div>
            <div class="property-details">
              <h3>Gokul Homes Apartment</h3>
              <p>In Greater Noida</p>
              <p>3 BHK Flat</p>
              <p class="property-info">
                ₹ 50 L - 60 L &nbsp; | &nbsp; EMI - ₹ 2.53 L/M
              </p>
              <p>Agent</p>
            </div>
          </div>

          <div class="property-card">
            <div class="tag-section">
              <span class="tag">Ready to Move</span>
            </div>
            <div class="image-container">
              <img src="fpn.jpeg" alt="Property Image" />
            </div>
            <div class="property-details">
              <h3>Gokul Homes Apartment</h3>
              <p className="prop-add">In Greater Noida</p>
              <p className="prop-bhk">3 BHK Flat</p>
              <p class="property-info">
                ₹ 50 L - 60 L &nbsp; | &nbsp; EMI - ₹ 2.53 L/M
              </p>
              <p>Agent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Floorplan;
