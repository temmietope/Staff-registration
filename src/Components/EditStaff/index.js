import React, { Component } from "react";
import sweetalert from "sweetalert";
import axios from "axios";

class EditStaff extends Component {
  state = {
    id: "",
    staff: {
      firstname: "",
      lastname: "",
      email: "",
      sex: "",
      country: ""
    }
  };

  async componentDidMount() {
    let id = this.props.history.location.state;

    this.setState({ id: id });
    let staff = await axios.get(`http://192.168.0.164:8000/staff/${id}`);
    console.log(staff);
    staff = staff.data.data;
    this.setState({ staff: staff });
    console.log("you");
    console.log(this.state.staff);
  }

  handleChange = e => {
    const { staff } = this.state;
    this.setState({ staff: { ...staff, [e.target.name]: e.target.value } });
  };
  submitDetails = e => {
    e.preventDefault();
    const { id, staff } = this.state;

    //Edit User
    axios
      .patch(`http://192.168.0.164:8000/staff/${id}`, {
        ...staff
      })
      .then(() => {
        sweetalert(
          "Staff Info Updated",
          `${staff.firstname} has bn successfully updated`,
          "success"
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
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
            placeholder={firstname}
            value={firstname}
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
            placeholder={lastname}
            value={lastname}
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
            value={email}
            placeholder={email}
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
            placeholder={sex}
            value={sex}
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
            placeholder={state}
            value={state}
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
            value={country}
            placeholder={country}
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

export default EditStaff;
