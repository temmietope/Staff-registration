import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation";
import Form from "./Components/Form";
import ViewInfo from "./Components/ViewInfo";
import EditStaff from "./Components/EditStaff";
import About from "./Components/About";
import StaffList from "./Components/StaffList";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Router>
          <Navigation />

          <Route exact path="/" component={StaffList} />
          <Route exact path="/all-staff" component={StaffList} />
          <Route exact path="/about" component={About} />
          <Route exact path="/create" component={Form} />
          <Route exact path="/staff" component={ViewInfo} />
          <Route exact path="/edit-staff" component={EditStaff} />
        </Router>
      </div>
    </div>
  );
}

export default App;
