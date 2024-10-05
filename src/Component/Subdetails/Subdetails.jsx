import React from "react";
import "./Subdetails.css";

function Subdetails() {
  return (
    <>
      <div className="subdetails">
        <div class="outer-containers">
          <div class="upper-box">
            <div class="subdetail-item">
              <span>3 Bed Room</span>
            </div>
            <div class="subdetail-item">
              <span>3 Bathroom</span>
            </div>
            <div class="subdetail-item">
              <span>Ownership</span>
              <div>
                <strong>Freehold</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Age of Property</span>
              <div>
                <strong>Mar 2008</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Rera Id</span>
              <div>
                <strong>UPRERAPRJ270081</strong>
              </div>
            </div>
          </div>

          {/* lowerbox */}

          <div class="lower-box">
            <div class="subdetail-item">
              <span>Furnishing</span>
              <div>
                <strong>Semi-Furnished</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Status</span>
              <div>
                <strong>Ready to Move</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Facing</span>
              <div>
                <strong>South-West</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Carpet Area</span>
              <div>
                <strong>1500 sq/ft</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Floor</span>
              <div>
                <strong>2 (out of 4)</strong>
              </div>
            </div>
            <div class="subdetail-item">
              <span>Project</span>
              <div>
                <strong>Godrej Woods</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Subdetails;
