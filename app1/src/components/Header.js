import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-light py-3 border-bottom">

      
        <div className="d-flex container-fluid d-flex justify-content-between align-items-center row">
            <div className="col-md-2 col-sm-4 col-6 mt-4">
          <button className="btn btn-warning" style={{width:"100%",height:"100px"}}>Bookings</button>
          </div>  
           <div className="col-md-2 col-sm-4 col-6 mt-4"><button className="btn btn-info" style={{width:"100%",height:"100px"}}>Arrivals</button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">  <button className="btn btn-primary" style={{width:"100%",height:"100px"}}>Occupied</button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">  <button className="btn btn-danger" style={{width:"100%",height:"100px"}}>Departures</button>
          </div>
           <div className="col-md-2 col-sm-4 col-6 mt-4">  <button className="btn btn-success" style={{width:"100%",height:"100px"}}>Available/Dirty</button>
          </div> 
           <div className="col-md-2 col-sm-4 col-6 mt-4">  <button className="btn btn-secondary" style={{width:"100%",height:"100px"}}>Block Rooms</button>
          </div> 
       
      </div>
    </header>
  );
};

export default Header;
