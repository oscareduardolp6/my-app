import React from "react";
import { ICounterManagmentProps, ICounterManagmentState } from "./interface";

class CounterManagment extends React.Component<ICounterManagmentProps, ICounterManagmentState> {
    constructor(props: ICounterManagmentProps){
        super(props)
        this.state = {
            counter: 0
        }
    }

    handlerAddClick(){
        this.setState({counter: this.state.counter + 1}); 
    }

    handlerMinusClick(){
        this.setState({counter: this.state.counter - 1}); 
    }


    render(){
        const {ownerName} = this.props;
        const {counter} = this.state
        return (

        <div>
            <h1>Counter Managment</h1>
            <h2>{ownerName}</h2>
            <h3>Counter: {counter} </h3>
            <button>Add</button>
            <button>Minus</button>
        </div>

        )
    }

}

export default CounterManagment