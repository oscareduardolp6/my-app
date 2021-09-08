import React from "react";

export class SecondComponent extends React.Component{
    render() {
        throw new Error("Planned Error");
        
        return (
                <React.Fragment>
                     <h2>Second Component</h2>
                </React.Fragment>
            )
    }
}

