import React from "react";

export class childToChildComponent extends React.Component {
  state = {};
  getData = (name, age) => {
    console.log(name, age);
    this.setState({
      name: name,
      age: age,
    });
  };
  render() {
    return (
      <div>
        <Child1 callBack={this.getData} />
        <br />
        <Child2 name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

class Child1 extends React.Component {
  state = {
    name: "Tharunkumar Kanchi",
    age: 25,
  };

  onClickEvent = () => {
    //console.log("hii");
    this.props.callBack(this.state.name, this.state.age);
  };

  render() {
    return (
      <div>
        <p>child1</p>
        <button onClick={this.onClickEvent}>Send Data</button>
      </div>
    );
  }
}

class Child2 extends React.Component {
  render() {
    return (
      <div>
        Child2
        <p>name:{this.props.name}</p>
        <p>age:{this.props.age}</p>
      </div>
    );
  }
}

export default childToChildComponent;
