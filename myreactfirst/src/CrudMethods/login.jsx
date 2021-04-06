import React from "react";
import "../styles/style.css";
import validate from "./validationlLogin.jsx";
export class UserDeatils extends React.Component {
  state = {
    employeeData: [],
    title: "My Login Page",
    act: 0,
    index: "",
  };

  sendData = (e) => {
    e.preventDefault();
    let check = 0;
    let message = "";
    //console.log(e.target);
    let employeeData = this.state.employeeData;
    let name = this.refs.username.value;
    let phone = this.refs.phone.value;
    let email = this.refs.email.value;

    if (name == "") {
      message += "\r\n please Enter name ";
      check++;
    }

    if (phone == "") {
      message += "\r\n please Enter Phone ";
      check++;
    }
    let ruleEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email == "") {
      message += "\r\n please Enter Email";
      check++;
    } else if (!ruleEmail.test(email)) {
      message += "\r\n Email is invalid";
      check++;
    }
    if (check > 0) {
      alert("Error!" + message);
      return false;
    }

    if (this.state.act === 0) {
      let newEmployee = {
        name: name,
        phone: phone,
        email: email,
      };
      employeeData.push(newEmployee);
    } else {
      let index = this.state.index;
      employeeData[index].name = name;
      employeeData[index].phone = phone;
      employeeData[index].email = email;
    }

    this.setState({
      employeeData: employeeData,
      act: 0,
    });
    this.refs.myform.reset();
  };

  editDetails = (id) => {
    let employeeData = this.state.employeeData[id];
    this.refs.username.value = employeeData.name;
    this.refs.phone.value = employeeData.phone;
    this.refs.email.value = employeeData.email;

    this.setState({
      act: 1,
      index: id,
    });
  };

  deleteDetails = (id) => {
    let employeeData = this.state.employeeData;
    employeeData.splice(id, 1);
    this.setState({
      employeeData: employeeData,
    });
  };

  render() {
    let employeeData = this.state.employeeData;

    return (
      <div className="containers">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 container">
            <h1>{this.state.title}</h1>
            <form ref="myform" className="containers">
              <label>Name :</label>
              <input
                type="text"
                ref="username"
                placeholder="Enter Name"
                className="form-control"
                focused
              />
              <br />
              <label>Phone Number :</label>
              <input
                type="number"
                ref="phone"
                placeholder="Enter Phone number"
                className="form-control"
                focused
              />
              <br />
              <label>Email</label>
              <input
                type="email"
                ref="email"
                placeholder="Enter Email"
                className="email form-control"
                focused
              />
              <br />
              <button
                className=" btn btn-info text-center active form-control"
                id="onSavaBtn"
                onClick={this.sendData}
              >
                submit
              </button>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
        <br />
        <br />

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-6 container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((data, id) => (
                  <tr key={id}>
                    <td>{data.name}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => this.editDetails(id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteDetails(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}
export default UserDeatils;
