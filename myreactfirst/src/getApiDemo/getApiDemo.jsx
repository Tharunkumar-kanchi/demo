import React from "react";
import axios from "axios";

export class GetApiCall extends React.Component {
  state = {
    //data: {},
  };
  getApiCallBack = () => {
    //let x = this;
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        // handle success
        // console.log(response.data);
        //x.setState({
        this.setState({
          data: response.data,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    //console.log(this.state.data);
    return (
      <div>
        <button onClick={this.getApiCallBack}>get Api Data</button>
        <br />
        {this.state.data && (
          <div>
            <p>user Id:{this.state.data.userId}</p>
            <p>Title:{this.state.data.title}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GetApiCall;
