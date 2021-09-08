import React from "react";
import { ICounterManagmentProps, ICounterManagmentState } from "./interface";
import axios from "axios";

class CounterManagment extends React.Component<ICounterManagmentProps, ICounterManagmentState> {

    constructor(props: ICounterManagmentProps){
        super(props)
        this.state = {
            counter: 0,
            users: []
        }
    }

    handlerAddClick = () => {
        this.setState({counter: this.state.counter + 1}); 
    }

    handlerMinusClick = () => {
        this.setState({counter: this.state.counter - 1}); 
    }
    
    // Normalmente será en este método donde llamaremos a las API's 
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                const data = response.data;
                const users = data.data.map((userData: any) => userData.first_name)
                this.setState({users})
            });
        window.addEventListener('click', () => this.setState({counter: this.state.counter + 10})); 
    }


    /* -------------------------------------------------------------    
                Aquí tuvimos que usar arrow functions, porque estamos usando 
                'this' para cambiar el estado, y en una función normal, 'this', es 
                la funcion, y cómo queremos cambiar el estado de todo el componente 
                tenemos que usar una arrow function porque en este tipo de funciones 
                'this' es el objeto completo 
    ---------------------------------------------------------------- */ 

    // handlerAddClick(){
    //     this.setState({counter: this.state.counter + 1}); 
    // }

    // handlerMinusClick(){
    //     this.setState({counter: this.state.counter - 1}); 
    // }


    render(){
        const {ownerName} = this.props;
        const {counter, users} = this.state
        return (

        <div>
            <h1>Counter Managment</h1>
            <h2>{ownerName}</h2>
            <h3>Counter: {counter} </h3>
            <button onClick={this.handlerAddClick}>Add</button>
            <button onClick={this.handlerMinusClick}>Minus</button>
            <ul>
                {users.map(user => <li>{user}</li>)}
            </ul>
        </div>

        )
    }

}

export default CounterManagment