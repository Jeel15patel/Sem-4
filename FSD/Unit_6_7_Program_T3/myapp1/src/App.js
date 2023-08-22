// import "./App.css";
import React from "react";
import App1 from "./component/App1";
import App2 from "./component/App2";
import Event from "./component/Events";
import Event1 from "./component/Events1";
import Map1 from "./component/Map1";
import Map2 from "./component/Map2";
import Pra2 from "./component/Pra2";
import List1 from "./component/List";
import Filter1 from "./component/Filter";
import Hooks1 from "./component/Hooks";
import Pra3 from "./component/Pra3";
import Pra4 from "./component/Pra4";
import Pra5 from "./component/Pra5";
import Pra6 from "./component/Pra6";
import Pra7 from "./component/Pra7";
import Reduces from "./component/UseReduces";
import Pra8 from "./component/Pra8";
import Pra9 from "./component/Pra9";
import Pra10 from "./component/Pra10";
import Pra11 from "./component/Pra11";
import UseContext1 from "./usecontext/PC";
import Calculator from "./calculator/Calculator";
import FormsPra from "./component/ReactForm";
import FormsPra2 from "./component/FormPra2";
import FormsPra3 from "./component/FormPra3";
import Pra12 from "./component/Pra12";
// import Main from "./router/Main";
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
            <td>Event/Map/Pra2</td>
          </tr>
          <tr>
            <td>Lec 4</td>
            <td>24-07-23</td>
            <td>List/Filter/Router</td>
          </tr>
          <tr>
            <td>Lec 5</td>
            <td>26-07-23</td>
            <td>Hooks/Pra3/Pra4/Pra5/Pra6/Pra7</td>
          </tr>
          <tr>
            <td>Lec 6</td>
            <td>28-07-23</td>
            <td>useReducer/useEffect/Pra8/Pra9/Pra10</td>
          </tr>
          <tr>
            <td>Lec 7</td>
            <td>31-07-23</td>
            <td>Pra11/usecontext/calculator/</td>
          </tr>
          <tr>
            <td>Lec 8</td>
            <td>2-08-23</td>
            <td>FormsPra/FormsPra2/FormsPra3/Pra12</td>
          </tr>
        </table>
        {/* --------------------- */}
        <ul>
          <li>ABC</li>
          <li>DEF</li>
          <li>GHI</li>
        </ul>
        <h6>------------------------------</h6>
        {/* ------------------ */}
        <img src="logo192.png" alt="Logo"></img>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <App1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <App2 name="Jeel" age="20" marks="19" />
        <App2 name="Dwij" age="21" marks="23" />
        <h6>------------------------------</h6>
        {/* --------------------- */}
        {/* <div>
						<Pra1 />
						</div> */}
        {/* --------------------- */}
        <div>
          <Event />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Event1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Map1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra2 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Map2 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <List1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Filter1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        {/* <div>
					<Main />
				</div> */}
        {/* --------------------- */}
        <div>
          <Hooks1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra3 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra4 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra5 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra6 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra7 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Reduces />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra8 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra9 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra10 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra11 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <UseContext1 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Calculator />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <FormsPra />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <FormsPra2 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <FormsPra3 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
        <div>
          <Pra12 />
        </div>
        <h6>------------------------------</h6>
        {/* --------------------- */}
      </header>
    </div>
  );
}

export default App;