import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* --------------------- */}
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
        </table>
        {/* --------------------- */}
        <ul>
          <li>ABC</li>
          <li>DEF</li>
          <li>GHI</li>
        </ul>
        {/* ------------------ */}
        <img src="logo192.png" alt="Logo"></img>
      </header>
    </div>
  );
}

export default App;
