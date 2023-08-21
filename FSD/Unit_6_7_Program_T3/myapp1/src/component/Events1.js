import Recat from "react";

function Event1() {
    function abc(e){
        console.log(e.target.value);
    }
    return(
        <>
        <input type="text" onChange={abc}></input>
        </>
    )
}

export default Event1;