import React from "react";
import { myPureComponentProps, myPureComponentState } from "./MyPureComponentProps";
import MyMemoComponent, {  } from "../MyMemoComponent";

/*
El chiste del Pure component es que solo se va a renderizar si el estado cambio en el primer nivel

Y es para componenentes de clase
*/

export class MyPureComponent extends React.PureComponent<myPureComponentProps, myPureComponentState> {
    constructor(props: myPureComponentProps){
        super(props);
        this.state = {
            name: "Oscar", 
            address: {
                city: 'Leon', 
                state: 'Guanajuato'
            }
        }
    }

    handleSetState = () => {
        this.setState({
            name: 'Ana'
        })
    }

    render(){
        console.log('render');
        const {name, address} = this.state; 
        return (
            <>
                <h1>Pure Component</h1>
                <MyMemoComponent name={name} address={address}></MyMemoComponent>
                {/* <h2>Name: {name}</h2>
                <h3>City: {address.city}</h3>
                <h3>State: {address.state}</h3>
                <button onClick={this.handleSetState}>Set State</button> */}

            </>
                )
        
    }
}