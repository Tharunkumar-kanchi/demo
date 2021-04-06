import React, { Component } from 'react';
class Counter extends Component{
    // state={
    //     value:this.props.counter.value
    // };
    // handlingIncrement(){
    //     this.setState({value:this.state.value + 1});
    // }
    render() {
       // console.log(this.props);
     return  (<div>
                <span className={this.countstyle()}>{this.countDisply()}</span> 

                <button onClick={()=>this.props.onIncrement(this.props.counter)}>increment</button>

                <button onClick={()=>this.props.onDecrement(this.props.counter)}
                className=" m-2">Decrement</button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">delete</button>
            </div>
            )
    }

    countstyle(){
        let countColor="badge m-2 badge-";
        countColor += this.props.counter.value===0 ? "warning" :"primary";
        return countColor;
    }

    countDisply(){
        const {value}=this.props.counter;
        return ( value === 0 ? "zero" :value);
    }

}
export default Counter;