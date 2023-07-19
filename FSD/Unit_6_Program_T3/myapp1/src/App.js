import React from "react";
import App1 from "./component/App1";
import App2 from "./component/App2";
import "./App.css";

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
            <td>App1/App2/</td>
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
        <App2 name="Jeel" age="20" marks="19"/>
        <App2 name="Dwij" age="21" marks="23"/>
      </header>
    </div>
  );
}

export default App;
