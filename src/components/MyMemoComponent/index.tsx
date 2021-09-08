import React from "react";
import { myMemoProps } from "./interface";

const MyMemoComponent: React.FC<myMemoProps> = ({name, address}) => {
    return (
            <>
                <h1>My React Memo</h1>
                <h2>Name: {name}</h2>
                <h3>City: {address.city}</h3>
                <h3>State: {address.state}</h3>
            </>
            )
}

export default React.memo(MyMemoComponent); //A esta función le podemos pasar una función cómo segundo parametro, con la cuál va a hacer 
                                            //la comparación de estados, para ver que sí sean distintos, esta función debe de
                                            // regresar falso si sí queremos que se re-renderice el componente y true si no queremos que se 
                                            // re-renderice el componente 