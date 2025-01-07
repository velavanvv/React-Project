import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';
import { useState,useEffect } from "react";
import axios from "axios";
const Header = () => {

  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    axios.get("http://192.168.1.61:80/testE/modules/operation/frontoffice_react.php")  // Replace with your actual API URL
      .then((response) => {
        setRoomData(response.data);
     //   console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!roomData) {
    return <div>Loading...</div>;
  }
  console.log(roomData); // Print the data from setRoomData
  return (
    <header className="bg-light py-3 border-bottom">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-bookings" style={{width:"100%",height:"100px"}}>
              <span className="text-bold">Bookings-</span>
            </button>
          </div>  
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-arrivals" style={{width:"100%",height:"100px"}}>
              <span className="text-bold">Available-</span>
              <span className="text-number">{roomData.room_avil}</span>
            </button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-occupied" style={{width:"100%",height:"100px"}}>
              <span className="text-bold">Occupied-</span>
              <span className="text-number">{roomData.room_occupied}</span>
            </button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-departures" style={{width:"100%",height:"100px"}}>
              <span className="text-bold">Departures-</span>
              <span className="text-number">{roomData.room_dep}</span>
            </button>
          </div>
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-available-dirty" style={{width:"100%",height:"100px"}}>
              <span className="text-bold">Dirty-</span>
              <span className="text-number">{roomData.room_dirty}</span>
            </button>
          </div> 
          <div className="col-md-2 col-sm-4 col-6 mt-4">
            <button className="btn glass gradient-block-rooms" style={{width:"100%",height:"100px"}}>
              <span className="text-bold">Block Rooms-</span>
              <span className="text-number">{roomData.room_block}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;