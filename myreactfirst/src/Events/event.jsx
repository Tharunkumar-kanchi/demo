import React from "react";

export class events extends React.Component {
  state = {
    value: undefined,
    show: true,
  };
  eventCalling = (e) => {
    this.setState({
      value: e.target.value,
    });
    console.log(e.target.value);
  };
  evenOrOdd = () => {
    if (this.state.value === undefined) {
      return "";
    }
    if (this.state.value % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };
  showOutput = () => {
    this.setState({
      show: true,
    });
  };
  hideOutput = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div>
        <center>
          <input
            tye="number"
            className="form-control col-md-3"
            onChange={this.eventCalling}
            onBlur={this.showOutput}
            onFocus={this.hideOutput}
            focused
          />
          <p>Input value={this.state.value}</p>
          {this.state.show && <p> Even or Odd=={this.evenOrOdd()}</p>}
        </center>
      </div>
    );
  }
}

export default events;
