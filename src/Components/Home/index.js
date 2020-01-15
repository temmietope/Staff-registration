import React, { Component } from "react";
import sweetalert from "sweetalert";
import { withRouter } from "react-router-dom";
import "./Home.css";
import axios from "axios";

class Home extends Component {
  state = {
    staffList: []
  };
  async componentDidMount() {
    let staffList = await axios.get("http://192.168.0.164:8000/staff");
    staffList = staffList.data.data;
    this.setState({ staffList: staffList });
  }
  view = (e, id) => {
    this.props.history.push({
      pathname: "/staff",
      state: id
    });
  };
  edit = (e, id) => {
    this.props.history.push({
      pathname: "/edit-staff",
      state: id
    });
  };
  delete = (e, id) => {
    //delete staff
    axios.delete(`http://192.168.0.164:8000/staff/${id}`).then(() => {
      sweetalert("Deleted", `${id} has bn successfully deleted`, "success");
    });

    const newStaffList = this.state.staffList.filter(staff => {
      return staff.uid !== id;
    });
    this.setState({ staffList: newStaffList });
  };

  render() {
    return (
      <div className="home">
        <h3>StaffList</h3>
        <div className="list">
          {this.state.staffList.map(staff => {
            return (
              <li key={staff.uid}>
                {staff.firstname}{" "}
                <div className="buttons">
                  <button onClick={e => this.edit(e, staff.uid)}>
                    Edit Info
                  </button>
                  <button onClick={e => this.view(e, staff.uid)}>
                    View Info
                  </button>
                  <button
                    className="delete"
                    onClick={e => this.delete(e, staff.uid)}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
