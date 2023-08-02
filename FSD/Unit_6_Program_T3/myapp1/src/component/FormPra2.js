import React,{useState} from "react";

function FormsPra2(){
    const [MyCar,setMyCar] = useState("");

    const SubmitHandler = (event) => {
        setMyCar(event.target.value);
        alert("Your car is "+MyCar);
    }
    return(
        <div>
            <form onSubmit={SubmitHandler}>
                <label>Select your car</label>
                <select value={MyCar} onChange={SubmitHandler}>
                    <option>Select</option>
                    <option value="BMW">BMW</option>
                    <option value="Audi">Audi</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Ferrari">Ferrari</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
    
export default FormsPra2;