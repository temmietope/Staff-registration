import React, { Component } from "react";
import axios from "axios";

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
      <div>
        {console.log(firstname)}
        <h4>{firstname}</h4>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Email: {email}</p>
        <p>Sex: {sex}</p>
        <p>State: {state}</p>
        <p>Country: {country}</p>
      </div>
    );
  }
}

export default ViewInfo;
