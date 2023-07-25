import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact"
import Nopage from "./Nopage";

function Main(){
    return(
        <div className="main-route">
            <Router>
                <div className="main-route">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Shop">Shop</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Nopage">Nopage</Link></li>
                    </ul>
                </div>
                <Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/Shop" component={Shop}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                    <Route path="/Nopage" component={Nopage}></Route>
                </Route>
            </Router>
        </div>
    )
}

export default Main;
