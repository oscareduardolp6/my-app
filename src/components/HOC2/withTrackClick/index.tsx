import React from "react";
import { withTrackClickProps, withTrackClickState, WrappedComponentProps} from "./interface";

export const withTrackClicks = <T extends unknown>(WrappedComponent: React.FC<WrappedComponentProps & T>) => {  //Agregamos los genericos para que no haya con problemas con la interfaz de Profile
    return class extends React.Component<withTrackClickProps & T, withTrackClickState>{
        constructor(props: withTrackClickProps & T){
            super(props); 
            this.state = {
                clicks: 0
            }; 
        }

        handleClick = () => {
            this.setState({
                clicks: this.state.clicks + 1 
            }); 
        }

        render() {
            return(
                <div onClick={this.handleClick}>
                    <WrappedComponent {...this.props} clicks={this.state.clicks} /> 
                </div>  
            ); // El spread operator quiere decir que le estamos "metiendo" todos los props que vienen de más arriba al componente 
        }
    }
}