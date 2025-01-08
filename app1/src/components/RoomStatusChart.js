import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const RoomStatusChart = ({rooms=[]}) => {
    if (!rooms.length) {
        return (
            <div className="text-center text-muted">
                <p>No room data available.</p>
            </div>
        );
    }

    return (
        <div className="room-status-chart bg-light p-4 rounded shadow-lg">
            <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
                Room Status Overview
            </h2>
            <div className="room-status-chart bg-light p-4 rounded shadow-lg" style={{ height: "500px", width: "100%", overflow: "auto" }}>
                <div className="row g-4">
                    {rooms.map((room, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2">
                       <div className="card-body text-center py-2 glass" style={{display: "grid",justifyContent:"center",width:"163px"}}>
                                <h5 className="card-title mb-2" style={{ fontSize: "1.0rem", fontWeight: "700" }}>
                                    Room {room.number}
                                </h5>
                                <p className="card-text mb-1" style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                                    {room.type}
                                </p>
                                <div className="" style={{
                              background: room.status === "occupied"
                                    ? "linear-gradient(to right,rgb(223, 57, 46) 0%,rgb(168, 48, 37) 0%,rgb(224, 83, 67) 21%,rgb(209, 87, 73) 52%,rgb(201, 63, 63) 78%,rgb(233, 38, 38) 100%)"
                                    : room.status === "available"
                                    ? "linear-gradient(to top, #0ba360 0%, #3cba92 100%)"
                                    : "linear-gradient(to right, #f83600 0%, #f9d423 100%)", 
                                color: "rgba(255,255,255,0.9)",
                                padding: "5px 10px",
                                borderRadius: "10px",
                                fontWeight: "bold",
                                width: "100px",
                                border:"2px solid #e7e7e7",
                             
                               // background: "linear-gradient(-45deg,rgb(61, 249, 255), #FF3D77, #338AFF, #3CF0C5)",
                                backgroundSize: "600%",
                                animation: "anime 16s linear infinite"
                            }}>
                                <span className="badge text-uppercase">
                                    {room.status}
                                </span>
                            </div></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Add keyframes for animation
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes anime {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// Define prop types
RoomStatusChart.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
};

export default RoomStatusChart;
