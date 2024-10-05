import "./Amenities.css";
import React, { useState } from 'react';
import { TbAirConditioning } from "react-icons/tb";
import { FaSatelliteDish } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { LuUtensilsCrossed } from "react-icons/lu";
import { PiThermometerHotBold } from "react-icons/pi";
import { GrElevator } from "react-icons/gr";
import { LiaIntercom } from "react-icons/lia";
import { PiPark } from "react-icons/pi";
import { MdMicrowave } from "react-icons/md";
import { LuParkingCircle } from "react-icons/lu";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { BiCctv } from "react-icons/bi";
import { ImPower } from "react-icons/im";
import { GiGasStove } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { PiCourtBasketball } from "react-icons/pi";
import { TbBuildingBank } from "react-icons/tb";
import { GiChimney } from "react-icons/gi";
import { FaKitchenSet } from "react-icons/fa6";
import { TbFridge } from "react-icons/tb";
import { GiGrassMushroom } from "react-icons/gi";
import { GiGrass } from "react-icons/gi";
import { FaChargingStation } from "react-icons/fa6";
import { PiWarehouseLight } from "react-icons/pi";

function Amenities() {
  return (
    <div className="sub-amenities">
      <div class="sub-box">
        <div className="service-header">
          Resources you need for your home buying Journey
        </div>
        <div class="services-grid">
          <div class="service-box">
            <img src="https://via.placeholder.com/40" alt="icon" />
            <p>Home Lane</p>
          </div>
          <div class="service-box">
            <img src="https://via.placeholder.com/40" alt="icon" />
            <p>Home Interior</p>
          </div>
          <div class="service-box">
            <img src="https://via.placeholder.com/40" alt="icon" />
            <p>Home Insurance</p>
          </div>
          <div class="service-box">
            <img src="https://via.placeholder.com/40" alt="icon" />
            <p>Home Shift</p>
          </div>
          <div class="service-box">
            <img src="https://via.placeholder.com/40" alt="icon" />
            <p>Property Valuation</p>
          </div>
        </div>
      </div>

      <div class="amenities-box">
        <h3>Amenities</h3>
        <div class="amenities-grid">
          <div class="amenity-box">
            <span className="icon-amenities"><TbAirConditioning size={20}  /></span>
            <span>Air Conditioning</span>
          </div>
          <div class="amenity-box">
          <span className="icon-amenities"><FaSatelliteDish size={20}  /></span>
            <span>Cable TV</span>
          </div>
          <div class="amenity-box">
          <span className="icon-amenities"><FaWifi size={20}  /></span>
            <span>Internet</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><PiCourtBasketball size={20}  /></span>
            <span>Court</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><LuUtensilsCrossed size={20}  /></span>
            <span>Dishwasher</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><PiThermometerHotBold size={20}  /></span>
            <span>Heating</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><GiWeightLiftingUp size={20}  /></span>
            <span>Gymnasium</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><MdMicrowave size={20}  /></span>
            <span>Microwave</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><GrElevator size={20}  /></span>
            <span>Lift</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><BiCctv size={20}  /></span>
            <span>CCTV</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><LiaIntercom size={20}  /></span>
            <span>Intercom Facility</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><MdSecurity size={20}  /></span>
            <span>Security</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><LuParkingCircle  size={20}  /></span>
            <span>Parking</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><PiPark  size={20}  /></span>
            <span>Park/Garden</span>
          </div>
          <div class="amenity-box">
            <span className="icon-amenities"><FaPersonSwimming size={20}  /></span>
            <span>Pool</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amenities;
