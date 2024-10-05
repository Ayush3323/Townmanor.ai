import React from "react";
import "./Prices.css";

function Prices() {
  return (
    <>
      <div className="price">
        <div className="subprice1">
          <p className="price-detail">3 BHK Builder Floor For Sale</p>
          <div className="price-tag">
          <p className="">
              <span className="price-price">₹ 4.2 Cr - 5.0 Cr </span>
              {/* <span className="price-emi">| EMI - ₹ 2.93L/M</span> */}
            </p>
          </div>
        </div>
        <div className="subprice2">
          <p className="price-add">Sector 15, Greater Noida Expressway</p>
        </div>
      </div>

      {/* image  */}

      <div class="img-container">
        <div class="main-image">
          <img src="image1.jpg" alt="Main building view" />
        </div>
        <div class="side-images">
          <img src="image1.jpg" alt="Building close-up view" />
          <img src="image1.jpg" alt="Entrance view" />
          <img src="image1.jpg" alt="Water feature" />
        </div>
      </div>
    </>
  );
}

export default Prices;
