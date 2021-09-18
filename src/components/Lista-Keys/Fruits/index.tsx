import React from "react";
import { FruitsProps, FruitsState } from "./interface";

export default class Fruits extends React.Component<FruitsProps, FruitsState> {
    constructor(props: FruitsProps){
        super(props);
        this.state = {
            fruits: [
                'coconut', 
                'apple'
            ], 
            newFruit: ''
        }
    }

    handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newFruit: event.currentTarget.value
        }); 
    }

    handleButtonClick = () => {
        this.setState({
            fruits: [...this.state.fruits, this.state.newFruit], 
            newFruit: ''
        }); 
    }

    render(){
        const {fruits, newFruit} = this.state; 
        const fruitsUI = fruits.map(fruit => <li key={fruit}>{fruit}</li>); 
        return (
            <div>
                <h1>Fruits</h1>
                <ul>
                    {fruitsUI}
                </ul>
                <input value={newFruit} onChange={this.handleInputOnChange} />
                <button onClick={this.handleButtonClick}>Add Fruit</button>
            </div>
        ); 
    }
}
