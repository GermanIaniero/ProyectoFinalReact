import {useState} from "react"
import Spiner from "./Spiner"

function Loader() {
    
    const[load, setLoad] = useState(false)
    const changeLoad=() => {
        setLoad(true);
        setTimeout(() => {
            setLoad (false);
        }, 4000)
    }
    if(load) {
        return (
            <Spiner/>
        )
    }
    else{
        return(

    
            <div>
                <button  className="btn btn-success" onClick={() => changeLoad ()}>cargando..</button>
            </div>
            )
    }
}

export default Loader