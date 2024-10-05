import React from "react";

import "./App.css";
import CustomNavbar from "./Component/NavFooter/Navbar";
import Footer from "./Component/NavFooter/Footer";
import Prices from "./Component/Image/Prices";
import Subdetails from "./Component/Subdetails/Subdetails";
import Details from "./Component/Center/Details";

function App() {

  return (
    <div>
      <CustomNavbar />
      <div>
      <Prices />
      <Subdetails />
      <Details />
      <Footer />
      </div>
    </div>
    
  );
}

export default App
