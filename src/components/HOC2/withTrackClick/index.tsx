import React from "react";
import { withTrackClickProps, withTrackClickState, WrappedComponentProps} from "./interface";

export const withTrackClicks = (WrappedComponent: React.FC<WrappedComponentProps>) => {
    return class extends React.Component<withTrackClickProps, withTrackClickState>{
        constructor(props: withTrackClickProps){
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
                    <WrappedComponent clicks={this.state.clicks} />
                </div>
            ); 
        }
    }
}