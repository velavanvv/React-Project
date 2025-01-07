import React, { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Add PointElement
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);
const RoomStatusChartWithSwitcher = () => {


  const chartData = {
    labels: [
      "01-07-2025",
      "01-08-2025",
      "01-09-2025",
      "01-10-2025",
      "01-11-2025",
      "01-12-2025",
    ],
    datasets: [
      {
        label: "Arrival",
        data: [12, 32, 14, 23, 23, 21],
        backgroundColor: "#00c76b", // Blue
        borderColor: "#00c76b",
        fill: false,
        barThickness: 20, // Default bar width
      },
      {
        label: "Departure",
        data: [4, 3, 5, 4, 8, 7],
        backgroundColor: "#605ca8", // Purple
        borderColor: "#605ca8",
        fill: false,
        barThickness: 20, // Default bar width
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Room Status Overview",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        barPercentage: 0.4, // Add space between bars
        categoryPercentage: 0.5, // Add space between bars
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Count",
        },
      },
    },
  };

  const tableView = (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Date</th>
          {chartData.datasets.map((dataset, index) => (
            <th key={index} style={{ border: "1px solid #ccc", padding: "8px" }}>{dataset.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {chartData.labels.map((date, index) => (
          <tr key={date}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{date}</td>
            {chartData.datasets.map((dataset, datasetIndex) => (
              <td key={datasetIndex} style={{ border: "1px solid #ccc", padding: "8px" }}>{dataset.data[index]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const [chartType, setChartType] = useState("bar");

  return (
    <div style={{ width: "80%", margin: "20px auto" }} className="glass p-4 rounded">
      <div style={{ marginBottom: "20px" }}  >
        <button onClick={() => setChartType("bar")} style={{ marginRight: "10px" }} className="glass">
          Bar Chart
        </button>
        <button onClick={() => setChartType("line")} style={{ marginRight: "10px" }} className="glass">
          Line Chart
        </button>
        <button onClick={() => setChartType("table")} className="glass">Table View</button>
      </div>
      {chartType === "bar" && <Bar data={chartData} options={options} />}
      {chartType === "line" && <Line data={chartData} options={options} />}
      {chartType === "table" && tableView}
    </div>
  );
};

export default RoomStatusChartWithSwitcher;
