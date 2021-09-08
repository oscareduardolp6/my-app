import React from "react";
import { ButtonProps } from "./ButtonProps";
import './ButtonStyle.css';

export const Button: React.FC<ButtonProps> = ({children, onclick, type}) => {
    const buttontype = type || 'default'; 
    return (
        <button className={`btn btn-${buttontype}`} onClick={onclick}>{children}</button>
        );
}   

// export const Button: React.FC<IButtonProps> = ({type, children})=> {
//     const className = type || 'default';
//     return (<button className={className}>{children}</button>)   
// }

