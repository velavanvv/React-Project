import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const RoomStatusChart = ({ rooms = [] }) => {
  if (!rooms.length) {
    return (
      <div className="text-center text-muted">
        <p>No room data available.</p>
      </div>
    );
  }

  return (
    <div className="room-status-chart bg-white p-4 rounded shadow-sm">
      <h2 className="text-center mb-4">Room Status Chart</h2>
      <div className="row g-3">
        {rooms.map((room, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div
              className={`card text-white ${
                room.status === "occupied"
                  ? "bg-danger"
                  : room.status === "available"
                  ? "bg-success"
                  : "bg-warning"
              }`}
            >
              <div className="card-body text-center">
                <h5 className="card-title">{room.number}</h5>
                <p className="card-text">{room.type}</p>
                <p className="card-text">{room.status.toUpperCase()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
