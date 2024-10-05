// Brochure.jsx
import React from "react";
import "./Brochure.css";
import PropertyPDF from "./PropertyPDF"; // Import the PDF component
// import Invoice from "./Invoice";

function Brochure({ property }) {
  // console.log(property);
  return (
    <>
      <div className="brochure-box">
        <div className="brochure-header">
          <h4>Download Brochure</h4>
        </div>
        <div className="brochure-img">
          <img src="pdf.png" alt="Brochure PDF" />
        </div>
        <div>
          <PropertyPDF property={property} />{" "}
          {/* Include the PDF download button */}
        </div>
      </div>

      {/* <!-- EMI Calculator --> */}
      <div class="widget widget-calculator mortgage_widget clearfix">
        <h3 class="widget-title">EMI Calculator</h3>
        <ul>
          <li>
            <i>₹</i>
            <input
              d="mortgage_balance"
              type="text"
              value="1.47"
              placeholder="House price*"
            />
          </li>
          <li>
            <i>₹</i>
            <input id="mortgage_interest" type="text" placeholder="Interest*" />
          </li>
          <li>
            <i>₹</i>
            <input
              id="mortgage_downpayment"
              type="text"
              value="1.18"
              placeholder="Down payment"
            />
          </li>
          <li>
            <i>Y</i>
            <input id="mortgage_years" type="text" placeholder="Years*" />
          </li>
          <div>
            <button type="submit" class="btn2">
              Calculate
            </button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Brochure;


