import React from "react";
import { withTrackClicks } from "../../HOC2/withTrackClick";
import { ProfileProps } from "./interface";

const Profile: React.FC<ProfileProps> = ({clicks}) => {
    return (
        <>
            <h1>Profile Component</h1>
            <h2>Clicks: {clicks}</h2>
        </>
    )
}

export default withTrackClicks<ProfileProps>(Profile); 