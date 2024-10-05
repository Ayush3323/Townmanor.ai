import React from 'react';
import "./Distance.css";
import { FaTrainSubway } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";
import { BiSolidSchool } from "react-icons/bi";
import { GrCafeteria } from "react-icons/gr";
import { MdLocalMall } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { PiParkBold } from "react-icons/pi";
import { TbBusStop } from "react-icons/tb";

function Distance() {
  return (
    <div>
      <div className='distance'>
            <h3>Distances</h3>
            <div className="distance-grid">
              <div>
              <span className="icon-amenities"><FaTrainSubway size={20}  /></span>
                <span>Metro:</span> 3.1
              </div>
              <div>
              <span className="icon-amenities"><MdLocalHospital size={20}  /></span>
                <span>Healthcare:</span>3.2
              </div>
              <div>
              <span className="icon-amenities"><BiSolidSchool size={20}  /></span>
                <span>School:</span> 3.7
              </div>
              <div>
              <span className="icon-amenities"><GrCafeteria size={20}  /></span>
                <span>Resturant:</span> 2.3
              </div>
              <div>
              <span className="icon-amenities"><MdLocalMall size={20}  /></span>
                <span>Mall:</span> 4.5
              </div>
              <div>
              <span className="icon-amenities">< RiMovie2Line size={20}  /></span>
                <span>Cinemas:</span> 3.1
              </div>
              <div>
              <span className="icon-amenities"><PiParkBold size={20}  /></span>
                <span>Park:</span> 1.5
              </div>
              <div>
              <span className="icon-amenities"><TbBusStop size={20}  /></span>
                <span>Bus Stand:</span> 2.1
              </div>
              {/* <div>
                <span>Distance:</span> 0.0
              </div>          */}
              
            </div>
          </div>
    </div>
  )
}

export default Distance
