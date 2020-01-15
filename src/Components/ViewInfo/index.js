import React, { Component } from "react";
import axios from "axios";
import "./ViewInfo.css";

class ViewInfo extends Component {
  state = {
    staff: {}
  };

  async componentDidMount() {
    let id = this.props.history.location.state;
    let staff = await axios.get(`http://192.168.0.164:8000/staff/${id}`);
    console.log(staff);
    staff = staff.data.data;
    this.setState({ staff: staff });
  }
  render() {
    const {
      firstname,
      lastname,
      email,
      sex,
      state,
      country
    } = this.state.staff;
    return (
      <div className="info">
        <h4>{firstname}</h4>
        <p>
          Firstname: <span>{firstname}</span>
        </p>
        <p>
          Lastname: <span>{lastname}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
        <p>
          Sex: <span>{sex}</span>
        </p>
        <p>
          State: <span>{state}</span>
        </p>
        <p>
          Country: <span>{country}</span>
        </p>
      </div>
    );
  }
}

export default ViewInfo;
