import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Form from "./Components/Form";
import ViewInfo from "./Components/ViewInfo";
import EditStaff from "./Components/EditStaff";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/create" component={Form} />
          <Route path="/staff" component={ViewInfo} />
          <Route path="/edit-staff" component={EditStaff} />
        </Router>
      </div>
    </div>
  );
}

export default App;
