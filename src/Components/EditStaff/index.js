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
  }

  handleChange = e => {
    const { staff } = this.state;
    this.setState({ staff: { ...staff, [e.target.name]: e.target.value } });
  };
  submitDetails = e => {
    e.preventDefault();
    const { id, staff } = this.state;

    //Edit Staff
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
        <div className="create">
          <h4>Edit Information</h4>
        </div>

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
          <label>Email</label>

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
          <label>Sex</label>

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
