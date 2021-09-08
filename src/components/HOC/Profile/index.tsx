import React from "react";
import { ProfileProps } from "./interface";

export const Profile: React.FC<ProfileProps> = ({clicks}) => {
    return (
        <>
            <h1>Profile Component</h1>
            <h2>Clicks: {clicks}</h2>
        </>
    )
}