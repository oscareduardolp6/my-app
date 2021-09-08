import React from "react";
import { ProfileProps } from "../Profile/interface";

export const NewFeed: React.FC<ProfileProps> = ({clicks}) => {
    return (
        <>
            <h1>News Feed Component</h1>
            <h2>Clicks: {clicks}</h2>
        </>
    )
}
