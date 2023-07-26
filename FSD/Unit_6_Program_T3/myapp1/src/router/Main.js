import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import Nopage from "./Nopage";

const Main = () => {
  const navbarContainer = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: "10px",
  };

  const navbarItem = {
    marginRight: "20px",
  };

  const navbarLink = {
    textDecoration: "none",
    color: "#333",
  };
  return (
    <div className="main-route">
      <Router>
        <div className="main-route">
          <ul style={navbarContainer}>
            <li style={navbarItem}>
              <Link to="/" style={navbarLink}>
                Home
              </Link>
            </li>
            <li style={navbarItem}>
              <Link to="/Shop" style={navbarLink}>
                Shop
              </Link>
            </li>
            <li style={navbarItem}>
              <Link to="/Contact" style={navbarLink}>
                Contact
              </Link>
            </li>
            <li style={navbarItem}>
              <Link to="/Nopage" style={navbarLink}>
              Nopage
              </Link>
            </li>
          </ul>
        </div>

        <Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<Nopage />}></Route>
        </Route>
      </Router>
    </div>
  );
};

export default Main;
