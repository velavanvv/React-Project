import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';
const ReservationType = ({ reservationTypes }) => {
  return (
    <div className="reservation-type glass mt-4 p-3 rounded ">
      <h5 className="text-center">Reservation Types</h5>
      <ul className="list-group list-group-flush">
        {reservationTypes.map((type, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {type.name}
            <span className="badge bg-primary rounded-pill">{type.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes
ReservationType.propTypes = {
  reservationTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReservationType;
