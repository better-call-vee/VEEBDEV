/*
REACT + RECHARTS QUICKSTART WITH TOOLTIPS

1. INSTALLATION
npm install recharts

2. BASIC LINE CHART SETUP
*/
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", sales: 12 },
  { day: "Tue", sales: 19 },
  { day: "Wed", sales: 3 },
  { day: "Thu", sales: 25 },
  { day: "Fri", sales: 15 },
]; // for fetch, after fetching the data.

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <p className="label">{`Day: ${label}`}</p>
        <p style={{ color: "#8884d8" }}>Sales: ${payload[0].value}</p>
      </div>
    );
  }
  return null;
};

// Main Chart Component with Custom Tooltip
function FullChartExample() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />{" "}
      {/*length and gap between the dashes in bg*/}
      <XAxis dataKey="day" />
      <YAxis datakey="sales" />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      {/* type="monotone" ensures a smooth curve between points.
dataKey="sales" specifies that the sales property from the data array should be used for the y-axis values.
stroke="#8884d8" sets the color of the line. */}
      <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
    </LineChart>
  );
}

function NextOne() {
  return (
    <BarChart width={500} height={300} data={data}>
      {/* Gridlines */}
      <CartesianGrid strokeDasharray="3 3" />
      {/* Axes */}
      <XAxis dataKey="name" /> {/* x-axis: Days */}
      <YAxis /> {/* y-axis: Sales */}
      {/* Bars */}
      <Bar dataKey="sales" fill="#8884d8" /> {/* Bar color */}
      {/* Basic Tooltip */}
      <Tooltip />
    </BarChart>
  );
}

// Root App Component
function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1 style={{ color: "#333" }}>Sales Dashboard</h1>
      <FullChartExample />
      <NextOne />
    </div>
  );
}

export default App;

// Explore what's in here and work with what's needed
// https://github.com/brillout/awesome-react-components
