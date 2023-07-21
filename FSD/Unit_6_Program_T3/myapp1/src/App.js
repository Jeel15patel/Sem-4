// import "./App.css";
import React from "react";
import App1 from "./component/App1";
import App2 from "./component/App2";
import Event from "./component/Events";
import Event1 from "./component/Events1";
import Map1 from "./component/Map1";
import Map2 from "./component/Map2";
import Pra2 from "./component/Pra2";
// import Pra1 from "./component/Pra1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello This is My First React App</h1>
        {/* --------------------- */}
        <table>
          <tr>
            <th>Lectern No.</th>
            <th>Date</th>
            <th>Contain</th>
          </tr>
          <tr>
            <td>Lec 1</td>
            <td>17-07-23</td>
            <td>Install React</td>
          </tr>
          <tr>
            <td>Lec 2</td>
            <td>19-07-23</td>
            <td>App1/App2/Pra1</td>
          </tr>
          <tr>
            <td>Lec 3</td>
            <td>21-07-23</td>
            <td>Event,Map,Pra2</td>
          </tr>
        </table>
        {/* --------------------- */}
        <ul>
          <li>ABC</li>
          <li>DEF</li>
          <li>GHI</li>
        </ul>
        {/* ------------------ */}
        <img src="logo192.png" alt="Logo"></img>
        {/* --------------------- */}
        <div>
          <App1 />
        </div>
        {/* --------------------- */}
        <App2 name="Jeel" age="20" marks="19" />
        <App2 name="Dwij" age="21" marks="23" />
        {/* --------------------- */}
        {/* <div>
          <Pra1 />
        </div> */}
        {/* --------------------- */}
        <div>
          <Event />
        </div>
        {/* --------------------- */}
        <div>
          <Event1 />
        </div>
        {/* --------------------- */}
        <div>
          <Map1 />
        </div>
        {/* --------------------- */}
        <div>
          <Pra2 />
        </div>
        {/* --------------------- */}
        <div>
          <Map2 />
        </div>
      </header>
    </div>
  );
}
export default App;
