import React from "react";
export class ChildToParentComponent extends React.Component {
  state = {};
  getdata = (name, age) => {
    //console.log(name, age);
    this.setState({
      name: name,
      age: age,
    });
  };
  render() {
    return (
      <div>
        <p>Myname:{this.state.name}</p>
        <p>myage:{this.state.age}</p>
        <Child callback={this.getdata} />
      </div>
    );
  }
}

class Child extends React.Component {
  state = {
    name: "Tharunkumar Kanchi",
    age: 24,
  };
  onClickEvent = () => {
    this.props.callback(this.state.name, this.state.age);
    //console.log("hello");
  };
  render() {
    return (
      <div>
        <button onClick={this.onClickEvent} className="onClickBtn">
          send data
        </button>
      </div>
    );
  }
}

export default ChildToParentComponent;
