import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueChart = ({ data }) => {
  const chartData = {
    labels: ["Tariff", "Exbed", "Laundry", "Postings", "Other Services"],
    datasets: [
      {
        label: "Revenue Distribution",
        data: [
          data.tariff,
          data.exbed,
          data.laundry,
          data.postings,
          data.otherServices,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="revenue-chart bg-white p-4 mt-4 rounded glass col-md-12">
      <h2 className="text-center mb-4">Current Revenue</h2>
      <div className="d-flex justify-content-center col-md-12">
      <div className="d-flex justify-content-center col-md-8">
        <Pie data={chartData} />
      </div></div>
      <ul className="list-group mt-4">
        <li className="list-group-item d-flex justify-content-between">
          <span>Total Paid Amount:</span> <strong>₹{data.totalPaid}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Outstanding Balance:</span> <strong>₹{data.outstanding}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Cancellation Charges:</span> <strong>₹{data.cancellation}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Refunds Issued:</span> <strong>₹{data.refunds}</strong>
        </li>
      </ul>
    </div>
  );
};

export default RevenueChart;
