import React from "react";
import { IButtonProps } from "./interface";
import './ButtonStyle.css';

export const Button: React.FC<IButtonProps> = ({type, children})=> {
    const className = type || 'default';
    return (<button className={className}>{children}</button>)   
}

