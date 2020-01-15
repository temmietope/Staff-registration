import React, { Component } from "react";
import sweetalert from "sweetalert";
import axios from "axios";

import "./Form.css";

class Form extends Component {
  state = {
    staff: {
      firstname: "",
      lastname: "",
      email: "",
      sex: "",
      country: ""
    }
  };
  handleChange = e => {
    const { staff } = this.state;
    this.setState({ staff: { ...staff, [e.target.name]: e.target.value } });
  };
  submitDetails = e => {
    e.preventDefault();
    const { staff } = this.state;

    //Register User
    axios
      .post(`http://192.168.0.164:8000/staff/create`, {
        ...staff
      })
      .then(() => {
        sweetalert(
          "Staff Registerd",
          `${staff.firstname} has bn successfully registered`,
          "success"
        );
        this.setState({
          staff: {
            firstname: "",
            lastname: "",
            email: "",
            sex: "",
            country: ""
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <form
        onSubmit={e => {
          this.submitDetails(e);
        }}
      >
        <h4>Create new Staff</h4>
        <div className="label">
          <label>Firstname</label>

          <input
            type="text"
            name="firstname"
            placeholder="John"
            required
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>

        <div className="label">
          <label>Lastname</label>

          <input
            type="text"
            name="lastname"
            required
            placeholder="Doe"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>

        <div className="label">
          <label>email</label>

          <input
            type="email"
            name="email"
            required
            placeholder="johndoe@gmail.com"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>

        <div className="label">
          <label>sex</label>

          <input
            type="text"
            name="sex"
            required
            placeholder="Male"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>

        <div className="label">
          <label>State</label>

          <input
            type="text"
            name="state"
            required
            placeholder="State"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>

        <div className="label">
          <label>Country</label>

          <input
            type="text"
            name="country"
            required
            placeholder="Nigeria"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </div>
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

export default Form;
