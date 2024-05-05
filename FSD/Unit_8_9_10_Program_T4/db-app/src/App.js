import "./App.css";
import React from "react";
import Signup from "./Singup";
import Trycharts from "./Trycharts";

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./utils/Data"; 
import PieChart from "../components/PieChart";

Chart.register(CategoryScale);

function App() {
  return (
    <>
      <div>
        <Signup />
        <hr></hr>
        < Trycharts />
      </div>
    </>
  );
}

export default App;
