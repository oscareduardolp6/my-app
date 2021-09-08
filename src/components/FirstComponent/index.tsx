import React, {ErrorInfo} from "react";
import { SecondComponent } from "../SecondComponent";

export class FirstComponent extends React.Component{
    static getDerivedStateFromError(error: Error){
        console.log('getDerivedStateFromError: ', error);
        return null; 
    }    

    componentDidCatch(error: Error, info: ErrorInfo){
        console.log('componentDidCatchErro: ', error);
        console.log('componentDidCatchErro: ', info);
    }

    render(){
        return (
            <React.Fragment>
                <h1>First Component</h1>
                <SecondComponent />
            </React.Fragment>
                )
    }
}