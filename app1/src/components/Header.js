import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';

const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-bookings" style={{width:"100%",height:"100px"}}>Bookings</button>
          </div>  
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-arrivals" style={{width:"100%",height:"100px"}}>Arrivals</button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-occupied" style={{width:"100%",height:"100px"}}>Occupied</button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-departures" style={{width:"100%",height:"100px"}}>Departures</button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-available-dirty" style={{width:"100%",height:"100px"}}>Available/Dirty</button>
          </div> 
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-block-rooms" style={{width:"100%",height:"100px"}}>Block Rooms</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;