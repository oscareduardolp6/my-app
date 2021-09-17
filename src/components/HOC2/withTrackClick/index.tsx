import React from "react";
import { withTrackClickProps, withTrackClickState, WrappedComponentProps} from "./interface";

export const withTrackClicks = (WrappedComponent: React.FC<WrappedComponentProps>) => {
    return class extends React.Component<withTrackClickProps, withTrackClickState>{
        constructor(props: withTrackClickProps){
            super(props); 
            this.state = {
                click: 0
            }; 
        }

        handleClick = () => {
            this.setState({
                click: this.state.click + 1 
            }); 
        }

        render() {
            return(
                <div onClick={this.handleClick}>
                    <WrappedComponent click={this.state.click} />
                </div>
            ); 
        }
    }
}