import React from "react";
import { withTrackClicks } from "../../HOC2/withTrackClick";
import { ProfileProps } from "../Profile/interface";

const NewFeed: React.FC<ProfileProps> = ({clicks}) => {
    return (
        <>
            <h1>News Feed Component</h1>
            <h2>Clicks: {clicks}</h2>
        </>
    )
}

export default withTrackClicks(NewFeed); 
