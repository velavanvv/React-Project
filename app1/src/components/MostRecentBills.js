import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';

const MostRecentBills = ({ bills }) => {
  return (
    <div className="most-recent-bills p-3 mt-4  glass">
      <h5 className="text-center">Most Recent Bills</h5>
      <ul className="list-group list-group-flush">
        {bills.map((bill, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>#{bill.billNo}</strong> - {bill.guestName}
              <br />
              Resv: {bill.reservationNo} Paymode: {bill.paymode}
            </div>
            <span className="badge bg-success">{bill.amount}</span>
          </li>
        ))}
      </ul>
      <div className="text-center mt-3">
        <button className="btn btn-primary btn-sm">View All</button>
      </div>
    </div>
  );
};

// Define PropTypes
MostRecentBills.propTypes = {
  bills: PropTypes.arrayOf(
    PropTypes.shape({
      billNo: PropTypes.number.isRequired,
      guestName: PropTypes.string.isRequired,
      reservationNo: PropTypes.number.isRequired,
      paymode: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MostRecentBills;
