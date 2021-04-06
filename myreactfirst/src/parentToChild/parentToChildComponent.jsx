import React from "react";
export class parentToChildComponent extends React.Component {
  state = {
    name: "Munikrishna Reddy",
    age: 45,
  };
  render() {
    return (
      <div>
        <Child name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>Parent Name={this.props.name}</p>
        <p>age={this.props.age}</p>
      </div>
    );
  }
}

export default parentToChildComponent;
