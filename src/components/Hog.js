import HogDetail from "./HogDetail";
import {useState} from "react";
import react from "react";

function Hog({hog}){
    const [isClicked, setIsClicked] = useState(false)

    function handlePigs(){
        setIsClicked(!isClicked)
    }
    // console.log(isClicked)
    return (
        <div className="ui four wide column">
            <div className="pigTile">
                <h3>{hog.name}</h3>
                <img src={hog.image} className="minPigTile" onClick={handlePigs}></img>
                {isClicked ? <HogDetail hog={hog}/> : null}
            </div>
        </div>
    )
}

export default Hog;