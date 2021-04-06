import React from "react";

class Calculator extends React.Component {
  state = {
    a: 0,
    b: 0,
    showResult: false,
  };

  setA = (e) => {
    this.setState({ a: parseInt(e.target.value), showResult: false });
  };
  setB = (e) => {
    this.setState({ b: parseInt(e.target.value), showResult: false });
  };

  setShowResult = (e) => {
    this.setState((prevState) => {
      return { showResult: !prevState.showResult };
    });
  };
  render() {
    const a = this.state.a;
    const b = this.state.b;
    return (
      <div className="containers">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-5">
            <center>
              <h1>Calculator</h1>
            </center>
            <input
              className="inputA form-control"
              onChange={this.setA}
              placeholder="Enter Number"
              focused
            />
            <br />

            <input
              className="inputB form-control "
              onChange={this.setB}
              placeholder="Enter Number"
              focused
            />
            <br />
            <button
              onClick={this.setShowResult}
              className=" btn btn-primary form-control"
            >
              Result
            </button>
          </div>
          <div className="col-md-4">
            <br />
            <br />

            {this.state.showResult ? (
              <div>
                {"here a=" + a} {"b=" + b}
                <br />
                <br />
                {"add =" + (a + b)} <br />
                {"sub =" + (a - b)} <br />
                {"mul =" + a * b} <br />
                {"div =" + parseFloat(a / b)} <br />
              </div>
            ) : (
              <div>Here are Result</div>
            )}
          </div>

          <br />
        </div>
      </div>
    );
  }
}

export default Calculator;
