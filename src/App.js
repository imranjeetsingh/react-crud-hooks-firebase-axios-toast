import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Update from "./components/CRUD/Update";
import Create from "./components/CRUD/Create";
import Details from "./components/CRUD/Details";
import Showdata from "./components/CRUD/Showdata";
import Navbar from "./components/UI/NavBar/Navbar";
import Feature from "./components/UI/Features";

const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Feature />
          </div>
          <Route exact path="/" component={Showdata} />
          <Route path="/edit/:id" component={Update} />
          <Route path="/create" component={Create} />
          <Route path="/show/:id" component={Details} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
