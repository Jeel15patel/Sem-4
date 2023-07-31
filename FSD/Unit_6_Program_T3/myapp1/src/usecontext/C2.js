import React,{useContext} from "react";
import {FirstName,LastName} from "./PC";

function C2(){
    const fn = useContext(FirstName);
    const ln = useContext(LastName);
    return(
        <>
            <h1>My Name is {fn} {ln}</h1>
        </>
    )
}

export default C2;